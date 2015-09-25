/*var chartData = [{
        "state": "MX-AGU",
        "value": 1
    }, {
        "state": "MX-BCN",
        "value": 2
    }, {
        "state": "MX-BCS",
        "value": 3
    }, {
        "state": "MX-CAM",
        "value": 4
    }, {
        "state": "MX-CHP",
        "value": 5
    }, {
        "state": "MX-CHH",
        "valie": 6
    }, {
        "state": "MX-COA",
        "value": 7
    }, {
        "state": "MX-COL",
        "value": 8
    }, {
        "state": "MX-DIF",
        "value": 9
    }, {
        "state": "MX-DUR",
        "value": 10
    }, {
        "state": "MX-GUA",
        "value": 11
    }, {
        "state": "MX-GRO",
        "value": 12
    }, {
        "state": "MX-HID",
        "value": 13
    }, {
        "state": "MX-JAL",
        "value": 14
    }, {
        "state": "MX-MEX",
        "value": 15
    }, {
        "state": "MX-MIC",
        "value": 16
    }, {
        "state": "MX-MOR",
        "value": 17
    }, {
        "state": "MX-NAY",
        "value": 18
    }, {
        "state": "MX-NLE",
        "value": 19
    }, {
        "state": "MX-OAX",
        "value": 20
    }, {
        "state": "MX-PUE",
        "value": 21
    }, {
        "state": "MX-QUE",
        "value": 22
    }, {
        "state": "MX-ROO",
        "value": 23
    }, {
        "state": "MX-SLP",
        "value": 24
    }, {
        "state": "MX-SIN",
        "value": 25
    }, {
        "state": "MX-SON",
        "value": 26
    }, {
        "state": "MX-TAB",
        "value": 27
    }, {
        "state": "MX-TAM",
        "value": 28
    }, {
        "state": "MX-TLA",
        "value": 29
    }, {
        "state": "MX-VER",
        "value": 30
    }, {
        "state": "MX-YUC",
        "valueField": 31
    }, {
        "state": "MX-ZAC",
        "value": 32
    }];



AmCharts.ready(function() {
    var chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.categoryField = "state";

    var graph = new AmCharts.AmGraph();
    graph.valueField = "visits";
    graph.type = "column";
    chart.addGraph(graph);

    chart.write('chartspace');
});

AmCharts.ready(function() {

    var map = new AmCharts.AmMap();
    map.pathToImages = "ammap/images/";


    // TODO EL MAPA
    var dataProvider = {
        map: "mexicoHigh",
        getAreasFromMap:true
    };

    map.dataProvider = dataProvider;

    // map.valueLegend = {
    //   right: 10,
    //   // minValue: "little",
    //   // maxValue: "a lot!"
    // }
//
// map.colorSteps = 32;

    map.areasSettings = {
        autoZoom: true,
        color: "#FFF",
        selectedColor: "#00992F"
    };
    //console.log(map.allLabels)
    /*map.addListener("clickMapObject", function (event) {
     if (event.mapObject.id != undefined && chartData[event.mapObject.id] != undefined) {
       chart.dataProvider = chartData[event.mapObject.id];
       chart.clearLabels();
       chart.addLabel("0", "!20", event.mapObject.title, "center", 16);
       chart.validateData();
     }
    });

    //map.smallMap = new AmCharts.SmallMap();

    map.write("mapspace");

});
*/

var map = AmCharts.makeChart( "mapspace", {
  type: "map",
  "theme": "light",

  colorSteps: 32,
  dataProvider: {
    map: "mexicoHigh",
    areas: [ {
        "id": "MX-AGU",
        "value": 9
    }, {
        "id": "MX-BCN",
        "value": 8
    }, {
        "id": "MX-BCS",
        "value": 10
    }, {
        "id": "MX-CAM",
        "value": 15
    }, {
        "id": "MX-CHP",
        "value": 32
    }, {
        "id": "MX-CHH",
        "valie": 6
    }, {
        "id": "MX-COA",
        "value": 5
    }, {
        "id": "MX-COL",
        "value": 4
    }, {
        "id": "MX-DIF",
        "value": 3
    }, {
        "id": "MX-DUR",
        "value": 20
    }, {
        "id": "MX-GUA",
        "value": 16
    }, {
        "id": "MX-GRO",
        "value": 31
    }, {
        "id": "MX-HID",
        "value": 25
    }, {
        "id": "MX-JAL",
        "value": 18
    }, {
        "id": "MX-MEX",
        "value": 13
    }, {
        "id": "MX-MIC",
        "value": 29
    }, {
        "id": "MX-MOR",
        "value": 17
    }, {
        "id": "MX-NAY",
        "value": 22
    }, {
        "id": "MX-NLE",
        "value": 1
    }, {
        "id": "MX-OAX",
        "value": 30
    }, {
        "id": "MX-PUE",
        "value": 24
    }, {
        "id": "MX-QUE",
        "value": 19
    }, {
        "id": "MX-ROO",
        "value": 7
    }, {
        "id": "MX-SLP",
        "value": 23
    }, {
        "id": "MX-SIN",
        "value": 14
    }, {
        "id": "MX-SON",
        "value": 2
    }, {
        "id": "MX-TAB",
        "value": 27
    }, {
        "id": "MX-TAM",
        "value": 11
    }, {
        "id": "MX-TLA",
        "value": 21
    }, {
        "id": "MX-VER",
        "value": 28
    }, {
        "id": "MX-YUC",
        "value": 12
    }, {
        "id": "MX-ZAC",
        "value": 26
    }]
    },
    areasSettings:{
        autoZoom:true
    },
    valueLegend:{
         right: 5,
        minValue: "Feliz",
      maxValue: "Menos Feliz"
    },

     "export": {
    "enabled": true
  }

  } );