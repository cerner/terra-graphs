(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1322:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=l?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}return n.default=e,a&&a.set(e,n),n}(a(1330)),r=n(a(1324)),p=n(a(1321));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?s(e)?c(e):e:null},s=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),i=function(){var e=p[r],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(o)}))},r=0,p=Object.values(a);r<p.length;r++)i()},g=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},y=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){y();var o=g(e).append("g"),l=n.x,i=n.y,r=n.label,p=n.high,u=n.mid,v=n.low;l?(f(o,"X axis","".concat(s(l)?c(l):l)),f(o,"".concat(r.display),i)):(f(o,"X axis","".concat(p?d(p.x):u?d(u.x):v?d(v.x):"N/A")),p&&f(o,"High",d(p.y)),u&&f(o,"Mid",d(u.y)),v&&f(o,"Low",d(v.y)))},t.loadBubblePopup=function(e,t,a,n){y();var o=g(e).append("g"),l=n.x,i=n.y,r=n.label,p=n.weight;l&&(f(o,"X axis","".concat(s(l)?c(l):l)),f(o,"year",i)),p&&f(o,"".concat(r.display),"".concat(p))},t.loadBarPopup=function(e,t,a,n){y();var o=g(e).append("g");n.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){y();var n=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,i=t.color;p.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||r.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(l.display)),l.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){y(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;y(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){y();var n=g(e).append("g"),o=a.tasks,l=a.activities,i=a.events,r=a.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",p)}if(l&&l.length>0){var u=[];l.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",u)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",c)}if(r&&r.length>0){var d=[];r.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",d)}},t.loadTaskPopup=function(e,t,a,n){y();var o=g(e).append("g"),l=n.label,i=n.display,r=n.y,p=n.startDate,u=n.endDate,d=n.percentage;l&&f(o,"Task Name",i),f(o,"Track",r),f(o,"Start Date",c(p)),f(o,"End Date",c(u)),d&&f(o,"Percentage",d)},t.loadDatelinePopup=function(e,t){y();var a=g(e).append("g"),n=t.label,o=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",c(o))},t.loadTimelinePopup=function(e,t,a,n){y();var o=g(e).append("g"),l=n.x,i=(n.y,n.label),r=n.content;f(o,"X axis","".concat(s(l)?c(l):l)),f(o,"".concat(i.display),r)},t.loadPiePopup=function(e,t,a,n){y();var o=g(e).append("g"),l=n.label,i=n.value;f(o,l.display,i)}},1338:function(e,t,a){"use strict";a.r(t)},1346:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),i=n(a(4)),r=n(a(1320));a(1323),a(1338);var p=n(a(1321)),u={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},c=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,u=l.default.useState(),c=(0,o.default)(u,2),d=c[0],s=c[1],f=l.default.useRef(),v=l.default.useRef();return l.default.useEffect((function(){d||s(r.default.api.gantt(t))}),[d,t]),l.default.useEffect((function(){if(d&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return d.graphContainer?d.loadContent(t):""}),i[a]);e.push(n)})):a.forEach((function(e){d.loadContent(e)}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[d,a,i]),l.default.useEffect((function(){if(d)if(v.current){d.config.axis.x.upperLimit=t.axis.x.upperLimit,d.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};d.reflowMultipleDatasets(e)}else v.current=!0}),[d,a,t]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};c.propTypes=u;t.default=c},1353:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1322);function o(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,p=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return r=e.done,e},e:function(e){p=!0,i=e},f:function(){try{r||null==a.return||a.return()}finally{if(p)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],p=[],u=o(Array(arguments.length>4&&void 0!==arguments[4]?arguments[4]:1).keys());try{for(u.s();!(e=u.n()).done;){var c=e.value,d={key:"track ".concat(c),onClick:r?n.loadTrackPopup:void 0,trackLabel:{display:"Project ".concat(String.fromCharCode(65+c)),onClick:n.loadXAndYAxisLabelPopup},tasks:t[c]?t[c]:{},activities:a[c]?a[c]:{},events:l[c]?l[c]:{},actions:i[c]?i[c]:{}};p.push(d)}}catch(e){u.e(e)}finally{u.f()}return p}},1384:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1322),o=[{key:"uid_action_1",onClick:n.loadPopup,values:[new Date(2018,2,1,6,15).toISOString()]},{key:"uid_action_2",onClick:n.loadPopup,values:[new Date(2018,7,1,6,15).toISOString()]}];t.default=o},1418:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1322),o=[{key:"uid_action_1",onClick:n.loadPopup,values:[new Date(2018,3,1,6,15).toISOString(),new Date(2018,4,1,7,15).toISOString()]},{key:"uid_action_2",onClick:n.loadPopup,values:[new Date(2018,5,1,9,15).toISOString()]}];t.default=o},1561:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1320)),l=a(1322);t.default=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},actionLegend:[{key:"uid_action_1",label:{display:"Action A"}},{key:"uid_action_2",label:{display:"Action B"},shape:o.default.helpers.SHAPES.DARK.TRIANGLE,color:o.default.helpers.COLORS.GREEN}],dateline:[{showDatelineIndicator:!0,label:{display:"DST Start"},color:"#405978",shape:o.default.helpers.SHAPES.DARK.DIAMOND,onClick:l.loadDatelinePopup,value:new Date(2018,2,10).toISOString()},{showDatelineIndicator:!0,label:{display:"Current Date"},color:"#C97318",shape:o.default.helpers.SHAPES.DARK.SQUARE,onClick:l.loadDatelinePopup,value:new Date(2018,8,5).toISOString()},{showDatelineIndicator:!0,label:{display:"DST End"},color:"#405978",shape:o.default.helpers.SHAPES.DARK.DIAMOND,onClick:l.loadDatelinePopup,value:new Date(2018,10,3).toISOString()}],showActionLegend:!0,removeContainerPadding:!0,legendPadding:{left:2.5,right:2.5,top:2.5,bottom:2.5}}}},1919:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(1321)),i=n(a(1346));a(1327);var r=n(a(1561)),p=n(a(1353)),u=n(a(1384)),c=n(a(1418)),d=l.default.deepClone((0,r.default)("#ganttGraphAndLegendPaddingReduced")),s=[l.default.deepClone(u.default),l.default.deepClone(c.default)],f=(0,p.default)([],[],[],s,2);t.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement(i.default,{graphID:"ganttGraphAndLegendPaddingReduced",graphConfig:d,dataset:f}))}}}]);