(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1319:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,axis:{x:{label:"Data",lowerLimit:0,upperLimit:1e3},y:{label:"Paired",lowerLimit:0,upperLimit:200}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};t.default=a},1590:function(e,t,l){"use strict";var a=l(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(1273)),i=l(1274),d={key:"value_region_dataset",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.PURPLE,low:r.default.helpers.COLORS.BLACK},onClick:i.loadPopup,values:[{high:{x:20,y:150,region:{start:90,end:150,color:r.default.helpers.COLORS.GREY}},mid:{x:20,y:40},low:{x:20,y:10,region:{start:5,end:30}}},{high:{x:80,y:100,region:{start:90,end:150,color:r.default.helpers.COLORS.GREY}},mid:{x:80,y:75},low:{x:80,y:50,region:{start:5,end:30}}},{high:{x:150,y:110,region:{start:120,end:190,color:r.default.helpers.COLORS.GREY}},mid:{x:150,y:70},low:{x:150,y:30,region:{start:5,end:30}}},{high:{x:175,y:160,region:{start:120,end:190,color:r.default.helpers.COLORS.GREY}},mid:{x:175,y:120},low:{x:175,y:100,region:{start:10,end:40}}},{high:{x:300,y:190,region:{start:120,end:190,color:r.default.helpers.COLORS.GREY}},mid:{x:300,y:90},low:{x:300,y:60,region:{start:10,end:40}}},{high:{x:560,y:150},mid:{x:560,y:40},low:{x:560,y:10,region:{start:10,end:40}}},{high:{x:800,y:180,region:{start:120,end:190,color:r.default.helpers.COLORS.GREY}},mid:{x:800,y:100},low:{x:800,y:100,region:{start:10,end:40}}}]};t.default=d},1955:function(e,t,l){"use strict";var a=l(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(0)),i=a(l(1275)),d=a(l(1321));l(1278);var o=a(l(1319)),n=a(l(1590)),s=i.default.deepClone((0,o.default)("#simplePairedResultGraph")),u=[i.default.deepClone(n.default)];t.default=function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement(d.default,{graphID:"simplePairedResultGraph",graphConfig:s,dataset:u}))}}}]);