Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MWRlZDViZS1lNjFhLTRkMGUtODVhNC05YThhZWYzYjU5OGEiLCJpZCI6MTk2ODU5LCJpYXQiOjE3MDg0ODg2NzN9.YwZ1O0jamr4Xjgv5FFazklk5EoPRUdOwlPAozSqGuxI';

(async () => {
    // ID가 `cesiumContainer`인 요소에 Cesium Viewer를 초기화
    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    // 카메라를 주어진 경도(longitude), 위도(latitude), 높이(height)로 이동
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(127.424495891002, 36.71181837672268, 3000),
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-15.0),
        }
    });

    // Cesium OSM Buildings 레이어 추가
    const buildingTileset = await Cesium.createOsmBuildingsAsync();
    viewer.scene.primitives.add(buildingTileset);
})();
