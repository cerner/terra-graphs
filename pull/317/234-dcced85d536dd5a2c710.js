(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{1317:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=l?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(1320)),r=n(a(1319)),p=n(a(1316));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?s(e)?c(e):e:null},s=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),i=function(){var e=p[r],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(o)}))},r=0,p=Object.values(a);r<p.length;r++)i()},g=function(e,t){var a=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(t.pageX+5,"px")).style("top","".concat(t.pageY+5,"px"))},y=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n,o,l){y();var i=g(e,l).append("g"),r=n.x,p=n.y,u=n.label,v=n.high,x=n.mid,m=n.low;r?(f(i,"X axis","".concat(s(r)?c(r):r)),f(i,"".concat(u.display),p)):(f(i,"X axis","".concat(v?d(v.x):x?d(x.x):m?d(m.x):"N/A")),v&&f(i,"High",d(v.y)),x&&f(i,"Mid",d(x.y)),m&&f(i,"Low",d(m.y)))};t.loadBubblePopup=function(e,t,a,n,o,l){y();var i=g(e,l).append("g"),r=n.x,p=n.y,u=n.label,d=n.weight;r&&(f(i,"X axis","".concat(s(r)?c(r):r)),f(i,"year",p)),d&&f(i,"".concat(u.display),"".concat(d))};t.loadBarPopup=function(e,t,a,n,o,l){y();var i=g(e,l).append("g");n.forEach((function(e){return f(i,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a,n,o,l){y();var i=g(e,l).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),u=t.shape,c=t.label,d=t.color;p.default.notEmpty(u)&&i.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",u.options.scale,")")).attr("d",u.path.d).attr("fill",u.path.fill||r.default.DEFAULT_COLOR).attr("id",u.path.id),c.display&&i.append("text").classed("popup-text",!0).attr("style","color: ".concat(d,";")).text("".concat(c.display)),c.secondaryDisplay&&i.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(c.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e,t,a){y(),g(void 0,a).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e,t,a){y();var n=function(e,t){var a=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(t.pageX-250,"px")).style("top","".concat(t.pageY+5,"px"))}(void 0,a);n.append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a,n,o){y();var l=g(e,o).append("g"),i=a.tasks,r=a.activities,p=a.events,u=a.actions;if(i&&i.length>0){var c=[];c.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",c)}if(r&&r.length>0){var d=[];r.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",d)}if(p&&p.length>0){var s=[];p.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",s)}if(u&&u.length>0){var f=[];u.forEach((function(e){f.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",f)}};t.loadTaskPopup=function(e,t,a,n,o,l){y();var i=g(e,l).append("g"),r=n.label,p=n.display,u=n.y,d=n.startDate,s=n.endDate,v=n.percentage;r&&f(i,"Task Name",p),f(i,"Track",u),f(i,"Start Date",c(d)),f(i,"End Date",c(s)),v&&f(i,"Percentage",v)};t.loadDatelinePopup=function(e,t,a,n){y();var o=g(e,n).append("g"),l=t.label,i=t.value;l&&f(o,"Milestone",l.display),f(o,"Date",c(i))};t.loadTimelinePopup=function(e,t,a,n,o,l){y();var i=g(e,l).append("g"),r=n.x,p=(n.y,n.label),u=n.content;f(i,"X axis","".concat(s(r)?c(r):r)),f(i,"".concat(p.display),u)};t.loadPiePopup=function(e,t,a,n,o,l){y();var i=g(e,l).append("g"),r=n.label,p=n.value;f(i,r.display,p)}},1355:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1315)),l=a(1317),i={key:"uid_1",label:{display:"Data Label 1"},color:o.default.helpers.COLORS.BLACK,onClick:l.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}]};t.default=i},1364:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),i=n(a(4)),r=n(a(1315));a(1318);var p=n(a(1316)),u={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},c=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,u=l.default.useState(),c=(0,o.default)(u,2),d=c[0],s=c[1],f=l.default.useRef(),v=l.default.useRef();return l.default.useEffect((function(){d||s(r.default.api.graph(t))}),[d,t]),l.default.useEffect((function(){if(d&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return d.graphContainer?d.loadContent(r.default.api.scatter(t)):""}),i[a]);e.push(n)})):a.forEach((function(e){d.loadContent(r.default.api.scatter(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[d,a,i]),l.default.useEffect((function(){if(d)if(v.current){d.config.axis.x.upperLimit=t.axis.x.upperLimit,d.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};d.reflowMultipleDatasets(e)}else v.current=!0}),[d,a,t]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};c.propTypes=u;var d=c;t.default=d},1426:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1315)),l=function(e){return{bindTo:e,axis:{x:{type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=l},1986:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),i=n(a(78)),r=n(a(1316)),p=n(a(1364));a(1323);var u=n(a(1426)),c=n(a(1355)),d=[r.default.deepClone(c.default)],s={initial:0,factor:3,graphConfig:r.default.deepClone((0,u.default)("#scatterPanningExample"))},f=function(){var e=l.default.useReducer((function(e,t){var a,n=r.default.deepClone(e.graphConfig);switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return n.axis.x.lowerLimit=new Date(2016,0,1,a).toISOString(),n.axis.x.upperLimit=new Date(2016,0,2,a).toISOString(),{initial:a,factor:e.factor,graphConfig:r.default.deepClone(n)}}),s),t=(0,o.default)(e,2),a=t[0],n=t[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement(i.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),l.default.createElement(i.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),l.default.createElement(p.default,{graphID:"scatterPanningExample",graphConfig:a.graphConfig,dataset:d}))};t.default=f}}]);