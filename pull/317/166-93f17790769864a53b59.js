(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1317:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=l?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(n,i,p):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(1320)),p=n(a(1319)),r=n(a(1316));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},s=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),i=function(){var e=r[p],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(o)}))},p=0,r=Object.values(a);p<r.length;p++)i()},y=function(e,t){var a=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),i.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(t.pageX+5,"px")).style("top","".concat(t.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n,o,l){g();var i=y(e,l).append("g"),p=n.x,r=n.y,u=n.label,v=n.high,m=n.mid,x=n.low;p?(f(i,"X axis","".concat(d(p)?c(p):p)),f(i,"".concat(u.display),r)):(f(i,"X axis","".concat(v?s(v.x):m?s(m.x):x?s(x.x):"N/A")),v&&f(i,"High",s(v.y)),m&&f(i,"Mid",s(m.y)),x&&f(i,"Low",s(x.y)))};t.loadBubblePopup=function(e,t,a,n,o,l){g();var i=y(e,l).append("g"),p=n.x,r=n.y,u=n.label,s=n.weight;p&&(f(i,"X axis","".concat(d(p)?c(p):p)),f(i,"year",r)),s&&f(i,"".concat(u.display),"".concat(s))};t.loadBarPopup=function(e,t,a,n,o,l){g();var i=y(e,l).append("g");n.forEach((function(e){return f(i,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a,n,o,l){g();var i=y(e,l).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),u=t.shape,c=t.label,s=t.color;r.default.notEmpty(u)&&i.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",u.options.scale,")")).attr("d",u.path.d).attr("fill",u.path.fill||p.default.DEFAULT_COLOR).attr("id",u.path.id),c.display&&i.append("text").classed("popup-text",!0).attr("style","color: ".concat(s,";")).text("".concat(c.display)),c.secondaryDisplay&&i.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(c.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e,t,a){g(),y(void 0,a).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e,t,a){g();var n=function(e,t){var a=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),i.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(t.pageX-250,"px")).style("top","".concat(t.pageY+5,"px"))}(void 0,a);n.append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a,n,o){g();var l=y(e,o).append("g"),i=a.tasks,p=a.activities,r=a.events,u=a.actions;if(i&&i.length>0){var c=[];c.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",c)}if(p&&p.length>0){var s=[];p.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",s)}if(r&&r.length>0){var d=[];r.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",d)}if(u&&u.length>0){var f=[];u.forEach((function(e){f.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",f)}};t.loadTaskPopup=function(e,t,a,n,o,l){g();var i=y(e,l).append("g"),p=n.label,r=n.display,u=n.y,s=n.startDate,d=n.endDate,v=n.percentage;p&&f(i,"Task Name",r),f(i,"Track",u),f(i,"Start Date",c(s)),f(i,"End Date",c(d)),v&&f(i,"Percentage",v)};t.loadDatelinePopup=function(e,t,a,n){g();var o=y(e,n).append("g"),l=t.label,i=t.value;l&&f(o,"Milestone",l.display),f(o,"Date",c(i))};t.loadTimelinePopup=function(e,t,a,n,o,l){g();var i=y(e,l).append("g"),p=n.x,r=(n.y,n.label),u=n.content;f(i,"X axis","".concat(d(p)?c(p):p)),f(i,"".concat(r.display),u)};t.loadPiePopup=function(e,t,a,n,o,l){g();var i=y(e,l).append("g"),p=n.label,r=n.value;f(i,p.display,r)}},1321:function(e,t,a){"use strict";a.r(t)},1330:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),i=n(a(4)),p=n(a(1315));a(1318),a(1321);var r=n(a(1316)),u={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},c=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,u=l.default.useState(),c=(0,o.default)(u,2),s=c[0],d=c[1],f=l.default.useRef(),v=l.default.useRef();return l.default.useEffect((function(){s||d(p.default.api.graph(t))}),[s,t]),l.default.useEffect((function(){if(s&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return s.graphContainer?s.loadContent(p.default.api.line(t)):""}),i[a]);e.push(n)})):a.forEach((function(e){s.loadContent(p.default.api.line(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,i]),l.default.useEffect((function(){if(s)if(v.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:r.default.deepClone(a.panData),eventline:r.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else v.current=!0}),[s,a,t]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};c.propTypes=u;var s=c;t.default=s},1362:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1315)),l=function(e){return{bindTo:e,axis:{x:{type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=l},1573:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1315)),l=a(1317),i={key:"uid_4",label:{display:"Data Label 4"},shape:o.default.helpers.SHAPES.DARK.CIRCLE,type:o.default.helpers.LINE_TYPE.SPLINE,onClick:l.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};t.default=i},1960:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(1316)),i=n(a(1330));a(1323);var p=n(a(1362)),r=n(a(1573)),u=l.default.deepClone((0,p.default)("#simpleSpline")),c=[l.default.deepClone(r.default)];t.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement(i.default,{graphID:"simpleSpline",graphConfig:u,dataset:c}))}}}]);