(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1323:function(e,t,a){"use strict";var l=a(2),n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=l(a(43)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var r=o?Object.getOwnPropertyDescriptor(e,p):null;r&&(r.get||r.set)?Object.defineProperty(l,p,r):l[p]=e[p]}l.default=e,a&&a.set(e,l);return l}(a(1331)),r=l(a(1325)),i=l(a(1322));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?s(e)?d(e):e:null},s=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var n=l.append("g").classed("section",!0),p=function(){var e=i[r],t=n.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),l=a[0],n=a[1],p=t.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(n)}))},r=0,i=Object.values(a);r<i.length;r++)p()},y=function(e){var t=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){p.select(t).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(e)&&e(),p.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),p.select("#tooltip").style("left","".concat(p.event.pageX+5,"px")).style("top","".concat(p.event.pageY+5,"px"))},g=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.x,p=l.y,r=l.label,i=l.high,u=l.mid,v=l.low;o?(f(n,"X axis","".concat(s(o)?d(o):o)),f(n,"".concat(r.display),p)):(f(n,"X axis","".concat(i?c(i.x):u?c(u.x):v?c(v.x):"N/A")),i&&f(n,"High",c(i.y)),u&&f(n,"Mid",c(u.y)),v&&f(n,"Low",c(v.y)))},t.loadBubblePopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.x,p=l.y,r=l.label,i=l.weight;o&&(f(n,"X axis","".concat(s(o)?d(o):o)),f(n,"year",p)),i&&f(n,"".concat(r.display),"".concat(i))},t.loadBarPopup=function(e,t,a,l){g();var n=y(e).append("g");l.forEach((function(e){return f(n,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){g();var l=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),n=t.shape,o=t.label,p=t.color;i.default.notEmpty(n)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",n.options.scale,")")).attr("d",n.path.d).attr("fill",n.path.fill||r.default.DEFAULT_COLOR).attr("id",n.path.id),o.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(p,";")).text("".concat(o.display)),o.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){p.select(a).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(t)&&t(),p.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),p.select("#tooltip").style("left","".concat(p.event.pageX-250,"px")).style("top","".concat(p.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){g();var l=y(e).append("g"),n=a.tasks,o=a.activities,p=a.events,r=a.actions;if(n&&n.length>0){var i=[];i.forEach((function(e){i.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",i)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",u)}if(p&&p.length>0){var d=[];p.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",d)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",c)}},t.loadTaskPopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.label,p=l.display,r=l.y,i=l.startDate,u=l.endDate,c=l.percentage;o&&f(n,"Task Name",p),f(n,"Track",r),f(n,"Start Date",d(i)),f(n,"End Date",d(u)),c&&f(n,"Percentage",c)},t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),l=t.label,n=t.value;l&&f(a,"Milestone",l.display),f(a,"Date",d(n))},t.loadTimelinePopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.x,p=(l.y,l.label),r=l.content;f(n,"X axis","".concat(s(o)?d(o):o)),f(n,"".concat(p.display),r)},t.loadPiePopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.label,p=l.value;f(n,o.display,p)}},1338:function(e,t,a){"use strict";a.r(t)},1346:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(43)),o=l(a(0)),p=l(a(4)),r=l(a(1321));a(1324),a(1338);var i=l(a(1322)),u={graphID:p.default.string.isRequired,graphConfig:p.default.object.isRequired,dataset:p.default.arrayOf(p.default.object),timeout:p.default.arrayOf(p.default.number)},d=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,p=e.timeout,u=o.default.useState(),d=(0,n.default)(u,2),c=d[0],s=d[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){c||s(r.default.api.graph(t))}),[c,t]),o.default.useEffect((function(){if(c&&!f.current){var e=[];return a&&(p?a.forEach((function(t,a){var l=setTimeout((function(){return c.graphContainer?c.loadContent(r.default.api.bar(t)):""}),p[a]);e.push(l)})):a.forEach((function(e){c.loadContent(r.default.api.bar(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[c,a,p]),o.default.useEffect((function(){if(c)if(v.current){c.config.axis.x.upperLimit=t.axis.x.upperLimit,c.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:i.default.deepClone(a.panData),eventline:i.default.deepClone(a.eventline)};c.reflowMultipleDatasets(e)}else v.current=!0}),[c,a,t]),o.default.createElement("div",{id:"".concat(l,"-canvasContainer")},o.default.createElement("div",{id:l}))};d.propTypes=u;t.default=d},1352:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:35},y2:{show:!1,label:"Bar Set B",lowerLimit:0,upperLimit:30}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}}},1409:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1321)),o=a(1323),p={key:"dataset_bar_1",label:{display:"Dataset 1"},color:n.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:6,y:10}]};t.default=p},1494:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1321)),o=a(1323),p={key:"dataset_bar_2",label:{display:"Dataset 1"},color:n.default.helpers.COLORS.GREEN,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}]};t.default=p},1495:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1321)),o=a(1323),p={key:"grouped_bar_3",label:{display:"Dataset 3"},color:n.default.helpers.COLORS.BLUE,onClick:o.loadBarPopup,values:[{x:1,y:15},{x:2,y:10},{x:3,y:13},{x:4,y:8}]};t.default=p},1884:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(1322)),p=l(a(1346));a(1328);var r=l(a(1352)),i=l(a(1409)),u=l(a(1494)),d=l(a(1495)),c=o.default.deepClone((0,r.default)("#groupedBarGraph")),s=[o.default.deepClone(i.default),o.default.deepClone(u.default),o.default.deepClone(d.default)];t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),n.default.createElement(p.default,{graphID:"groupedBarGraph",graphConfig:c,dataset:s}))}}}]);