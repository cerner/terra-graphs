(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{1312:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(1274),l=n(a(1273)),r={key:"bubble_basic_data",label:{display:"Bubble set A"},onClick:i.loadBubblePopup,color:l.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:70},{x:new Date(2016,0,1,15,45).toISOString(),y:120},{x:new Date(2016,0,1,10,30).toISOString(),y:160},{x:new Date(2016,0,1,18,0).toISOString(),y:180}],yAxis:"y",showShapes:!1};t.default=r},1329:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(1273)),l=function(e){return{bindTo:e,axis:{x:{type:i.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}},pan:{enabled:!0}}};t.default=l},1868:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(43)),l=n(a(0)),r=n(a(78)),u=n(a(1275)),o=n(a(1387));a(1278);var f=n(a(1329)),d=n(a(1312)),p=[u.default.deepClone(d.default)],c={initial:0,factor:3,graphConfig:u.default.deepClone((0,f.default)("#simpleBubblePanning"))},s=function(){var e=l.default.useReducer((function(e,t){var a,n=u.default.deepClone(e.graphConfig);switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return n.axis.x.lowerLimit=new Date(2016,0,1,a).toISOString(),n.axis.x.upperLimit=new Date(2016,0,2,a).toISOString(),{initial:a,factor:e.factor,graphConfig:u.default.deepClone(n)}}),c),t=(0,i.default)(e,2),a=t[0],n=t[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement(r.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),l.default.createElement(r.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),l.default.createElement(o.default,{graphID:"simpleBubblePanning",graphConfig:a.graphConfig,dataset:p}))};t.default=s}}]);