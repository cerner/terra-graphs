(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1322:function(e,t,a){"use strict";var l=a(2),n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=l(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(l,i,r):l[i]=e[i]}return l.default=e,a&&a.set(e,l),l}(a(1330)),r=l(a(1324)),p=l(a(1321));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var d=function(e){return new Date(e).toLocaleString()},s=function(e){return e?c(e)?d(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t),l.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t);for(var n=l.append("g").classed("section",!0),i=function(){var e=p[r],t=n.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),l=a[0],n=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(n)}))},r=0,p=Object.values(a);r<p.length;r++)i()},h=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},y=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,l){y();var n=h(e).append("g"),o=l.x,i=l.y,r=l.label,p=l.high,u=l.mid,v=l.low;o?(f(n,"X axis","".concat(c(o)?d(o):o)),f(n,"".concat(r.display),i)):(f(n,"X axis","".concat(p?s(p.x):u?s(u.x):v?s(v.x):"N/A")),p&&f(n,"High",s(p.y)),u&&f(n,"Mid",s(u.y)),v&&f(n,"Low",s(v.y)))},t.loadBubblePopup=function(e,t,a,l){y();var n=h(e).append("g"),o=l.x,i=l.y,r=l.label,p=l.weight;o&&(f(n,"X axis","".concat(c(o)?d(o):o)),f(n,"year",i)),p&&f(n,"".concat(r.display),"".concat(p))},t.loadBarPopup=function(e,t,a,l){y();var n=h(e).append("g");l.forEach((function(e){return f(n,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){y();var l=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),n=t.shape,o=t.label,i=t.color;p.default.notEmpty(n)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",n.options.scale,")")).attr("d",n.path.d).attr("fill",n.path.fill||r.default.DEFAULT_COLOR).attr("id",n.path.id),o.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){y(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;y(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){y();var l=h(e).append("g"),n=a.tasks,o=a.activities,i=a.events,r=a.actions;if(n&&n.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",p)}if(o&&o.length>0){var u=[];o.forEach((function(e){u.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",u)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",d)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",s)}},t.loadTaskPopup=function(e,t,a,l){y();var n=h(e).append("g"),o=l.label,i=l.display,r=l.y,p=l.startDate,u=l.endDate,s=l.percentage;o&&f(n,"Task Name",i),f(n,"Track",r),f(n,"Start Date",d(p)),f(n,"End Date",d(u)),s&&f(n,"Percentage",s)},t.loadDatelinePopup=function(e,t){y();var a=h(e).append("g"),l=t.label,n=t.value;l&&f(a,"Milestone",l.display),f(a,"Date",d(n))},t.loadTimelinePopup=function(e,t,a,l){y();var n=h(e).append("g"),o=l.x,i=(l.y,l.label),r=l.content;f(n,"X axis","".concat(c(o)?d(o):o)),f(n,"".concat(i.display),r)},t.loadPiePopup=function(e,t,a,l){y();var n=h(e).append("g"),o=l.label,i=l.value;f(n,o.display,i)}},1325:function(e,t,a){"use strict";a.r(t)},1332:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,a=e.initialX,l=e.xModifier,n=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*n,x:a+t*l}}))},t.createGraphValuesWithCos=function(e){var t=e.length,a=e.initialX,l=e.xModifier,n=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*n,x:a+t*l}}))}},1335:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(43)),o=l(a(0)),i=l(a(4)),r=l(a(1320));a(1323),a(1325);var p=l(a(1321)),u={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},d=function(e){var t=e.graphConfig,a=e.dataset,l=e.graphID,i=e.timeout,u=o.default.useState(),d=(0,n.default)(u,2),s=d[0],c=d[1],f=o.default.useRef(),v=o.default.useRef();return o.default.useEffect((function(){s||c(r.default.api.graph(t))}),[s,t]),o.default.useEffect((function(){if(s&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var l=setTimeout((function(){return s.graphContainer?s.loadContent(r.default.api.line(t)):""}),i[a]);e.push(l)})):a.forEach((function(e){s.loadContent(r.default.api.line(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,i]),o.default.useEffect((function(){if(s)if(v.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else v.current=!0}),[s,a,t]),o.default.createElement("div",{id:"".concat(l,"-canvasContainer")},o.default.createElement("div",{id:l}))};d.propTypes=u;t.default=d},1353:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),o=a(1322),i=a(1332),r={key:"uid_1",label:{display:"Data Label 1"},color:n.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:(0,i.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};t.default=r},1362:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),o=a(1322),i=a(1332),r={key:"uid_6",label:{display:"Dataset 6"},color:n.default.helpers.COLORS.GREY,onClick:o.loadPopup,shape:n.default.helpers.SHAPES.DARK.TRIANGLE_DOWN,values:(0,i.createGraphValuesWithCos)({length:18,initialX:85,xModifier:10,yModifier:7*Math.PI})};t.default=r},1363:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),o=a(1322),i=a(1332),r={key:"uid_2",label:{display:"Data Label 2"},shape:n.default.helpers.SHAPES.DARK.TRIANGLE,color:n.default.helpers.COLORS.BLUE,style:{strokeDashArray:"2,2"},onClick:o.loadPopup,values:(0,i.createGraphValuesWithSin)({length:18,initialX:85,xModifier:10,yModifier:2*Math.PI}),legendOptions:{showLine:!0,showShape:!1,style:{strokeDashArray:"2,2"}},showShapes:!1};t.default=r},1385:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),o=a(1322),i={key:"uid_4",label:{display:"Data Label 4"},shape:n.default.helpers.SHAPES.DARK.CROSS,color:n.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadPopup,values:new Array(15).fill("").map((function(e,t){return{y:Math.sin(t)*Math.PI*4,x:85+10*t,region:{start:Math.sin(t)*Math.PI*4-Math.PI,end:Math.sin(t)*Math.PI*4+Math.PI}}}))};t.default=i},1422:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),o=a(1322),i=a(1332),r={key:"uid_3",label:{display:"Data Label 3"},shape:n.default.helpers.SHAPES.DARK.X,color:n.default.helpers.COLORS.GREEN,onClick:o.loadPopup,values:(0,i.createGraphValuesWithSin)({length:12,initialX:85,xModifier:17,yModifier:4*Math.PI})};t.default=r},1423:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320)),o=a(1322),i=a(1332),r={key:"uid_5",label:{display:"Data Label 5"},shape:n.default.helpers.SHAPES.DARK.SQUARE,color:n.default.helpers.COLORS.ORANGE,onClick:o.loadPopup,values:(0,i.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI}),legendOptions:{showLine:!0,showShape:!0}};t.default=r},1869:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1320));t.default=function(e){return{bindTo:e,rotateAngle:!0,axis:{x:{type:n.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1).toISOString(),upperLimit:new Date(2016,0,12).toISOString(),ticks:{values:[new Date(2016,0,1).toISOString(),new Date(2016,0,2).toISOString(),new Date(2016,0,3).toISOString(),new Date(2016,0,4).toISOString(),new Date(2016,0,5).toISOString(),new Date(2016,0,6).toISOString(),new Date(2016,0,7).toISOString(),new Date(2016,0,8).toISOString(),new Date(2016,0,9).toISOString(),new Date(2016,0,10).toISOString(),new Date(2016,0,11).toISOString()],format:"%Y, %X"}},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,locale:n.default.helpers.LOCALE.de_DE}}},1946:function(e,t,a){"use strict";var l=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(1321)),i=l(a(1335));a(1327);var r=l(a(1869)),p=l(a(1353)),u=l(a(1363)),d=l(a(1422)),s=l(a(1385)),c=l(a(1423)),f=l(a(1362)),v=o.default.deepClone((0,r.default)("#xAxisTicksVlauesOverlapping")),h=[o.default.deepClone(p.default),o.default.deepClone(u.default),o.default.deepClone(d.default),o.default.deepClone(s.default),o.default.deepClone(c.default),o.default.deepClone(f.default)],y=[0,750,1500,2250,3e3,3750,4500];t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),n.default.createElement(i.default,{graphID:"xAxisTicksVlauesOverlapping",graphConfig:v,dataset:h,timeout:y}),";")}}}]);