require([
		  "esri/Map",
		  "esri/views/MapView"
		], function(Map, MapView) {

		  var map = new Map({
			basemap: "streets-navigation-vector"
		  });

		  var view = new MapView({
			container: "viewDiv",
			map: map,
			center: [-94.80543,38.02700],
			zoom: 4
		  });
		  
		});
