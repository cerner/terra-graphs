(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1322:function(e,t,a){"use strict";var l=a(2),n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var i=l(a(43)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(l,o,r):l[o]=e[o]}return l.default=e,a&&a.set(e,l),l}(a(1330)),r=l(a(1324)),p=l(a(1321));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},s=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var n=l.append("g").classed("section",!0),o=function(){var e=p[r],t=n.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,i.default)(e,2),l=a[0],n=a[1],o=t.append("g").classed("popup-item",!0);o.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),o.append("g").classed("popup-text",!0).text(n)}))},r=0,p=Object.values(a);r<p.length;r++)o()},y=function(e){var t=document.querySelector("#tooltip");return o.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){o.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),o.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),o.select("#tooltip").style("left","".concat(o.event.pageX+5,"px")).style("top","".concat(o.event.pageY+5,"px"))},h=function(){o.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),o.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l){h();var n=y(e).append("g"),i=l.x,o=l.y,r=l.label,p=l.high,u=l.mid,v=l.low;i?(f(n,"X axis","".concat(d(i)?c(i):i)),f(n,"".concat(r.display),o)):(f(n,"X axis","".concat(p?s(p.x):u?s(u.x):v?s(v.x):"N/A")),p&&f(n,"High",s(p.y)),u&&f(n,"Mid",s(u.y)),v&&f(n,"Low",s(v.y)))},t.loadBubblePopup=function(e,t,a,l){h();var n=y(e).append("g"),i=l.x,o=l.y,r=l.label,p=l.weight;i&&(f(n,"X axis","".concat(d(i)?c(i):i)),f(n,"year",o)),p&&f(n,"".concat(r.display),"".concat(p))},t.loadBarPopup=function(e,t,a,l){h();var n=y(e).append("g");l.forEach((function(e){return f(n,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){h();var l=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),n=t.shape,i=t.label,o=t.color;p.default.notEmpty(n)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",n.options.scale,")")).attr("d",n.path.d).attr("fill",n.path.fill||r.default.DEFAULT_COLOR).attr("id",n.path.id),i.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(o,";")).text("".concat(i.display)),i.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(i.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){h(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;h(),(a=document.querySelector("#tooltip"),o.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){o.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),o.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),o.select("#tooltip").style("left","".concat(o.event.pageX-250,"px")).style("top","".concat(o.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){h();var l=y(e).append("g"),n=a.tasks,i=a.activities,o=a.events,r=a.actions;if(n&&n.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",p)}if(i&&i.length>0){var u=[];i.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",u)}if(o&&o.length>0){var c=[];o.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",c)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",s)}},t.loadTaskPopup=function(e,t,a,l){h();var n=y(e).append("g"),i=l.label,o=l.display,r=l.y,p=l.startDate,u=l.endDate,s=l.percentage;i&&f(n,"Task Name",o),f(n,"Track",r),f(n,"Start Date",c(p)),f(n,"End Date",c(u)),s&&f(n,"Percentage",s)},t.loadDatelinePopup=function(e,t){h();var a=y(e).append("g"),l=t.label,n=t.value;l&&f(a,"Milestone",l.display),f(a,"Date",c(n))},t.loadTimelinePopup=function(e,t,a,l){h();var n=y(e).append("g"),i=l.x,o=(l.y,l.label),r=l.content;f(n,"X axis","".concat(d(i)?c(i):i)),f(n,"".concat(o.display),r)},t.loadPiePopup=function(e,t,a,l){h();var n=y(e).append("g"),i=l.label,o=l.value;f(n,i.display,o)}},1325:function(e,t,a){"use strict";a.r(t)},1332:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,a=e.initialX,l=e.xModifier,n=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*n,x:a+t*l}}))},t.createGraphValuesWithCos=function(e){var t=e.length,a=e.initialX,l=e.xModifier,n=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*n,x:a+t*l}}))}},1335:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(43)),i=l(a(0)),o=l(a(4)),r=l(a(1320));a(1323),a(1325);var p=l(a(1321)),u={graphID:o.default.string.isRequired,graphConfig:o.default.object.isRequired,dataset:o.default.arrayOf(o.default.object),timeout:o.default.arrayOf(o.default.number)},c=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,o=e.timeout,u=i.default.useState(),c=(0,n.default)(u,2),s=c[0],d=c[1],f=i.default.useRef(),v=i.default.useRef();return i.default.useEffect((function(){s||d(r.default.api.graph(t))}),[s,t]),i.default.useEffect((function(){if(s&&!f.current){var e=[];return a&&(o?a.forEach((function(t,a){var l=setTimeout((function(){return s.graphContainer?s.loadContent(r.default.api.line(t)):""}),o[a]);e.push(l)})):a.forEach((function(e){s.loadContent(r.default.api.line(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,o]),i.default.useEffect((function(){if(s)if(v.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else v.current=!0}),[s,a,t]),i.default.createElement("div",{id:"".concat(l,"-canvasContainer")},i.default.createElement("div",{id:l}))};c.propTypes=u;t.default=c},1340:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1439:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),i=a(1322),o=a(1332),r={key:"uid_1",label:{display:"Data Label 1"},color:n.default.helpers.COLORS.BLACK,onClick:i.loadPopup,values:(0,o.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};r.values[1].isCritical=!0,r.values[11].isCritical=!0;t.default=r},1586:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),i=a(1322),o=a(1332),r={key:"uid_3",label:{display:"Data Label 3"},shape:n.default.helpers.SHAPES.DARK.X,color:n.default.helpers.COLORS.GREEN,onClick:i.loadPopup,values:(0,o.createGraphValuesWithSin)({length:8,initialX:85,xModifier:25,yModifier:4*Math.PI})};r.values[2].isCritical=!0,r.values[6].isCritical=!0;t.default=r},1587:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),i=a(1322),o={key:"uid_4",label:{display:"Data Label 4"},shape:n.default.helpers.SHAPES.DARK.CROSS,color:n.default.helpers.COLORS.LIGHT_PURPLE,onClick:i.loadPopup,values:new Array(15).fill("").map((function(e,t){return{y:Math.sin(t)*Math.PI*4,x:85+10*t,region:{start:Math.sin(t)*Math.PI*4-Math.PI,end:Math.sin(t)*Math.PI*4+Math.PI}}}))};o.values[4].isCritical=!0,o.values[8].isCritical=!0;t.default=o},1964:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),i=l(a(1321)),o=l(a(1335));a(1327);var r=l(a(1340)),p=l(a(1439)),u=l(a(1586)),c=l(a(1587)),s=i.default.deepClone((0,r.default)("#criticalityMultiLine")),d=[i.default.deepClone(p.default),i.default.deepClone(u.default),i.default.deepClone(c.default)];t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),n.default.createElement(o.default,{graphID:"criticalityMultiLine",graphConfig:s,dataset:d}))}}}]);