//Setup our array of styles for applciation to a custom map type
var styleArray = [
	{
		"featureType": "administrative",
		"elementType": "labels",
		"stylers": [
			{ "visibility": "off" }
		]
	}, {
		"featureType": "road",
		"elementType": "labels",
		"stylers": [
			{ "visibility": "off" }
		]
	}, {
		"featureType": "poi",
		"elementType": "labels",
		"stylers": [
			{ "visibility": "off" }
		]
	}, {
		"featureType": "road",
		"elementType": "geometry.fill",
		"stylers": [
			{ "color": "#000000" }
		]
	}, {
		"featureType": "road",
		"elementType": "geometry.stroke",
		"stylers": [
			{ "visibility": "on" },
			{ "color": "#000000" }
		]
	}, {
		"featureType": "landscape.man_made",
		"elementType": "geometry",
		"stylers": [
			{ "visibility": "off" }
		]
	}, {
		"featureType": "landscape.natural",
		"stylers": [
			{ "visibility": "off" }
		]
	}, {
		"featureType": "poi",
		"elementType": "geometry.fill",
		"stylers": [
			{ "visibility": "off" }
		]
	}, {
		"featureType": "transit.station",
		"stylers": [
			{ "visibility": "off" }
		]
	}, {
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [
			{ "color": "#FFFFFF" },
			{ "visibility": "on" }
		]
	}, {
		"featureType": "transit.line",
		"stylers": [
			{ "color": "#000000" },
			{ "weight": 1 }
		]
	}, {
		"featureType": "water",
		"elementType": "labels",
		"stylers": [
			{ "visibility": "off" }
		]
	}, {
		"featureType": "road",
		"elementType": "geometry.fill",
		"stylers": [
			{ "weight": 0.1 }
		]
	}
]