(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1274:function(e,t,n){"use strict";var a=n(2),o=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var i=a(n(43)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=i?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(1281)),l=a(n(1279)),s=a(n(1275));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var c=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},h=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var o=a.append("g").classed("section",!0),r=function(){var e=s[l],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,i.default)(e,2),a=n[0],o=n[1],r=t.append("g").classed("popup-item",!0);r.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),r.append("g").classed("popup-text",!0).text(o)}))},l=0,s=Object.values(n);l<s.length;l++)r()},f=function(e){var t=document.querySelector("#tooltip");return r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){r.select(t).attr("style","display:none;").selectAll("g").remove(),s.default.isFunction(e)&&e(),r.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),r.select("#tooltip").style("left","".concat(r.event.pageX+5,"px")).style("top","".concat(r.event.pageY+5,"px"))},b=function(){r.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),r.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){b();var o=f(e).append("g"),i=a.x,r=a.y,l=a.label,s=a.high,p=a.mid,h=a.low;i?(m(o,"X axis","".concat(d(i)?c(i):i)),m(o,"".concat(l.display),r)):(m(o,"X axis","".concat(s?u(s.x):p?u(p.x):h?u(h.x):"N/A")),s&&m(o,"High",u(s.y)),p&&m(o,"Mid",u(p.y)),h&&m(o,"Low",u(h.y)))};t.loadBubblePopup=function(e,t,n,a){b();var o=f(e).append("g"),i=a.x,r=a.y,l=a.label,s=a.weight;i&&(m(o,"X axis","".concat(d(i)?c(i):i)),m(o,"year",r)),s&&m(o,"".concat(l.display),"".concat(s))};t.loadBarPopup=function(e,t,n,a){b();var o=f(e).append("g");a.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){b();var a=f(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,i=t.label,r=t.color;s.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||l.default.DEFAULT_COLOR).attr("id",o.path.id),i.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(r,";")).text("".concat(i.display)),i.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(i.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),f().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;b(),(n=document.querySelector("#tooltip"),r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){r.select(n).attr("style","display:none;").selectAll("g").remove(),s.default.isFunction(t)&&t(),r.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),r.select("#tooltip").style("left","".concat(r.event.pageX-250,"px")).style("top","".concat(r.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){b();var a=f(e).append("g"),o=n.tasks,i=n.activities,r=n.events,l=n.actions;if(o&&o.length>0){var s=[];s.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),h(a,"Tasks",s)}if(i&&i.length>0){var p=[];i.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),h(a,"Activities",p)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),h(a,"Events",c)}if(l&&l.length>0){var u=[];l.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),h(a,"Actions",u)}};t.loadTaskPopup=function(e,t,n,a){b();var o=f(e).append("g"),i=a.label,r=a.display,l=a.y,s=a.startDate,p=a.endDate,u=a.percentage;i&&m(o,"Task Name",r),m(o,"Track",l),m(o,"Start Date",c(s)),m(o,"End Date",c(p)),u&&m(o,"Percentage",u)};t.loadDatelinePopup=function(e,t){b();var n=f(e).append("g"),a=t.label,o=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",c(o))};t.loadTimelinePopup=function(e,t,n,a){b();var o=f(e).append("g"),i=a.x,r=(a.y,a.label),l=a.content;m(o,"X axis","".concat(d(i)?c(i):i)),m(o,"".concat(r.display),l)};t.loadPiePopup=function(e,t,n,a){b();var o=f(e).append("g"),i=a.label,r=a.value;m(o,i.display,r)}},1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(4));n(1278);var r={id:i.default.string.isRequired},l=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=r;var s=l;t.default=s},1280:function(e,t,n){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var o=a!=n.offsetHeight;return document.body.removeChild(n),o}function o(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=o)},1339:function(e,t,n){"use strict";n.r(t)},1384:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(31),o=n.n(a),i=n(55),r=n.n(i),l=(n(0),n(788)),s=["components"],p={},c="wrapper";function u(e){var t=e.components,n=r()(e,s);return Object(l.mdx)(c,o()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadTimelinePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst bobRossIpsum = 'Just use the old one inch brush. It is so important to do something every day that will make you happy.'\n  + 'I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it '\n  + 'always looks for the easiest way to do things\\n\\nWe are trying to teach you a technique here and how to use it. '\n  + 'The least little bit can do so much. There we go.\\n\\nNo worries. No cares. Just float and wait for the wind to blow you around.'\n  + 'These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. '\n  + 'Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.'\n  + 'A thin paint will stick to a thick paint.\\n';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Timeline A',\n  },\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadTimelinePopup,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 1, 30).toISOString(),\n      content: bobRossIpsum,\n    },\n    {\n      x: new Date(2016, 0, 1, 2, 15).toISOString(),\n      content: bobRossIpsum,\n    },\n    {\n      x: new Date(2016, 0, 1, 3, 15).toISOString(),\n      content: bobRossIpsum,\n    },\n    {\n      x: new Date(2016, 0, 1, 4, 15).toISOString(),\n      content: bobRossIpsum,\n    },\n    {\n      x: new Date(2016, 0, 1, 5, 15).toISOString(),\n      content: bobRossIpsum,\n    },\n  ],\n};\n\nexport default data;\n\n")))}u.isMDXComponent=!0},1385:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(31),o=n.n(a),i=n(55),r=n.n(i),l=(n(0),n(788)),s=["components"],p={},c="wrapper";function u(e){var t=e.components,n=r()(e,s);return Object(l.mdx)(c,o()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadTimelinePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_2',\n  label: {\n    display: 'Timeline B',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadTimelinePopup,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 7, 15).toISOString(),\n      content: 'This is custom value of another unit',\n    },\n    {\n      x: new Date(2016, 0, 1, 9, 45).toISOString(),\n      content: 'This is custom value of another unit',\n    },\n    {\n      x: new Date(2016, 0, 1, 12).toISOString(),\n      content: 'This is custom value of another unit',\n    },\n  ],\n};\n\nexport default data;\n\n")))}u.isMDXComponent=!0},1386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString()}},showLabel:!0,showLegend:!0,pan:{enabled:!0}}};t.default=a},1598:function(e,t,n){"use strict";n.r(t);var a=n(1273),o=n.n(a),i=n(1274),r="Just use the old one inch brush. It is so important to do something every day that will make you happy.I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.A thin paint will stick to a thick paint.\n",l={key:"uid_1",label:{display:"Timeline A"},color:o.a.helpers.COLORS.BLUE,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,1,30).toISOString(),content:r},{x:new Date(2016,0,1,2,15).toISOString(),content:r},{x:new Date(2016,0,1,3,15).toISOString(),content:r},{x:new Date(2016,0,1,4,15).toISOString(),content:r},{x:new Date(2016,0,1,5,15).toISOString(),content:r}]};t.default=l},1599:function(e,t,n){"use strict";n.r(t);var a=n(1273),o=n.n(a),i=n(1274),r={key:"uid_2",label:{display:"Timeline B"},shape:o.a.helpers.SHAPES.DARK.RHOMBUS,color:o.a.helpers.COLORS.GREEN,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,7,15).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,9,45).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,12).toISOString(),content:"This is custom value of another unit"}]};t.default=r},1600:function(e,t,n){"use strict";n.r(t);var a=n(1273),o=n.n(a),i=n(1274),r="Just use the old one inch brush. It is so important to do something every day that will make you happy.I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.A thin paint will stick to a thick paint.\n",l={key:"uid_1",label:{display:"Timeline A"},color:o.a.helpers.COLORS.BLUE,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,1,30).toISOString(),content:r,isCritical:!0},{x:new Date(2016,0,1,2,15).toISOString(),content:r,isCritical:!0},{x:new Date(2016,0,1,3,15).toISOString(),content:r},{x:new Date(2016,0,1,4,15).toISOString(),content:r,isCritical:!0},{x:new Date(2016,0,1,8,15).toISOString(),content:r}]};t.default=l},1601:function(e,t,n){"use strict";n.r(t);var a=n(1273),o=n.n(a),i=n(1274),r={key:"uid_2",label:{display:"Timeline B"},shape:o.a.helpers.SHAPES.DARK.RHOMBUS,color:o.a.helpers.COLORS.GREEN,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,7,15).toISOString(),content:"This is custom value of another unit",isCritical:!0},{x:new Date(2016,0,1,9,45).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,15).toISOString(),content:"This is custom value of another unit"}]};t.default=r},1602:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(31),o=n.n(a),i=n(55),r=n.n(i),l=(n(0),n(788)),s=["components"],p={},c="wrapper";function u(e){var t=e.components,n=r()(e,s);return Object(l.mdx)(c,o()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"const getTimelinePanningConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 15, 59).toISOString(),\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  pan: {\n    enabled: true,\n  },\n});\n\nexport default getTimelinePanningConfig;\n\n")))}u.isMDXComponent=!0},1603:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(31),o=n.n(a),i=n(55),r=n.n(i),l=(n(0),n(788)),s=["components"],p={},c="wrapper";function u(e){var t=e.components,n=r()(e,s);return Object(l.mdx)(c,o()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadTimelinePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst bobRossIpsum = 'Just use the old one inch brush. It is so important to do something every day that will make you happy.'\n  + 'I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it '\n  + 'always looks for the easiest way to do things\\n\\nWe are trying to teach you a technique here and how to use it. '\n  + 'The least little bit can do so much. There we go.\\n\\nNo worries. No cares. Just float and wait for the wind to blow you around.'\n  + 'These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. '\n  + 'Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.'\n  + 'A thin paint will stick to a thick paint.\\n';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Timeline A',\n  },\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadTimelinePopup,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 1, 30).toISOString(),\n      content: bobRossIpsum,\n      isCritical: true,\n    },\n    {\n      x: new Date(2016, 0, 1, 2, 15).toISOString(),\n      content: bobRossIpsum,\n      isCritical: true,\n    },\n    {\n      x: new Date(2016, 0, 1, 3, 15).toISOString(),\n      content: bobRossIpsum,\n    },\n    {\n      x: new Date(2016, 0, 1, 4, 15).toISOString(),\n      content: bobRossIpsum,\n      isCritical: true,\n    },\n    {\n      x: new Date(2016, 0, 1, 8, 15).toISOString(),\n      content: bobRossIpsum,\n    },\n  ],\n};\n\nexport default data;\n\n")))}u.isMDXComponent=!0},1604:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(31),o=n.n(a),i=n(55),r=n.n(i),l=(n(0),n(788)),s=["components"],p={},c="wrapper";function u(e){var t=e.components,n=r()(e,s);return Object(l.mdx)(c,o()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadTimelinePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_2',\n  label: {\n    display: 'Timeline B',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadTimelinePopup,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 7, 15).toISOString(),\n      content: 'This is custom value of another unit',\n      isCritical: true,\n    },\n    {\n      x: new Date(2016, 0, 1, 9, 45).toISOString(),\n      content: 'This is custom value of another unit',\n    },\n    {\n      x: new Date(2016, 0, 1, 15).toISOString(),\n      content: 'This is custom value of another unit',\n    },\n  ],\n};\n\nexport default data;\n\n")))}u.isMDXComponent=!0},1829:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(43)),i=a(n(0)),r=a(n(78)),l=a(n(1273)),s=a(n(1275));n(1276),n(1339);var p,c=a(n(1277)),u=a(n(1386)),d=a(n(1598)),m=a(n(1599)),h=a(n(1600)),f=a(n(1601)),b=s.default.deepClone((0,u.default)("#TimelinePanningDynamicExample")),g=[s.default.deepClone(d.default),s.default.deepClone(m.default)],y={initial:0,factor:3},x=function(){i.default.useEffect((function(){p=l.default.api.timeline(b),g.forEach((function(e){p.loadContent(e)}))}),[]);var e=i.default.useReducer((function(e,t){var n;switch(t.type){case"panLeft":n=e.initial-e.factor;break;case"panRight":n=e.initial+e.factor;break;default:return e}return{initial:n,factor:e.factor}}),y),t=(0,o.default)(e,2),n=t[0],a=t[1];return i.default.useLayoutEffect((function(){if(p){p.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),p.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString();var e={panData:[s.default.deepClone(h.default),s.default.deepClone(f.default)]};p.reflowMultipleDatasets(e)}}),[n.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(r.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),i.default.createElement(r.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(c.default,{id:"TimelinePanningDynamicExample"}))};t.default=x},2087:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(31),o=n.n(a),i=n(55),r=n.n(i),l=n(0),s=n.n(l),p=n(788),c=n(1829),u=n.n(c),d=["components"],m={};function h(e){var t=e.components,n=r()(e,d);return Object(p.mdx)("wrapper",o()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Timeline/Timeline.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getTimelinePanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelinePanningConfig';\nimport dataset1 from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Timeline/defaultDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Timeline/defaultDataset2';\nimport dynamicDataset1 from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Timeline/criticalDataset1';\nimport dynamicDataset2 from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Timeline/criticalDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getTimelinePanningConfig('#TimelinePanningDynamicExample'));\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst TimelinePanningDynamicDataExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.timeline(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = {\n      panData: [utils.deepClone(dynamicDataset1), utils.deepClone(dynamicDataset2)],\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"TimelinePanningDynamicExample\" />\n    </>\n  );\n};\n\nexport default TimelinePanningDynamicDataExample;\n\n")))}h.isMDXComponent=!0;var f=n(1284),b=n.n(f),g=n(1285),y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return s.a.createElement(b.a,{title:t||"Dynamic Data",description:n,example:s.a.createElement(u.a,null),exampleCssSrc:s.a.createElement(g.a,null),exampleSrc:s.a.createElement(h,null),isExpanded:a})},x=n(1602),v=n(1384),w=n(1385),O=n(1603),D=n(1604),S=["components"];n(1280);var T={},j="wrapper";function C(e){var t=e.components,n=r()(e,S);return Object(p.mdx)(j,o()({},T,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"timeline-graph-dynamic-data"},"Timeline graph Dynamic Data"),Object(p.mdx)("p",null,"This is a basic timeline graph with Dynamic Data."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(y,{mdxType:"DynamicData"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(x.a,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)("h4",{id:"initial-data"},"Initial Data"),Object(p.mdx)("h5",{id:"timeline-a-dataset"},"Timeline A Dataset"),Object(p.mdx)(v.a,{mdxType:"DataObject1"}),Object(p.mdx)("h5",{id:"timeline-b-dataset"},"Timeline B Dataset"),Object(p.mdx)(w.a,{mdxType:"DataObject2"}),Object(p.mdx)("h4",{id:"updated-data"},"Updated Data"),Object(p.mdx)("h5",{id:"timeline-a-dataset-1"},"Timeline A Dataset"),Object(p.mdx)(O.a,{mdxType:"DynamicDataObject1"}),Object(p.mdx)("h5",{id:"timeline-b-dataset-1"},"Timeline B Dataset"),Object(p.mdx)(D.a,{mdxType:"DynamicDataObject2"})))}C.isMDXComponent=!0}}]);