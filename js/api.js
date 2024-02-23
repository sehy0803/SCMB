const apiKey = "bd49048a-6440-4f3b-8fa4-cbdc42986059";
const baseUrl = "http://220.126.8.143:53332/api/v1"
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MWRlZDViZS1lNjFhLTRkMGUtODVhNC05YThhZWYzYjU5OGEiLCJpZCI6MTk2ODU5LCJpYXQiOjE3MDg0ODg2NzN9.YwZ1O0jamr4Xjgv5FFazklk5EoPRUdOwlPAozSqGuxI';
let viewer;
let selectedModel = null;

// ======================== api 호출 ========================
// 프로젝트 목록 조회
async function getProjects() {
    let url = `${baseUrl}/projects?apikey=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`네트워크 오류: ${response.status}`);
        }

        const projectsData = await response.json();

        // 프로젝트 목록 생성
        const select = document.querySelector('.form-control');
        projectsData.forEach(project => {
            const option = document.createElement('option');
            option.value = project.pid;
            option.textContent = project.pnm;
            select.appendChild(option);
        });

        // 프로젝트 선택 시, 레이어 목록 및 지도 표시
        select.addEventListener('change', async (event) => {
            const selectedPid = event.target.value;

            if (selectedPid !== "0") {
                const layersData = await getLayers(selectedPid);

                // 레이어 목록 표시
                displayLayers(layersData);

                // 지도 생성
                setCesium(selectedPid);

                const ugData = await getUnderground(selectedPid);
            }
        });

        return projectsData;
    } catch (error) {
        console.error('오류:', error);
    }
}

// 프로젝트 상세 조회
async function getProject(pid) {
    let url = `${baseUrl}/projects/${pid}?apikey=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`네트워크 오류: ${response.status}`);
        }

        const projectData = await response.json();
        return projectData;
    } catch (error) {
        console.error('오류:', error);
    }
}

// 레이어 정보 조회
async function getLayers(pid) {
    let url = `${baseUrl}/layers?pid=${pid}&apikey=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`네트워크 오류: ${response.status}`);
        }
        const layersData = await response.json();
        return layersData;
    } catch (error) {
        console.error('오류:', error);
    }
}

// 공간객체 물성 정보 조회
async function getModel(modelid, pid) {
    let url = `${baseUrl}/models/${modelid}?pid=${pid}&apikey=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`네트워크 오류: ${response.status}`);
        }
        const modelsData = await response.json();
        return modelsData;
    } catch (error) {
        console.error('오류:', error);
    }
}

