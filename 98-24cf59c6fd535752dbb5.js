(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1317:function(e,t,a){"use strict";var n=a(2),l=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=n(a(43)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(1325)),i=n(a(1319)),p=n(a(1316));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var u=function(e){return new Date(e).toLocaleString()},d=function(e){return e?c(e)?u(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var l=n.append("g").classed("section",!0),r=function(){var e=p[i],t=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),n=a[0],l=a[1],r=t.append("g").classed("popup-item",!0);r.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),r.append("g").classed("popup-text",!0).text(l)}))},i=0,p=Object.values(a);i<p.length;i++)r()},y=function(e){var t=document.querySelector("#tooltip");return r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){r.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),r.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),r.select("#tooltip").style("left","".concat(r.event.pageX+5,"px")).style("top","".concat(r.event.pageY+5,"px"))},x=function(){r.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),r.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){x();var l=y(e).append("g"),o=n.x,r=n.y,i=n.label,p=n.high,s=n.mid,v=n.low;o?(f(l,"X axis","".concat(c(o)?u(o):o)),f(l,"".concat(i.display),r)):(f(l,"X axis","".concat(p?d(p.x):s?d(s.x):v?d(v.x):"N/A")),p&&f(l,"High",d(p.y)),s&&f(l,"Mid",d(s.y)),v&&f(l,"Low",d(v.y)))},t.loadBubblePopup=function(e,t,a,n){x();var l=y(e).append("g"),o=n.x,r=n.y,i=n.label,p=n.weight;o&&(f(l,"X axis","".concat(c(o)?u(o):o)),f(l,"year",r)),p&&f(l,"".concat(i.display),"".concat(p))},t.loadBarPopup=function(e,t,a,n){x();var l=y(e).append("g");n.forEach((function(e){return f(l,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){x();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),l=t.shape,o=t.label,r=t.color;p.default.notEmpty(l)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",l.options.scale,")")).attr("d",l.path.d).attr("fill",l.path.fill||i.default.DEFAULT_COLOR).attr("id",l.path.id),o.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(r,";")).text("".concat(o.display)),o.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){x(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;x(),(a=document.querySelector("#tooltip"),r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){r.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),r.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),r.select("#tooltip").style("left","".concat(r.event.pageX-250,"px")).style("top","".concat(r.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){x();var n=y(e).append("g"),l=a.tasks,o=a.activities,r=a.events,i=a.actions;if(l&&l.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",p)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",s)}if(r&&r.length>0){var u=[];r.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",u)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",d)}},t.loadTaskPopup=function(e,t,a,n){x();var l=y(e).append("g"),o=n.label,r=n.display,i=n.y,p=n.startDate,s=n.endDate,d=n.percentage;o&&f(l,"Task Name",r),f(l,"Track",i),f(l,"Start Date",u(p)),f(l,"End Date",u(s)),d&&f(l,"Percentage",d)},t.loadDatelinePopup=function(e,t){x();var a=y(e).append("g"),n=t.label,l=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",u(l))},t.loadTimelinePopup=function(e,t,a,n){x();var l=y(e).append("g"),o=n.x,r=(n.y,n.label),i=n.content;f(l,"X axis","".concat(c(o)?u(o):o)),f(l,"".concat(r.display),i)},t.loadPiePopup=function(e,t,a,n){x();var l=y(e).append("g"),o=n.label,r=n.value;f(l,o.display,r)}},1332:function(e,t,a){"use strict";a.r(t)},1340:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(43)),o=n(a(0)),r=n(a(4)),i=n(a(1315));a(1318),a(1332);var p=n(a(1316)),s={graphID:r.default.string.isRequired,graphConfig:r.default.object.isRequired,dataset:r.default.arrayOf(r.default.object),timeout:r.default.arrayOf(r.default.number)},u=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,r=e.timeout,s=o.default.useState(),u=(0,l.default)(s,2),d=u[0],c=u[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){d||c(i.default.api.graph(t))}),[d,t]),o.default.useEffect((function(){if(d&&!f.current){var e=[];return a&&(r?a.forEach((function(t,a){var n=setTimeout((function(){return d.graphContainer?d.loadContent(i.default.api.bar(t)):""}),r[a]);e.push(n)})):a.forEach((function(e){d.loadContent(i.default.api.bar(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[d,a,r]),o.default.useEffect((function(){if(d)if(v.current){d.config.axis.x.upperLimit=t.axis.x.upperLimit,d.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};d.reflowMultipleDatasets(e)}else v.current=!0}),[d,a,t]),o.default.createElement("div",{id:"".concat(n,"-canvasContainer")},o.default.createElement("div",{id:n}))};u.propTypes=s;t.default=u},1346:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:35},y2:{show:!1,label:"Bar Set B",lowerLimit:0,upperLimit:30}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}}},1498:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1315)),o=a(1317),r={key:"stacked_bar_4",label:{display:"Dataset 4"},color:l.default.helpers.COLORS.GREEN,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}],regions:[{axis:"y",x:1,start:10,end:10},{axis:"y",x:2,start:40,end:40},{axis:"y",x:3,start:55,end:55},{axis:"y",x:4,start:30,end:30}]};t.default=r},1499:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1315)),o=a(1317),r={key:"stacked_bar_5",label:{display:"Dataset 5"},group:"stacked_bar_4",color:l.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:5},{x:3,y:8},{x:4,y:10},{x:5,y:10},{x:6,y:10}],regions:[{axis:"y",x:1,start:10,end:10},{axis:"y",x:2,start:40,end:40},{axis:"y",x:3,start:55,end:55},{axis:"y",x:4,start:30,end:30}]};t.default=r},1500:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1315)),o=a(1317),r={key:"stacked_bar_6",label:{display:"Dataset 6"},group:"stacked_bar_4",color:l.default.helpers.COLORS.BLUE,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:8},{x:3,y:9},{x:4,y:10},{x:5,y:7}],regions:[{axis:"y",x:1,start:10,end:10},{axis:"y",x:2,start:40,end:40},{axis:"y",x:3,start:55,end:55},{axis:"y",x:4,start:30,end:30}]};t.default=r},1888:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(1316)),r=n(a(1340));a(1322);var i=n(a(1346)),p=n(a(1498)),s=n(a(1499)),u=n(a(1500)),d=o.default.deepClone((0,i.default)("#stackedGoalLineBarGraph")),c=[o.default.deepClone(p.default),o.default.deepClone(s.default),o.default.deepClone(u.default)];t.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),l.default.createElement(r.default,{graphID:"stackedGoalLineBarGraph",graphConfig:d,dataset:c}))}}}]);