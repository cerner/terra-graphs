(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{1306:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(a(1273)),i=function(e){return{bindTo:e,axis:{x:{type:u.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}}}};t.default=i},1472:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(1274),i={key:"bubble_color_dataset",label:{display:"Amount"},palette:l(a(1273)).default.helpers.BUBBLE.PALETTE.GREEN,onClick:u.loadBubblePopup,values:[{x:new Date(2016,0,1,11,0).toISOString(),y:60},{x:new Date(2016,0,1,9,0).toISOString(),y:75},{x:new Date(2016,0,1,19,30).toISOString(),y:165},{x:new Date(2016,0,1,15,0).toISOString(),y:120}],yAxis:"y"};t.default=i},1869:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(a(0)),i=l(a(1275)),o=l(a(1387));a(1278);var n=l(a(1306)),r=l(a(1472)),d=i.default.deepClone((0,n.default)("#colorBasedBubbleGraph")),p=[i.default.deepClone(r.default)];t.default=function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),u.default.createElement(o.default,{graphID:"colorBasedBubbleGraph",graphConfig:d,dataset:p}))}}}]);