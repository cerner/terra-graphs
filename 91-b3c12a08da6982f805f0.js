(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1318:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var i=n(a(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=i?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(n,l,r):n[l]=e[l]}n.default=e,a&&a.set(e,n);return n}(a(1326)),r=n(a(1320)),s=n(a(1317));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var p=function(e){return new Date(e).toLocaleString()},c=function(e){return e?d(e)?p(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},h=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),l=function(){var e=s[r],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,i.default)(e,2),n=a[0],o=a[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(o)}))},r=0,s=Object.values(a);r<s.length;r++)l()},g=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){l.select(t).attr("style","display:none;").selectAll("g").remove(),s.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},y=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){y();var o=g(e).append("g"),i=n.x,l=n.y,r=n.label,s=n.high,u=n.mid,h=n.low;i?(f(o,"X axis","".concat(d(i)?p(i):i)),f(o,"".concat(r.display),l)):(f(o,"X axis","".concat(s?c(s.x):u?c(u.x):h?c(h.x):"N/A")),s&&f(o,"High",c(s.y)),u&&f(o,"Mid",c(u.y)),h&&f(o,"Low",c(h.y)))},t.loadBubblePopup=function(e,t,a,n){y();var o=g(e).append("g"),i=n.x,l=n.y,r=n.label,s=n.weight;i&&(f(o,"X axis","".concat(d(i)?p(i):i)),f(o,"year",l)),s&&f(o,"".concat(r.display),"".concat(s))},t.loadBarPopup=function(e,t,a,n){y();var o=g(e).append("g");n.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){y();var n=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,i=t.label,l=t.color;s.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||r.default.DEFAULT_COLOR).attr("id",o.path.id),i.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(i.display)),i.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(i.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){y(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;y(),(a=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(a).attr("style","display:none;").selectAll("g").remove(),s.default.isFunction(t)&&t(),l.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){y();var n=g(e).append("g"),o=a.tasks,i=a.activities,l=a.events,r=a.actions;if(o&&o.length>0){var s=[];s.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),h(n,"Tasks",s)}if(i&&i.length>0){var u=[];i.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),h(n,"Activities",u)}if(l&&l.length>0){var p=[];l.forEach((function(e){p.push({name:e.key,values:e.values.join(", ")})})),h(n,"Events",p)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),h(n,"Actions",c)}},t.loadTaskPopup=function(e,t,a,n){y();var o=g(e).append("g"),i=n.label,l=n.display,r=n.y,s=n.startDate,u=n.endDate,c=n.percentage;i&&f(o,"Task Name",l),f(o,"Track",r),f(o,"Start Date",p(s)),f(o,"End Date",p(u)),c&&f(o,"Percentage",c)},t.loadDatelinePopup=function(e,t){y();var a=g(e).append("g"),n=t.label,o=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",p(o))},t.loadTimelinePopup=function(e,t,a,n){y();var o=g(e).append("g"),i=n.x,l=(n.y,n.label),r=n.content;f(o,"X axis","".concat(d(i)?p(i):i)),f(o,"".concat(l.display),r)},t.loadPiePopup=function(e,t,a,n){y();var o=g(e).append("g"),i=n.label,l=n.value;f(o,i.display,l)}},1358:function(e,t,a){"use strict";a.r(t)},1400:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),i=n(a(0)),l=n(a(4)),r=n(a(1316));a(1319),a(1358);var s=n(a(1317)),u={graphID:l.default.string.isRequired,graphConfig:l.default.object.isRequired,dataset:l.default.arrayOf(l.default.object),timeout:l.default.arrayOf(l.default.number)},p=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,l=e.timeout,u=i.default.useState(),p=(0,o.default)(u,2),c=p[0],d=p[1],f=i.default.useRef(),h=i.default.useRef();return i.default.useEffect((function(){c||d(r.default.api.timeline(t))}),[c,t]),i.default.useEffect((function(){if(c&&!f.current){var e=[];return a&&(l?a.forEach((function(t,a){var n=setTimeout((function(){return c.graphContainer?c.loadContent(t):""}),l[a]);e.push(n)})):a.forEach((function(e){c.loadContent(e)}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[c,a,l]),i.default.useEffect((function(){if(c)if(h.current){c.config.axis.x.upperLimit=t.axis.x.upperLimit,c.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:s.default.deepClone(a.panData),eventline:s.default.deepClone(a.eventline)};c.reflowMultipleDatasets(e)}else h.current=!0}),[c,a,t]),i.default.createElement("div",{id:"".concat(n,"-canvasContainer")},i.default.createElement("div",{id:n}))};p.propTypes=u;t.default=p},1430:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString()}},showLabel:!0,showLegend:!0,pan:{enabled:!0}}}},1634:function(e,t,a){"use strict";a.r(t);var n=a(1316),o=a.n(n),i=a(1318),l="Just use the old one inch brush. It is so important to do something every day that will make you happy.I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.A thin paint will stick to a thick paint.\n",r={key:"uid_1",label:{display:"Timeline A"},color:o.a.helpers.COLORS.BLUE,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,1,30).toISOString(),content:l},{x:new Date(2016,0,1,2,15).toISOString(),content:l},{x:new Date(2016,0,1,3,15).toISOString(),content:l},{x:new Date(2016,0,1,4,15).toISOString(),content:l},{x:new Date(2016,0,1,5,15).toISOString(),content:l}]};t.default=r},1635:function(e,t,a){"use strict";a.r(t);var n=a(1316),o=a.n(n),i=a(1318),l={key:"uid_2",label:{display:"Timeline B"},shape:o.a.helpers.SHAPES.DARK.RHOMBUS,color:o.a.helpers.COLORS.GREEN,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,7,15).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,9,45).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,12).toISOString(),content:"This is custom value of another unit"}]};t.default=l},1636:function(e,t,a){"use strict";a.r(t);var n=a(1316),o=a.n(n),i=a(1318),l="Just use the old one inch brush. It is so important to do something every day that will make you happy.I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.A thin paint will stick to a thick paint.\n",r={key:"uid_1",label:{display:"Timeline A"},color:o.a.helpers.COLORS.BLUE,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,1,30).toISOString(),content:l,isCritical:!0},{x:new Date(2016,0,1,2,15).toISOString(),content:l,isCritical:!0},{x:new Date(2016,0,1,3,15).toISOString(),content:l},{x:new Date(2016,0,1,4,15).toISOString(),content:l,isCritical:!0},{x:new Date(2016,0,1,8,15).toISOString(),content:l}]};t.default=r},1637:function(e,t,a){"use strict";a.r(t);var n=a(1316),o=a.n(n),i=a(1318),l={key:"uid_2",label:{display:"Timeline B"},shape:o.a.helpers.SHAPES.DARK.RHOMBUS,color:o.a.helpers.COLORS.GREEN,onClick:i.loadTimelinePopup,values:[{x:new Date(2016,0,1,7,15).toISOString(),content:"This is custom value of another unit",isCritical:!0},{x:new Date(2016,0,1,9,45).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,15).toISOString(),content:"This is custom value of another unit"}]};t.default=l},2010:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),i=n(a(0)),l=n(a(78)),r=n(a(1317)),s=n(a(1400));a(1323);var u=n(a(1430)),p=n(a(1634)),c=n(a(1635)),d=n(a(1636)),f=n(a(1637)),h={initial:0,factor:3,dataset:[r.default.deepClone(p.default),r.default.deepClone(c.default)],graphConfig:r.default.deepClone((0,u.default)("#TimelinePanningExample"))};t.default=function(){var e=i.default.useReducer((function(e,t){var a,n=r.default.deepClone(e.graphConfig),o=[r.default.deepClone(d.default),r.default.deepClone(f.default)];switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return n.axis.x.lowerLimit=new Date(2016,0,1,a).toISOString(),n.axis.x.upperLimit=new Date(2016,0,2,a).toISOString(),{initial:a,factor:e.factor,dataset:{panData:o},graphConfig:r.default.deepClone(n)}}),h),t=(0,o.default)(e,2),a=t[0],n=t[1];return i.default.createElement(i.default.Fragment,null,i.default.createElement(l.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),i.default.createElement(l.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),i.default.createElement(s.default,{graphID:"TimelinePanningExample",graphConfig:a.graphConfig,dataset:a.dataset}))}}}]);