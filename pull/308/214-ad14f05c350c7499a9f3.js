(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{1310:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(1273)),r=a(1274),o={key:"uid_1",label:{display:"Data Label 1"},color:i.default.helpers.COLORS.BLACK,onClick:r.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}]};t.default=o},1426:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(1273)),r=function(e){return{bindTo:e,axis:{x:{type:i.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=r},1591:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(1273)),r=a(1274),o={key:"uid_1",label:{display:"Data Label 1"},color:i.default.helpers.COLORS.BLACK,onClick:r.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:28},{x:new Date(2016,0,1,2,15).toISOString(),y:5},{x:new Date(2016,0,1,3,15).toISOString(),y:25},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:15},{x:new Date(2016,0,1,7,0).toISOString(),y:6},{x:new Date(2016,0,1,8,15).toISOString(),y:8},{x:new Date(2016,0,1,9,45).toISOString(),y:9},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:18},{x:new Date(2016,0,1,14,15).toISOString(),y:22},{x:new Date(2016,0,1,19,45).toISOString(),y:7},{x:new Date(2016,0,1,21,15).toISOString(),y:21}]};t.default=o},1976:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(43)),r=n(a(0)),o=n(a(78)),l=n(a(1275)),u=n(a(1352));a(1278);var S=n(a(1426)),d=n(a(1310)),f=n(a(1591)),p={initial:0,factor:3,dataset:[l.default.deepClone(d.default)],graphConfig:l.default.deepClone((0,S.default)("#dynamicLineData"))},w=function(){var e=r.default.useReducer((function(e,t){var a,n=l.default.deepClone(e.graphConfig),i=[l.default.deepClone(f.default)];switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return n.axis.x.lowerLimit=new Date(2016,0,1,a).toISOString(),n.axis.x.upperLimit=new Date(2016,0,2,a).toISOString(),{initial:a,factor:e.factor,dataset:{panData:i},graphConfig:l.default.deepClone(n)}}),p),t=(0,i.default)(e,2),a=t[0],n=t[1];return r.default.createElement(r.default.Fragment,null,r.default.createElement(o.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),r.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),r.default.createElement(u.default,{graphID:"dynamicLineData",graphConfig:a.graphConfig,dataset:a.dataset}))};t.default=w}}]);