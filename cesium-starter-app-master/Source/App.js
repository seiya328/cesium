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

  viewer.zoomTo(viewer.entities);　//レイヤにズーム);


//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load(''));


//視点の変更
viewer.zoomTo(viewer.entities);
