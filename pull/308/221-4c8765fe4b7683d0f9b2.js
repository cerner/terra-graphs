(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1295:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:35},y2:{show:!1,label:"Bar Set B",lowerLimit:0,upperLimit:30}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};a.default=l},1355:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=l(t(1273)),o=t(1274),r={key:"dataset_bar_1",label:{display:"Dataset 1"},color:i.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:6,y:10}]};a.default=r},1853:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=l(t(0)),o=l(t(1275)),r=l(t(1319));t(1278);var d=l(t(1295)),u=l(t(1355)),n=o.default.deepClone((0,d.default)("#simpleBarGraph")),s=[o.default.deepClone(u.default)];a.default=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),i.default.createElement(r.default,{graphID:"simpleBarGraph",graphConfig:n,dataset:s}))}}}]);