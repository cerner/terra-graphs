(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1323:function(e,t,a){"use strict";var l=a(2),n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=l(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(l,i,r):l[i]=e[i]}return l.default=e,a&&a.set(e,l),l}(a(1331)),r=l(a(1325)),p=l(a(1322));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var u=function(e){return new Date(e).toLocaleString()},s=function(e){return e?c(e)?u(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var n=l.append("g").classed("section",!0),i=function(){var e=p[r],t=n.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),l=a[0],n=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(n)}))},r=0,p=Object.values(a);r<p.length;r++)i()},y=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.x,i=l.y,r=l.label,p=l.high,d=l.mid,v=l.low;o?(f(n,"X axis","".concat(c(o)?u(o):o)),f(n,"".concat(r.display),i)):(f(n,"X axis","".concat(p?s(p.x):d?s(d.x):v?s(v.x):"N/A")),p&&f(n,"High",s(p.y)),d&&f(n,"Mid",s(d.y)),v&&f(n,"Low",s(v.y)))},t.loadBubblePopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.x,i=l.y,r=l.label,p=l.weight;o&&(f(n,"X axis","".concat(c(o)?u(o):o)),f(n,"year",i)),p&&f(n,"".concat(r.display),"".concat(p))},t.loadBarPopup=function(e,t,a,l){g();var n=y(e).append("g");l.forEach((function(e){return f(n,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){g();var l=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),n=t.shape,o=t.label,i=t.color;p.default.notEmpty(n)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",n.options.scale,")")).attr("d",n.path.d).attr("fill",n.path.fill||r.default.DEFAULT_COLOR).attr("id",n.path.id),o.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){g();var l=y(e).append("g"),n=a.tasks,o=a.activities,i=a.events,r=a.actions;if(n&&n.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",p)}if(o&&o.length>0){var d=[];o.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",d)}if(i&&i.length>0){var u=[];i.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",u)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",s)}},t.loadTaskPopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.label,i=l.display,r=l.y,p=l.startDate,d=l.endDate,s=l.percentage;o&&f(n,"Task Name",i),f(n,"Track",r),f(n,"Start Date",u(p)),f(n,"End Date",u(d)),s&&f(n,"Percentage",s)},t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),l=t.label,n=t.value;l&&f(a,"Milestone",l.display),f(a,"Date",u(n))},t.loadTimelinePopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.x,i=(l.y,l.label),r=l.content;f(n,"X axis","".concat(c(o)?u(o):o)),f(n,"".concat(i.display),r)},t.loadPiePopup=function(e,t,a,l){g();var n=y(e).append("g"),o=l.label,i=l.value;f(n,o.display,i)}},1337:function(e,t,a){"use strict";a.r(t)},1348:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(43)),o=l(a(0)),i=l(a(4)),r=l(a(1321));a(1324),a(1337);var p=l(a(1322)),d={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},u=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,i=e.timeout,d=o.default.useState(),u=(0,n.default)(d,2),s=u[0],c=u[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){s||c(r.default.api.graph(t))}),[s,t]),o.default.useEffect((function(){if(s&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var l=setTimeout((function(){return s.graphContainer?s.loadContent(r.default.api.pairedResult(t)):""}),i[a]);e.push(l)})):a.forEach((function(e){s.loadContent(r.default.api.pairedResult(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,i]),o.default.useEffect((function(){if(s)if(v.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else v.current=!0}),[s,a,t]),o.default.createElement("div",{id:"".concat(l,"-canvasContainer")},o.default.createElement("div",{id:l}))};u.propTypes=d;t.default=u},1380:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,axis:{x:{label:"Data",lowerLimit:0,upperLimit:1e3},y:{label:"Paired",lowerLimit:0,upperLimit:200}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},1622:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1321)),o=a(1323),i={key:"value_region_dataset",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:n.default.helpers.SHAPES.DARK.TEAR_ALT,mid:n.default.helpers.SHAPES.DARK.RHOMBUS,low:n.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:n.default.helpers.COLORS.BLACK,mid:n.default.helpers.COLORS.PURPLE,low:n.default.helpers.COLORS.BLACK},onClick:o.loadPopup,values:[{high:{x:20,y:150,region:{start:90,end:150,color:n.default.helpers.COLORS.GREY}},mid:{x:20,y:40},low:{x:20,y:10,region:{start:5,end:30}}},{high:{x:80,y:100,region:{start:90,end:150,color:n.default.helpers.COLORS.GREY}},mid:{x:80,y:75},low:{x:80,y:50,region:{start:5,end:30}}},{high:{x:150,y:110,region:{start:120,end:190,color:n.default.helpers.COLORS.GREY}},mid:{x:150,y:70},low:{x:150,y:30,region:{start:5,end:30}}},{high:{x:175,y:160,region:{start:120,end:190,color:n.default.helpers.COLORS.GREY}},mid:{x:175,y:120},low:{x:175,y:100,region:{start:10,end:40}}},{high:{x:300,y:190,region:{start:120,end:190,color:n.default.helpers.COLORS.GREY}},mid:{x:300,y:90},low:{x:300,y:60,region:{start:10,end:40}}},{high:{x:560,y:150},mid:{x:560,y:40},low:{x:560,y:10,region:{start:10,end:40}}},{high:{x:800,y:180,region:{start:120,end:190,color:n.default.helpers.COLORS.GREY}},mid:{x:800,y:100},low:{x:800,y:100,region:{start:10,end:40}}}]};t.default=i},2e3:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(1322)),i=l(a(1348));a(1328);var r=l(a(1380)),p=l(a(1622)),d=o.default.deepClone((0,r.default)("#simplePairedResultGraph")),u=[o.default.deepClone(p.default)];t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),n.default.createElement(i.default,{graphID:"simplePairedResultGraph",graphConfig:d,dataset:u}))}}}]);