(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1274:function(e,t,a){"use strict";var n=a(2),l=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=o?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(n,i,p):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(1282)),p=n(a(1279)),r=n(a(1275));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?s(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var l=n.append("g").classed("section",!0),i=function(){var e=r[p],t=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),n=a[0],l=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(l)}))},p=0,r=Object.values(a);p<r.length;p++)i()},y=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,i=n.y,p=n.label,r=n.high,c=n.mid,v=n.low;o?(f(l,"X axis","".concat(d(o)?s(o):o)),f(l,"".concat(p.display),i)):(f(l,"X axis","".concat(r?u(r.x):c?u(c.x):v?u(v.x):"N/A")),r&&f(l,"High",u(r.y)),c&&f(l,"Mid",u(c.y)),v&&f(l,"Low",u(v.y)))};t.loadBubblePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,i=n.y,p=n.label,r=n.weight;o&&(f(l,"X axis","".concat(d(o)?s(o):o)),f(l,"year",i)),r&&f(l,"".concat(p.display),"".concat(r))};t.loadBarPopup=function(e,t,a,n){g();var l=y(e).append("g");n.forEach((function(e){return f(l,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){g();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),l=t.shape,o=t.label,i=t.color;r.default.notEmpty(l)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",l.options.scale,")")).attr("d",l.path.d).attr("fill",l.path.fill||p.default.DEFAULT_COLOR).attr("id",l.path.id),o.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){g();var n=y(e).append("g"),l=a.tasks,o=a.activities,i=a.events,p=a.actions;if(l&&l.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",r)}if(o&&o.length>0){var c=[];o.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",c)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",s)}if(p&&p.length>0){var u=[];p.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",u)}};t.loadTaskPopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.label,i=n.display,p=n.y,r=n.startDate,c=n.endDate,u=n.percentage;o&&f(l,"Task Name",i),f(l,"Track",p),f(l,"Start Date",s(r)),f(l,"End Date",s(c)),u&&f(l,"Percentage",u)};t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),n=t.label,l=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",s(l))};t.loadTimelinePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,i=(n.y,n.label),p=n.content;f(l,"X axis","".concat(d(o)?s(o):o)),f(l,"".concat(i.display),p)};t.loadPiePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.label,i=n.value;f(l,o.display,i)}},1276:function(e,t,a){"use strict";a.r(t)},1277:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(4));a(1278);var i={id:o.default.string.isRequired},p=function(e){return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),l.default.createElement("div",{id:e.id,className:"example-graph-container"}))};p.propTypes=i;var r=p;t.default=r},1281:function(e,t,a){"use strict";a.r(t)},1283:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,a=e.initialX,n=e.xModifier,l=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*l,x:a+t*n}}))};t.createGraphValuesWithCos=function(e){var t=e.length,a=e.initialX,n=e.xModifier,l=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*l,x:a+t*n}}))}},1308:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=n},1324:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1273)),o=a(1274),i=a(1283),p={key:"uid_6",label:{display:"Dataset 6"},color:l.default.helpers.COLORS.GREY,onClick:o.loadPopup,shape:l.default.helpers.SHAPES.DARK.TRIANGLE_DOWN,values:(0,i.createGraphValuesWithCos)({length:18,initialX:85,xModifier:10,yModifier:7*Math.PI})};t.default=p},1890:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(1273)),i=n(a(1275));a(1276),a(1281);var p=n(a(1277)),r=n(a(1308)),c=n(a(1324)),s=i.default.deepClone((0,r.default)("#allowYCalibrationExample")),u=i.default.deepClone(c.default),d=function(){return l.default.useEffect((function(){o.default.api.graph(s).loadContent(o.default.api.line(u))}),[]),l.default.createElement(p.default,{id:"allowYCalibrationExample"})};t.default=d}}]);