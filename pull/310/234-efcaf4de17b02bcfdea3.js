(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{1307:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(1273)),u=function(e){return{bindTo:e,axis:{x:{type:i.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}}}};t.default=u},1352:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(1274),u={key:"bubble_custom_radius_dataset",label:{display:"Bubble set B"},color:l(a(1273)).default.helpers.COLORS.LIGHT_BLUE,onClick:i.loadBubblePopup,weight:{fixedRadius:12},values:[{x:new Date(2016,0,1,6,0).toISOString(),y:100},{x:new Date(2016,0,1,10,0).toISOString(),y:120},{x:new Date(2016,0,1,12,0).toISOString(),y:180},{x:new Date(2016,0,1,18,0).toISOString(),y:220}],yAxis:"y"};t.default=u},1859:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(0)),u=l(a(1275)),n=l(a(1388));a(1278);var o=l(a(1307)),r=l(a(1352)),d=u.default.deepClone((0,o.default)("#customWeightGraph")),s=[u.default.deepClone(r.default)];t.default=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),i.default.createElement(n.default,{graphID:"customWeightGraph",graphConfig:d,dataset:s}))}}}]);