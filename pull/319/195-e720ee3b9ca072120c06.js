(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1317:function(e,t,a){"use strict";var n=a(2),l=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=o?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(n,i,p):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(1325)),p=n(a(1319)),r=n(a(1316));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?s(e)?c(e):e:null},s=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var l=n.append("g").classed("section",!0),i=function(){var e=r[p],t=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),n=a[0],l=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(l)}))},p=0,r=Object.values(a);p<r.length;p++)i()},g=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},y=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){y();var l=g(e).append("g"),o=n.x,i=n.y,p=n.label,r=n.high,u=n.mid,v=n.low;o?(f(l,"X axis","".concat(s(o)?c(o):o)),f(l,"".concat(p.display),i)):(f(l,"X axis","".concat(r?d(r.x):u?d(u.x):v?d(v.x):"N/A")),r&&f(l,"High",d(r.y)),u&&f(l,"Mid",d(u.y)),v&&f(l,"Low",d(v.y)))};t.loadBubblePopup=function(e,t,a,n){y();var l=g(e).append("g"),o=n.x,i=n.y,p=n.label,r=n.weight;o&&(f(l,"X axis","".concat(s(o)?c(o):o)),f(l,"year",i)),r&&f(l,"".concat(p.display),"".concat(r))};t.loadBarPopup=function(e,t,a,n){y();var l=g(e).append("g");n.forEach((function(e){return f(l,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){y();var n=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),l=t.shape,o=t.label,i=t.color;r.default.notEmpty(l)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",l.options.scale,")")).attr("d",l.path.d).attr("fill",l.path.fill||p.default.DEFAULT_COLOR).attr("id",l.path.id),o.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){y(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;y(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){y();var n=g(e).append("g"),l=a.tasks,o=a.activities,i=a.events,p=a.actions;if(l&&l.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",r)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",u)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",c)}if(p&&p.length>0){var d=[];p.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",d)}};t.loadTaskPopup=function(e,t,a,n){y();var l=g(e).append("g"),o=n.label,i=n.display,p=n.y,r=n.startDate,u=n.endDate,d=n.percentage;o&&f(l,"Task Name",i),f(l,"Track",p),f(l,"Start Date",c(r)),f(l,"End Date",c(u)),d&&f(l,"Percentage",d)};t.loadDatelinePopup=function(e,t){y();var a=g(e).append("g"),n=t.label,l=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",c(l))};t.loadTimelinePopup=function(e,t,a,n){y();var l=g(e).append("g"),o=n.x,i=(n.y,n.label),p=n.content;f(l,"X axis","".concat(s(o)?c(o):o)),f(l,"".concat(i.display),p)};t.loadPiePopup=function(e,t,a,n){y();var l=g(e).append("g"),o=n.label,i=n.value;f(l,o.display,i)}},1370:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(43)),o=n(a(0)),i=n(a(4)),p=n(a(1315));a(1318);var r=n(a(1316)),u={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},c=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,u=o.default.useState(),c=(0,l.default)(u,2),d=c[0],s=c[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){d||s(p.default.api.graph(t))}),[d,t]),o.default.useEffect((function(){if(d&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return d.graphContainer?d.loadContent(p.default.api.bubbleSingleDataset(t)):""}),i[a]);e.push(n)})):a.forEach((function(e){d.loadContent(p.default.api.bubbleSingleDataset(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[d,a,i]),o.default.useEffect((function(){if(d)if(v.current){d.config.axis.x.upperLimit=t.axis.x.upperLimit,d.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:r.default.deepClone(a.panData),eventline:r.default.deepClone(a.eventline)};d.reflowMultipleDatasets(e)}else v.current=!0}),[d,a,t]),o.default.createElement("div",{id:"".concat(n,"-canvasContainer")},o.default.createElement("div",{id:n}))};c.propTypes=u;var d=c;t.default=d},1375:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1315)),o=function(e){return{bindTo:e,axis:{x:{type:l.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}},pan:{enabled:!0}}};t.default=o},1504:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(1317),o=n(a(1315)),i={key:"bubble_dynamic_panning_data",label:{display:"Bubble set A"},onClick:l.loadBubblePopup,color:o.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:70},{x:new Date(2016,0,1,15,45).toISOString(),y:120},{x:new Date(2016,0,1,10,30).toISOString(),y:160},{x:new Date(2016,0,1,18,0).toISOString(),y:180}],yAxis:"y",showShapes:!1};t.default=i},1505:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(1317),o=n(a(1315)),i={key:"bubble_dynamic_panning_data",label:{display:"Bubble set A"},onClick:l.loadBubblePopup,color:o.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:20},{x:new Date(2016,0,1,15,45).toISOString(),y:40},{x:new Date(2016,0,1,10,30).toISOString(),y:50},{x:new Date(2016,0,1,18,0).toISOString(),y:60}],yAxis:"y",showShapes:!1};t.default=i},1893:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(43)),o=n(a(0)),i=n(a(78)),p=n(a(1316)),r=n(a(1370));a(1322);var u=n(a(1375)),c=n(a(1504)),d=n(a(1505)),s={initial:0,factor:3,dataset:[p.default.deepClone(c.default)],graphConfig:p.default.deepClone((0,u.default)("#BubbleDynamicDataPanning"))},f=function(){var e=o.default.useReducer((function(e,t){var a,n=p.default.deepClone(e.graphConfig),l=[p.default.deepClone(d.default)];switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return n.axis.x.lowerLimit=new Date(2016,0,1,a).toISOString(),n.axis.x.upperLimit=new Date(2016,0,2,a).toISOString(),{initial:a,factor:e.factor,dataset:{panData:l},graphConfig:p.default.deepClone(n)}}),s),t=(0,l.default)(e,2),a=t[0],n=t[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement(i.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),o.default.createElement(i.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),o.default.createElement(r.default,{graphID:"BubbleDynamicDataPanning",graphConfig:a.graphConfig,dataset:a.dataset}))};t.default=f}}]);