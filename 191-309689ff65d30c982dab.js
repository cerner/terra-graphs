(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1387:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString()}},showLabel:!0,showLegend:!0,pan:{enabled:!0}}};t.default=n},1591:function(e,t,a){"use strict";a.r(t);var n=a(1273),i=a.n(n),o=a(1274),l="Just use the old one inch brush. It is so important to do something every day that will make you happy.I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.A thin paint will stick to a thick paint.\n",r={key:"uid_1",label:{display:"Timeline A"},color:i.a.helpers.COLORS.BLUE,onClick:o.loadTimelinePopup,values:[{x:new Date(2016,0,1,1,30).toISOString(),content:l},{x:new Date(2016,0,1,2,15).toISOString(),content:l},{x:new Date(2016,0,1,3,15).toISOString(),content:l},{x:new Date(2016,0,1,4,15).toISOString(),content:l},{x:new Date(2016,0,1,5,15).toISOString(),content:l}]};t.default=r},1592:function(e,t,a){"use strict";a.r(t);var n=a(1273),i=a.n(n),o=a(1274),l={key:"uid_2",label:{display:"Timeline B"},shape:i.a.helpers.SHAPES.DARK.RHOMBUS,color:i.a.helpers.COLORS.GREEN,onClick:o.loadTimelinePopup,values:[{x:new Date(2016,0,1,7,15).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,9,45).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,12).toISOString(),content:"This is custom value of another unit"}]};t.default=l},1593:function(e,t,a){"use strict";a.r(t);var n=a(1273),i=a.n(n),o=a(1274),l="Just use the old one inch brush. It is so important to do something every day that will make you happy.I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.A thin paint will stick to a thick paint.\n",r={key:"uid_1",label:{display:"Timeline A"},color:i.a.helpers.COLORS.BLUE,onClick:o.loadTimelinePopup,values:[{x:new Date(2016,0,1,1,30).toISOString(),content:l,isCritical:!0},{x:new Date(2016,0,1,2,15).toISOString(),content:l,isCritical:!0},{x:new Date(2016,0,1,3,15).toISOString(),content:l},{x:new Date(2016,0,1,4,15).toISOString(),content:l,isCritical:!0},{x:new Date(2016,0,1,8,15).toISOString(),content:l}]};t.default=r},1594:function(e,t,a){"use strict";a.r(t);var n=a(1273),i=a.n(n),o=a(1274),l={key:"uid_2",label:{display:"Timeline B"},shape:i.a.helpers.SHAPES.DARK.RHOMBUS,color:i.a.helpers.COLORS.GREEN,onClick:o.loadTimelinePopup,values:[{x:new Date(2016,0,1,7,15).toISOString(),content:"This is custom value of another unit",isCritical:!0},{x:new Date(2016,0,1,9,45).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,15).toISOString(),content:"This is custom value of another unit"}]};t.default=l},1969:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(43)),o=n(a(0)),l=n(a(78)),r=n(a(1275)),s=n(a(1424));a(1278);var u=n(a(1387)),c=n(a(1591)),d=n(a(1592)),h=n(a(1593)),p=n(a(1594)),f={initial:0,factor:3,dataset:[r.default.deepClone(c.default),r.default.deepClone(d.default)],graphConfig:r.default.deepClone((0,u.default)("#TimelinePanningExample"))},w=function(){var e=o.default.useReducer((function(e,t){var a,n=r.default.deepClone(e.graphConfig),i=[r.default.deepClone(h.default),r.default.deepClone(p.default)];switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return n.axis.x.lowerLimit=new Date(2016,0,1,a).toISOString(),n.axis.x.upperLimit=new Date(2016,0,2,a).toISOString(),{initial:a,factor:e.factor,dataset:{panData:i},graphConfig:r.default.deepClone(n)}}),f),t=(0,i.default)(e,2),a=t[0],n=t[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement(l.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),o.default.createElement(l.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),o.default.createElement(s.default,{graphID:"TimelinePanningExample",graphConfig:a.graphConfig,dataset:a.dataset}))};t.default=w}}]);