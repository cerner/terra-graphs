(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1330:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Combination Set A",lowerLimit:0,upperLimit:35},y2:{show:!0,label:"Combination Set B",lowerLimit:0,upperLimit:30,padDomain:!1}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};a.default=l},1331:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=l(t(1273)),o=t(1274),u={key:"line_dataset",label:{display:"Line Data Label"},graphType:"Line",color:i.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:new Array(7).fill("").map((function(e,a){return{y:Math.sin(a)*Math.PI+20,x:a+.5}}))};a.default=u},1360:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=l(t(1273)),o=t(1274),u={key:"bubble_dataset_1",label:{display:"Bubble Data Label 1"},graphType:"BubbleMultipleDataset",color:i.default.helpers.COLORS.GREEN,onClick:o.loadPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}]};a.default=u},1877:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=l(t(0)),o=l(t(1275)),u=l(t(1388));t(1278);var n=l(t(1330)),d=l(t(1331)),r=l(t(1360)),s=o.default.deepClone((0,n.default)("#lineWithSingleBubbleData")),p=[o.default.deepClone(r.default),o.default.deepClone(d.default)];a.default=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),i.default.createElement(u.default,{graphID:"lineWithSingleBubbleData",graphConfig:s,dataset:p}))}}}]);