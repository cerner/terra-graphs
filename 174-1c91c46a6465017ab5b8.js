(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1322:function(e,t,a){"use strict";var l=a(2),n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=l(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=o?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(l,i,p):l[i]=e[i]}return l.default=e,a&&a.set(e,l),l}(a(1330)),p=l(a(1324)),r=l(a(1321));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var d=function(e){return new Date(e).toLocaleString()},s=function(e){return e?c(e)?d(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},y=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var n=l.append("g").classed("section",!0),i=function(){var e=r[p],t=n.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),l=a[0],n=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(n)}))},p=0,r=Object.values(a);p<r.length;p++)i()},v=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l){g();var n=v(e).append("g"),o=l.x,i=l.y,p=l.label,r=l.high,u=l.mid,y=l.low;o?(f(n,"X axis","".concat(c(o)?d(o):o)),f(n,"".concat(p.display),i)):(f(n,"X axis","".concat(r?s(r.x):u?s(u.x):y?s(y.x):"N/A")),r&&f(n,"High",s(r.y)),u&&f(n,"Mid",s(u.y)),y&&f(n,"Low",s(y.y)))},t.loadBubblePopup=function(e,t,a,l){g();var n=v(e).append("g"),o=l.x,i=l.y,p=l.label,r=l.weight;o&&(f(n,"X axis","".concat(c(o)?d(o):o)),f(n,"year",i)),r&&f(n,"".concat(p.display),"".concat(r))},t.loadBarPopup=function(e,t,a,l){g();var n=v(e).append("g");l.forEach((function(e){return f(n,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){g();var l=v(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),n=t.shape,o=t.label,i=t.color;r.default.notEmpty(n)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",n.options.scale,")")).attr("d",n.path.d).attr("fill",n.path.fill||p.default.DEFAULT_COLOR).attr("id",n.path.id),o.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){g(),v().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){g();var l=v(e).append("g"),n=a.tasks,o=a.activities,i=a.events,p=a.actions;if(n&&n.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(l,"Tasks",r)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(l,"Activities",u)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),y(l,"Events",d)}if(p&&p.length>0){var s=[];p.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),y(l,"Actions",s)}},t.loadTaskPopup=function(e,t,a,l){g();var n=v(e).append("g"),o=l.label,i=l.display,p=l.y,r=l.startDate,u=l.endDate,s=l.percentage;o&&f(n,"Task Name",i),f(n,"Track",p),f(n,"Start Date",d(r)),f(n,"End Date",d(u)),s&&f(n,"Percentage",s)},t.loadDatelinePopup=function(e,t){g();var a=v(e).append("g"),l=t.label,n=t.value;l&&f(a,"Milestone",l.display),f(a,"Date",d(n))},t.loadTimelinePopup=function(e,t,a,l){g();var n=v(e).append("g"),o=l.x,i=(l.y,l.label),p=l.content;f(n,"X axis","".concat(c(o)?d(o):o)),f(n,"".concat(i.display),p)},t.loadPiePopup=function(e,t,a,l){g();var n=v(e).append("g"),o=l.label,i=l.value;f(n,o.display,i)}},1336:function(e,t,a){"use strict";a.r(t)},1347:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(43)),o=l(a(0)),i=l(a(4)),p=l(a(1320));a(1323),a(1336);var r=l(a(1321)),u={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},d=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,i=e.timeout,u=o.default.useState(),d=(0,n.default)(u,2),s=d[0],c=d[1],f=o.default.useRef(),y=o.default.useRef();return o.default.useEffect((function(){s||c(p.default.api.graph(t))}),[s,t]),o.default.useEffect((function(){if(s&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var l=setTimeout((function(){return s.graphContainer?s.loadContent(p.default.api.pairedResult(t)):""}),i[a]);e.push(l)})):a.forEach((function(e){s.loadContent(p.default.api.pairedResult(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,i]),o.default.useEffect((function(){if(s)if(y.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:r.default.deepClone(a.panData),eventline:r.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else y.current=!0}),[s,a,t]),o.default.createElement("div",{id:"".concat(l,"-canvasContainer")},o.default.createElement("div",{id:l}))};d.propTypes=u;t.default=d},1379:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,axis:{x:{label:"Data",lowerLimit:0,upperLimit:1e3},y:{label:"Paired",lowerLimit:0,upperLimit:200}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},1621:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),o=a(1322),i={key:"simple_paired_result_data",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:n.default.helpers.SHAPES.DARK.TEAR_ALT,mid:n.default.helpers.SHAPES.DARK.RHOMBUS,low:n.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:n.default.helpers.COLORS.BLACK,mid:n.default.helpers.COLORS.PURPLE,low:n.default.helpers.COLORS.BLACK},onClick:o.loadPopup,regions:{high:[{axis:"y",start:140,end:220,color:"#c8cacb"}],low:[{axis:"y",start:20,end:70}]},values:[{high:{x:20,y:150},mid:{x:20,y:40},low:{x:20,y:10}},{high:{x:80,y:100},mid:{x:80,y:75},low:{x:80,y:50}},{high:{x:150,y:110},mid:{x:150,y:70},low:{x:150,y:30}},{high:{x:175,y:160},mid:{x:175,y:120},low:{x:175,y:100}},{high:{x:300,y:190},mid:{x:300,y:90},low:{x:300,y:60}},{high:{x:560,y:150},mid:{x:560,y:40},low:{x:560,y:10}},{high:{x:800,y:180},mid:{x:800,y:100},low:{x:800,y:100}}]};t.default=i},2001:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(1321)),i=l(a(1347));a(1327);var p=l(a(1379)),r=l(a(1621)),u=o.default.deepClone((0,p.default)("#simplePairedResultGraph")),d=[o.default.deepClone(r.default)];t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),n.default.createElement(i.default,{graphID:"simplePairedResultGraph",graphConfig:u,dataset:d}))}}}]);