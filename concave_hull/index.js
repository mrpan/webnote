/*
* @Author: giserpan
* @Date:   2017-11-01 11:42:12
* @Last Modified by:   giserpan
* @Last Modified time: 2017-11-01 17:24:58
*/
'use strict';

import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import proj from 'ol/proj';
import VectorLayer from 'ol/layer/vector'
import VectorSource from 'ol/source/vector';
import Style from 'ol/style/style';
import Fill from 'ol/style/fill';
import Stroke from 'ol/style/stroke';
import Circle from 'ol/style/circle';
import Draw from 'ol/interaction/draw';
var map =new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
         urls: ['http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', 'http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', 'http://webrd03.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', 'http://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}']

      })
    })
  ],
  view: new View({
    center: proj.transform([104.067923,30.679943], 'EPSG:4326', 'EPSG:3857'),
    zoom: 13
  })
});

var source = new VectorSource();
var vector = new VectorLayer({
	source: source,
	style: new Style({
		fill: new Fill({
			color: 'rgba(85,85,85, 0.5)'
		}),
		stroke: new Stroke({
			color: '#555555',
			width: 3
		}),
		image: new Circle({
			radius: 7,
			fill: new Fill({
				color: '#fc0c08'
			})
		})
	}),
	name: "drawlayer"
});
map.addLayer(vector);

var draw;
function addInteractions(type) {
	draw = new Draw({
		source: source,
		type: type
	});
	map.addInteraction(draw);
	draw.on('drawstart',
		function(evt) {
			
		});
	draw.on('drawend', function(event) {
		
	})

}
addInteractions("Point");
