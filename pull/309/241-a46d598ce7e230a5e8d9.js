(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1318:function(e,l,i){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=function(e){return{bindTo:e,axis:{x:{label:"Data",lowerLimit:0,upperLimit:1e3},y:{label:"Paired",lowerLimit:0,upperLimit:200}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};l.default=a},1583:function(e,l,i){"use strict";var a=i(2);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=a(i(1273)),d=i(1274),o={key:"simple_paired_result_data",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:t.default.helpers.SHAPES.DARK.TEAR_ALT,mid:t.default.helpers.SHAPES.DARK.RHOMBUS,low:t.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:t.default.helpers.COLORS.BLACK,mid:t.default.helpers.COLORS.PURPLE,low:t.default.helpers.COLORS.BLACK},onClick:d.loadPopup,regions:{high:[{axis:"y",start:140,end:220,color:"#c8cacb"}],low:[{axis:"y",start:20,end:70}]},values:[{high:{x:20,y:150},mid:{x:20,y:40},low:{x:20,y:10}},{high:{x:80,y:100},mid:{x:80,y:75},low:{x:80,y:50}},{high:{x:150,y:110},mid:{x:150,y:70},low:{x:150,y:30}},{high:{x:175,y:160},mid:{x:175,y:120},low:{x:175,y:100}},{high:{x:300,y:190},mid:{x:300,y:90},low:{x:300,y:60}},{high:{x:560,y:150},mid:{x:560,y:40},low:{x:560,y:10}},{high:{x:800,y:180},mid:{x:800,y:100},low:{x:800,y:100}}]};l.default=o},1965:function(e,l,i){"use strict";var a=i(2);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=a(i(0)),d=a(i(1275)),o=a(i(1320));i(1278);var r=a(i(1318)),u=a(i(1583)),s=d.default.deepClone((0,r.default)("#simplePairedResultGraph")),h=[d.default.deepClone(u.default)];l.default=function(){return t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),t.default.createElement(o.default,{graphID:"simplePairedResultGraph",graphConfig:s,dataset:h}))}}}]);