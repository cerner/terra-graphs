(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1275:function(e,t,a){"use strict";var l=a(2),n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=l(a(43)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var i=o?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(l,p,i):l[p]=e[p]}l.default=e,a&&a.set(e,l);return l}(a(1283)),i=l(a(1277)),r=l(a(1274));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},s=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var n=l.append("g").classed("section",!0),p=function(){var e=r[i],t=n.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),l=a[0],n=a[1],p=t.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(n)}))},i=0,r=Object.values(a);i<r.length;i++)p()},y=function(e){var t=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){p.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),p.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),p.select("#tooltip").style("left","".concat(p.event.pageX+5,"px")).style("top","".concat(p.event.pageY+5,"px"))},b=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l){b();var n=y(e).append("g"),o=l.x,p=l.y,i=l.label,r=l.high,u=l.mid,v=l.low;o?(f(n,"X axis","".concat(d(o)?c(o):o)),f(n,"".concat(i.display),p)):(f(n,"X axis","".concat(r?s(r.x):u?s(u.x):v?s(v.x):"N/A")),r&&f(n,"High",s(r.y)),u&&f(n,"Mid",s(u.y)),v&&f(n,"Low",s(v.y)))};t.loadBubblePopup=function(e,t,a,l){b();var n=y(e).append("g"),o=l.x,p=l.y,i=l.label,r=l.weight;o&&(f(n,"X axis","".concat(d(o)?c(o):o)),f(n,"year",p)),r&&f(n,"".concat(i.display),"".concat(r))};t.loadBarPopup=function(e,t,a,l){b();var n=y(e).append("g");l.forEach((function(e){return f(n,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){b();var l=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),n=t.shape,o=t.label,p=t.color;r.default.notEmpty(n)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",n.options.scale,")")).attr("d",n.path.d).attr("fill",n.path.fill||i.default.DEFAULT_COLOR).attr("id",n.path.id),o.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(p,";")).text("".concat(o.display)),o.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;b(),(a=document.querySelector("#tooltip"),p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){p.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),p.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),p.select("#tooltip").style("left","".concat(p.event.pageX-250,"px")).style("top","".concat(p.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){b();var l=y(e).append("g"),n=a.tasks,o=a.activities,p=a.events,i=a.actions;if(n&&n.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",r)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",u)}if(p&&p.length>0){var c=[];p.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",c)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",s)}};t.loadTaskPopup=function(e,t,a,l){b();var n=y(e).append("g"),o=l.label,p=l.display,i=l.y,r=l.startDate,u=l.endDate,s=l.percentage;o&&f(n,"Task Name",p),f(n,"Track",i),f(n,"Start Date",c(r)),f(n,"End Date",c(u)),s&&f(n,"Percentage",s)};t.loadDatelinePopup=function(e,t){b();var a=y(e).append("g"),l=t.label,n=t.value;l&&f(a,"Milestone",l.display),f(a,"Date",c(n))};t.loadTimelinePopup=function(e,t,a,l){b();var n=y(e).append("g"),o=l.x,p=(l.y,l.label),i=l.content;f(n,"X axis","".concat(d(o)?c(o):o)),f(n,"".concat(p.display),i)};t.loadPiePopup=function(e,t,a,l){b();var n=y(e).append("g"),o=l.label,p=l.value;f(n,o.display,p)}},1278:function(e,t,a){"use strict";a.r(t)},1289:function(e,t,a){"use strict";a.r(t)},1290:function(e,t,a){"use strict";a.r(t)},1328:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(4)),p=l(a(1273));a(1276),a(1278),a(1290),a(1289);var i={graphID:o.default.string.isRequired,graphConfig:o.default.object.isRequired,dataset:o.default.arrayOf(o.default.object),timeout:o.default.arrayOf(o.default.number)},r=function(e){var t,a=e.graphType.toUpperCase();switch(a=a.replaceAll(" ","")){case"LINE":t=p.default.api.line(e);break;case"SCATTER":t=p.default.api.scatter(e);break;case"PAIREDRESULT":t=p.default.api.pairedResult(e);break;case"BAR":t=p.default.api.bar(e);break;case"BUBBLESINGLEDATASET":t=p.default.api.bubbleSingleDataset(e);break;case"BUBBLEMULTIPLEDATASET":t=p.default.api.bubbleMultipleDataset(e);break;default:t=void 0}return t},u=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,o=e.timeout;return n.default.useEffect((function(){var e=p.default.api.graph(t),l=[];return a&&(o?a.forEach((function(t,a){var n=setTimeout((function(){return e.graphContainer?e.loadContent(r(t)):""}),o[a]);l.push(n)})):a.forEach((function(t){e.loadContent(r(t))}))),function(){l.forEach((function(e){clearTimeout(e)}))}}),[t,a,o]),n.default.createElement("div",{id:"".concat(l,"-canvasContainer")},n.default.createElement("div",{id:l}))};u.propTypes=i;var c=u;t.default=c},1346:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Combination Set A",lowerLimit:0,upperLimit:35},y2:{show:!0,label:"Combination Set B",lowerLimit:0,upperLimit:30,padDomain:!1}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};t.default=l},1347:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1273)),o=a(1275),p={key:"line_dataset",label:{display:"Line Data Label"},graphType:"Line",color:n.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:new Array(7).fill("").map((function(e,t){return{y:Math.sin(t)*Math.PI+20,x:t+.5}}))};t.default=p},1364:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1273)),o=a(1275),p={key:"bubble_dataset_1",label:{display:"Bubble Data Label 1"},graphType:"BubbleMultipleDataset",color:n.default.helpers.COLORS.GREEN,onClick:o.loadPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}]};t.default=p},1468:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1273)),o=a(1275),p={key:"bubble_dataset_2",label:{display:"Bubble Data Label 2"},graphType:"BubbleMultipleDataset",color:n.default.helpers.COLORS.BLUE,onClick:o.loadPopup,weight:{min:40,max:450},values:[{x:1,y:25,weight:150},{x:2,y:15,weight:300},{x:3,y:2,weight:200},{x:4,y:28,weight:400},{x:5,y:23,weight:450}]};t.default=p},1860:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(1274)),p=l(a(1328));a(1280);var i=l(a(1346)),r=l(a(1347)),u=l(a(1364)),c=l(a(1468)),s=o.default.deepClone((0,i.default)("#lineWithMultipleBubbleData")),d=[o.default.deepClone(u.default),o.default.deepClone(c.default),o.default.deepClone(r.default)];t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),n.default.createElement(p.default,{graphID:"lineWithMultipleBubbleData",graphConfig:s,dataset:d}))}}}]);