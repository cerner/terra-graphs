(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1322:function(e,t,a){"use strict";var l=a(2),n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=l(a(43)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var i=o?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(l,p,i):l[p]=e[p]}return l.default=e,a&&a.set(e,l),l}(a(1330)),i=l(a(1324)),r=l(a(1321));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var d=function(e){return new Date(e).toLocaleString()},s=function(e){return e?c(e)?d(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var n=l.append("g").classed("section",!0),p=function(){var e=r[i],t=n.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),l=a[0],n=a[1],p=t.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(n)}))},i=0,r=Object.values(a);i<r.length;i++)p()},y=function(e){var t=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){p.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),p.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),p.select("#tooltip").style("left","".concat(p.event.pageX+5,"px")).style("top","".concat(p.event.pageY+5,"px"))},h=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l){h();var n=y(e).append("g"),o=l.x,p=l.y,i=l.label,r=l.high,u=l.mid,v=l.low;o?(f(n,"X axis","".concat(c(o)?d(o):o)),f(n,"".concat(i.display),p)):(f(n,"X axis","".concat(r?s(r.x):u?s(u.x):v?s(v.x):"N/A")),r&&f(n,"High",s(r.y)),u&&f(n,"Mid",s(u.y)),v&&f(n,"Low",s(v.y)))},t.loadBubblePopup=function(e,t,a,l){h();var n=y(e).append("g"),o=l.x,p=l.y,i=l.label,r=l.weight;o&&(f(n,"X axis","".concat(c(o)?d(o):o)),f(n,"year",p)),r&&f(n,"".concat(i.display),"".concat(r))},t.loadBarPopup=function(e,t,a,l){h();var n=y(e).append("g");l.forEach((function(e){return f(n,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){h();var l=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),n=t.shape,o=t.label,p=t.color;r.default.notEmpty(n)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",n.options.scale,")")).attr("d",n.path.d).attr("fill",n.path.fill||i.default.DEFAULT_COLOR).attr("id",n.path.id),o.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(p,";")).text("".concat(o.display)),o.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){h(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;h(),(a=document.querySelector("#tooltip"),p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){p.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),p.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),p.select("#tooltip").style("left","".concat(p.event.pageX-250,"px")).style("top","".concat(p.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){h();var l=y(e).append("g"),n=a.tasks,o=a.activities,p=a.events,i=a.actions;if(n&&n.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",r)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",u)}if(p&&p.length>0){var d=[];p.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",d)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",s)}},t.loadTaskPopup=function(e,t,a,l){h();var n=y(e).append("g"),o=l.label,p=l.display,i=l.y,r=l.startDate,u=l.endDate,s=l.percentage;o&&f(n,"Task Name",p),f(n,"Track",i),f(n,"Start Date",d(r)),f(n,"End Date",d(u)),s&&f(n,"Percentage",s)},t.loadDatelinePopup=function(e,t){h();var a=y(e).append("g"),l=t.label,n=t.value;l&&f(a,"Milestone",l.display),f(a,"Date",d(n))},t.loadTimelinePopup=function(e,t,a,l){h();var n=y(e).append("g"),o=l.x,p=(l.y,l.label),i=l.content;f(n,"X axis","".concat(c(o)?d(o):o)),f(n,"".concat(p.display),i)},t.loadPiePopup=function(e,t,a,l){h();var n=y(e).append("g"),o=l.label,p=l.value;f(n,o.display,p)}},1325:function(e,t,a){"use strict";a.r(t)},1336:function(e,t,a){"use strict";a.r(t)},1337:function(e,t,a){"use strict";a.r(t)},1376:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(4)),p=l(a(1320));a(1323),a(1325),a(1337),a(1336);var i={graphID:o.default.string.isRequired,graphConfig:o.default.object.isRequired,dataset:o.default.arrayOf(o.default.object),timeout:o.default.arrayOf(o.default.number)},r=function(e){var t,a=e.graphType.toUpperCase();switch(a=a.replaceAll(" ","")){case"LINE":t=p.default.api.line(e);break;case"SCATTER":t=p.default.api.scatter(e);break;case"PAIREDRESULT":t=p.default.api.pairedResult(e);break;case"BAR":t=p.default.api.bar(e);break;case"BUBBLESINGLEDATASET":t=p.default.api.bubbleSingleDataset(e);break;case"BUBBLEMULTIPLEDATASET":t=p.default.api.bubbleMultipleDataset(e);break;default:t=void 0}return t},u=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,o=e.timeout;return n.default.useEffect((function(){var e=p.default.api.graph(t),l=[];return a&&(o?a.forEach((function(t,a){var n=setTimeout((function(){return e.graphContainer?e.loadContent(r(t)):""}),o[a]);l.push(n)})):a.forEach((function(t){e.loadContent(r(t))}))),function(){l.forEach((function(e){clearTimeout(e)}))}}),[t,a,o]),n.default.createElement("div",{id:"".concat(l,"-canvasContainer")},n.default.createElement("div",{id:l}))};u.propTypes=i;t.default=u},1378:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:300},y:{show:!0,label:"Combination Set A",lowerLimit:0,upperLimit:20},y2:{show:!0,label:"Combination Set B",lowerLimit:40,upperLimit:180}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},1413:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),o=a(1322),p={key:"paired_result_dataset",graphType:"Paired Result",label:{high:{display:"Paired Result High"},mid:{display:"Paired Result Median"},low:{display:"Paired Result Low"}},yAxis:"y2",shape:{high:n.default.helpers.SHAPES.DARK.TEAR_ALT,mid:n.default.helpers.SHAPES.DARK.RHOMBUS,low:n.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:n.default.helpers.COLORS.BLACK,mid:n.default.helpers.COLORS.BLACK,low:n.default.helpers.COLORS.BLACK},onClick:o.loadPopup,values:[{high:{x:45,y:200},mid:{x:45,y:146},low:{x:45,y:75}},{high:{x:160,y:110},mid:{x:160,y:70},low:{x:160,y:30}},{high:{x:220,y:110},mid:{x:220,y:70},low:{x:220,y:30}}]};t.default=p},1522:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),o=a(1322),p={key:"scatter_dataset",graphType:"Scatter",label:{display:"Scatter Data Label"},shape:n.default.helpers.SHAPES.DARK.RHOMBUS,color:n.default.helpers.COLORS.BLUE,onClick:o.loadPopup,values:new Array(50).fill("").map((function(e,t){return{y:5*Math.sin(t)+10,x:10+5*t}}))};t.default=p},1912:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(1321)),p=l(a(1376));a(1327);var i=l(a(1378)),r=l(a(1522)),u=l(a(1413)),d=o.default.deepClone((0,i.default)("#pairedResultWithScatter")),s=[o.default.deepClone(r.default),o.default.deepClone(u.default)];t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),n.default.createElement(p.default,{graphID:"pairedResultWithScatter",graphConfig:d,dataset:s}))}}}]);