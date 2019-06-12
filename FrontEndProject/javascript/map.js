require([
		  "esri/Map",
		  "esri/views/MapView",
		  "esri/tasks/RouteTask",
		  "esri/tasks/support/RouteParameters",
		  "esri/tasks/support/FeatureSet",
		  "esri/Graphic"
		], function(Map, MapView, RouteTask, RouteParameters, FeatureSet, Graphic) {

		  var map = new Map({
			basemap: "streets-navigation-vector"
		  });

		  var view = new MapView({
			container: "viewDiv",
			map: map,
			center: [-94.80543,38.02700],
			zoom: 4
		  });

		  var routeTask = new RouteTask({
			url: "https://utility.arcgis.com/usrsvcs/appservices/iYmywvMnVi2jGx3F/rest/services/World/Route/NAServer/Route_World/solve"
		  });
		  
		  view.on("click", function(event){
			if (view.graphics.length === 0) {
			  addGraphic("start", event.mapPoint);
			} else if (view.graphics.length === 1) {
			  addGraphic("finish", event.mapPoint);
			  getRoute();
			} else {
			  view.graphics.removeAll();
			  addGraphic("start", event.mapPoint);
			}
		  });
		  
		  function addGraphic(type, point) {
			var graphic = new Graphic({
			  symbol: {
				type: "simple-marker",
				color: (type === "start") ? "white" : "black",
				size: "8px"
			  },
			  geometry: point
			});
			view.graphics.add(graphic);
		  }
		  
		  function getRoute() {
			var routeParams = new RouteParameters({
			  stops: new FeatureSet({
				features: view.graphics.toArray()
			  }),
			  returnDirections: true
			});
			routeTask.solve(routeParams).then(function(data){
			  data.routeResults.forEach(function(result){
				result.route.symbol = {
				  type: "simple-line",
				  color: [5,150,255],
				  width: 3
				}
				view.graphics.add(result.route);
			  });
			});
		  }
		  
		});