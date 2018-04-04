var RESOLUTIONS = [
  459.3166666666666,
  321.5216666666666,
  235.17013333333327,
  117.58506666666663,
  58.79253333333332,
  29.39626666666666,
  14.69813333333333,
  7.349066666666665,
  3.6745333333333323,
  1.8372666666666662,
  0.9186333333333331,
  0.4593166666666665,
  0.2296583333333333,
  0.1148291666666666
];
var EXTENT = [700000, -4444.444444, 1366666.666667, 440000];

proj4.defs(
  'EPSG:2263',
  '+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=ft +to_meter=0.3048006096012192 +no_defs'
);

var grid = new ol.tilegrid.TileGrid({
  extent: EXTENT,
  resolutions: RESOLUTIONS,
  tileSize: [512, 512]
});

var view = new ol.View({
  projection: 'EPSG:2263',
  extent: EXTENT,
  resolutions: RESOLUTIONS,
  center: [990203, 196492],
  zoom: 2
});

var map = new ol.Map({target: 'map', view: view});

var source = new ol.source.TileWMS({
  tileGrid: grid,
  urls: [
    'http://maps.nyc.gov/geowebcache/service/wms/',
    'http://maps1.nyc.gov/geowebcache/service/wms/',
    'http://maps2.nyc.gov/geowebcache/service/wms/',
    'http://maps3.nyc.gov/geowebcache/service/wms/',
    'http://maps4.nyc.gov/geowebcache/service/wms/'
  ],
  params: {
    service: 'WMS',
    version: '1.1.1',
    format: 'image/png',
    layers: 'dtm',
    srs: 'EPSG:2263'
  }
});

var layer = new ol.layer.Tile({source: source});

map.addLayer(layer);
