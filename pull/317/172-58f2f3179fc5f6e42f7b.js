(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1317:function(e,t,a){"use strict";var l=a(2),n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=l(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=o?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(l,i,p):l[i]=e[i]}l.default=e,a&&a.set(e,l);return l}(a(1320)),p=l(a(1319)),r=l(a(1316));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var u=function(e){return new Date(e).toLocaleString()},c=function(e){return e?s(e)?u(e):e:null},s=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var n=l.append("g").classed("section",!0),i=function(){var e=r[p],t=n.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),l=a[0],n=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(n)}))},p=0,r=Object.values(a);p<r.length;p++)i()},y=function(e,t){var a=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),i.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(t.pageX+5,"px")).style("top","".concat(t.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l,n,o){g();var i=y(e,o).append("g"),p=l.x,r=l.y,d=l.label,v=l.high,h=l.mid,m=l.low;p?(f(i,"X axis","".concat(s(p)?u(p):p)),f(i,"".concat(d.display),r)):(f(i,"X axis","".concat(v?c(v.x):h?c(h.x):m?c(m.x):"N/A")),v&&f(i,"High",c(v.y)),h&&f(i,"Mid",c(h.y)),m&&f(i,"Low",c(m.y)))};t.loadBubblePopup=function(e,t,a,l,n,o){g();var i=y(e,o).append("g"),p=l.x,r=l.y,d=l.label,c=l.weight;p&&(f(i,"X axis","".concat(s(p)?u(p):p)),f(i,"year",r)),c&&f(i,"".concat(d.display),"".concat(c))};t.loadBarPopup=function(e,t,a,l,n,o){g();var i=y(e,o).append("g");l.forEach((function(e){return f(i,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a,l,n,o){g();var i=y(e,o).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),d=t.shape,u=t.label,c=t.color;r.default.notEmpty(d)&&i.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",d.options.scale,")")).attr("d",d.path.d).attr("fill",d.path.fill||p.default.DEFAULT_COLOR).attr("id",d.path.id),u.display&&i.append("text").classed("popup-text",!0).attr("style","color: ".concat(c,";")).text("".concat(u.display)),u.secondaryDisplay&&i.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(u.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e,t,a){g(),y(void 0,a).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e,t,a){g();var l=function(e,t){var a=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),i.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(t.pageX-250,"px")).style("top","".concat(t.pageY+5,"px"))}(void 0,a);l.append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a,l,n){g();var o=y(e,n).append("g"),i=a.tasks,p=a.activities,r=a.events,d=a.actions;if(i&&i.length>0){var u=[];u.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(o,"Tasks",u)}if(p&&p.length>0){var c=[];p.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(o,"Activities",c)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(o,"Events",s)}if(d&&d.length>0){var f=[];d.forEach((function(e){f.push({name:e.key,values:e.values.join(", ")})})),v(o,"Actions",f)}};t.loadTaskPopup=function(e,t,a,l,n,o){g();var i=y(e,o).append("g"),p=l.label,r=l.display,d=l.y,c=l.startDate,s=l.endDate,v=l.percentage;p&&f(i,"Task Name",r),f(i,"Track",d),f(i,"Start Date",u(c)),f(i,"End Date",u(s)),v&&f(i,"Percentage",v)};t.loadDatelinePopup=function(e,t,a,l){g();var n=y(e,l).append("g"),o=t.label,i=t.value;o&&f(n,"Milestone",o.display),f(n,"Date",u(i))};t.loadTimelinePopup=function(e,t,a,l,n,o){g();var i=y(e,o).append("g"),p=l.x,r=(l.y,l.label),d=l.content;f(i,"X axis","".concat(s(p)?u(p):p)),f(i,"".concat(r.display),d)};t.loadPiePopup=function(e,t,a,l,n,o){g();var i=y(e,o).append("g"),p=l.label,r=l.value;f(i,p.display,r)}},1331:function(e,t,a){"use strict";a.r(t)},1341:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(43)),o=l(a(0)),i=l(a(4)),p=l(a(1315));a(1318),a(1331);var r=l(a(1316)),d={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},u=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,i=e.timeout,d=o.default.useState(),u=(0,n.default)(d,2),c=u[0],s=u[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){c||s(p.default.api.graph(t))}),[c,t]),o.default.useEffect((function(){if(c&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var l=setTimeout((function(){return c.graphContainer?c.loadContent(p.default.api.pairedResult(t)):""}),i[a]);e.push(l)})):a.forEach((function(e){c.loadContent(p.default.api.pairedResult(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[c,a,i]),o.default.useEffect((function(){if(c)if(v.current){c.config.axis.x.upperLimit=t.axis.x.upperLimit,c.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:r.default.deepClone(a.panData),eventline:r.default.deepClone(a.eventline)};c.reflowMultipleDatasets(e)}else v.current=!0}),[c,a,t]),o.default.createElement("div",{id:"".concat(l,"-canvasContainer")},o.default.createElement("div",{id:l}))};u.propTypes=d;var c=u;t.default=c},1373:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){return{bindTo:e,axis:{x:{label:"Data",lowerLimit:0,upperLimit:1e3},y:{label:"Paired",lowerLimit:0,upperLimit:200}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};t.default=l},1611:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1315)),o=a(1317),i={key:"simple_paired_result_data",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:n.default.helpers.SHAPES.DARK.TEAR_ALT,mid:n.default.helpers.SHAPES.DARK.RHOMBUS,low:n.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:n.default.helpers.COLORS.BLACK,mid:n.default.helpers.COLORS.PURPLE,low:n.default.helpers.COLORS.BLACK},onClick:o.loadPopup,regions:{high:[{axis:"y",start:140,end:220,color:"#c8cacb"}],low:[{axis:"y",start:20,end:70}]},values:[{high:{x:20,y:150},mid:{x:20,y:40},low:{x:20,y:10}},{high:{x:80,y:100},mid:{x:80,y:75},low:{x:80,y:50}},{high:{x:150,y:110},mid:{x:150,y:70},low:{x:150,y:30}},{high:{x:175,y:160},mid:{x:175,y:120},low:{x:175,y:100}},{high:{x:300,y:190},mid:{x:300,y:90},low:{x:300,y:60}},{high:{x:560,y:150},mid:{x:560,y:40},low:{x:560,y:10}},{high:{x:800,y:180},mid:{x:800,y:100},low:{x:800,y:100}}]};t.default=i},1974:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(1316)),i=l(a(1341));a(1323);var p=l(a(1373)),r=l(a(1611)),d=o.default.deepClone((0,p.default)("#simplePairedResultGraph")),u=[o.default.deepClone(r.default)];t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),n.default.createElement(i.default,{graphID:"simplePairedResultGraph",graphConfig:d,dataset:u}))}}}]);