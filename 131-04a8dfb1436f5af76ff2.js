(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1322:function(e,t,a){"use strict";var l=a(2),i=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=l(a(43)),n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var p=o?Object.getOwnPropertyDescriptor(e,n):null;p&&(p.get||p.set)?Object.defineProperty(l,n,p):l[n]=e[n]}return l.default=e,a&&a.set(e,l),l}(a(1330)),p=l(a(1324)),r=l(a(1321));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},u=function(e){return e?c(e)?s(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},y=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var i=l.append("g").classed("section",!0),n=function(){var e=r[p],t=i.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),l=a[0],i=a[1],n=t.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),n.append("g").classed("popup-text",!0).text(i)}))},p=0,r=Object.values(a);p<r.length;p++)n()},v=function(e){var t=document.querySelector("#tooltip");return n.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){n.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),n.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),n.select("#tooltip").style("left","".concat(n.event.pageX+5,"px")).style("top","".concat(n.event.pageY+5,"px"))},h=function(){n.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),n.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l){h();var i=v(e).append("g"),o=l.x,n=l.y,p=l.label,r=l.high,d=l.mid,y=l.low;o?(f(i,"X axis","".concat(c(o)?s(o):o)),f(i,"".concat(p.display),n)):(f(i,"X axis","".concat(r?u(r.x):d?u(d.x):y?u(y.x):"N/A")),r&&f(i,"High",u(r.y)),d&&f(i,"Mid",u(d.y)),y&&f(i,"Low",u(y.y)))},t.loadBubblePopup=function(e,t,a,l){h();var i=v(e).append("g"),o=l.x,n=l.y,p=l.label,r=l.weight;o&&(f(i,"X axis","".concat(c(o)?s(o):o)),f(i,"year",n)),r&&f(i,"".concat(p.display),"".concat(r))},t.loadBarPopup=function(e,t,a,l){h();var i=v(e).append("g");l.forEach((function(e){return f(i,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){h();var l=v(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),i=t.shape,o=t.label,n=t.color;r.default.notEmpty(i)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",i.options.scale,")")).attr("d",i.path.d).attr("fill",i.path.fill||p.default.DEFAULT_COLOR).attr("id",i.path.id),o.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(n,";")).text("".concat(o.display)),o.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){h(),v().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;h(),(a=document.querySelector("#tooltip"),n.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){n.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),n.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),n.select("#tooltip").style("left","".concat(n.event.pageX-250,"px")).style("top","".concat(n.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){h();var l=v(e).append("g"),i=a.tasks,o=a.activities,n=a.events,p=a.actions;if(i&&i.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(l,"Tasks",r)}if(o&&o.length>0){var d=[];o.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(l,"Activities",d)}if(n&&n.length>0){var s=[];n.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),y(l,"Events",s)}if(p&&p.length>0){var u=[];p.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),y(l,"Actions",u)}},t.loadTaskPopup=function(e,t,a,l){h();var i=v(e).append("g"),o=l.label,n=l.display,p=l.y,r=l.startDate,d=l.endDate,u=l.percentage;o&&f(i,"Task Name",n),f(i,"Track",p),f(i,"Start Date",s(r)),f(i,"End Date",s(d)),u&&f(i,"Percentage",u)},t.loadDatelinePopup=function(e,t){h();var a=v(e).append("g"),l=t.label,i=t.value;l&&f(a,"Milestone",l.display),f(a,"Date",s(i))},t.loadTimelinePopup=function(e,t,a,l){h();var i=v(e).append("g"),o=l.x,n=(l.y,l.label),p=l.content;f(i,"X axis","".concat(c(o)?s(o):o)),f(i,"".concat(n.display),p)},t.loadPiePopup=function(e,t,a,l){h();var i=v(e).append("g"),o=l.label,n=l.value;f(i,o.display,n)}},1336:function(e,t,a){"use strict";a.r(t)},1347:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(43)),o=l(a(0)),n=l(a(4)),p=l(a(1320));a(1323),a(1336);var r=l(a(1321)),d={graphID:n.default.string.isRequired,graphConfig:n.default.object.isRequired,dataset:n.default.arrayOf(n.default.object),timeout:n.default.arrayOf(n.default.number)},s=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,n=e.timeout,d=o.default.useState(),s=(0,i.default)(d,2),u=s[0],c=s[1],f=o.default.useRef(),y=o.default.useRef();return o.default.useEffect((function(){u||c(p.default.api.graph(t))}),[u,t]),o.default.useEffect((function(){if(u&&!f.current){var e=[];return a&&(n?a.forEach((function(t,a){var l=setTimeout((function(){return u.graphContainer?u.loadContent(p.default.api.pairedResult(t)):""}),n[a]);e.push(l)})):a.forEach((function(e){u.loadContent(p.default.api.pairedResult(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[u,a,n]),o.default.useEffect((function(){if(u)if(y.current){u.config.axis.x.upperLimit=t.axis.x.upperLimit,u.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:r.default.deepClone(a.panData),eventline:r.default.deepClone(a.eventline)};u.reflowMultipleDatasets(e)}else y.current=!0}),[u,a,t]),o.default.createElement("div",{id:"".concat(l,"-canvasContainer")},o.default.createElement("div",{id:l}))};s.propTypes=d;t.default=s},1399:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(1320));t.default=function(e){return{bindTo:e,axis:{x:{type:i.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!0,label:"Paired Set B",lowerLimit:100,upperLimit:350}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},1440:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(1320)),o=a(1322),n={key:"paired_result_critical_dataset_1",label:{high:{display:"Dataset_1_High"},mid:{display:"Dataset_1_Median"},low:{display:"Dataset_1_Low"}},shape:{high:i.default.helpers.SHAPES.DARK.TEAR_ALT,mid:i.default.helpers.SHAPES.DARK.RHOMBUS,low:i.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:i.default.helpers.COLORS.BLACK,mid:i.default.helpers.COLORS.BLUE,low:i.default.helpers.COLORS.BLACK},onClick:o.loadPopup,values:[{high:{x:"2016-05-01T12:00:00Z",y:150,isCritical:!1},mid:{x:"2016-05-01T12:00:00Z",y:40},low:{x:"2016-05-01T12:00:00Z",y:10,isCritical:!0}},{high:{x:"2016-08-17T12:00:00Z",y:110},mid:{x:"2016-08-17T12:00:00Z",y:70},low:{x:"2016-08-17T12:00:00Z",y:30}},{high:{x:"2016-10-17T12:00:00Z",y:160},mid:{x:"2016-10-17T12:00:00Z",y:120},low:{x:"2016-10-17T12:00:00Z",y:100}},{high:{x:"2017-03-17T12:00:00Z",y:190,isCritical:!0},mid:{x:"2017-03-17T12:00:00Z",y:90},low:{x:"2017-03-17T12:00:00Z",y:60,isCritical:!0}},{low:{x:"2017-07-17T12:00:00Z",y:10}},{high:{x:"2018-02-17T12:00:00Z",y:180}}]};t.default=n},1611:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(1320)),o=a(1322),n={key:"paired_result_critical_dataset_2",label:{high:{display:"Dataset_2_High"},mid:{display:"Dataset_2_Median"},low:{display:"Dataset_2_Low"}},shape:{high:i.default.helpers.SHAPES.DARK.TRIANGLE,mid:i.default.helpers.SHAPES.DARK.SQUARE,low:i.default.helpers.SHAPES.DARK.TRIANGLE_DOWN},color:{high:i.default.helpers.COLORS.BLACK,mid:i.default.helpers.COLORS.ORANGE,low:i.default.helpers.COLORS.BLACK},onClick:o.loadPopup,yAxis:"y2",values:[{high:{x:"2017-05-01T11:00:00Z",y:300},mid:{x:"2017-05-01T11:00:00Z",y:250},low:{x:"2017-05-01T11:00:00Z",y:175}},{high:{x:"2017-08-17T13:00:00Z",y:300,isCritical:!0},mid:{x:"2017-08-17T13:00:00Z",y:170,isCritical:!0},low:{x:"2017-08-17T13:00:00Z",y:130,isCritical:!0}},{high:{x:"2017-10-17T15:00:00Z",y:250},mid:{x:"2017-10-17T15:00:00Z",y:220},low:{x:"2017-10-17T15:00:00Z",y:200}}]};t.default=n},1994:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(0)),o=l(a(1321)),n=l(a(1347));a(1327);var p=l(a(1399)),r=l(a(1440)),d=l(a(1611)),s=o.default.deepClone((0,p.default)("#timeseriesPairedResultGraph")),u=[o.default.deepClone(r.default),o.default.deepClone(d.default)];t.default=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),i.default.createElement(n.default,{graphID:"timeseriesPairedResultGraph",graphConfig:s,dataset:u}))}}}]);