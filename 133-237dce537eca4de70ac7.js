(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1323:function(e,t,a){"use strict";var l=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var n=l(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=n?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(l,i,p):l[i]=e[i]}l.default=e,a&&a.set(e,l);return l}(a(1331)),p=l(a(1325)),r=l(a(1322));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},u=function(e){return e?c(e)?s(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},y=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var o=l.append("g").classed("section",!0),i=function(){var e=r[p],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,n.default)(e,2),l=a[0],o=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(o)}))},p=0,r=Object.values(a);p<r.length;p++)i()},v=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},h=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l){h();var o=v(e).append("g"),n=l.x,i=l.y,p=l.label,r=l.high,d=l.mid,y=l.low;n?(f(o,"X axis","".concat(c(n)?s(n):n)),f(o,"".concat(p.display),i)):(f(o,"X axis","".concat(r?u(r.x):d?u(d.x):y?u(y.x):"N/A")),r&&f(o,"High",u(r.y)),d&&f(o,"Mid",u(d.y)),y&&f(o,"Low",u(y.y)))},t.loadBubblePopup=function(e,t,a,l){h();var o=v(e).append("g"),n=l.x,i=l.y,p=l.label,r=l.weight;n&&(f(o,"X axis","".concat(c(n)?s(n):n)),f(o,"year",i)),r&&f(o,"".concat(p.display),"".concat(r))},t.loadBarPopup=function(e,t,a,l){h();var o=v(e).append("g");l.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){h();var l=v(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,n=t.label,i=t.color;r.default.notEmpty(o)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||p.default.DEFAULT_COLOR).attr("id",o.path.id),n.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(n.display)),n.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(n.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){h(),v().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;h(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){h();var l=v(e).append("g"),o=a.tasks,n=a.activities,i=a.events,p=a.actions;if(o&&o.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(l,"Tasks",r)}if(n&&n.length>0){var d=[];n.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(l,"Activities",d)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),y(l,"Events",s)}if(p&&p.length>0){var u=[];p.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),y(l,"Actions",u)}},t.loadTaskPopup=function(e,t,a,l){h();var o=v(e).append("g"),n=l.label,i=l.display,p=l.y,r=l.startDate,d=l.endDate,u=l.percentage;n&&f(o,"Task Name",i),f(o,"Track",p),f(o,"Start Date",s(r)),f(o,"End Date",s(d)),u&&f(o,"Percentage",u)},t.loadDatelinePopup=function(e,t){h();var a=v(e).append("g"),l=t.label,o=t.value;l&&f(a,"Milestone",l.display),f(a,"Date",s(o))},t.loadTimelinePopup=function(e,t,a,l){h();var o=v(e).append("g"),n=l.x,i=(l.y,l.label),p=l.content;f(o,"X axis","".concat(c(n)?s(n):n)),f(o,"".concat(i.display),p)},t.loadPiePopup=function(e,t,a,l){h();var o=v(e).append("g"),n=l.label,i=l.value;f(o,n.display,i)}},1337:function(e,t,a){"use strict";a.r(t)},1348:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(43)),n=l(a(0)),i=l(a(4)),p=l(a(1321));a(1324),a(1337);var r=l(a(1322)),d={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},s=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,i=e.timeout,d=n.default.useState(),s=(0,o.default)(d,2),u=s[0],c=s[1],f=n.default.useRef(),y=n.default.useRef();return n.default.useEffect((function(){u||c(p.default.api.graph(t))}),[u,t]),n.default.useEffect((function(){if(u&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var l=setTimeout((function(){return u.graphContainer?u.loadContent(p.default.api.pairedResult(t)):""}),i[a]);e.push(l)})):a.forEach((function(e){u.loadContent(p.default.api.pairedResult(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[u,a,i]),n.default.useEffect((function(){if(u)if(y.current){u.config.axis.x.upperLimit=t.axis.x.upperLimit,u.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:r.default.deepClone(a.panData),eventline:r.default.deepClone(a.eventline)};u.reflowMultipleDatasets(e)}else y.current=!0}),[u,a,t]),n.default.createElement("div",{id:"".concat(l,"-canvasContainer")},n.default.createElement("div",{id:l}))};s.propTypes=d;t.default=s},1400:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(1321));t.default=function(e){return{bindTo:e,axis:{x:{type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!0,label:"Paired Set B",lowerLimit:100,upperLimit:350}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},1619:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(1321)),n=a(1323),i={key:"paired_result_region_dataset_1",label:{high:{display:"Dataset_1_High"},mid:{display:"Dataset_1_Median"},low:{display:"Dataset_1_Low"}},shape:{high:o.default.helpers.SHAPES.DARK.TEAR_ALT,mid:o.default.helpers.SHAPES.DARK.RHOMBUS,low:o.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:o.default.helpers.COLORS.BLACK,mid:o.default.helpers.COLORS.BLUE,low:o.default.helpers.COLORS.BLACK},onClick:n.loadPopup,regions:{high:[{axis:"y",start:120,end:170,color:"#c8cacb"}],low:[{axis:"y",start:20,end:100}]},values:[{high:{x:"2016-05-01T12:00:00Z",y:150,isCritical:!1},mid:{x:"2016-05-01T12:00:00Z",y:40},low:{x:"2016-05-01T12:00:00Z",y:10,isCritical:!1}},{high:{x:"2016-08-17T12:00:00Z",y:110},mid:{x:"2016-08-17T12:00:00Z",y:70},low:{x:"2016-08-17T12:00:00Z",y:30}},{high:{x:"2016-10-17T12:00:00Z",y:160},mid:{x:"2016-10-17T12:00:00Z",y:120},low:{x:"2016-10-17T12:00:00Z",y:100}},{high:{x:"2017-03-17T12:00:00Z",y:190},mid:{x:"2017-03-17T12:00:00Z",y:90},low:{x:"2017-03-17T12:00:00Z",y:60}},{low:{x:"2017-07-17T12:00:00Z",y:10}},{high:{x:"2018-02-17T12:00:00Z",y:180}}]};t.default=i},1620:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(1321)),n=a(1323),i={key:"paired_result_region_dataset_2",label:{high:{display:"Dataset_2_High"},mid:{display:"Dataset_2_Median"},low:{display:"Dataset_2_Low"}},shape:{high:o.default.helpers.SHAPES.DARK.TRIANGLE,mid:o.default.helpers.SHAPES.DARK.SQUARE,low:o.default.helpers.SHAPES.DARK.TRIANGLE_DOWN},color:{high:o.default.helpers.COLORS.BLACK,mid:o.default.helpers.COLORS.ORANGE,low:o.default.helpers.COLORS.BLACK},onClick:n.loadPopup,yAxis:"y2",regions:{high:[{axis:"y2",start:210,end:280,color:"#c8cacb"}],low:[{axis:"y2",start:175,end:200}]},values:[{high:{x:"2017-05-01T11:00:00Z",y:300},mid:{x:"2017-05-01T11:00:00Z",y:250},low:{x:"2017-05-01T11:00:00Z",y:175}},{high:{x:"2017-08-17T13:00:00Z",y:300},mid:{x:"2017-08-17T13:00:00Z",y:170},low:{x:"2017-08-17T13:00:00Z",y:130}},{high:{x:"2017-10-17T15:00:00Z",y:250},mid:{x:"2017-10-17T15:00:00Z",y:220},low:{x:"2017-10-17T15:00:00Z",y:200}}]};t.default=i},1998:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(0)),n=l(a(1322)),i=l(a(1348));a(1328);var p=l(a(1400)),r=l(a(1619)),d=l(a(1620)),s=n.default.deepClone((0,p.default)("#timeseriesPairedResultGraph"));s.axis.y2.show=!0;var u=[n.default.deepClone(r.default),n.default.deepClone(d.default)];t.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement(i.default,{graphID:"timeseriesPairedResultGraph",graphConfig:s,dataset:u}))}}}]);