(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1289:function(e,t,a){"use strict";var n=a(2),l=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(1297)),r=n(a(1291)),p=n(a(1288));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?c(e)?s(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var l=n.append("g").classed("section",!0),i=function(){var e=p[r],t=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),n=a[0],l=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(l)}))},r=0,p=Object.values(a);r<p.length;r++)i()},h=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},y=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){y();var l=h(e).append("g"),o=n.x,i=n.y,r=n.label,p=n.high,u=n.mid,v=n.low;o?(f(l,"X axis","".concat(c(o)?s(o):o)),f(l,"".concat(r.display),i)):(f(l,"X axis","".concat(p?d(p.x):u?d(u.x):v?d(v.x):"N/A")),p&&f(l,"High",d(p.y)),u&&f(l,"Mid",d(u.y)),v&&f(l,"Low",d(v.y)))};t.loadBubblePopup=function(e,t,a,n){y();var l=h(e).append("g"),o=n.x,i=n.y,r=n.label,p=n.weight;o&&(f(l,"X axis","".concat(c(o)?s(o):o)),f(l,"year",i)),p&&f(l,"".concat(r.display),"".concat(p))};t.loadBarPopup=function(e,t,a,n){y();var l=h(e).append("g");n.forEach((function(e){return f(l,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){y();var n=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),l=t.shape,o=t.label,i=t.color;p.default.notEmpty(l)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",l.options.scale,")")).attr("d",l.path.d).attr("fill",l.path.fill||r.default.DEFAULT_COLOR).attr("id",l.path.id),o.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){y(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;y(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){y();var n=h(e).append("g"),l=a.tasks,o=a.activities,i=a.events,r=a.actions;if(l&&l.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",p)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",u)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",s)}if(r&&r.length>0){var d=[];r.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",d)}};t.loadTaskPopup=function(e,t,a,n){y();var l=h(e).append("g"),o=n.label,i=n.display,r=n.y,p=n.startDate,u=n.endDate,d=n.percentage;o&&f(l,"Task Name",i),f(l,"Track",r),f(l,"Start Date",s(p)),f(l,"End Date",s(u)),d&&f(l,"Percentage",d)};t.loadDatelinePopup=function(e,t){y();var a=h(e).append("g"),n=t.label,l=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",s(l))};t.loadTimelinePopup=function(e,t,a,n){y();var l=h(e).append("g"),o=n.x,i=(n.y,n.label),r=n.content;f(l,"X axis","".concat(c(o)?s(o):o)),f(l,"".concat(i.display),r)};t.loadPiePopup=function(e,t,a,n){y();var l=h(e).append("g"),o=n.label,i=n.value;f(l,o.display,i)}},1293:function(e,t,a){"use strict";a.r(t)},1299:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,a=e.initialX,n=e.xModifier,l=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*l,x:a+t*n}}))};t.createGraphValuesWithCos=function(e){var t=e.length,a=e.initialX,n=e.xModifier,l=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*l,x:a+t*n}}))}},1302:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(43)),o=n(a(0)),i=n(a(4)),r=n(a(1287));a(1290),a(1293);var p=n(a(1288)),u={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},s=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,u=o.default.useState(),s=(0,l.default)(u,2),d=s[0],c=s[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){d||c(r.default.api.graph(t))}),[d,t]),o.default.useEffect((function(){if(d&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return d.graphContainer?d.loadContent(r.default.api.line(t)):""}),i[a]);e.push(n)})):a.forEach((function(e){d.loadContent(r.default.api.line(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[d,a,i]),o.default.useEffect((function(){if(d)if(v.current){d.config.axis.x.upperLimit=t.axis.x.upperLimit,d.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};d.reflowMultipleDatasets(e)}else v.current=!0}),[d,a,t]),o.default.createElement("div",{id:"".concat(n,"-canvasContainer")},o.default.createElement("div",{id:n}))};s.propTypes=u;var d=s;t.default=d},1307:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=n},1328:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1287)),o=a(1289),i=a(1299),r={key:"uid_1",label:{display:"Data Label 1"},color:l.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:(0,i.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};t.default=r},1388:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1287)),o=a(1289),i={key:"uid_4",label:{display:"Data Label 4"},shape:l.default.helpers.SHAPES.DARK.CROSS,color:l.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadPopup,values:new Array(15).fill("").map((function(e,t){return{y:Math.sin(t)*Math.PI*4,x:85+10*t,region:{start:Math.sin(t)*Math.PI*4-Math.PI,end:Math.sin(t)*Math.PI*4+Math.PI}}}))};t.default=i},1544:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1287)),o=a(1289),i=a(1299),r={key:"uid_5",label:{display:"Data Label 5"},shape:l.default.helpers.SHAPES.DARK.SQUARE,color:l.default.helpers.COLORS.ORANGE,onClick:o.loadPopup,values:(0,i.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI}),legendOptions:{showLine:!0,showShape:!1},showShapes:!1};t.default=r},1923:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(1288)),i=n(a(1302));a(1294);var r=n(a(1307)),p=n(a(1328)),u=n(a(1388)),s=n(a(1544)),d=o.default.deepClone((0,r.default)("#showOrHideShapesPerDataset")),c=[o.default.deepClone(p.default),o.default.deepClone(u.default),o.default.deepClone(s.default)];t.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),l.default.createElement(i.default,{graphID:"showOrHideShapesPerDataset",graphConfig:d,dataset:c}))}}}]);