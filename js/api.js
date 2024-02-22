const apiKey = "bd49048a-6440-4f3b-8fa4-cbdc42986059";
const baseUrl = "http://220.126.8.143:53332/api/v1"
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MWRlZDViZS1lNjFhLTRkMGUtODVhNC05YThhZWYzYjU5OGEiLCJpZCI6MTk2ODU5LCJpYXQiOjE3MDg0ODg2NzN9.YwZ1O0jamr4Xjgv5FFazklk5EoPRUdOwlPAozSqGuxI';

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
        // 프로젝트 선택 시 프로젝트 상세 및 레이어 조회하는 이벤트 추가
        select.addEventListener('change', async (event) => {
            const selectedPid = event.target.value;
            const projectData = await getProject(selectedPid);
            console.log(projectData);

            const layersData = await getLayers(selectedPid);
            console.log(layersData);

            displayLayers(layersData);
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

        // pbv 값으로 카메라 좌표 설정
        const lineStringZ = projectData.pbv;
        const coordinates = parseLineStringZ(lineStringZ);

        const startLocation = coordinates[0];
        const endLocation = coordinates[coordinates.length - 1];

        console.log(`coordinates :${startLocation}`);
        console.log(`coordinates :${endLocation}`);

        // Cesium Viewer를 초기화
        if (viewer && !viewer.isDestroyed()) {
            viewer.destroy();
        }

        viewer = new Cesium.Viewer('cesiumContainer', {
            terrain: Cesium.Terrain.fromWorldTerrain(),
        });

        // 카메라 이동
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(...startLocation),
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-15.0),
            }
        });

        // Cesium OSM Buildings 레이어 추가
        const buildingTileset = await Cesium.createOsmBuildingsAsync();
        viewer.scene.primitives.add(buildingTileset);

        return projectData;
    } catch (error) {
        console.error('오류:', error);
    }
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

// 레이어 목록을 화면에 표시
function displayLayers(layersData) {
    const layer_container = document.querySelector('.layer_container');
    layer_container.innerHTML = '';
    const layerGroups = {};

    // '전체 레이어' 버튼에 이벤트리스너 추가
    const toggleAllLayersInput = document.getElementById('cont01');
    toggleAllLayersInput.addEventListener('change', function () {
        const allLayerCheckboxes = document.querySelectorAll('.layer_container input[type="checkbox"]');
        allLayerCheckboxes.forEach(checkbox => {
            checkbox.checked = toggleAllLayersInput.checked;
        });
    })

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

            // 상위 레이어 버튼에 이벤트리스너 추가
            input.addEventListener('change', function () {
                const lowerLayerCheckboxes = document.querySelectorAll(`.layer_container input[type="checkbox"][data-parent="${layer.lid}"]`);
                lowerLayerCheckboxes.forEach(checkbox => {
                    checkbox.checked = input.checked;
                });
            });
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

// 공간객체 물성 정보 조회
async function getModels(modelid, pid) {
    let url = `${baseUrl}/models/${modelid}?pid=${pid}&apikey=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`네트워크 오류: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.error('오류:', error);
    }
}

(async () => {
    try {
        // 초기에는 지구만 표시
        viewer = new Cesium.Viewer('cesiumContainer', {
            terrain: Cesium.Terrain.fromWorldTerrain(),
        });

        const projects = await getProjects();
        console.log(projects);
    } catch (error) {
        console.error('오류:', error.message);
    }
})();