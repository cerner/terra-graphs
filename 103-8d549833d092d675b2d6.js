(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1318:function(e,t,a){"use strict";var n=a(2),l=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=n(a(43)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=r(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var i=o?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(n,p,i):n[p]=e[p]}n.default=e,a&&a.set(e,n);return n}(a(1326)),i=n(a(1320)),d=n(a(1317));function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(r=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},u=function(e){return e?s(e)?c(e):e:null},s=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var l=n.append("g").classed("section",!0),p=function(){var e=d[i],t=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),n=a[0],l=a[1],p=t.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(l)}))},i=0,d=Object.values(a);i<d.length;i++)p()},y=function(e){var t=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){p.select(t).attr("style","display:none;").selectAll("g").remove(),d.default.isFunction(e)&&e(),p.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),p.select("#tooltip").style("left","".concat(p.event.pageX+5,"px")).style("top","".concat(p.event.pageY+5,"px"))},g=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,p=n.y,i=n.label,d=n.high,r=n.mid,v=n.low;o?(f(l,"X axis","".concat(s(o)?c(o):o)),f(l,"".concat(i.display),p)):(f(l,"X axis","".concat(d?u(d.x):r?u(r.x):v?u(v.x):"N/A")),d&&f(l,"High",u(d.y)),r&&f(l,"Mid",u(r.y)),v&&f(l,"Low",u(v.y)))},t.loadBubblePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,p=n.y,i=n.label,d=n.weight;o&&(f(l,"X axis","".concat(s(o)?c(o):o)),f(l,"year",p)),d&&f(l,"".concat(i.display),"".concat(d))},t.loadBarPopup=function(e,t,a,n){g();var l=y(e).append("g");n.forEach((function(e){return f(l,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){g();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),l=t.shape,o=t.label,p=t.color;d.default.notEmpty(l)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",l.options.scale,")")).attr("d",l.path.d).attr("fill",l.path.fill||i.default.DEFAULT_COLOR).attr("id",l.path.id),o.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(p,";")).text("".concat(o.display)),o.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){p.select(a).attr("style","display:none;").selectAll("g").remove(),d.default.isFunction(t)&&t(),p.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),p.select("#tooltip").style("left","".concat(p.event.pageX-250,"px")).style("top","".concat(p.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){g();var n=y(e).append("g"),l=a.tasks,o=a.activities,p=a.events,i=a.actions;if(l&&l.length>0){var d=[];d.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",d)}if(o&&o.length>0){var r=[];o.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",r)}if(p&&p.length>0){var c=[];p.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",c)}if(i&&i.length>0){var u=[];i.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",u)}},t.loadTaskPopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.label,p=n.display,i=n.y,d=n.startDate,r=n.endDate,u=n.percentage;o&&f(l,"Task Name",p),f(l,"Track",i),f(l,"Start Date",c(d)),f(l,"End Date",c(r)),u&&f(l,"Percentage",u)},t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),n=t.label,l=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",c(l))},t.loadTimelinePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,p=(n.y,n.label),i=n.content;f(l,"X axis","".concat(s(o)?c(o):o)),f(l,"".concat(p.display),i)},t.loadPiePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.label,p=n.value;f(l,o.display,p)}},1396:function(e,t,a){"use strict";a.r(t)},1397:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1316)),o=a(1318),p={key:"simple_pie_data_1",label:{display:"Dataset 1",format:function(e,t){return"".concat(e,": ").concat(t.toFixed(),"%")}},color:l.default.helpers.COLORS.BLUE,onClick:o.loadPiePopup,value:60};t.default=p},1398:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1316)),o=a(1318),p={key:"simple_pie_data_2",label:{display:"Dataset 2"},color:l.default.helpers.COLORS.GREEN,onClick:o.loadPiePopup,value:10};t.default=p},1399:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1316)),o=a(1318),p={key:"simple_pie_data_3",label:{display:"Dataset 3"},color:l.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadPiePopup,value:30};t.default=p},1461:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(4)),p=n(a(1316));a(1319),a(1396);var i={graphID:o.default.string.isRequired,graphConfig:o.default.object.isRequired,dataset:o.default.arrayOf(o.default.object).isRequired},d=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID;return l.default.useEffect((function(){var e=p.default.api.pie(t);a.forEach((function(t){e.loadContent(t)}))}),[t,a]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};d.propTypes=i;t.default=d},1622:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:"#legendContainer",dimension:{height:300},showLegend:!0}}},1996:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(1317)),p=n(a(1461));a(1323);var i=n(a(1622)),d=n(a(1397)),r=n(a(1398)),c=n(a(1399)),u=o.default.deepClone((0,i.default)("#graphContainer")),s=[o.default.deepClone(d.default),o.default.deepClone(r.default),o.default.deepClone(c.default)];t.default=function(){return l.default.createElement("div",{id:"customLegendPlacement"},l.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),l.default.createElement("div",{className:"bindto-container"},l.default.createElement("div",{id:"legendContainer",className:"legend-bindto-container"}),l.default.createElement("div",{id:"graphContainer",className:"legend-bindto-graph-container"})),l.default.createElement(p.default,{graphID:"graphContainer",graphConfig:u,dataset:s}))}}}]);