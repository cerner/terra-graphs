(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1317:function(e,t,a){"use strict";var n=a(2),l=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=n(a(43)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var i=o?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(n,p,i):n[p]=e[p]}n.default=e,a&&a.set(e,n);return n}(a(1325)),i=n(a(1319)),r=n(a(1316));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},s=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var l=n.append("g").classed("section",!0),p=function(){var e=r[i],t=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),n=a[0],l=a[1],p=t.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(l)}))},i=0,r=Object.values(a);i<r.length;i++)p()},y=function(e){var t=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){p.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),p.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),p.select("#tooltip").style("left","".concat(p.event.pageX+5,"px")).style("top","".concat(p.event.pageY+5,"px"))},b=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){b();var l=y(e).append("g"),o=n.x,p=n.y,i=n.label,r=n.high,u=n.mid,v=n.low;o?(f(l,"X axis","".concat(d(o)?c(o):o)),f(l,"".concat(i.display),p)):(f(l,"X axis","".concat(r?s(r.x):u?s(u.x):v?s(v.x):"N/A")),r&&f(l,"High",s(r.y)),u&&f(l,"Mid",s(u.y)),v&&f(l,"Low",s(v.y)))};t.loadBubblePopup=function(e,t,a,n){b();var l=y(e).append("g"),o=n.x,p=n.y,i=n.label,r=n.weight;o&&(f(l,"X axis","".concat(d(o)?c(o):o)),f(l,"year",p)),r&&f(l,"".concat(i.display),"".concat(r))};t.loadBarPopup=function(e,t,a,n){b();var l=y(e).append("g");n.forEach((function(e){return f(l,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){b();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),l=t.shape,o=t.label,p=t.color;r.default.notEmpty(l)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",l.options.scale,")")).attr("d",l.path.d).attr("fill",l.path.fill||i.default.DEFAULT_COLOR).attr("id",l.path.id),o.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(p,";")).text("".concat(o.display)),o.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;b(),(a=document.querySelector("#tooltip"),p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){p.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),p.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),p.select("#tooltip").style("left","".concat(p.event.pageX-250,"px")).style("top","".concat(p.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){b();var n=y(e).append("g"),l=a.tasks,o=a.activities,p=a.events,i=a.actions;if(l&&l.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",r)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",u)}if(p&&p.length>0){var c=[];p.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",c)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",s)}};t.loadTaskPopup=function(e,t,a,n){b();var l=y(e).append("g"),o=n.label,p=n.display,i=n.y,r=n.startDate,u=n.endDate,s=n.percentage;o&&f(l,"Task Name",p),f(l,"Track",i),f(l,"Start Date",c(r)),f(l,"End Date",c(u)),s&&f(l,"Percentage",s)};t.loadDatelinePopup=function(e,t){b();var a=y(e).append("g"),n=t.label,l=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",c(l))};t.loadTimelinePopup=function(e,t,a,n){b();var l=y(e).append("g"),o=n.x,p=(n.y,n.label),i=n.content;f(l,"X axis","".concat(d(o)?c(o):o)),f(l,"".concat(p.display),i)};t.loadPiePopup=function(e,t,a,n){b();var l=y(e).append("g"),o=n.label,p=n.value;f(l,o.display,p)}},1320:function(e,t,a){"use strict";a.r(t)},1331:function(e,t,a){"use strict";a.r(t)},1332:function(e,t,a){"use strict";a.r(t)},1371:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(4)),p=n(a(1315));a(1318),a(1320),a(1332),a(1331);var i={graphID:o.default.string.isRequired,graphConfig:o.default.object.isRequired,dataset:o.default.arrayOf(o.default.object),timeout:o.default.arrayOf(o.default.number)},r=function(e){var t,a=e.graphType.toUpperCase();switch(a=a.replaceAll(" ","")){case"LINE":t=p.default.api.line(e);break;case"SCATTER":t=p.default.api.scatter(e);break;case"PAIREDRESULT":t=p.default.api.pairedResult(e);break;case"BAR":t=p.default.api.bar(e);break;case"BUBBLESINGLEDATASET":t=p.default.api.bubbleSingleDataset(e);break;case"BUBBLEMULTIPLEDATASET":t=p.default.api.bubbleMultipleDataset(e);break;default:t=void 0}return t},u=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,o=e.timeout;return l.default.useEffect((function(){var e=p.default.api.graph(t),n=[];return a&&(o?a.forEach((function(t,a){var l=setTimeout((function(){return e.graphContainer?e.loadContent(r(t)):""}),o[a]);n.push(l)})):a.forEach((function(t){e.loadContent(r(t))}))),function(){n.forEach((function(e){clearTimeout(e)}))}}),[t,a,o]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};u.propTypes=i;var c=u;t.default=c},1388:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Combination Set A",lowerLimit:0,upperLimit:35},y2:{show:!0,label:"Combination Set B",lowerLimit:0,upperLimit:30,padDomain:!1}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};t.default=n},1389:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1315)),o=a(1317),p={key:"line_dataset",label:{display:"Line Data Label"},graphType:"Line",color:l.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:new Array(7).fill("").map((function(e,t){return{y:Math.sin(t)*Math.PI+20,x:t+.5}}))};t.default=p},1407:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1315)),o=a(1317),p={key:"bubble_dataset_1",label:{display:"Bubble Data Label 1"},graphType:"BubbleMultipleDataset",color:l.default.helpers.COLORS.GREEN,onClick:o.loadPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}]};t.default=p},1904:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(1316)),p=n(a(1371));a(1322);var i=n(a(1388)),r=n(a(1389)),u=n(a(1407)),c=o.default.deepClone((0,i.default)("#lineWithSingleBubbleData")),s=[o.default.deepClone(u.default),o.default.deepClone(r.default)];t.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),l.default.createElement(p.default,{graphID:"lineWithSingleBubbleData",graphConfig:c,dataset:s}))}}}]);