(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{1317:function(e,t,a){"use strict";var n=a(2),l=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=n(a(43)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var i=o?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(n,p,i):n[p]=e[p]}n.default=e,a&&a.set(e,n);return n}(a(1320)),i=n(a(1319)),r=n(a(1316));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?s(e)?c(e):e:null},s=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var l=n.append("g").classed("section",!0),p=function(){var e=r[i],t=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),n=a[0],l=a[1],p=t.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(l)}))},i=0,r=Object.values(a);i<r.length;i++)p()},g=function(e,t){var a=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){p.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),p.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),p.select("#tooltip").style("left","".concat(t.pageX+5,"px")).style("top","".concat(t.pageY+5,"px"))},y=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n,l,o){y();var p=g(e,o).append("g"),i=n.x,r=n.y,u=n.label,v=n.high,b=n.mid,m=n.low;i?(f(p,"X axis","".concat(s(i)?c(i):i)),f(p,"".concat(u.display),r)):(f(p,"X axis","".concat(v?d(v.x):b?d(b.x):m?d(m.x):"N/A")),v&&f(p,"High",d(v.y)),b&&f(p,"Mid",d(b.y)),m&&f(p,"Low",d(m.y)))};t.loadBubblePopup=function(e,t,a,n,l,o){y();var p=g(e,o).append("g"),i=n.x,r=n.y,u=n.label,d=n.weight;i&&(f(p,"X axis","".concat(s(i)?c(i):i)),f(p,"year",r)),d&&f(p,"".concat(u.display),"".concat(d))};t.loadBarPopup=function(e,t,a,n,l,o){y();var p=g(e,o).append("g");n.forEach((function(e){return f(p,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a,n,l,o){y();var p=g(e,o).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),u=t.shape,c=t.label,d=t.color;r.default.notEmpty(u)&&p.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",u.options.scale,")")).attr("d",u.path.d).attr("fill",u.path.fill||i.default.DEFAULT_COLOR).attr("id",u.path.id),c.display&&p.append("text").classed("popup-text",!0).attr("style","color: ".concat(d,";")).text("".concat(c.display)),c.secondaryDisplay&&p.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(c.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e,t,a){y(),g(void 0,a).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e,t,a){y();var n=function(e,t){var a=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){p.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),p.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),p.select("#tooltip").style("left","".concat(t.pageX-250,"px")).style("top","".concat(t.pageY+5,"px"))}(void 0,a);n.append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a,n,l){y();var o=g(e,l).append("g"),p=a.tasks,i=a.activities,r=a.events,u=a.actions;if(p&&p.length>0){var c=[];c.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(o,"Tasks",c)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(o,"Activities",d)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(o,"Events",s)}if(u&&u.length>0){var f=[];u.forEach((function(e){f.push({name:e.key,values:e.values.join(", ")})})),v(o,"Actions",f)}};t.loadTaskPopup=function(e,t,a,n,l,o){y();var p=g(e,o).append("g"),i=n.label,r=n.display,u=n.y,d=n.startDate,s=n.endDate,v=n.percentage;i&&f(p,"Task Name",r),f(p,"Track",u),f(p,"Start Date",c(d)),f(p,"End Date",c(s)),v&&f(p,"Percentage",v)};t.loadDatelinePopup=function(e,t,a,n){y();var l=g(e,n).append("g"),o=t.label,p=t.value;o&&f(l,"Milestone",o.display),f(l,"Date",c(p))};t.loadTimelinePopup=function(e,t,a,n,l,o){y();var p=g(e,o).append("g"),i=n.x,r=(n.y,n.label),u=n.content;f(p,"X axis","".concat(s(i)?c(i):i)),f(p,"".concat(r.display),u)};t.loadPiePopup=function(e,t,a,n,l,o){y();var p=g(e,o).append("g"),i=n.label,r=n.value;f(p,i.display,r)}},1350:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1315)),o=function(e){return{bindTo:e,axis:{x:{type:l.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}}}};t.default=o},1369:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(43)),o=n(a(0)),p=n(a(4)),i=n(a(1315));a(1318);var r=n(a(1316)),u={graphID:p.default.string.isRequired,graphConfig:p.default.object.isRequired,dataset:p.default.arrayOf(p.default.object),timeout:p.default.arrayOf(p.default.number)},c=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,p=e.timeout,u=o.default.useState(),c=(0,l.default)(u,2),d=c[0],s=c[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){d||s(i.default.api.graph(t))}),[d,t]),o.default.useEffect((function(){if(d&&!f.current){var e=[];return a&&(p?a.forEach((function(t,a){var n=setTimeout((function(){return d.graphContainer?d.loadContent(i.default.api.bubbleSingleDataset(t)):""}),p[a]);e.push(n)})):a.forEach((function(e){d.loadContent(i.default.api.bubbleSingleDataset(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[d,a,p]),o.default.useEffect((function(){if(d)if(v.current){d.config.axis.x.upperLimit=t.axis.x.upperLimit,d.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:r.default.deepClone(a.panData),eventline:r.default.deepClone(a.eventline)};d.reflowMultipleDatasets(e)}else v.current=!0}),[d,a,t]),o.default.createElement("div",{id:"".concat(n,"-canvasContainer")},o.default.createElement("div",{id:n}))};c.propTypes=u;var d=c;t.default=d},1503:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(1317),o={key:"bubble_weight_based_dataset",label:{display:"Amount"},color:n(a(1315)).default.helpers.COLORS.BLUE,onClick:l.loadBubblePopup,weight:{min:40,max:450},values:[{x:new Date(2016,0,1,11,0).toISOString(),y:60,weight:70},{x:new Date(2016,0,1,9,0).toISOString(),y:75,weight:180},{x:new Date(2016,0,1,19,30).toISOString(),y:165,weight:220},{x:new Date(2016,0,1,15,0).toISOString(),y:120,weight:340}],yAxis:"y"};t.default=o},1880:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(1316)),p=n(a(1369));a(1323);var i=n(a(1350)),r=n(a(1503)),u=o.default.deepClone((0,i.default)("#weightBasedBubbleGraph")),c=[o.default.deepClone(r.default)];t.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),l.default.createElement(p.default,{graphID:"weightBasedBubbleGraph",graphConfig:u,dataset:c}))}}}]);