// 지하공동구 정보 조회
async function getUnderground(pid) {
    let url = `${baseUrl}/projects/${pid}/prop?apikey=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`네트워크 오류: ${response.status}`);
        }
        const ugData = await response.json();
        return ugData;
    } catch (error) {
        console.error('오류:', error);
    }
}

// ======================== 함수 ========================
// 세슘 설정
async function setCesium(selectedPid) {
    // pbv 값으로 카메라 좌표 설정
    const projectData = await getProject(selectedPid);
    const lineStringZ = projectData.pbv;
    const coordinates = parseLineStringZ(lineStringZ);
    const startLocation = coordinates[0]; // 시작지점
    const endLocation = coordinates[coordinates.length - 1]; // 끝지점
    const midpoint = calculateMidpoint(startLocation, endLocation); // 중간지점

    // 이전에 생성된 지도 제거
    if (viewer) {
        viewer.destroy();
    }

    // 뷰어 초기화
    viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
        infoBox: false
    });

    // 지구 투명도 설정
    const globe = viewer.scene.globe;
    globe.translucency.enabled = true;
    globe.translucency.backFaceAlphaByDistance = true;
    globe.translucency.frontFaceAlphaByDistance = new Cesium.NearFarScalar(
        0.0, // 투명화가 시작될 최소 거리
        0.0, // 투명화가 시작될 최소 거리에서의 투명도
        10000.0, // 투명화가 종료될 최대 거리
        1.0 // 투명화가 종료될 최대 거리에서의 투명도
    );

    // 카메라 이동
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(midpoint[0], midpoint[1] - 0.007, midpoint[2] + 600.0),
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-40.0),
        },
    });

    // 타일셋 추가
    const layersData = await getLayers(selectedPid);
    const layerTilesetMap = {};
    for (const layer of layersData) {
        if (layer.llv === 2) {
            try {
                const tileset = await Cesium.Cesium3DTileset.fromUrl(layer.lurl);
                viewer.scene.primitives.add(tileset);
                layerTilesetMap[layer.lid] = tileset;
            } catch (error) {
                console.error(`타일셋 추가 오류: ${error}`);
            }
        }
    }

    // 레이어 버튼에 이벤트리스너 추가
    addLayerEventListeners(layersData, layerTilesetMap);

    // 뷰어에 클릭 핸들러 추가
    addClickHandler(viewer, selectedPid);

}

// 뷰어에 클릭 핸들러 추가
function addClickHandler(viewer, selectedPid) {
    const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(async function onLeftClick(movement) {
        let pickedFeature = viewer.scene.pick(movement.position);
        if (Cesium.defined(pickedFeature)) {
            const modelid = pickedFeature.getProperty('modelid');
            const modelData = await getModel(modelid, selectedPid);

            const mover = document.getElementById('mover');

            mover.style.display = 'block';

            // 말풍선 내용 업데이트
            updateBalloonContent(modelData);

            // 이전에 클릭한 모델의 색상 리셋
            if (selectedModel) {
                resetModelColor(selectedModel);
            }

            // 클릭한 모델의 색상 변경
            changeModelColor(pickedFeature);
            selectedModel = pickedFeature;
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}

// 클릭한 모델의 색상 변경
function changeModelColor(pickedFeature) {
    pickedFeature.color = Cesium.Color.BLUE;
}

// 이전에 클릭한 모델의 색상 리셋
function resetModelColor(model) {
    model.color = Cesium.Color.WHITE;
}

// 말풍선 내용 업데이트
function updateBalloonContent(modelData) {
    const table = document.querySelector('.prop_table');
    table.innerHTML = '';

    modelData.prop.forEach(property => {
        const tr = document.createElement('tr');
        const tdT = document.createElement('td');
        const tdV = document.createElement('td');

        if (property.PropTitle === 'facil_nm') {
            if (property.PropValue != null) {
                const label = document.querySelector('.facil_nm');
                label.innerHTML = property.PropValue;
            } else {
                const label = document.querySelector('.facil_nm');
                label.innerHTML = '없음'
            }
        }

        tdT.innerHTML = `- ${property.PropTitle}`;
        tdV.innerHTML = property.PropValue;

        tr.appendChild(tdT);
        tr.appendChild(tdV);

        table.appendChild(tr);
    });
}

// 레이어 버튼에 이벤트리스너 추가
function addLayerEventListeners(layersData, layerTilesetMap) {
    // 하위 레이어 버튼에 이벤트리스너 추가
    layersData.forEach(layer => {
        if (layer.llv === 2) {
            const lowerLayer = document.getElementById(layer.lid);
            lowerLayer.checked = true;
            if (lowerLayer) {
                lowerLayer.addEventListener('change', function () {
                    const tileset = layerTilesetMap[layer.lid];
                    if (tileset) {
                        tileset.show = lowerLayer.checked;
                    }
                });
            }
        }
    });

    // 상위 레이어 버튼에 이벤트리스너 추가
    layersData.forEach(layer => {
        if (layer.llv === 1) {
            const upperLayer = document.getElementById(layer.lid);
            upperLayer.checked = true;
            upperLayer.addEventListener('change', function () {
                const lowerLayerCheckboxes = document.querySelectorAll(`.layer_container input[type="checkbox"][data-parent="${layer.lid}"]`);
                if (upperLayer.checked) {
                    // 상위 레이어가 체크된 경우, 하위 레이어의 타일셋을 모두 활성화
                    lowerLayerCheckboxes.forEach(lowerCheckbox => {
                        lowerCheckbox.checked = true;
                        const tileset = layerTilesetMap[lowerCheckbox.id];
                        if (tileset) {
                            tileset.show = true;
                        }
                    });
                } else {
                    lowerLayerCheckboxes.forEach(lowerCheckbox => {
                        lowerCheckbox.checked = false;
                        const tileset = layerTilesetMap[lowerCheckbox.id];
                        if (tileset) {
                            tileset.show = false;
                        }
                    });
                }
            });
        }
    });

    // '전체 레이어' 버튼에 이벤트리스너 추가
    const toggleAllLayersInput = document.getElementById('cont01');
    toggleAllLayersInput.checked = true;
    toggleAllLayersInput.addEventListener('change', function () {
        const allLayerCheckboxes = document.querySelectorAll('.layer_container input[type="checkbox"]');
        allLayerCheckboxes.forEach(checkbox => {
            checkbox.checked = toggleAllLayersInput.checked;
            const tileset = layerTilesetMap[checkbox.id];
            if (tileset) {
                tileset.show = toggleAllLayersInput.checked;
            }
        });
    });
}

// 중간 지점 계산
function calculateMidpoint(startLocation, endLocation) {
    const lon1 = startLocation[0];
    const lat1 = startLocation[1];
    const alt1 = startLocation[2];

    const lon2 = endLocation[0];
    const lat2 = endLocation[1];
    const alt2 = endLocation[2];

    const midLon = (lon1 + lon2) / 2;
    const midLat = (lat1 + lat2) / 2;
    const midAlt = (alt1 + alt2) / 2;

    return [midLon, midLat, midAlt];
}

// LINESTRING Z 문자열을 Cesium.Cartesian3 배열로 변환
function parseLineStringZ(lineStringZ) {
    const coordinates = lineStringZ
        .replace('LINESTRING Z (', '')
        .replace(')', '')
        .split(',')
        .map(coord => coord.trim().split(' ').map(Number));

    return coordinates;
}

// 레이어 목록을 화면에 표시
function displayLayers(layersData) {
    const layer_container = document.querySelector('.layer_container');
    layer_container.innerHTML = '';
    const layerGroups = {};

    layersData.forEach(layer => {
        const layer_group = document.createElement('div');
        layer_group.className = 'w-conts';

        if (layer.llv == 1) {
            const upperLayer = document.createElement('div');
            upperLayer.className = 'w-c04';

            const icon = document.createElement('div');
            icon.className = 'w-c04icon01';

            const p = document.createElement('p');
            p.textContent = layer.lnm

            const btnGroup = document.createElement('div');
            btnGroup.className = 'w-group';

            upperLayer.appendChild(icon);
            upperLayer.appendChild(p);
            upperLayer.appendChild(btnGroup);

            const button = document.createElement('button');
            button.className = 'btn material-switch btn-styleNone';

            btnGroup.appendChild(button);

            const input = document.createElement('input');
            input.id = layer.lid;
            input.type = 'checkbox';

            const label = document.createElement('label');
            label.htmlFor = layer.lid;
            label.className = 'label-default';

            button.appendChild(input);
            button.appendChild(label);

            layer_group.appendChild(upperLayer);

            const hr = document.createElement('hr');
            hr.className = 'coordinates05';

            layer_group.appendChild(hr);

            layerGroups[layer.lid] = layer_group;
            layer_container.appendChild(layer_group);
        }
        if (layer.llv == 2) {
            const lowerLayer = document.createElement('div');
            lowerLayer.className = 'w-c01s';

            const title = document.createElement('div');
            title.className = 'w-cTitles02';
            title.innerHTML = `- ${layer.lnm}`;

            const btnGroup = document.createElement('div');
            btnGroup.className = 'w-group';

            lowerLayer.appendChild(title);
            lowerLayer.appendChild(btnGroup);

            const button = document.createElement('button');
            button.className = 'btn material-switch btn-styleNone';

            btnGroup.appendChild(button);

            const input = document.createElement('input');
            input.id = layer.lid;
            input.type = 'checkbox';
            input.setAttribute('data-parent', layer.ulid);

            const label = document.createElement('label');
            label.htmlFor = layer.lid;
            label.className = 'label-default';

            button.appendChild(input);
            button.appendChild(label);

            const upperLayerGroupId = layer.ulid;
            if (layerGroups[upperLayerGroupId]) {
                const upperLayerGroup = layerGroups[upperLayerGroupId];
                upperLayerGroup.appendChild(lowerLayer);
            }
        }
    });
}



// 최상위 실행
(async () => {
    try {
        // 뷰어 초기화
        viewer = new Cesium.Viewer('cesiumContainer', {
            terrain: Cesium.Terrain.fromWorldTerrain(),
        });
        const projects = await getProjects();
        console.log(projects);
    } catch (error) {
        console.error('오류:', error.message);
    }
})();