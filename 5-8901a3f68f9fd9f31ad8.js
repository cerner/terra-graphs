(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1274:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var i=l?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(n,p,i):n[p]=e[p]}n.default=e,a&&a.set(e,n);return n}(a(1282)),i=n(a(1279)),r=n(a(1275));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}var u=function(e){return new Date(e).toLocaleString()},s=function(e){return e?d(e)?u(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),p=function(){var e=r[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],p=t.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(o)}))},i=0,r=Object.values(a);i<r.length;i++)p()},y=function(e){var t=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){p.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),p.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),p.select("#tooltip").style("left","".concat(p.event.pageX+5,"px")).style("top","".concat(p.event.pageY+5,"px"))},g=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,p=n.y,i=n.label,r=n.high,c=n.mid,v=n.low;l?(f(o,"X axis","".concat(d(l)?u(l):l)),f(o,"".concat(i.display),p)):(f(o,"X axis","".concat(r?s(r.x):c?s(c.x):v?s(v.x):"N/A")),r&&f(o,"High",s(r.y)),c&&f(o,"Mid",s(c.y)),v&&f(o,"Low",s(v.y)))};t.loadBubblePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,p=n.y,i=n.label,r=n.weight;l&&(f(o,"X axis","".concat(d(l)?u(l):l)),f(o,"year",p)),r&&f(o,"".concat(i.display),"".concat(r))};t.loadBarPopup=function(e,t,a,n){g();var o=y(e).append("g");n.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){g();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,p=t.color;r.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(p,";")).text("".concat(l.display)),l.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){p.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),p.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),p.select("#tooltip").style("left","".concat(p.event.pageX-250,"px")).style("top","".concat(p.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){g();var n=y(e).append("g"),o=a.tasks,l=a.activities,p=a.events,i=a.actions;if(o&&o.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",r)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",c)}if(p&&p.length>0){var u=[];p.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",u)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",s)}};t.loadTaskPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,p=n.display,i=n.y,r=n.startDate,c=n.endDate,s=n.percentage;l&&f(o,"Task Name",p),f(o,"Track",i),f(o,"Start Date",u(r)),f(o,"End Date",u(c)),s&&f(o,"Percentage",s)};t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),n=t.label,o=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",u(o))};t.loadTimelinePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,p=(n.y,n.label),i=n.content;f(o,"X axis","".concat(d(l)?u(l):l)),f(o,"".concat(p.display),i)};t.loadPiePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,p=n.value;f(o,l.display,p)}},1276:function(e,t,a){"use strict";a.r(t)},1353:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),p=n(a(4)),i=n(a(1273));a(1276);var r=n(a(1275)),c={graphID:p.default.string.isRequired,graphConfig:p.default.object.isRequired,dataset:p.default.arrayOf(p.default.object),timeout:p.default.arrayOf(p.default.number)},u=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,p=e.timeout,c=l.default.useState(),u=(0,o.default)(c,2),s=u[0],d=u[1],f=l.default.useRef(),v=l.default.useRef();return l.default.useEffect((function(){s||d(i.default.api.graph(t))}),[s,t]),l.default.useEffect((function(){if(s&&!f.current){var e=[];return a&&(p?a.forEach((function(t,a){var n=setTimeout((function(){return s.graphContainer?s.loadContent(i.default.api.scatter(t)):""}),p[a]);e.push(n)})):a.forEach((function(e){s.loadContent(i.default.api.scatter(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,p]),l.default.useEffect((function(){if(s)if(v.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:r.default.deepClone(a.panData),eventline:r.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else v.current=!0}),[s,a,t]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};u.propTypes=c;var s=u;t.default=s}}]);