(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1317:function(e,t,a){"use strict";var l=a(2),n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=l(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(l,i,r):l[i]=e[i]}l.default=e,a&&a.set(e,l);return l}(a(1325)),r=l(a(1319)),p=l(a(1316));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?c(e)?s(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var n=l.append("g").classed("section",!0),i=function(){var e=p[r],t=n.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),l=a[0],n=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(n)}))},r=0,p=Object.values(a);r<p.length;r++)i()},h=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},y=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l){y();var n=h(e).append("g"),o=l.x,i=l.y,r=l.label,p=l.high,u=l.mid,v=l.low;o?(f(n,"X axis","".concat(c(o)?s(o):o)),f(n,"".concat(r.display),i)):(f(n,"X axis","".concat(p?d(p.x):u?d(u.x):v?d(v.x):"N/A")),p&&f(n,"High",d(p.y)),u&&f(n,"Mid",d(u.y)),v&&f(n,"Low",d(v.y)))},t.loadBubblePopup=function(e,t,a,l){y();var n=h(e).append("g"),o=l.x,i=l.y,r=l.label,p=l.weight;o&&(f(n,"X axis","".concat(c(o)?s(o):o)),f(n,"year",i)),p&&f(n,"".concat(r.display),"".concat(p))},t.loadBarPopup=function(e,t,a,l){y();var n=h(e).append("g");l.forEach((function(e){return f(n,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){y();var l=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),n=t.shape,o=t.label,i=t.color;p.default.notEmpty(n)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",n.options.scale,")")).attr("d",n.path.d).attr("fill",n.path.fill||r.default.DEFAULT_COLOR).attr("id",n.path.id),o.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){y(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;y(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){y();var l=h(e).append("g"),n=a.tasks,o=a.activities,i=a.events,r=a.actions;if(n&&n.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",p)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",u)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",s)}if(r&&r.length>0){var d=[];r.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",d)}},t.loadTaskPopup=function(e,t,a,l){y();var n=h(e).append("g"),o=l.label,i=l.display,r=l.y,p=l.startDate,u=l.endDate,d=l.percentage;o&&f(n,"Task Name",i),f(n,"Track",r),f(n,"Start Date",s(p)),f(n,"End Date",s(u)),d&&f(n,"Percentage",d)},t.loadDatelinePopup=function(e,t){y();var a=h(e).append("g"),l=t.label,n=t.value;l&&f(a,"Milestone",l.display),f(a,"Date",s(n))},t.loadTimelinePopup=function(e,t,a,l){y();var n=h(e).append("g"),o=l.x,i=(l.y,l.label),r=l.content;f(n,"X axis","".concat(c(o)?s(o):o)),f(n,"".concat(i.display),r)},t.loadPiePopup=function(e,t,a,l){y();var n=h(e).append("g"),o=l.label,i=l.value;f(n,o.display,i)}},1320:function(e,t,a){"use strict";a.r(t)},1327:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,a=e.initialX,l=e.xModifier,n=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*n,x:a+t*l}}))},t.createGraphValuesWithCos=function(e){var t=e.length,a=e.initialX,l=e.xModifier,n=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*n,x:a+t*l}}))}},1330:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(43)),o=l(a(0)),i=l(a(4)),r=l(a(1315));a(1318),a(1320);var p=l(a(1316)),u={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},s=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,i=e.timeout,u=o.default.useState(),s=(0,n.default)(u,2),d=s[0],c=s[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){d||c(r.default.api.graph(t))}),[d,t]),o.default.useEffect((function(){if(d&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var l=setTimeout((function(){return d.graphContainer?d.loadContent(r.default.api.line(t)):""}),i[a]);e.push(l)})):a.forEach((function(e){d.loadContent(r.default.api.line(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[d,a,i]),o.default.useEffect((function(){if(d)if(v.current){d.config.axis.x.upperLimit=t.axis.x.upperLimit,d.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};d.reflowMultipleDatasets(e)}else v.current=!0}),[d,a,t]),o.default.createElement("div",{id:"".concat(l,"-canvasContainer")},o.default.createElement("div",{id:l}))};s.propTypes=u;t.default=s},1353:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1315)),o=a(1317),i=a(1327),r={key:"uid_1",label:{display:"Data Label 1"},color:n.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:(0,i.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};t.default=r},1358:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1315)),o=a(1317),i=a(1327),r={key:"uid_6",label:{display:"Dataset 6"},color:n.default.helpers.COLORS.GREY,onClick:o.loadPopup,shape:n.default.helpers.SHAPES.DARK.TRIANGLE_DOWN,values:(0,i.createGraphValuesWithCos)({length:18,initialX:85,xModifier:10,yModifier:7*Math.PI})};t.default=r},1368:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1315)),o=a(1317),i=a(1327),r={key:"uid_2",label:{display:"Data Label 2"},shape:n.default.helpers.SHAPES.DARK.TRIANGLE,color:n.default.helpers.COLORS.BLUE,style:{strokeDashArray:"2,2"},onClick:o.loadPopup,values:(0,i.createGraphValuesWithSin)({length:18,initialX:85,xModifier:10,yModifier:2*Math.PI}),legendOptions:{showLine:!0,showShape:!1,style:{strokeDashArray:"2,2"}},showShapes:!1};t.default=r},1391:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1315)),o=a(1317),i={key:"uid_4",label:{display:"Data Label 4"},shape:n.default.helpers.SHAPES.DARK.CROSS,color:n.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadPopup,values:new Array(15).fill("").map((function(e,t){return{y:Math.sin(t)*Math.PI*4,x:85+10*t,region:{start:Math.sin(t)*Math.PI*4-Math.PI,end:Math.sin(t)*Math.PI*4+Math.PI}}}))};t.default=i},1454:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1315)),o=a(1317),i=a(1327),r={key:"uid_3",label:{display:"Data Label 3"},shape:n.default.helpers.SHAPES.DARK.X,color:n.default.helpers.COLORS.GREEN,onClick:o.loadPopup,values:(0,i.createGraphValuesWithSin)({length:12,initialX:85,xModifier:17,yModifier:4*Math.PI})};t.default=r},1455:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1315)),o=a(1317),i=a(1327),r={key:"uid_5",label:{display:"Data Label 5"},shape:n.default.helpers.SHAPES.DARK.SQUARE,color:n.default.helpers.COLORS.ORANGE,onClick:o.loadPopup,values:(0,i.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI}),legendOptions:{showLine:!0,showShape:!0}};t.default=r},1863:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,axis:{x:{label:"Line Set c",lowerLimit:48,upperLimit:168,suppressTrailingZeros:!0,ticks:{values:[24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180,186,192,198,204,210,216,222]}},y:{label:"Line Set A",lowerLimit:8,upperLimit:32,suppressTrailingZeros:!0},y2:{show:!0,label:"Line Set B",lowerLimit:10,upperLimit:30,suppressTrailingZeros:!0}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,ticksCount:6}}},1938:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(1316)),i=l(a(1330));a(1322);var r=l(a(1863)),p=l(a(1353)),u=l(a(1368)),s=l(a(1454)),d=l(a(1391)),c=l(a(1455)),f=l(a(1358)),v=o.default.deepClone((0,r.default)("#xAxisTicksVlauesOverflow")),h=[o.default.deepClone(p.default),o.default.deepClone(u.default),o.default.deepClone(s.default),o.default.deepClone(d.default),o.default.deepClone(c.default),o.default.deepClone(f.default)],y=[0,750,1500,2250,3e3,3750,4500];t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),n.default.createElement(i.default,{graphID:"xAxisTicksVlauesOverflow",graphConfig:v,dataset:h,timeout:y}),";")}}}]);