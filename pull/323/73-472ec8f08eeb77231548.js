(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1322:function(e,t,a){"use strict";var n=a(2),l=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}return n.default=e,a&&a.set(e,n),n}(a(1330)),r=n(a(1324)),c=n(a(1321));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var u=function(e){return new Date(e).toLocaleString()},d=function(e){return e?s(e)?u(e):e:null},s=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var l=n.append("g").classed("section",!0),i=function(){var e=c[r],t=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),n=a[0],l=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(l)}))},r=0,c=Object.values(a);r<c.length;r++)i()},y=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,i=n.y,r=n.label,c=n.high,p=n.mid,v=n.low;o?(f(l,"X axis","".concat(s(o)?u(o):o)),f(l,"".concat(r.display),i)):(f(l,"X axis","".concat(c?d(c.x):p?d(p.x):v?d(v.x):"N/A")),c&&f(l,"High",d(c.y)),p&&f(l,"Mid",d(p.y)),v&&f(l,"Low",d(v.y)))},t.loadBubblePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,i=n.y,r=n.label,c=n.weight;o&&(f(l,"X axis","".concat(s(o)?u(o):o)),f(l,"year",i)),c&&f(l,"".concat(r.display),"".concat(c))},t.loadBarPopup=function(e,t,a,n){g();var l=y(e).append("g");n.forEach((function(e){return f(l,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){g();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),l=t.shape,o=t.label,i=t.color;c.default.notEmpty(l)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",l.options.scale,")")).attr("d",l.path.d).attr("fill",l.path.fill||r.default.DEFAULT_COLOR).attr("id",l.path.id),o.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){g();var n=y(e).append("g"),l=a.tasks,o=a.activities,i=a.events,r=a.actions;if(l&&l.length>0){var c=[];c.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",c)}if(o&&o.length>0){var p=[];o.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",p)}if(i&&i.length>0){var u=[];i.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",u)}if(r&&r.length>0){var d=[];r.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",d)}},t.loadTaskPopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.label,i=n.display,r=n.y,c=n.startDate,p=n.endDate,d=n.percentage;o&&f(l,"Task Name",i),f(l,"Track",r),f(l,"Start Date",u(c)),f(l,"End Date",u(p)),d&&f(l,"Percentage",d)},t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),n=t.label,l=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",u(l))},t.loadTimelinePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,i=(n.y,n.label),r=n.content;f(l,"X axis","".concat(s(o)?u(o):o)),f(l,"".concat(i.display),r)},t.loadPiePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.label,i=n.value;f(l,o.display,i)}},1338:function(e,t,a){"use strict";a.r(t)},1346:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(43)),o=n(a(0)),i=n(a(4)),r=n(a(1320));a(1323),a(1338);var c=n(a(1321)),p={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},u=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,p=o.default.useState(),u=(0,l.default)(p,2),d=u[0],s=u[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){d||s(r.default.api.gantt(t))}),[d,t]),o.default.useEffect((function(){if(d&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return d.graphContainer?d.loadContent(t):""}),i[a]);e.push(n)})):a.forEach((function(e){d.loadContent(e)}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[d,a,i]),o.default.useEffect((function(){if(d)if(v.current){d.config.axis.x.upperLimit=t.axis.x.upperLimit,d.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:c.default.deepClone(a.panData),eventline:c.default.deepClone(a.eventline)};d.reflowMultipleDatasets(e)}else v.current=!0}),[d,a,t]),o.default.createElement("div",{id:"".concat(n,"-canvasContainer")},o.default.createElement("div",{id:n}))};u.propTypes=p;t.default=u},1353:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1322);function l(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,l=function(){};return{s:l,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return r=e.done,e},e:function(e){c=!0,i=e},f:function(){try{r||null==a.return||a.return()}finally{if(c)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=[],p=l(Array(arguments.length>4&&void 0!==arguments[4]?arguments[4]:1).keys());try{for(p.s();!(e=p.n()).done;){var u=e.value,d={key:"track ".concat(u),onClick:r?n.loadTrackPopup:void 0,trackLabel:{display:"Project ".concat(String.fromCharCode(65+u)),onClick:n.loadXAndYAxisLabelPopup},tasks:t[u]?t[u]:{},activities:a[u]?a[u]:{},events:o[u]?o[u]:{},actions:i[u]?i[u]:{}};c.push(d)}}catch(e){p.e(e)}finally{p.f()}return c}},1365:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1322),l=[{key:"task1",onClick:n.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,3,10).toISOString()},{key:"task2",onClick:n.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2018,8,1).toISOString(),endDate:new Date(2018,9,10).toISOString()}];t.default=l},1384:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1322),l=[{key:"uid_action_1",onClick:n.loadPopup,values:[new Date(2018,2,1,6,15).toISOString()]},{key:"uid_action_2",onClick:n.loadPopup,values:[new Date(2018,7,1,6,15).toISOString()]}];t.default=l},1417:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1320)),o=a(1322);t.default=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},actionLegend:[{key:"uid_action_1",label:{display:"Action A"}},{key:"uid_action_2",label:{display:"Action B"},shape:l.default.helpers.SHAPES.DARK.TRIANGLE,color:l.default.helpers.COLORS.GREEN}],dateline:[{showDatelineIndicator:!0,label:{display:"DST Start"},color:"#405978",shape:l.default.helpers.SHAPES.DARK.DIAMOND,onClick:o.loadDatelinePopup,value:new Date(2018,2,10).toISOString()},{showDatelineIndicator:!0,label:{display:"Current Date"},color:"#C97318",shape:l.default.helpers.SHAPES.DARK.SQUARE,onClick:o.loadDatelinePopup,value:new Date(2018,8,5).toISOString()},{showDatelineIndicator:!0,label:{display:"DST End"},color:"#405978",shape:l.default.helpers.SHAPES.DARK.DIAMOND,onClick:o.loadDatelinePopup,value:new Date(2018,10,3).toISOString()}]}}},1420:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"activity1",label:{display:"activity1"},onClick:function(){},color:"#FFDF00",startDate:new Date(2018,1,1).toISOString(),endDate:new Date(2018,4,10).toISOString(),style:{isDotted:!1,isHollow:!1}}];t.default=n},1570:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1320)),o={path:[{id:"triangle",fill:"#E50000",d:"M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z"},{id:"exclamation",fill:"#FFF",d:"M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z"}],options:{x:-6.5,y:-7.5,scale:.35}},i=[{key:"uid_event_1",label:{display:"Defect A"},shape:{path:[{id:"clock",d:"M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z"},{id:"diamond",fill:"#E50000",d:"M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 .1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z"},{id:"exclamation",fill:"#FFF",d:"M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z"}],options:{x:-7,y:-7,scale:.35}},values:[new Date(2018,4,30).toISOString()]},{key:"uid_event_2",label:{display:"Defect B"},shape:o,color:l.default.helpers.COLORS.GREEN,values:[new Date(2018,5,4).toISOString()]},{key:"uid_event_3",label:{display:"Defect C"},shape:o,color:l.default.helpers.COLORS.GREEN,values:[new Date(2018,9,5).toISOString()]}];t.default=i},1926:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(1320)),i=n(a(1321)),r=n(a(1346));a(1327);var c=n(a(1417)),p=n(a(1353)),u=n(a(1420)),d=n(a(1365)),s=n(a(1570)),f=n(a(1384)),v=i.default.deepClone((0,c.default)("#ganttTrackSelection"));v.clickPassThrough={tasks:!0,activities:!0,events:!0,actions:!0,datelines:!0},v.showActionLegend=!1,v.dateline=[{showDatelineIndicator:!0,label:{display:"DST Start"},color:"#405978",shape:o.default.helpers.SHAPES.DIAMOND,value:new Date(2018,2,10).toISOString()},{showDatelineIndicator:!0,label:{display:"Current Date"},color:"#C97318",shape:o.default.helpers.SHAPES.SQUARE,value:new Date(2018,8,5).toISOString()}];var y=(0,p.default)([d.default],[u.default],[s.default],[f.default],1,!0);t.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),l.default.createElement(r.default,{graphID:"ganttTrackSelection",graphConfig:v,dataset:y}))}}}]);