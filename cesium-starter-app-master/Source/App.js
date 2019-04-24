var viewer = new Cesium.Viewer('cesiumContainer');
 
  var point = viewer.entities.add({
    name:"福井市", //レイヤ名
    description:"ここは福井市です。",　//レイヤの説明
      position : Cesium.Cartesian3.fromDegrees(136.223554,36.061957,0), //経度,緯度,高さ
      point : {
          pixelSize : 10, //ポイントのサイズ
          color : Cesium.Color.BLUE //ポイントの色
      }
  });

  var redLine = viewer.entities.add({
    name:"九頭竜川",
    description:"ここは九頭竜川です。",　
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArrayHeights([136.137600,36.218795,0,
          136.146183,36.210070,0,
          136.147385,36.197465,0,
          136.155109,36.191923,0,
          136.157513,36.188183,0,
          136.154938,36.182364,0,
          136.146870,36.175574,0]),
        width : 5,
        material : Cesium.Color.RED,
    }
});

var polygon = viewer.entities.add({
    name:"福井県庁",
    description:"ここは福井県庁です。",　
    polygon : {
        hierarchy : Cesium.Cartesian3.fromDegreesArrayHeights([
          136.220266, 36.066095,0,
          136.220287, 36.063848,0,
          136.221542, 36.063857,0,
          136.222444, 36.063978,0,
          136.222529, 36.064239,0,
          136.223495, 36.064516,0,
          136.223238, 36.065704,0,
          136.223034, 36.065722,0,
          136.222948, 36.066190,0,
          136.222315, 36.066138,0,
          136.221435,36.066216,0]),
        extrudedHeight: 333.0,
        width : 5,
        material : Cesium.Color.RED.withAlpha(0.5),
        outline : true,
        outlineColor : Cesium.Color.BLACK
    }
});

viewer.dataSources.add(Cesium.KmlDataSource.load("./KML/echizen.kmz"));

  viewer.zoomTo(viewer.entities);　//レイヤにズーム);


//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load(''));


//視点の変更
viewer.zoomTo(viewer.entities);
