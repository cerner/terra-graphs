(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1318:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=l?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(1326)),r=n(a(1320)),p=n(a(1317));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?s(e)?d(e):e:null},s=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},y=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),i=function(){var e=p[r],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(o)}))},r=0,p=Object.values(a);r<p.length;r++)i()},g=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},S=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){S();var o=g(e).append("g"),l=n.x,i=n.y,r=n.label,p=n.high,u=n.mid,y=n.low;l?(f(o,"X axis","".concat(s(l)?d(l):l)),f(o,"".concat(r.display),i)):(f(o,"X axis","".concat(p?c(p.x):u?c(u.x):y?c(y.x):"N/A")),p&&f(o,"High",c(p.y)),u&&f(o,"Mid",c(u.y)),y&&f(o,"Low",c(y.y)))},t.loadBubblePopup=function(e,t,a,n){S();var o=g(e).append("g"),l=n.x,i=n.y,r=n.label,p=n.weight;l&&(f(o,"X axis","".concat(s(l)?d(l):l)),f(o,"year",i)),p&&f(o,"".concat(r.display),"".concat(p))},t.loadBarPopup=function(e,t,a,n){S();var o=g(e).append("g");n.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){S();var n=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,i=t.color;p.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||r.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(l.display)),l.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){S(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;S(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){S();var n=g(e).append("g"),o=a.tasks,l=a.activities,i=a.events,r=a.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(n,"Tasks",p)}if(l&&l.length>0){var u=[];l.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(n,"Activities",u)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),y(n,"Events",d)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),y(n,"Actions",c)}},t.loadTaskPopup=function(e,t,a,n){S();var o=g(e).append("g"),l=n.label,i=n.display,r=n.y,p=n.startDate,u=n.endDate,c=n.percentage;l&&f(o,"Task Name",i),f(o,"Track",r),f(o,"Start Date",d(p)),f(o,"End Date",d(u)),c&&f(o,"Percentage",c)},t.loadDatelinePopup=function(e,t){S();var a=g(e).append("g"),n=t.label,o=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",d(o))},t.loadTimelinePopup=function(e,t,a,n){S();var o=g(e).append("g"),l=n.x,i=(n.y,n.label),r=n.content;f(o,"X axis","".concat(s(l)?d(l):l)),f(o,"".concat(i.display),r)},t.loadPiePopup=function(e,t,a,n){S();var o=g(e).append("g"),l=n.label,i=n.value;f(o,l.display,i)}},1321:function(e,t,a){"use strict";a.r(t)},1331:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),i=n(a(4)),r=n(a(1316));a(1319),a(1321);var p=n(a(1317)),u={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},d=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,u=l.default.useState(),d=(0,o.default)(u,2),c=d[0],s=d[1],f=l.default.useRef(),y=l.default.useRef();return l.default.useEffect((function(){c||s(r.default.api.graph(t))}),[c,t]),l.default.useEffect((function(){if(c&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return c.graphContainer?c.loadContent(r.default.api.line(t)):""}),i[a]);e.push(n)})):a.forEach((function(e){c.loadContent(r.default.api.line(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[c,a,i]),l.default.useEffect((function(){if(c)if(y.current){c.config.axis.x.upperLimit=t.axis.x.upperLimit,c.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};c.reflowMultipleDatasets(e)}else y.current=!0}),[c,a,t]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};d.propTypes=u;t.default=d},1337:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1316)),l=a(1318),i={key:"uid_1",label:{display:"Data Label 1"},shape:o.default.helpers.SHAPES.DARK.CIRCLE,onClick:l.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};t.default=i},1365:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1316));t.default=function(e){return{bindTo:e,axis:{x:{type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1418:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1316)),l=a(1318),i={key:"uid_3",label:{display:"Data Label 3"},shape:o.default.helpers.SHAPES.DARK.CIRCLE,color:o.default.helpers.COLORS.BLUE,onClick:l.loadPopup,yAxis:"y",values:[{x:new Date(2016,0,1,1,5).toISOString(),y:15},{x:new Date(2016,0,1,2,15).toISOString(),y:21},{x:new Date(2016,0,1,3,15).toISOString(),y:null},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:19},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:22},{x:new Date(2016,0,1,19,45).toISOString(),y:23}]};t.default=i},1420:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={key:"uid_1",label:{display:"Data Label 1"},values:[{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:10},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:10},{x:new Date(2016,0,1,6,15).toISOString(),y:7},{x:new Date(2016,0,1,7,0).toISOString(),y:16},{x:new Date(2016,0,1,8,15).toISOString(),y:9},{x:new Date(2016,0,1,9,45).toISOString(),y:6},{x:new Date(2016,0,1,12,15).toISOString(),y:2},{x:new Date(2016,0,1,13,15).toISOString(),y:3},{x:new Date(2016,0,1,14,15).toISOString(),y:25},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}]};t.default=n},1586:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1316)),l=a(1318),i={key:"uid_3",label:{display:"Data Label 3"},shape:o.default.helpers.SHAPES.DARK.CIRCLE,color:o.default.helpers.COLORS.BLUE,onClick:l.loadPopup,yAxis:"y",values:[{x:new Date(2016,0,1,1,5).toISOString(),y:25},{x:new Date(2016,0,1,2,15).toISOString(),y:5},{x:new Date(2016,0,1,3,15).toISOString(),y:16},{x:new Date(2016,0,1,4,15).toISOString(),y:null},{x:new Date(2016,0,1,5,15).toISOString(),y:3},{x:new Date(2016,0,1,6,15).toISOString(),y:7},{x:new Date(2016,0,1,9,45).toISOString(),y:4},{x:new Date(2016,0,1,12,15).toISOString(),y:12},{x:new Date(2016,0,1,13,15).toISOString(),y:19},{x:new Date(2016,0,1,14,15).toISOString(),y:24}]};t.default=i},1967:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),i=n(a(78)),r=n(a(1317)),p=n(a(1331));a(1323);var u=n(a(1365)),d=n(a(1337)),c=n(a(1420)),s=n(a(1418)),f=n(a(1586)),y={initial:0,factor:3,dataset:[r.default.deepClone(d.default),r.default.deepClone(s.default)],graphConfig:r.default.deepClone((0,u.default)("#multipleDatasetsExample"))};t.default=function(){var e=l.default.useReducer((function(e,t){var a,n=r.default.deepClone(e.graphConfig),o=[r.default.deepClone(c.default),r.default.deepClone(f.default)];switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return n.axis.x.lowerLimit=new Date(2016,0,1,a).toISOString(),n.axis.x.upperLimit=new Date(2016,0,2,a).toISOString(),{initial:a,factor:e.factor,dataset:{panData:o},graphConfig:r.default.deepClone(n)}}),y),t=(0,o.default)(e,2),a=t[0],n=t[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement(i.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),l.default.createElement(i.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),l.default.createElement(p.default,{graphID:"multipleDatasetsExample",graphConfig:a.graphConfig,dataset:a.dataset}))}}}]);