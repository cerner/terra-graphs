(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1571:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(1273)),d=function(e){return{bindTo:e,axis:{x:{type:i.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),ticks:{}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!0,label:"Paired Set B",lowerLimit:100,upperLimit:350}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};t.default=d},1572:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(1273)),d={key:"panning_with_y2_axis_dataset_1",label:{high:{display:"Dataset_1_High"},mid:{display:"Dataset_1_Median"},low:{display:"Dataset_1_Low"}},onClick:a(1274).loadPopup,shape:{high:i.default.helpers.SHAPES.DARK.TEAR_ALT,mid:i.default.helpers.SHAPES.DARK.RHOMBUS,low:i.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:i.default.helpers.COLORS.BLACK,mid:i.default.helpers.COLORS.BLUE,low:i.default.helpers.COLORS.BLACK},values:[{high:{x:"2016-01-02T00:30:00.000Z",y:150},mid:{x:"2016-01-02T00:30:00.000Z",y:40},low:{x:"2016-01-02T00:30:00.000Z",y:10}},{high:{x:"2016-01-02T02:30:00.000Z",y:110},mid:{x:"2016-01-02T02:30:00.000Z",y:70},low:{x:"2016-01-02T02:30:00.000Z",y:30}}]};t.default=d},1573:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(1273)),d=a(1274),r={key:"panning_with_y2_axis_dataset_2",label:{high:{display:"Dataset_2_High"},mid:{display:"Dataset_2_Median"},low:{display:"Dataset_2_Low"}},shape:{high:i.default.helpers.SHAPES.DARK.TRIANGLE,mid:i.default.helpers.SHAPES.DARK.SQUARE,low:i.default.helpers.SHAPES.DARK.TRIANGLE_DOWN},color:{high:i.default.helpers.COLORS.BLACK,mid:i.default.helpers.COLORS.ORANGE,low:i.default.helpers.COLORS.BLACK},onClick:d.loadPopup,yAxis:"y2",values:[{high:{x:"2016-01-02T03:30:00.000Z",y:180},mid:{x:"2016-01-02T03:30:00.000Z",y:60},low:{x:"2016-01-02T03:30:00.000Z",y:20}},{high:{x:"2016-01-02T05:30:00.000Z",y:90},mid:{x:"2016-01-02T05:30:00.000Z",y:40},low:{x:"2016-01-02T05:30:00.000Z",y:10}}]};t.default=r},1950:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(43)),d=l(a(0)),r=l(a(78)),u=l(a(1275)),n=l(a(1321));a(1278);var o=l(a(1571)),s=l(a(1572)),p=l(a(1573)),f=u.default.deepClone((0,o.default)("#pairedResultMultipleDatasetWithY2Axis")),h=[u.default.deepClone(s.default),u.default.deepClone(p.default)],c={initial:0,factor:3,graphConfig:f},_=function(){var e=d.default.useReducer((function(e,t){var a,l=u.default.deepClone(e.graphConfig);switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return l.axis.x.lowerLimit=new Date(2016,0,1,a).toISOString(),l.axis.x.upperLimit=new Date(2016,0,2,a).toISOString(),{initial:a,factor:e.factor,graphConfig:u.default.deepClone(l)}}),c),t=(0,i.default)(e,2),a=t[0],l=t[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement(r.default,{className:"button-pan-left",text:"<",onClick:function(){return l({type:"panLeft"})}}),d.default.createElement(r.default,{className:"button-pan-right",text:">",onClick:function(){return l({type:"panRight"})}}),d.default.createElement(n.default,{graphID:"pairedResultMultipleDatasetWithY2Axis",graphConfig:a.graphConfig,dataset:h}))};t.default=_}}]);