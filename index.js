mapboxgl.accessToken = 'pk.eyJ1IjoibmlyaXNoYSIsImEiOiJjam9jdzI0eXkwMjFnM3FzNm0zNHE0bWlvIn0.YZp4hkzV1dDzOAW133Ws2w';
  var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [85.3150,27.6760], // starting position [lng, lat]
      zoom: 15 // starting zoom
  });
  map.addControl(new mapboxgl.FullscreenControl());
//   map.on('load', function(e) {
// map.addLayer({
//   id: 'locations',
//   type: 'text',

//   // Add a GeoJSON source containing place coordinates and information.
//   source: {
//     type: 'geojson',
//     data: stores
//   },
//   layout: {
//     'icon-image': 'restaurant-15',
//     'icon-allow-overlap': true,
//   }
// });


// });

  map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Mustang Thakali Kitchen</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3129059,27.6782359]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Hermann Helmers Bakery</strong>",
                        "icon": "bakery"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.312612,27.6783303]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Chapter 9 Bar/Restaurant</strong>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.312228,27.6762484]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Cafe Columbus</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3095229,27.6770864]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Lhakpa's Chulo</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3128583,27.6755584]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Manna Cafe</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3122813,27.6783313]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>cafe 16</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3126299,27.6760518]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Falcha</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3112855,27.6763321]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>8 degrees</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3129267,27.6763101]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>F Bar</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3131402,27.6762659]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Backyard Foodjoint and Pub</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3111848,27.676489]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Lorry'S Restaurant and Bar</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3106831,27.6766615]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Jars of Clay cafe</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3087238,27.6774038]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Rosewood Restaurant</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3089263,27.67732489]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Cafe Soma</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3106544,27.6784679]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Roadhouse Cafe</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3130233,27.6761042]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Southern Comfort Restaurant and Bar</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3110406,27.6765335]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Aalishan Restaurant</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3108896,27.6765569]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Sun Cafe and Bar</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3102327,27.6785309]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>karmacoffee</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.311412,27.6774904]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Lhakpa's Chulo</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3128738,27.6755657]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>La Pana - Argentine Cafeteria</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3086333,27.6764587]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Antar Dristi</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3122509,27.6783276]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Amrite </strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3128841,27.6781984]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Busy Bean</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3091608,27.6772801]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Evoke Cafe and Bistro</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3107239,27.6760993]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Cafe Chheli</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3120522,27.6763813]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Kairos Cafe</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3104475,27.675144]
                    }
                      
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>eThakkhola Thakali</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3090383,27.6769927]
                    }
                        
                        
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>El Mediterraneo</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3104906,27.6784872]
                    }
                        
                    
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Chicken Station</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3119744,27.6763226]
                    }
                       
                        
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>booze belly</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3130819,27.6756586]
                    }
                        
                      
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Achar Ghar</strong>",
                        "icon": "cafe"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3112881,27.675144]
                    }
                       
                },
{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Fusion Bar and Restaurant</strong>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [85.3131869,27.6761]
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
});

  map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
}));

  map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-left');

var stores={
"type": "FeatureCollection",
"generator": "overpass-ide",
"copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
"timestamp": "2018-11-13T09:17:02Z",
};





