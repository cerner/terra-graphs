(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1295:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:35},y2:{show:!1,label:"Bar Set B",lowerLimit:0,upperLimit:30}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};a.default=l},1464:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=l(t(1273)),r=t(1274),s={key:"stacked_bar_4",label:{display:"Dataset 4"},color:d.default.helpers.COLORS.GREEN,onClick:r.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}],regions:[{axis:"y",x:1,start:10,end:10},{axis:"y",x:2,start:40,end:40},{axis:"y",x:3,start:55,end:55},{axis:"y",x:4,start:30,end:30}]};a.default=s},1465:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=l(t(1273)),r=t(1274),s={key:"stacked_bar_5",label:{display:"Dataset 5"},group:"stacked_bar_4",color:d.default.helpers.COLORS.LIGHT_PURPLE,onClick:r.loadBarPopup,values:[{x:1,y:30},{x:2,y:5},{x:3,y:8},{x:4,y:10},{x:5,y:10},{x:6,y:10}],regions:[{axis:"y",x:1,start:10,end:10},{axis:"y",x:2,start:40,end:40},{axis:"y",x:3,start:55,end:55},{axis:"y",x:4,start:30,end:30}]};a.default=s},1466:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=l(t(1273)),r=t(1274),s={key:"stacked_bar_6",label:{display:"Dataset 6"},group:"stacked_bar_4",color:d.default.helpers.COLORS.BLUE,onClick:r.loadBarPopup,values:[{x:1,y:30},{x:2,y:8},{x:3,y:9},{x:4,y:10},{x:5,y:7}],regions:[{axis:"y",x:1,start:10,end:10},{axis:"y",x:2,start:40,end:40},{axis:"y",x:3,start:55,end:55},{axis:"y",x:4,start:30,end:30}]};a.default=s},1861:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=l(t(0)),r=l(t(1275)),s=l(t(1319));t(1278);var i=l(t(1295)),o=l(t(1464)),u=l(t(1465)),n=l(t(1466)),x=r.default.deepClone((0,i.default)("#stackedGoalLineBarGraph")),f=[r.default.deepClone(o.default),r.default.deepClone(u.default),r.default.deepClone(n.default)];a.default=function(){return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),d.default.createElement(s.default,{graphID:"stackedGoalLineBarGraph",graphConfig:x,dataset:f}))}}}]);