(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1281:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(1289)),i=n(a(1283)),c=n(a(1280));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var u=function(e){return new Date(e).toLocaleString()},d=function(e){return e?s(e)?u(e):e:null},s=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),r=function(){var e=c[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],r=t.append("g").classed("popup-item",!0);r.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),r.append("g").classed("popup-text",!0).text(o)}))},i=0,c=Object.values(a);i<c.length;i++)r()},y=function(e){var t=document.querySelector("#tooltip");return r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){r.select(t).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(e)&&e(),r.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),r.select("#tooltip").style("left","".concat(r.event.pageX+5,"px")).style("top","".concat(r.event.pageY+5,"px"))},g=function(){r.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),r.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,r=n.y,i=n.label,c=n.high,p=n.mid,v=n.low;l?(f(o,"X axis","".concat(s(l)?u(l):l)),f(o,"".concat(i.display),r)):(f(o,"X axis","".concat(c?d(c.x):p?d(p.x):v?d(v.x):"N/A")),c&&f(o,"High",d(c.y)),p&&f(o,"Mid",d(p.y)),v&&f(o,"Low",d(v.y)))};t.loadBubblePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,r=n.y,i=n.label,c=n.weight;l&&(f(o,"X axis","".concat(s(l)?u(l):l)),f(o,"year",r)),c&&f(o,"".concat(i.display),"".concat(c))};t.loadBarPopup=function(e,t,a,n){g();var o=y(e).append("g");n.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){g();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,r=t.color;c.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(r,";")).text("".concat(l.display)),l.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){r.select(a).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(t)&&t(),r.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),r.select("#tooltip").style("left","".concat(r.event.pageX-250,"px")).style("top","".concat(r.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){g();var n=y(e).append("g"),o=a.tasks,l=a.activities,r=a.events,i=a.actions;if(o&&o.length>0){var c=[];c.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",c)}if(l&&l.length>0){var p=[];l.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",p)}if(r&&r.length>0){var u=[];r.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",u)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",d)}};t.loadTaskPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,r=n.display,i=n.y,c=n.startDate,p=n.endDate,d=n.percentage;l&&f(o,"Task Name",r),f(o,"Track",i),f(o,"Start Date",u(c)),f(o,"End Date",u(p)),d&&f(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),n=t.label,o=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",u(o))};t.loadTimelinePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,r=(n.y,n.label),i=n.content;f(o,"X axis","".concat(s(l)?u(l):l)),f(o,"".concat(r.display),i)};t.loadPiePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,r=n.value;f(o,l.display,r)}},1297:function(e,t,a){"use strict";a.r(t)},1305:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),r=n(a(4)),i=n(a(1279));a(1282),a(1297);var c=n(a(1280)),p={graphID:r.default.string.isRequired,graphConfig:r.default.object.isRequired,dataset:r.default.arrayOf(r.default.object),timeout:r.default.arrayOf(r.default.number)},u=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,r=e.timeout,p=l.default.useState(),u=(0,o.default)(p,2),d=u[0],s=u[1],f=l.default.useRef(),v=l.default.useRef();return l.default.useEffect((function(){d||s(i.default.api.gantt(t))}),[d,t]),l.default.useEffect((function(){if(d&&!f.current){var e=[];return a&&(r?a.forEach((function(t,a){var n=setTimeout((function(){return d.graphContainer?d.loadContent(t):""}),r[a]);e.push(n)})):a.forEach((function(e){d.loadContent(e)}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[d,a,r]),l.default.useEffect((function(){if(d)if(v.current){d.config.axis.x.upperLimit=t.axis.x.upperLimit,d.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:c.default.deepClone(a.panData),eventline:c.default.deepClone(a.eventline)};d.reflowMultipleDatasets(e)}else v.current=!0}),[d,a,t]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};u.propTypes=p;var d=u;t.default=d},1312:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1281);function o(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){c=!0,r=e},f:function(){try{i||null==a.return||a.return()}finally{if(c)throw r}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var r=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=[],p=o(Array(arguments.length>4&&void 0!==arguments[4]?arguments[4]:1).keys());try{for(p.s();!(e=p.n()).done;){var u=e.value,d={key:"track ".concat(u),onClick:i?n.loadTrackPopup:void 0,trackLabel:{display:"Project ".concat(String.fromCharCode(65+u)),onClick:n.loadXAndYAxisLabelPopup},tasks:t[u]?t[u]:{},activities:a[u]?a[u]:{},events:l[u]?l[u]:{},actions:r[u]?r[u]:{}};c.push(d)}}catch(e){p.e(e)}finally{p.f()}return c};t.default=r},1325:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"task3",onClick:a(1281).loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,3,1).toISOString(),endDate:new Date(2018,7,10).toISOString()}];t.default=n},1326:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}}}};t.default=n},1519:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1279)),l=[{key:"uid_event_1",label:{display:"Defect A"},onClick:a(1281).loadPopup,shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},color:o.default.helpers.COLORS.BLACK,values:[new Date(2018,2,5).toISOString()]},{key:"uid_event_2",label:{display:"Defect B"},shape:{path:[{id:"clock",d:"M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z"},{id:"diamond",fill:"#E50000",d:"M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 .1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z"},{id:"exclamation",fill:"#FFF",d:"M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z"}],options:{x:-7,y:-7,scale:.35}},color:o.default.helpers.COLORS.WHITE,values:[new Date(2018,5,4).toISOString()]},{key:"uid_event_3",label:{display:"Defect C"},shape:{path:[{id:"triangle",fill:"#E50000",d:"M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z"},{id:"exclamation",fill:"#FFF",d:"M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z"}],options:{x:-6.5,y:-7.5,scale:.35}},values:[new Date(2018,3,30).toISOString()]}];t.default=l},1877:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(1280)),r=n(a(1305));a(1286);var i=n(a(1326)),c=n(a(1312)),p=n(a(1325)),u=n(a(1519)),d=l.default.deepClone((0,i.default)("#ganttEvents"));d.showActionLegend=!1,d.dateline=[];var s=(0,c.default)([p.default],[],[u.default],[],1);t.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement(r.default,{graphID:"ganttEvents",graphConfig:d,dataset:s}))}}}]);