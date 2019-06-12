require([
		"esri/Map",
		"esri/views/MapView",
		"esri/geometry/Point",
		"esri/symbols/SimpleMarkerSymbol",
		"esri/Graphic"
		], function(Map, MapView, Point, SimpleMarkerSymbol, Graphic) {

		  var map = new Map({
			basemap: "dark-gray-vector"
		  });

		  var view = new MapView({
			container: "viewDiv",
			map: map,
			center: [-94.80543,38.02700],
			zoom: 4
		  });
		  
		  
		var samplePoints = {
		  "points": [
			{
			  "label": "Stevens Point",
			  "latitude": 44.11111,
			  "longitude": -89.564742,
			  "pretext": "This is a point",
			  "posttext": "It is in Stevens Point, WI"
			},
			{
			  "label": "Place",
			  "latitude": 42.44444,
			  "longitude": -89.564742,
			  "pretext": "This is a point",
			  "posttext": "I have no idea where it is"
			},
			{
			  "label": "Another Place",
			  "latitude": 40.99999,
			  "longitude": -89.564742,
			  "pretext": "This is a point",
			  "posttext": "I have no idea where it is"
			}
		  ]
		};

		for (var i = 0; i < Object.keys(samplePoints).length; i++){
			
			var point = new Point({
			longitude: samplePoints.points[i].longitude,
			latitude: samplePoints.points[i].latitude
			});
					 
			var markerSymbol = new SimpleMarkerSymbol({
				color: [226, 119, 40],
				outline: { 
				color: [255, 255, 255],
				width: 2
				}
			});
						  
			var attributes = {
				Pretext: samplePoints.points[i].pretext,
				Label: samplePoints.points[i].label,  
				Posttext: samplePoints.points[i].posttext
			};
						  
			var popupTemplate = {
				content: "{Pretext}</br>{Label}</br>{Posttext}"
			};
					  
			var pointGraphic = new Graphic({
				geometry: point,
				symbol: markerSymbol,
				attributes: attributes,
				popupTemplate: popupTemplate
			});
					 
			view.graphics.add(pointGraphic);
		}
});