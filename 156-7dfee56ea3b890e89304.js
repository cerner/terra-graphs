(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1318:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(1326)),i=n(a(1320)),p=n(a(1317));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?c(e)?s(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),r=function(){var e=p[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],r=t.append("g").classed("popup-item",!0);r.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),r.append("g").classed("popup-text",!0).text(o)}))},i=0,p=Object.values(a);i<p.length;i++)r()},g=function(e){var t=document.querySelector("#tooltip");return r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){r.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),r.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),r.select("#tooltip").style("left","".concat(r.event.pageX+5,"px")).style("top","".concat(r.event.pageY+5,"px"))},y=function(){r.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),r.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){y();var o=g(e).append("g"),l=n.x,r=n.y,i=n.label,p=n.high,u=n.mid,v=n.low;l?(f(o,"X axis","".concat(c(l)?s(l):l)),f(o,"".concat(i.display),r)):(f(o,"X axis","".concat(p?d(p.x):u?d(u.x):v?d(v.x):"N/A")),p&&f(o,"High",d(p.y)),u&&f(o,"Mid",d(u.y)),v&&f(o,"Low",d(v.y)))},t.loadBubblePopup=function(e,t,a,n){y();var o=g(e).append("g"),l=n.x,r=n.y,i=n.label,p=n.weight;l&&(f(o,"X axis","".concat(c(l)?s(l):l)),f(o,"year",r)),p&&f(o,"".concat(i.display),"".concat(p))},t.loadBarPopup=function(e,t,a,n){y();var o=g(e).append("g");n.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){y();var n=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,r=t.color;p.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(r,";")).text("".concat(l.display)),l.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){y(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;y(),(a=document.querySelector("#tooltip"),r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){r.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),r.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),r.select("#tooltip").style("left","".concat(r.event.pageX-250,"px")).style("top","".concat(r.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){y();var n=g(e).append("g"),o=a.tasks,l=a.activities,r=a.events,i=a.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",p)}if(l&&l.length>0){var u=[];l.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",u)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",s)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",d)}},t.loadTaskPopup=function(e,t,a,n){y();var o=g(e).append("g"),l=n.label,r=n.display,i=n.y,p=n.startDate,u=n.endDate,d=n.percentage;l&&f(o,"Task Name",r),f(o,"Track",i),f(o,"Start Date",s(p)),f(o,"End Date",s(u)),d&&f(o,"Percentage",d)},t.loadDatelinePopup=function(e,t){y();var a=g(e).append("g"),n=t.label,o=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",s(o))},t.loadTimelinePopup=function(e,t,a,n){y();var o=g(e).append("g"),l=n.x,r=(n.y,n.label),i=n.content;f(o,"X axis","".concat(c(l)?s(l):l)),f(o,"".concat(r.display),i)},t.loadPiePopup=function(e,t,a,n){y();var o=g(e).append("g"),l=n.label,r=n.value;f(o,l.display,r)}},1321:function(e,t,a){"use strict";a.r(t)},1331:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),r=n(a(4)),i=n(a(1316));a(1319),a(1321);var p=n(a(1317)),u={graphID:r.default.string.isRequired,graphConfig:r.default.object.isRequired,dataset:r.default.arrayOf(r.default.object),timeout:r.default.arrayOf(r.default.number)},s=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,r=e.timeout,u=l.default.useState(),s=(0,o.default)(u,2),d=s[0],c=s[1],f=l.default.useRef(),v=l.default.useRef();return l.default.useEffect((function(){d||c(i.default.api.graph(t))}),[d,t]),l.default.useEffect((function(){if(d&&!f.current){var e=[];return a&&(r?a.forEach((function(t,a){var n=setTimeout((function(){return d.graphContainer?d.loadContent(i.default.api.line(t)):""}),r[a]);e.push(n)})):a.forEach((function(e){d.loadContent(i.default.api.line(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[d,a,r]),l.default.useEffect((function(){if(d)if(v.current){d.config.axis.x.upperLimit=t.axis.x.upperLimit,d.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};d.reflowMultipleDatasets(e)}else v.current=!0}),[d,a,t]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};s.propTypes=u;t.default=s},1364:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1316));t.default=function(e){return{bindTo:e,axis:{x:{type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1596:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1316)),l=a(1318),r={key:"uid_7",label:{display:"Data Label 7"},shape:o.default.helpers.SHAPES.DARK.CIRCLE,onClick:l.loadPopup,yAxis:"y",values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5,isCritical:!1,region:{start:3,end:8,color:o.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,2,15).toISOString(),y:11,region:{start:4,end:14,color:o.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,3,15).toISOString(),y:12,region:{start:5,end:15,color:o.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,4,15).toISOString(),y:16,region:{start:10,end:20,color:o.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,5,15).toISOString(),y:17,region:{start:10,end:20,color:o.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11,region:{start:8,end:15}},{x:new Date(2016,0,1,8,15).toISOString(),y:12,region:{start:8,end:15}},{x:new Date(2016,0,1,9,45).toISOString(),y:16,region:{start:10,end:20}},{x:new Date(2016,0,1,12,15).toISOString(),y:17,region:{start:10,end:20}},{x:new Date(2016,0,1,13,15).toISOString(),y:28,region:{start:10,end:20},isCritical:!0},{x:new Date(2016,0,1,14,15).toISOString(),y:12,region:{start:8,end:15}},{x:new Date(2016,0,1,19,45).toISOString(),y:13,region:{start:9,end:16}},{x:new Date(2016,0,1,21,15).toISOString(),y:14,region:{start:9,end:16,color:o.default.helpers.COLORS.GREY}}]};t.default=r},1975:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(1317)),r=n(a(1331));a(1323);var i=n(a(1364)),p=n(a(1596)),u=l.default.deepClone((0,i.default)("#valueRegion")),s=[l.default.deepClone(p.default)];t.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement(r.default,{graphID:"valueRegion",graphConfig:u,dataset:s}))}}}]);