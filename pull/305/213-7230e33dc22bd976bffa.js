(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1382:function(e,t,l){"use strict";var a=l(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(1273)),d=l(1274),u={key:"uid_1",label:{display:"Data Label 1"},color:i.default.helpers.COLORS.BLACK,onClick:d.loadPopup,values:[{x:85,y:5},{x:90,y:11},{x:92,y:12},{x:101,y:16},{x:107,y:17},{x:107,y:9},{x:135,y:11},{x:139,y:12},{x:143,y:16},{x:155,y:17},{x:161,y:28},{x:164,y:12},{x:168,y:13},{x:170,y:14}]};t.default=u},1594:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:180},y:{show:!0,label:"Line Set A",lowerLimit:0,upperLimit:18},y2:{show:!0,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=a},1595:function(e,t,l){"use strict";var a=l(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(1273)),d=l(1274),u={key:"uid_2",label:{display:"Data Label 2"},shape:i.default.helpers.SHAPES.DARK.RHOMBUS,color:i.default.helpers.COLORS.BLUE,onClick:d.loadPopup,yAxis:"y2",values:[{x:90,y:0},{x:92,y:50},{x:103,y:60},{x:117,y:80},{x:121,y:120},{x:128,y:130},{x:135,y:180},{x:138,y:185},{x:141,y:200},{x:149,y:220}]};t.default=u},1974:function(e,t,l){"use strict";var a=l(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(0)),d=a(l(1275)),u=a(l(1352));l(1278);var o=a(l(1594)),r=a(l(1382)),n=a(l(1595)),s=d.default.deepClone((0,o.default)("#scatterY2Axis")),y=[d.default.deepClone(r.default),d.default.deepClone(n.default)];t.default=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),i.default.createElement(u.default,{graphID:"scatterY2Axis",graphConfig:s,dataset:y}))}}}]);