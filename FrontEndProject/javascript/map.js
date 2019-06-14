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
    
    var samplePoints = [
        {
            "geo_entity": true,
			"geo_subtype": "city",
			"geo_type": "placename",
			"id": "e20070104_34_e_id37",
			"lat": 33.5125,
			"loc": [
				36.278,
				33.5125
			],
			"long": 36.278,
			"norm": "Damascus (Dimashq, SY)",
			"ontology": "entity:place:city",
			"post_text": " to negotiate seriously.\n\nIran is different. It may not be wise to make Iran integral to the regional strategy at the outset. And the nuclear issue should be dealt with on a separate track. In its present state of euphoria, Iran has little interest in mak",
			"pre_text": "ttlement with Israel and internal problems that such a deal might greatly ease. If we can make progress on the Palestinian front before adding Syria to the mix, it would both avoid overloading Israel’s negotiating capacity and increase the incentives for ",
			"value": "Damascus"
		},
		{
			"geo_entity": true,
			"geo_subtype": "city",
			"geo_type": "placename",
			"id": "e20070104_34_e_id39",
			"lat": 38.8951,
			"loc": [
				-77.0364,
				38.8951
			],
			"long": -77.0364,
			"norm": "Washington (District of Columbia, US)",
			"ontology": "entity:place:city",
			"post_text": " -- The Iraq Study Group report was released into a sea of unrealistic expectations. Inevitably, it disappointed hopes for a clear path through the morass of Iraq, because there is no “silver bullet” solution to the difficulties in which we find ourselves",
			"pre_text": "http://ebird.afis.mil/ebfiles/e20070104478130.html \nRETURN TO TOP \n\nNew York Times\nJanuary 4, 2007 \n\nGetting The Middle East Back On Our Side\nBy Brent Scowcroft\n\n",
			"value": "Washington"
		},
		{
			"geo_entity": true,
			"geo_subtype": "country",
			"geo_type": "placename",
			"id": "e20070104_34_e_id41",
			"lat": 27,
			"loc": [
				30,
				27
			],
			"long": 30,
			"norm": "Egypt",
			"ontology": "entity:place:country",
			"post_text": ", Saudi Arabia and the gulf states would be liberated to assist in stabilizing Iraq. And Iraq would finally be seen by all as a key country that had to be set right in the pursuit of regional security.\n\nArab leaders are now keen to resolve the 50-year-old",
			"pre_text": "aeli conflict could fundamentally change both the dynamics in the region and the strategic calculus of key leaders. Real progress would push Iran into a more defensive posture. Hezbollah and Hamas would lose their rallying principle. American allies like ",
			"value": "Egypt"
		},
		{
			"geo_entity": true,
			"geo_subtype": "country",
			"geo_type": "placename",
			"id": "e20070104_34_e_id43",
			"lat": 32,
			"loc": [
				53,
				32
			],
			"long": 53,
			"norm": "Iran",
			"ontology": "entity:place:country",
			"post_text": ", heady with the withdrawal of its principal adversary, would expand its influence through Hezbollah and Hamas more deeply into Syria, Lebanon, the Palestinian territories and Jordan. Our Arab friends would rightly feel we had abandoned them to face alone",
			"pre_text": "t, “govern itself, sustain itself, and defend itself” would be a strategic defeat for American interests, with potentially catastrophic consequences both in the region and beyond. Our opponents would be hugely emboldened, our friends deeply demoralized.\n\n",
			"value": "Iran"
		},
		{
			"geo_entity": true,
			"geo_subtype": "country",
			"geo_type": "placename",
			"id": "e20070104_34_e_id53",
			"lat": 33,
			"loc": [
				44,
				33
			],
			"long": 44,
			"norm": "Iraq",
			"ontology": "entity:place:country",
			"post_text": ", because there is no “silver bullet” solution to the difficulties in which we find ourselves.\n\nBut the report accomplished a great deal. It brought together some of America’s best minds across party lines, and it outlined with clarity and precision the k",
			"pre_text": "k Times\nJanuary 4, 2007 \n\nGetting The Middle East Back On Our Side\nBy Brent Scowcroft\n\nWashington -- The Iraq Study Group report was released into a sea of unrealistic expectations. Inevitably, it disappointed hopes for a clear path through the morass of ",
			"value": "Iraq"
		},
		{
			"geo_entity": true,
			"geo_subtype": "country",
			"geo_type": "placename",
			"id": "e20070104_34_e_id71",
			"lat": 31.5,
			"loc": [
				34.75,
				31.5
			],
			"long": 34.75,
			"norm": "Israel",
			"ontology": "entity:place:country",
			"post_text": " conflict could fundamentally change both the dynamics in the region and the strategic calculus of key leaders. Real progress would push Iran into a more defensive posture. Hezbollah and Hamas would lose their rallying principle. American allies like Egyp",
			"pre_text": "just as they did in the 1991 Persian Gulf conflict. Unfortunately, in recent years they have come to see it as dangerous to identify with the United States, and so they have largely stood on the sidelines.\n\nA vigorously renewed effort to resolve the Arab-",
			"value": "Israel"
		},
		{
			"geo_entity": true,
			"geo_subtype": "country",
			"geo_type": "placename",
			"id": "e20070104_34_e_id80",
			"lat": 31,
			"loc": [
				36,
				31
			],
			"long": 36,
			"norm": "Jordan",
			"ontology": "entity:place:country",
			"post_text": ". Our Arab friends would rightly feel we had abandoned them to face alone a radicalism that has been greatly inflamed by American actions in the region and which could pose a serious threat to their own governments.\n\nThe effects would not be confined to I",
			"pre_text": "Our opponents would be hugely emboldened, our friends deeply demoralized.\n\nIran, heady with the withdrawal of its principal adversary, would expand its influence through Hezbollah and Hamas more deeply into Syria, Lebanon, the Palestinian territories and ",
			"value": "Jordan"
		},
		{
			"geo_entity": true,
			"geo_subtype": "country",
			"geo_type": "placename",
			"id": "e20070104_34_e_id82",
			"lat": 33.8333,
			"loc": [
				35.8333,
				33.8333
			],
			"long": 35.8333,
			"norm": "Lebanon",
			"ontology": "entity:place:country",
			"post_text": ", the Palestinian territories and Jordan. Our Arab friends would rightly feel we had abandoned them to face alone a radicalism that has been greatly inflamed by American actions in the region and which could pose a serious threat to their own governments.",
			"pre_text": "sequences both in the region and beyond. Our opponents would be hugely emboldened, our friends deeply demoralized.\n\nIran, heady with the withdrawal of its principal adversary, would expand its influence through Hezbollah and Hamas more deeply into Syria, ",
			"value": "Lebanon"
		},
		{
			"geo_entity": true,
			"geo_subtype": "country",
			"geo_type": "placename",
			"id": "e20070104_34_e_id84",
			"lat": 32.5,
			"loc": [
				35.33,
				32.5
			],
			"long": 35.33,
			"norm": "Palestine",
			"ontology": "entity:place:country",
			"post_text": " territories and Jordan. Our Arab friends would rightly feel we had abandoned them to face alone a radicalism that has been greatly inflamed by American actions in the region and which could pose a serious threat to their own governments.\n\nThe effects wou",
			"pre_text": "h in the region and beyond. Our opponents would be hugely emboldened, our friends deeply demoralized.\n\nIran, heady with the withdrawal of its principal adversary, would expand its influence through Hezbollah and Hamas more deeply into Syria, Lebanon, the ",
			"value": "Palestinian"
		},
		{
			"geo_entity": true,
			"geo_subtype": "country",
			"geo_type": "placename",
			"id": "e20070104_34_e_id88",
			"lat": 25,
			"loc": [
				45,
				25
			],
			"long": 45,
			"norm": "Saudi Arabia",
			"ontology": "entity:place:country",
			"post_text": " and the gulf states would be liberated to assist in stabilizing Iraq. And Iraq would finally be seen by all as a key country that had to be set right in the pursuit of regional security.\n\nArab leaders are now keen to resolve the 50-year-old dispute. Prim",
			"pre_text": "nflict could fundamentally change both the dynamics in the region and the strategic calculus of key leaders. Real progress would push Iran into a more defensive posture. Hezbollah and Hamas would lose their rallying principle. American allies like Egypt, ",
			"value": "Saudi Arabia"
		},
		{
			"geo_entity": true,
			"geo_subtype": "country",
			"geo_type": "placename",
			"id": "e20070104_34_e_id90",
			"lat": 35,
			"loc": [
				38,
				35
			],
			"long": 38,
			"norm": "Syria",
			"ontology": "entity:place:country",
			"post_text": ", Lebanon, the Palestinian territories and Jordan. Our Arab friends would rightly feel we had abandoned them to face alone a radicalism that has been greatly inflamed by American actions in the region and which could pose a serious threat to their own gov",
			"pre_text": "hic consequences both in the region and beyond. Our opponents would be hugely emboldened, our friends deeply demoralized.\n\nIran, heady with the withdrawal of its principal adversary, would expand its influence through Hezbollah and Hamas more deeply into ",
			"value": "Syria"
		},
		{
			"geo_entity": true,
			"geo_subtype": "country",
			"geo_type": "placename",
			"id": "e20070104_34_e_id96",
			"lat": 38,
			"loc": [
				-97,
				38
			],
			"long": -97,
			"norm": "United States",
			"ontology": "entity:place:country",
			"post_text": "’s best minds across party lines, and it outlined with clarity and precision the key factors at issue in Iraq. In doing so, it helped catalyze the debate about our Iraq policy and crystallize the choices we face. Above all, it emphasized the importance of",
			"pre_text": "pectations. Inevitably, it disappointed hopes for a clear path through the morass of Iraq, because there is no “silver bullet” solution to the difficulties in which we find ourselves.\n\nBut the report accomplished a great deal. It brought together some of ",
			"value": "United States"
		}
    ];
			
    for (var i = 0; i < Object.keys(samplePoints).length; i++){
			
        var point = new Point({
            longitude: samplePoints[i].long,
			latitude: samplePoints[i].lat
        });			 
        var markerSymbol = new SimpleMarkerSymbol({
            color: [226, 119, 40],
            outline: { 
                color: [255, 255, 255],
				width: 2
            }
        });				  
        var attributes = {
            Pretext: samplePoints[i].pre_text,
            Label: samplePoints[i].norm,
            Posttext: samplePoints[i].post_text,
        };
        var popupTemplate = {
            content: "{Pretext}</br></br>{Label}</br></br>{Posttext}"   
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
