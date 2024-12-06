var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gage_jakarta_25_ruas_jalan_1 = new ol.format.GeoJSON();
var features_gage_jakarta_25_ruas_jalan_1 = format_gage_jakarta_25_ruas_jalan_1.readFeatures(json_gage_jakarta_25_ruas_jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gage_jakarta_25_ruas_jalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gage_jakarta_25_ruas_jalan_1.addFeatures(features_gage_jakarta_25_ruas_jalan_1);
var lyr_gage_jakarta_25_ruas_jalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gage_jakarta_25_ruas_jalan_1, 
                style: style_gage_jakarta_25_ruas_jalan_1,
                popuplayertitle: "gage_jakarta_25_ruas_jalan",
                interactive: true,
                title: '<img src="styles/legend/gage_jakarta_25_ruas_jalan_1.png" /> gage_jakarta_25_ruas_jalan'
            });
var format_gage_jakarta_28_gerbang_tol_2 = new ol.format.GeoJSON();
var features_gage_jakarta_28_gerbang_tol_2 = format_gage_jakarta_28_gerbang_tol_2.readFeatures(json_gage_jakarta_28_gerbang_tol_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gage_jakarta_28_gerbang_tol_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gage_jakarta_28_gerbang_tol_2.addFeatures(features_gage_jakarta_28_gerbang_tol_2);
var lyr_gage_jakarta_28_gerbang_tol_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gage_jakarta_28_gerbang_tol_2, 
                style: style_gage_jakarta_28_gerbang_tol_2,
                popuplayertitle: "gage_jakarta_28_gerbang_tol",
                interactive: true,
                title: '<img src="styles/legend/gage_jakarta_28_gerbang_tol_2.png" /> gage_jakarta_28_gerbang_tol'
            });

lyr_OSMStandard_0.setVisible(true);lyr_gage_jakarta_25_ruas_jalan_1.setVisible(true);lyr_gage_jakarta_28_gerbang_tol_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_gage_jakarta_25_ruas_jalan_1,lyr_gage_jakarta_28_gerbang_tol_2];
lyr_gage_jakarta_25_ruas_jalan_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gage_jakarta_28_gerbang_tol_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gage_jakarta_25_ruas_jalan_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_gage_jakarta_28_gerbang_tol_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_gage_jakarta_25_ruas_jalan_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'inline label - visible with data', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gage_jakarta_28_gerbang_tol_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'inline label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gage_jakarta_28_gerbang_tol_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});