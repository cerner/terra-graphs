(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1302:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1273)),i=a(1274),l={key:"dynamic_dataset_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLUE,onClick:i.loadBarPopup,values:[{x:new Date(2016,0,1,3).toISOString(),y:15},{x:new Date(2016,0,1,6).toISOString(),y:19},{x:new Date(2016,0,1,9).toISOString(),y:10},{x:new Date(2016,0,1,12).toISOString(),y:13},{x:new Date(2016,0,1,15).toISOString(),y:15}]};t.default=l},1462:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1273)),i=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Data",lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),ticks:{values:[new Date(2016,0,1,3).toISOString(),new Date(2016,0,1,6).toISOString(),new Date(2016,0,1,9).toISOString(),new Date(2016,0,1,12).toISOString(),new Date(2016,0,1,15).toISOString()],format:"%H"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:20},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:20}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0,eventline:[{color:r.default.helpers.COLORS.GREY,style:{strokeDashArray:"4,4"},value:new Date(2016,0,1,4,30).toISOString()}]}};t.default=i},1851:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(43)),i=n(a(0)),l=n(a(78)),o=n(a(1273)),u=n(a(1275)),d=n(a(1320));a(1278);var f=n(a(1462)),s=n(a(1302)),p=u.default.deepClone((0,f.default)("#barPanningDynamicEventline")),c={initial:0,factor:3,dataset:[u.default.deepClone(s.default)],graphConfig:p},S=function(){var e=i.default.useReducer((function(e,t){var a,n=u.default.deepClone(e.graphConfig);switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}var r=[{color:o.default.helpers.COLORS.BLACK,style:{strokeDashArray:"2,2"},value:new Date(2016,0,1,7,30).toISOString()}];return n.axis.x.lowerLimit=new Date(2016,0,1,a).toISOString(),n.axis.x.upperLimit=new Date(2016,0,2,a).toISOString(),{initial:a,factor:e.factor,dataset:{eventline:r},graphConfig:u.default.deepClone(n)}}),c),t=(0,r.default)(e,2),a=t[0],n=t[1];return i.default.createElement(i.default.Fragment,null,i.default.createElement(l.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),i.default.createElement(l.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),i.default.createElement(d.default,{graphID:"barPanningDynamicEventline",graphConfig:a.graphConfig,dataset:a.dataset}))};t.default=S}}]);