(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{1341:function(e,t,a){"use strict";var o=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(1273)),i=a(1274),l="Just use the old one inch brush. It is so important to do something every day that will make you happy.I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.A thin paint will stick to a thick paint.\n",r={key:"uid_1",label:{display:"Timeline A"},color:n.default.helpers.COLORS.BLUE,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,1,30).toISOString(),content:l},{x:new Date(2016,0,1,2,15).toISOString(),content:l},{x:new Date(2016,0,1,3,15).toISOString(),content:l},{x:new Date(2016,0,1,4,15).toISOString(),content:l},{x:new Date(2016,0,1,5,15).toISOString(),content:l}]};t.default=r},1342:function(e,t,a){"use strict";var o=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(1273)),i=a(1274),l={key:"uid_2",label:{display:"Timeline B"},shape:n.default.helpers.SHAPES.DARK.RHOMBUS,color:n.default.helpers.COLORS.GREEN,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,7,15).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,9,45).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,12).toISOString(),content:"This is custom value of another unit"}]};t.default=l},1384:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString()}},showLabel:!0,showLegend:!0}};t.default=o},1967:function(e,t,a){"use strict";var o=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),i=o(a(1275)),l=o(a(1424));a(1278);var r=o(a(1384)),s=o(a(1341)),u=o(a(1342)),d=i.default.deepClone((0,r.default)("#simpleTimelineGraph")),c=[i.default.deepClone(s.default),i.default.deepClone(u.default)];t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),n.default.createElement(l.default,{graphID:"simpleTimelineGraph",graphConfig:d,dataset:c}))}}}]);