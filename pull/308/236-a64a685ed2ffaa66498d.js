(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1377:function(e,i,t){"use strict";var l=t(2);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=l(t(1273)),d=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!1,label:"Paired Set B",lowerLimit:100,upperLimit:350}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};i.default=d},1395:function(e,i,t){"use strict";var l=t(2);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=l(t(1273)),d=t(1274),r={key:"paired_result_critical_dataset_1",label:{high:{display:"Dataset_1_High"},mid:{display:"Dataset_1_Median"},low:{display:"Dataset_1_Low"}},shape:{high:a.default.helpers.SHAPES.DARK.TEAR_ALT,mid:a.default.helpers.SHAPES.DARK.RHOMBUS,low:a.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:a.default.helpers.COLORS.BLACK,mid:a.default.helpers.COLORS.BLUE,low:a.default.helpers.COLORS.BLACK},onClick:d.loadPopup,values:[{high:{x:"2016-05-01T12:00:00Z",y:150,isCritical:!1},mid:{x:"2016-05-01T12:00:00Z",y:40},low:{x:"2016-05-01T12:00:00Z",y:10,isCritical:!0}},{high:{x:"2016-08-17T12:00:00Z",y:110},mid:{x:"2016-08-17T12:00:00Z",y:70},low:{x:"2016-08-17T12:00:00Z",y:30}},{high:{x:"2016-10-17T12:00:00Z",y:160},mid:{x:"2016-10-17T12:00:00Z",y:120},low:{x:"2016-10-17T12:00:00Z",y:100}},{high:{x:"2017-03-17T12:00:00Z",y:190,isCritical:!0},mid:{x:"2017-03-17T12:00:00Z",y:90},low:{x:"2017-03-17T12:00:00Z",y:60,isCritical:!0}},{low:{x:"2017-07-17T12:00:00Z",y:10}},{high:{x:"2018-02-17T12:00:00Z",y:180}}]};i.default=r},1959:function(e,i,t){"use strict";var l=t(2);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=l(t(0)),d=l(t(1275)),r=l(t(1320));t(1278);var o=l(t(1377)),u=l(t(1395)),s=d.default.deepClone((0,o.default)("#simplePairedResultGraph")),p=[d.default.deepClone(u.default)];i.default=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),a.default.createElement(r.default,{graphID:"simplePairedResultGraph",graphConfig:s,dataset:p}))}}}]);