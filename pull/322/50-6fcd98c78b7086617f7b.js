(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1322:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=l?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}return n.default=e,a&&a.set(e,n),n}(a(1330)),r=n(a(1324)),u=n(a(1321));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var p=function(e){return new Date(e).toLocaleString()},c=function(e){return e?s(e)?p(e):e:null},s=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),i=function(){var e=u[r],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(o)}))},r=0,u=Object.values(a);r<u.length;r++)i()},y=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),u.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,i=n.y,r=n.label,u=n.high,d=n.mid,v=n.low;l?(f(o,"X axis","".concat(s(l)?p(l):l)),f(o,"".concat(r.display),i)):(f(o,"X axis","".concat(u?c(u.x):d?c(d.x):v?c(v.x):"N/A")),u&&f(o,"High",c(u.y)),d&&f(o,"Mid",c(d.y)),v&&f(o,"Low",c(v.y)))},t.loadBubblePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,i=n.y,r=n.label,u=n.weight;l&&(f(o,"X axis","".concat(s(l)?p(l):l)),f(o,"year",i)),u&&f(o,"".concat(r.display),"".concat(u))},t.loadBarPopup=function(e,t,a,n){g();var o=y(e).append("g");n.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){g();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,i=t.color;u.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||r.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(l.display)),l.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),u.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){g();var n=y(e).append("g"),o=a.tasks,l=a.activities,i=a.events,r=a.actions;if(o&&o.length>0){var u=[];u.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",u)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",d)}if(i&&i.length>0){var p=[];i.forEach((function(e){p.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",p)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",c)}},t.loadTaskPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,i=n.display,r=n.y,u=n.startDate,d=n.endDate,c=n.percentage;l&&f(o,"Task Name",i),f(o,"Track",r),f(o,"Start Date",p(u)),f(o,"End Date",p(d)),c&&f(o,"Percentage",c)},t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),n=t.label,o=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",p(o))},t.loadTimelinePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,i=(n.y,n.label),r=n.content;f(o,"X axis","".concat(s(l)?p(l):l)),f(o,"".concat(i.display),r)},t.loadPiePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,i=n.value;f(o,l.display,i)}},1338:function(e,t,a){"use strict";a.r(t)},1346:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),i=n(a(4)),r=n(a(1320));a(1323),a(1338);var u=n(a(1321)),d={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},p=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,d=l.default.useState(),p=(0,o.default)(d,2),c=p[0],s=p[1],f=l.default.useRef(),v=l.default.useRef();return l.default.useEffect((function(){c||s(r.default.api.gantt(t))}),[c,t]),l.default.useEffect((function(){if(c&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return c.graphContainer?c.loadContent(t):""}),i[a]);e.push(n)})):a.forEach((function(e){c.loadContent(e)}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[c,a,i]),l.default.useEffect((function(){if(c)if(v.current){c.config.axis.x.upperLimit=t.axis.x.upperLimit,c.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:u.default.deepClone(a.panData),eventline:u.default.deepClone(a.eventline)};c.reflowMultipleDatasets(e)}else v.current=!0}),[c,a,t]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};p.propTypes=d;t.default=p},1354:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1322);function o(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,u=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return r=e.done,e},e:function(e){u=!0,i=e},f:function(){try{r||null==a.return||a.return()}finally{if(u)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=[],d=o(Array(arguments.length>4&&void 0!==arguments[4]?arguments[4]:1).keys());try{for(d.s();!(e=d.n()).done;){var p=e.value,c={key:"track ".concat(p),onClick:r?n.loadTrackPopup:void 0,trackLabel:{display:"Project ".concat(String.fromCharCode(65+p)),onClick:n.loadXAndYAxisLabelPopup},tasks:t[p]?t[p]:{},activities:a[p]?a[p]:{},events:l[p]?l[p]:{},actions:i[p]?i[p]:{}};u.push(c)}}catch(e){d.e(e)}finally{d.f()}return u}},1366:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1322),o=[{key:"task1",onClick:n.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,3,10).toISOString()},{key:"task2",onClick:n.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2018,8,1).toISOString(),endDate:new Date(2018,9,10).toISOString()}];t.default=o},1367:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"task3",onClick:a(1322).loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,3,1).toISOString(),endDate:new Date(2018,7,10).toISOString()}];t.default=n},1368:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}}}}},1382:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1322),o=[{key:"task4",onClick:n.loadTaskPopup,label:{display:"Story Charming"},startDate:new Date(2018,6,1).toISOString(),endDate:new Date(2018,7,10).toISOString()},{key:"task5",onClick:n.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2018,10,1).toISOString(),endDate:new Date(2018,10,1).toISOString()}];t.default=o},1383:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"task6",onClick:a(1322).loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,6,1).toISOString(),endDate:new Date(2018,9,10).toISOString()}];t.default=n},1420:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"activity1",label:{display:"activity1"},onClick:function(){},color:"#FFDF00",startDate:new Date(2018,1,1).toISOString(),endDate:new Date(2018,4,10).toISOString(),style:{isDotted:!1,isHollow:!1}}];t.default=n},1565:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"activity2-hashed",label:{display:"Story Apex Hashed Activity"},color:"#000",startDate:new Date(2018,0,1).toISOString(),endDate:new Date(2018,3,1).toISOString(),style:{isDotted:!1,isHollow:!1,isHashed:!0}},{key:"activity3",color:"#ff0000",label:{display:"Story Apex Activity"},startDate:new Date(2018,3,1).toISOString(),endDate:new Date(2018,9,10).toISOString(),style:{isDotted:!1,isHollow:!1}}];t.default=n},1566:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1324),o=a(1322),l=[{key:"activity4",color:n.COLORS.LIGHT_BLUE,onMouseEnter:o.loadTaskPopup,onMouseMove:o.loadTaskPopup,label:{display:"Story Charming Activity"},startDate:new Date(2016,0,1,10,30).toISOString(),endDate:new Date(2016,0,1,12,30).toISOString(),style:{isDotted:!1,isHollow:!1}}];t.default=l},1567:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"activity5",label:{display:"activity5"},onClick:function(){},color:"#FFDF00",startDate:new Date(2016,0,1,12).toISOString(),endDate:new Date(2016,0,1,15).toISOString(),style:{isDotted:!1,isHollow:!1}}];t.default=n},1924:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(1321)),i=n(a(1346));a(1327);var r=n(a(1368)),u=n(a(1354)),d=n(a(1366)),p=n(a(1367)),c=n(a(1382)),s=n(a(1383)),f=n(a(1420)),v=n(a(1565)),y=n(a(1566)),g=n(a(1567)),D=l.default.deepClone((0,r.default)("#ganttTasksAndActivities")),b=[l.default.deepClone(d.default),l.default.deepClone(p.default),l.default.deepClone(c.default),l.default.deepClone(s.default)],S=[l.default.deepClone(f.default),l.default.deepClone(v.default),l.default.deepClone(y.default),l.default.deepClone(g.default)],m=(0,u.default)(b,S,[],[],4);t.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement(i.default,{graphID:"ganttTasksAndActivities",graphConfig:D,dataset:m}))}}}]);