(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1318:function(e,t,a){"use strict";var n=a(2),l=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(1326)),r=n(a(1320)),p=n(a(1317));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var u=function(e){return new Date(e).toLocaleString()},s=function(e){return e?c(e)?u(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var l=n.append("g").classed("section",!0),i=function(){var e=p[r],t=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),n=a[0],l=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(l)}))},r=0,p=Object.values(a);r<p.length;r++)i()},y=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,i=n.y,r=n.label,p=n.high,d=n.mid,v=n.low;o?(f(l,"X axis","".concat(c(o)?u(o):o)),f(l,"".concat(r.display),i)):(f(l,"X axis","".concat(p?s(p.x):d?s(d.x):v?s(v.x):"N/A")),p&&f(l,"High",s(p.y)),d&&f(l,"Mid",s(d.y)),v&&f(l,"Low",s(v.y)))},t.loadBubblePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,i=n.y,r=n.label,p=n.weight;o&&(f(l,"X axis","".concat(c(o)?u(o):o)),f(l,"year",i)),p&&f(l,"".concat(r.display),"".concat(p))},t.loadBarPopup=function(e,t,a,n){g();var l=y(e).append("g");n.forEach((function(e){return f(l,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){g();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),l=t.shape,o=t.label,i=t.color;p.default.notEmpty(l)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",l.options.scale,")")).attr("d",l.path.d).attr("fill",l.path.fill||r.default.DEFAULT_COLOR).attr("id",l.path.id),o.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){g();var n=y(e).append("g"),l=a.tasks,o=a.activities,i=a.events,r=a.actions;if(l&&l.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",p)}if(o&&o.length>0){var d=[];o.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",d)}if(i&&i.length>0){var u=[];i.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",u)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",s)}},t.loadTaskPopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.label,i=n.display,r=n.y,p=n.startDate,d=n.endDate,s=n.percentage;o&&f(l,"Task Name",i),f(l,"Track",r),f(l,"Start Date",u(p)),f(l,"End Date",u(d)),s&&f(l,"Percentage",s)},t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),n=t.label,l=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",u(l))},t.loadTimelinePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.x,i=(n.y,n.label),r=n.content;f(l,"X axis","".concat(c(o)?u(o):o)),f(l,"".concat(i.display),r)},t.loadPiePopup=function(e,t,a,n){g();var l=y(e).append("g"),o=n.label,i=n.value;f(l,o.display,i)}},1332:function(e,t,a){"use strict";a.r(t)},1343:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(43)),o=n(a(0)),i=n(a(4)),r=n(a(1316));a(1319),a(1332);var p=n(a(1317)),d={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},u=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,d=o.default.useState(),u=(0,l.default)(d,2),s=u[0],c=u[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){s||c(r.default.api.graph(t))}),[s,t]),o.default.useEffect((function(){if(s&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return s.graphContainer?s.loadContent(r.default.api.pairedResult(t)):""}),i[a]);e.push(n)})):a.forEach((function(e){s.loadContent(r.default.api.pairedResult(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,i]),o.default.useEffect((function(){if(s)if(v.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else v.current=!0}),[s,a,t]),o.default.createElement("div",{id:"".concat(n,"-canvasContainer")},o.default.createElement("div",{id:n}))};u.propTypes=d;t.default=u},1375:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,axis:{x:{label:"Data",lowerLimit:0,upperLimit:1e3},y:{label:"Paired",lowerLimit:0,upperLimit:200}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},1617:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1316)),o=a(1318),i={key:"value_region_dataset",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:l.default.helpers.SHAPES.DARK.TEAR_ALT,mid:l.default.helpers.SHAPES.DARK.RHOMBUS,low:l.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:l.default.helpers.COLORS.BLACK,mid:l.default.helpers.COLORS.PURPLE,low:l.default.helpers.COLORS.BLACK},onClick:o.loadPopup,values:[{high:{x:20,y:150,region:{start:90,end:150,color:l.default.helpers.COLORS.GREY}},mid:{x:20,y:40},low:{x:20,y:10,region:{start:5,end:30}}},{high:{x:80,y:100,region:{start:90,end:150,color:l.default.helpers.COLORS.GREY}},mid:{x:80,y:75},low:{x:80,y:50,region:{start:5,end:30}}},{high:{x:150,y:110,region:{start:120,end:190,color:l.default.helpers.COLORS.GREY}},mid:{x:150,y:70},low:{x:150,y:30,region:{start:5,end:30}}},{high:{x:175,y:160,region:{start:120,end:190,color:l.default.helpers.COLORS.GREY}},mid:{x:175,y:120},low:{x:175,y:100,region:{start:10,end:40}}},{high:{x:300,y:190,region:{start:120,end:190,color:l.default.helpers.COLORS.GREY}},mid:{x:300,y:90},low:{x:300,y:60,region:{start:10,end:40}}},{high:{x:560,y:150},mid:{x:560,y:40},low:{x:560,y:10,region:{start:10,end:40}}},{high:{x:800,y:180,region:{start:120,end:190,color:l.default.helpers.COLORS.GREY}},mid:{x:800,y:100},low:{x:800,y:100,region:{start:10,end:40}}}]};t.default=i},1995:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(1317)),i=n(a(1343));a(1323);var r=n(a(1375)),p=n(a(1617)),d=o.default.deepClone((0,r.default)("#simplePairedResultGraph")),u=[o.default.deepClone(p.default)];t.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),l.default.createElement(i.default,{graphID:"simplePairedResultGraph",graphConfig:d,dataset:u}))}}}]);