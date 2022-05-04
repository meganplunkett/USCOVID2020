mapboxgl.accessToken =
            'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
        let map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 4, // starting zoom
            center: [-97, 40],
            projection: {
                name:'albers',
                center: [-97, 40],
                parallels: [29.5, 45.5] 
            }
        });

        const layers = [
            '0-9',
            '10-19',
            '20-29',
            '30-39',
            '40-49',
            '50-75',
            '76-100',
            '100+'
        ];
        const colors = [
            '#FFEDA070',
            '#FED97670',
            '#FEB24C70',
            '#FD8D3C70',
            '#FC4E2A70',
            '#E31A1C70',
            '#BD002670',
            '#80002670'
];

        //load data to the map as new layers.
        //map.on('load', function loadingData() {
        map.on('load', () => { //simplifying the function statement: arrow with brackets to define a function

            // when loading a geojson, there are two steps
            // add a source of the data and then add the layer out of the source
            map.addSource('us-covid-2020-rates', {
                type: 'geojson',
                data: 'assets/us-covid-2020-rates.json'
            });

            map.addLayer({
                'id': 'us-covid-2020-rates-layer',
                'type': 'fill',
                'source': 'us-covid-2020-rates',
                'minzoom': 0,
                'paint': {
                    'fill-color': [
                        'step',
                        ['get', 'rates'],
                        '#FFEDA0',   // stop_output_0
                        10,          // stop_input_0
                        '#FED976',   // stop_output_1
                        20,          // stop_input_1
                        '#FEB24C',   // stop_output_2
                        30,          // stop_input_2
                        '#FD8D3C',   // stop_output_3
                        40,         // stop_input_3
                        '#FC4E2A',   // stop_output_4
                        50,         // stop_input_4
                        '#E31A1C',   // stop_output_5
                        76,         // stop_input_5
                        '#BD0026',   // stop_output_6
                        100,        // stop_input_6
                        "#800026"    // stop_output_7
                    ],
                    'fill-outline-color': '#BBBBBB',
                    'fill-opacity': 0.7,
                }
            });



        map.on('mousemove', ({point}) => {
            const state = map.queryRenderedFeatures(point, {
                layers: ['us-covid-2020-rates-layer']
            });
            document.getElementById('text-description').innerHTML = state.length ?
                `<h3>${state[0].properties.county}</h3><p><strong><em>${state[0].properties.rates}</strong>: Cases per 1000 residents</em></p>` :
                `<p>Hover over a county!</p>`;
        });

        });


        const legend = document.getElementById('legend');
        legend.innerHTML = "<b>COVID Rates<br>(cases per 1000 residents)</b><br><br>";

        layers.forEach((layer, i) => {
            const color = colors[i];
            const item = document.createElement('div');
            const key = document.createElement('span');
            key.className = 'legend-key';
            key.style.backgroundColor = color;

            const value = document.createElement('span');
            value.innerHTML = `${layer}`;
            item.appendChild(key);
            item.appendChild(value);
            legend.appendChild(item);
        });

        // add the data source
        const source =
        '<p style="text-align: right; font-size:7pt">Source:<a href="https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html">US Census Bureau</a><a href="https://data.census.gov/cedsci/table?g=0100000US%24050000&d=ACS%205-Year%20Estimates%20Data%20Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true">ACS 2018 Population Data</a><a href="https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv">New York Times</a></p>';
        // combine all the html codes.
        legend.innerHTML += source;