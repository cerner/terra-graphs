(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1275:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=l?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(1283)),r=n(a(1277)),p=n(a(1274));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},c=function(e){return e?d(e)?s(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),i=function(){var e=p[r],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(o)}))},r=0,p=Object.values(a);r<p.length;r++)i()},y=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,i=n.y,r=n.label,p=n.high,u=n.mid,v=n.low;l?(f(o,"X axis","".concat(d(l)?s(l):l)),f(o,"".concat(r.display),i)):(f(o,"X axis","".concat(p?c(p.x):u?c(u.x):v?c(v.x):"N/A")),p&&f(o,"High",c(p.y)),u&&f(o,"Mid",c(u.y)),v&&f(o,"Low",c(v.y)))};t.loadBubblePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,i=n.y,r=n.label,p=n.weight;l&&(f(o,"X axis","".concat(d(l)?s(l):l)),f(o,"year",i)),p&&f(o,"".concat(r.display),"".concat(p))};t.loadBarPopup=function(e,t,a,n){g();var o=y(e).append("g");n.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){g();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,i=t.color;p.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||r.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(l.display)),l.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){g();var n=y(e).append("g"),o=a.tasks,l=a.activities,i=a.events,r=a.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",p)}if(l&&l.length>0){var u=[];l.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",u)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",s)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",c)}};t.loadTaskPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,i=n.display,r=n.y,p=n.startDate,u=n.endDate,c=n.percentage;l&&f(o,"Task Name",i),f(o,"Track",r),f(o,"Start Date",s(p)),f(o,"End Date",s(u)),c&&f(o,"Percentage",c)};t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),n=t.label,o=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",s(o))};t.loadTimelinePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,i=(n.y,n.label),r=n.content;f(o,"X axis","".concat(d(l)?s(l):l)),f(o,"".concat(i.display),r)};t.loadPiePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,i=n.value;f(o,l.display,i)}},1290:function(e,t,a){"use strict";a.r(t)},1298:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),i=n(a(4)),r=n(a(1273));a(1276),a(1290);var p=n(a(1274)),u={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},s=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,u=l.default.useState(),s=(0,o.default)(u,2),c=s[0],d=s[1],f=l.default.useRef(),v=l.default.useRef();return l.default.useEffect((function(){c||d(r.default.api.graph(t))}),[c,t]),l.default.useEffect((function(){if(c&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return c.graphContainer?c.loadContent(r.default.api.bar(t)):""}),i[a]);e.push(n)})):a.forEach((function(e){c.loadContent(r.default.api.bar(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[c,a,i]),l.default.useEffect((function(){if(c)if(v.current){c.config.axis.x.upperLimit=t.axis.x.upperLimit,c.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};c.reflowMultipleDatasets(e)}else v.current=!0}),[c,a,t]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};s.propTypes=u;var c=s;t.default=c},1305:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),l=a(1275),i={key:"dynamic_dataset_1",label:{display:"Data Label 1"},color:o.default.helpers.COLORS.BLUE,onClick:l.loadBarPopup,values:[{x:new Date(2016,0,1,3).toISOString(),y:15},{x:new Date(2016,0,1,6).toISOString(),y:19},{x:new Date(2016,0,1,9).toISOString(),y:10},{x:new Date(2016,0,1,12).toISOString(),y:13},{x:new Date(2016,0,1,15).toISOString(),y:15}]};t.default=i},1450:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),l=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Data",lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),ticks:{values:[new Date(2016,0,1,3).toISOString(),new Date(2016,0,1,6).toISOString(),new Date(2016,0,1,9).toISOString(),new Date(2016,0,1,12).toISOString(),new Date(2016,0,1,15).toISOString()],format:"%H"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:20},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:20}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0,eventline:[{color:o.default.helpers.COLORS.GREY,style:{strokeDashArray:"4,4"},value:new Date(2016,0,1,6).toISOString()},{color:o.default.helpers.COLORS.BLACK,style:{strokeDashArray:"2,2"},value:new Date(2016,0,1,12).toISOString()}],clickPassThrough:{dateline:!1}}};t.default=l},1843:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(1274)),i=n(a(1298));a(1280);var r=n(a(1450)),p=n(a(1305)),u=l.default.deepClone((0,r.default)("#timeseriesBarWithEventline")),s=[l.default.deepClone(p.default)];t.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement(i.default,{graphID:"timeseriesBarWithEventline",graphConfig:u,dataset:s}))}}}]);