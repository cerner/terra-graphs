(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1275:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var i=l?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(n,p,i):n[p]=e[p]}n.default=e,a&&a.set(e,n);return n}(a(1283)),i=n(a(1277)),r=n(a(1274));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},c=function(e){return e?d(e)?s(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),p=function(){var e=r[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],p=t.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(o)}))},i=0,r=Object.values(a);i<r.length;i++)p()},y=function(e){var t=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){p.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),p.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),p.select("#tooltip").style("left","".concat(p.event.pageX+5,"px")).style("top","".concat(p.event.pageY+5,"px"))},g=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,p=n.y,i=n.label,r=n.high,u=n.mid,v=n.low;l?(f(o,"X axis","".concat(d(l)?s(l):l)),f(o,"".concat(i.display),p)):(f(o,"X axis","".concat(r?c(r.x):u?c(u.x):v?c(v.x):"N/A")),r&&f(o,"High",c(r.y)),u&&f(o,"Mid",c(u.y)),v&&f(o,"Low",c(v.y)))};t.loadBubblePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,p=n.y,i=n.label,r=n.weight;l&&(f(o,"X axis","".concat(d(l)?s(l):l)),f(o,"year",p)),r&&f(o,"".concat(i.display),"".concat(r))};t.loadBarPopup=function(e,t,a,n){g();var o=y(e).append("g");n.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){g();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,p=t.color;r.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(p,";")).text("".concat(l.display)),l.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){p.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),p.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),p.select("#tooltip").style("left","".concat(p.event.pageX-250,"px")).style("top","".concat(p.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){g();var n=y(e).append("g"),o=a.tasks,l=a.activities,p=a.events,i=a.actions;if(o&&o.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",r)}if(l&&l.length>0){var u=[];l.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",u)}if(p&&p.length>0){var s=[];p.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",s)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",c)}};t.loadTaskPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,p=n.display,i=n.y,r=n.startDate,u=n.endDate,c=n.percentage;l&&f(o,"Task Name",p),f(o,"Track",i),f(o,"Start Date",s(r)),f(o,"End Date",s(u)),c&&f(o,"Percentage",c)};t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),n=t.label,o=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",s(o))};t.loadTimelinePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,p=(n.y,n.label),i=n.content;f(o,"X axis","".concat(d(l)?s(l):l)),f(o,"".concat(p.display),i)};t.loadPiePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,p=n.value;f(o,l.display,p)}},1290:function(e,t,a){"use strict";a.r(t)},1298:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),p=n(a(4)),i=n(a(1273));a(1276),a(1290);var r=n(a(1274)),u={graphID:p.default.string.isRequired,graphConfig:p.default.object.isRequired,dataset:p.default.arrayOf(p.default.object),timeout:p.default.arrayOf(p.default.number)},s=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,p=e.timeout,u=l.default.useState(),s=(0,o.default)(u,2),c=s[0],d=s[1],f=l.default.useRef(),v=l.default.useRef();return l.default.useEffect((function(){c||d(i.default.api.graph(t))}),[c,t]),l.default.useEffect((function(){if(c&&!f.current){var e=[];return a&&(p?a.forEach((function(t,a){var n=setTimeout((function(){return c.graphContainer?c.loadContent(i.default.api.bar(t)):""}),p[a]);e.push(n)})):a.forEach((function(e){c.loadContent(i.default.api.bar(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[c,a,p]),l.default.useEffect((function(){if(c)if(v.current){c.config.axis.x.upperLimit=t.axis.x.upperLimit,c.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:r.default.deepClone(a.panData),eventline:r.default.deepClone(a.eventline)};c.reflowMultipleDatasets(e)}else v.current=!0}),[c,a,t]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};s.propTypes=u;var c=s;t.default=c},1304:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:35},y2:{show:!1,label:"Bar Set B",lowerLimit:0,upperLimit:30}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};t.default=n},1363:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),l=a(1275),p={key:"grouped_bar_4",label:{display:"Dataset 4"},color:o.default.helpers.COLORS.LIGHT_PURPLE,onClick:l.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:6,y:10}],regions:[{axis:"y",x:1,start:7,end:7},{axis:"y",x:2,start:13,end:13},{axis:"y",x:3,start:17,end:17},{axis:"y",x:4,start:4,end:4}]};t.default=p},1845:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(1274)),p=n(a(1298));a(1280);var i=n(a(1304)),r=n(a(1363)),u=l.default.deepClone((0,i.default)("#simpleGoalLineBarGraph")),s=[l.default.deepClone(r.default)];t.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement(p.default,{graphID:"simpleGoalLineBarGraph",graphConfig:u,dataset:s}))}}}]);