(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1317:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var i=l?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(n,p,i):n[p]=e[p]}n.default=e,a&&a.set(e,n);return n}(a(1320)),i=n(a(1319)),r=n(a(1316));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),p=function(){var e=r[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],p=t.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(o)}))},i=0,r=Object.values(a);i<r.length;i++)p()},y=function(e,t){var a=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){p.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),p.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),p.select("#tooltip").style("left","".concat(t.pageX+5,"px")).style("top","".concat(t.pageY+5,"px"))},g=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n,o,l){g();var p=y(e,l).append("g"),i=n.x,r=n.y,c=n.label,v=n.high,b=n.mid,x=n.low;i?(f(p,"X axis","".concat(u(i)?s(i):i)),f(p,"".concat(c.display),r)):(f(p,"X axis","".concat(v?d(v.x):b?d(b.x):x?d(x.x):"N/A")),v&&f(p,"High",d(v.y)),b&&f(p,"Mid",d(b.y)),x&&f(p,"Low",d(x.y)))};t.loadBubblePopup=function(e,t,a,n,o,l){g();var p=y(e,l).append("g"),i=n.x,r=n.y,c=n.label,d=n.weight;i&&(f(p,"X axis","".concat(u(i)?s(i):i)),f(p,"year",r)),d&&f(p,"".concat(c.display),"".concat(d))};t.loadBarPopup=function(e,t,a,n,o,l){g();var p=y(e,l).append("g");n.forEach((function(e){return f(p,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a,n,o,l){g();var p=y(e,l).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),c=t.shape,s=t.label,d=t.color;r.default.notEmpty(c)&&p.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",c.options.scale,")")).attr("d",c.path.d).attr("fill",c.path.fill||i.default.DEFAULT_COLOR).attr("id",c.path.id),s.display&&p.append("text").classed("popup-text",!0).attr("style","color: ".concat(d,";")).text("".concat(s.display)),s.secondaryDisplay&&p.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(s.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e,t,a){g(),y(void 0,a).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e,t,a){g();var n=function(e,t){var a=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){p.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),p.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),p.select("#tooltip").style("left","".concat(t.pageX-250,"px")).style("top","".concat(t.pageY+5,"px"))}(void 0,a);n.append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a,n,o){g();var l=y(e,o).append("g"),p=a.tasks,i=a.activities,r=a.events,c=a.actions;if(p&&p.length>0){var s=[];s.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",s)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",d)}if(r&&r.length>0){var u=[];r.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",u)}if(c&&c.length>0){var f=[];c.forEach((function(e){f.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",f)}};t.loadTaskPopup=function(e,t,a,n,o,l){g();var p=y(e,l).append("g"),i=n.label,r=n.display,c=n.y,d=n.startDate,u=n.endDate,v=n.percentage;i&&f(p,"Task Name",r),f(p,"Track",c),f(p,"Start Date",s(d)),f(p,"End Date",s(u)),v&&f(p,"Percentage",v)};t.loadDatelinePopup=function(e,t,a,n){g();var o=y(e,n).append("g"),l=t.label,p=t.value;l&&f(o,"Milestone",l.display),f(o,"Date",s(p))};t.loadTimelinePopup=function(e,t,a,n,o,l){g();var p=y(e,l).append("g"),i=n.x,r=(n.y,n.label),c=n.content;f(p,"X axis","".concat(u(i)?s(i):i)),f(p,"".concat(r.display),c)};t.loadPiePopup=function(e,t,a,n,o,l){g();var p=y(e,l).append("g"),i=n.label,r=n.value;f(p,i.display,r)}},1321:function(e,t,a){"use strict";a.r(t)},1322:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(4));a(1323);var p={id:l.default.string.isRequired},i=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=p;var r=i;t.default=r},1336:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1315)),l=a(1317),p={key:"uid_1",label:{display:"Data Label 1"},shape:o.default.helpers.SHAPES.DARK.CIRCLE,onClick:l.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};t.default=p},1520:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1315)),l=function(e){return{bindTo:e,axis:{x:{type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,9,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString(),allowCalibration:!0},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=l},1908:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(1315)),p=n(a(1316));a(1318),a(1321);var i=n(a(1322)),r=n(a(1520)),c=n(a(1336)),s=p.default.deepClone((0,r.default)("#allowCalibrationXTimeseries")),d=p.default.deepClone(c.default),u=function(){return o.default.useEffect((function(){l.default.api.graph(s).loadContent(l.default.api.line(d))}),[]),o.default.createElement(i.default,{id:"allowCalibrationXTimeseries"})};t.default=u}}]);