(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1318:function(e,t,a){"use strict";var l=a(2),n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=l(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=o?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(l,i,p):l[i]=e[i]}l.default=e,a&&a.set(e,l);return l}(a(1326)),p=l(a(1320)),r=l(a(1317));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var n=l.append("g").classed("section",!0),i=function(){var e=r[p],t=n.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),l=a[0],n=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(n)}))},p=0,r=Object.values(a);p<r.length;p++)i()},y=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.x,i=l.y,p=l.label,r=l.high,c=l.mid,v=l.low;o?(f(n,"X axis","".concat(u(o)?s(o):o)),f(n,"".concat(p.display),i)):(f(n,"X axis","".concat(r?d(r.x):c?d(c.x):v?d(v.x):"N/A")),r&&f(n,"High",d(r.y)),c&&f(n,"Mid",d(c.y)),v&&f(n,"Low",d(v.y)))},t.loadBubblePopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.x,i=l.y,p=l.label,r=l.weight;o&&(f(n,"X axis","".concat(u(o)?s(o):o)),f(n,"year",i)),r&&f(n,"".concat(p.display),"".concat(r))},t.loadBarPopup=function(e,t,a,l){g();var n=y(e).append("g");l.forEach((function(e){return f(n,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){g();var l=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),n=t.shape,o=t.label,i=t.color;r.default.notEmpty(n)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",n.options.scale,")")).attr("d",n.path.d).attr("fill",n.path.fill||p.default.DEFAULT_COLOR).attr("id",n.path.id),o.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){g();var l=y(e).append("g"),n=a.tasks,o=a.activities,i=a.events,p=a.actions;if(n&&n.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",r)}if(o&&o.length>0){var c=[];o.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",c)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",s)}if(p&&p.length>0){var d=[];p.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",d)}},t.loadTaskPopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.label,i=l.display,p=l.y,r=l.startDate,c=l.endDate,d=l.percentage;o&&f(n,"Task Name",i),f(n,"Track",p),f(n,"Start Date",s(r)),f(n,"End Date",s(c)),d&&f(n,"Percentage",d)},t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),l=t.label,n=t.value;l&&f(a,"Milestone",l.display),f(a,"Date",s(n))},t.loadTimelinePopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.x,i=(l.y,l.label),p=l.content;f(n,"X axis","".concat(u(o)?s(o):o)),f(n,"".concat(i.display),p)},t.loadPiePopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.label,i=l.value;f(n,o.display,i)}},1321:function(e,t,a){"use strict";a.r(t)},1332:function(e,t,a){"use strict";a.r(t)},1333:function(e,t,a){"use strict";a.r(t)},1372:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(4)),i=l(a(1316));a(1319),a(1321),a(1333),a(1332);var p={graphID:o.default.string.isRequired,graphConfig:o.default.object.isRequired,dataset:o.default.arrayOf(o.default.object),timeout:o.default.arrayOf(o.default.number)},r=function(e){var t,a=e.graphType.toUpperCase();switch(a=a.replaceAll(" ","")){case"LINE":t=i.default.api.line(e);break;case"SCATTER":t=i.default.api.scatter(e);break;case"PAIREDRESULT":t=i.default.api.pairedResult(e);break;case"BAR":t=i.default.api.bar(e);break;case"BUBBLESINGLEDATASET":t=i.default.api.bubbleSingleDataset(e);break;case"BUBBLEMULTIPLEDATASET":t=i.default.api.bubbleMultipleDataset(e);break;default:t=void 0}return t},c=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,o=e.timeout;return n.default.useEffect((function(){var e=i.default.api.graph(t),l=[];return a&&(o?a.forEach((function(t,a){var n=setTimeout((function(){return e.graphContainer?e.loadContent(r(t)):""}),o[a]);l.push(n)})):a.forEach((function(t){e.loadContent(r(t))}))),function(){l.forEach((function(e){clearTimeout(e)}))}}),[t,a,o]),n.default.createElement("div",{id:"".concat(l,"-canvasContainer")},n.default.createElement("div",{id:l}))};c.propTypes=p;t.default=c},1374:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:300},y:{show:!0,label:"Combination Set A",lowerLimit:0,upperLimit:20},y2:{show:!0,label:"Combination Set B",lowerLimit:40,upperLimit:180}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},1518:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1316)),o=a(1318),i={key:"identical_region_line_dataset",graphType:"Line",label:{display:"Line Data Label"},shape:n.default.helpers.SHAPES.DARK.RHOMBUS,color:n.default.helpers.COLORS.BLUE,onClick:o.loadPopup,values:new Array(50).fill("").map((function(e,t){return{y:5*Math.sin(t)+10,x:10+5*t}})),regions:[{axis:"y",start:120,end:180,color:"#c8cacb"}]};t.default=i},1519:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1316)),o=a(1318),i={key:"identical_region_paired_result_dataset",graphType:"Paired Result",label:{high:{display:"Paired Result High"},mid:{display:"Paired Result Median"},low:{display:"Paired Result Low"}},yAxis:"y",shape:{high:n.default.helpers.SHAPES.DARK.TEAR_ALT,mid:n.default.helpers.SHAPES.DARK.RHOMBUS,low:n.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:n.default.helpers.COLORS.BLACK,mid:n.default.helpers.COLORS.BLACK,low:n.default.helpers.COLORS.BLACK},onClick:o.loadPopup,values:[{high:{x:45,y:200},mid:{x:45,y:146},low:{x:45,y:75}},{high:{x:160,y:110},mid:{x:160,y:70},low:{x:160,y:30}},{high:{x:220,y:110},mid:{x:220,y:70},low:{x:220,y:30}}],regions:{high:[{axis:"y",start:120,end:180,color:"#c8cacb"}],mid:[{axis:"y",start:120,end:180,color:"#c8cacb"}],low:[{axis:"y",start:120,end:180,color:"#c8cacb"}]}};t.default=i},1907:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(1317)),i=l(a(1372));a(1323);var p=l(a(1374)),r=l(a(1518)),c=l(a(1519)),s=o.default.deepClone((0,p.default)("#lineWithPairedResultRegion")),d=[o.default.deepClone(r.default),o.default.deepClone(c.default)];t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),n.default.createElement(i.default,{graphID:"lineWithPairedResultRegion",graphConfig:s,dataset:d}))}}}]);