(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{1275:function(e,t,a){"use strict";var n=a(2),l=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=n(a(43)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var i=o?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(n,p,i):n[p]=e[p]}n.default=e,a&&a.set(e,n);return n}(a(1283)),i=n(a(1277)),r=n(a(1274));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},s=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var l=n.append("g").classed("section",!0),p=function(){var e=r[i],t=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),n=a[0],l=a[1],p=t.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(l)}))},i=0,r=Object.values(a);i<r.length;i++)p()},y=function(e){var t=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){p.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),p.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),p.select("#tooltip").style("left","".concat(p.event.pageX+5,"px")).style("top","".concat(p.event.pageY+5,"px"))},g=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,p=n.y,i=n.label,r=n.high,u=n.mid,v=n.low;o?(f(l,"X axis","".concat(d(o)?c(o):o)),f(l,"".concat(i.display),p)):(f(l,"X axis","".concat(r?s(r.x):u?s(u.x):v?s(v.x):"N/A")),r&&f(l,"High",s(r.y)),u&&f(l,"Mid",s(u.y)),v&&f(l,"Low",s(v.y)))};t.loadBubblePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,p=n.y,i=n.label,r=n.weight;o&&(f(l,"X axis","".concat(d(o)?c(o):o)),f(l,"year",p)),r&&f(l,"".concat(i.display),"".concat(r))};t.loadBarPopup=function(e,t,a,n){g();var l=y(e).append("g");n.forEach((function(e){return f(l,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){g();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),l=t.shape,o=t.label,p=t.color;r.default.notEmpty(l)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",l.options.scale,")")).attr("d",l.path.d).attr("fill",l.path.fill||i.default.DEFAULT_COLOR).attr("id",l.path.id),o.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(p,";")).text("".concat(o.display)),o.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){p.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),p.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),p.select("#tooltip").style("left","".concat(p.event.pageX-250,"px")).style("top","".concat(p.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){g();var n=y(e).append("g"),l=a.tasks,o=a.activities,p=a.events,i=a.actions;if(l&&l.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",r)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",u)}if(p&&p.length>0){var c=[];p.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",c)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",s)}};t.loadTaskPopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.label,p=n.display,i=n.y,r=n.startDate,u=n.endDate,s=n.percentage;o&&f(l,"Task Name",p),f(l,"Track",i),f(l,"Start Date",c(r)),f(l,"End Date",c(u)),s&&f(l,"Percentage",s)};t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),n=t.label,l=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",c(l))};t.loadTimelinePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,p=(n.y,n.label),i=n.content;f(l,"X axis","".concat(d(o)?c(o):o)),f(l,"".concat(p.display),i)};t.loadPiePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.label,p=n.value;f(l,o.display,p)}},1309:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1273)),o=function(e){return{bindTo:e,axis:{x:{type:l.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}}}};t.default=o},1324:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(1275),o=n(a(1273)),p={key:"bubble_basic_data",label:{display:"Bubble set A"},onClick:l.loadBubblePopup,color:o.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:70},{x:new Date(2016,0,1,15,45).toISOString(),y:120},{x:new Date(2016,0,1,10,30).toISOString(),y:160},{x:new Date(2016,0,1,18,0).toISOString(),y:180}],yAxis:"y",showShapes:!1};t.default=p},1327:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(43)),o=n(a(0)),p=n(a(4)),i=n(a(1273));a(1276);var r=n(a(1274)),u={graphID:p.default.string.isRequired,graphConfig:p.default.object.isRequired,dataset:p.default.arrayOf(p.default.object),timeout:p.default.arrayOf(p.default.number)},c=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,p=e.timeout,u=o.default.useState(),c=(0,l.default)(u,2),s=c[0],d=c[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){s||d(i.default.api.graph(t))}),[s,t]),o.default.useEffect((function(){if(s&&!f.current){var e=[];return a&&(p?a.forEach((function(t,a){var n=setTimeout((function(){return s.graphContainer?s.loadContent(i.default.api.bubbleSingleDataset(t)):""}),p[a]);e.push(n)})):a.forEach((function(e){s.loadContent(i.default.api.bubbleSingleDataset(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,p]),o.default.useEffect((function(){if(s)if(v.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:r.default.deepClone(a.panData),eventline:r.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else v.current=!0}),[s,a,t]),o.default.createElement("div",{id:"".concat(n,"-canvasContainer")},o.default.createElement("div",{id:n}))};c.propTypes=u;var s=c;t.default=s},1855:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(1274)),p=n(a(1327));a(1280);var i=n(a(1309)),r=n(a(1324)),u=o.default.deepClone((0,i.default)("#simpleBubbleGraph")),c=[o.default.deepClone(r.default)];t.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),l.default.createElement(p.default,{graphID:"simpleBubbleGraph",graphConfig:u,dataset:c}))}}}]);