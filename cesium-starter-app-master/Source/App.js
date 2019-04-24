var viewer = new Cesium.Viewer('cesiumContainer');


//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load(''));


//視点の変更
viewer.zoomTo(viewer.entities);
