(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1322:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=l?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}return n.default=e,a&&a.set(e,n),n}(a(1330)),r=n(a(1324)),c=n(a(1321));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?s(e):e:null},d=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},v=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),i=function(){var e=c[r],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(o)}))},r=0,c=Object.values(a);r<c.length;r++)i()},y=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,i=n.y,r=n.label,c=n.high,p=n.mid,v=n.low;l?(f(o,"X axis","".concat(d(l)?s(l):l)),f(o,"".concat(r.display),i)):(f(o,"X axis","".concat(c?u(c.x):p?u(p.x):v?u(v.x):"N/A")),c&&f(o,"High",u(c.y)),p&&f(o,"Mid",u(p.y)),v&&f(o,"Low",u(v.y)))},t.loadBubblePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,i=n.y,r=n.label,c=n.weight;l&&(f(o,"X axis","".concat(d(l)?s(l):l)),f(o,"year",i)),c&&f(o,"".concat(r.display),"".concat(c))},t.loadBarPopup=function(e,t,a,n){g();var o=y(e).append("g");n.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,a){g();var n=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,i=t.color;c.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||r.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(l.display)),l.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){g(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,a){g();var n=y(e).append("g"),o=a.tasks,l=a.activities,i=a.events,r=a.actions;if(o&&o.length>0){var c=[];c.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Tasks",c)}if(l&&l.length>0){var p=[];l.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(n,"Activities",p)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),v(n,"Events",s)}if(r&&r.length>0){var u=[];r.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),v(n,"Actions",u)}},t.loadTaskPopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,i=n.display,r=n.y,c=n.startDate,p=n.endDate,u=n.percentage;l&&f(o,"Task Name",i),f(o,"Track",r),f(o,"Start Date",s(c)),f(o,"End Date",s(p)),u&&f(o,"Percentage",u)},t.loadDatelinePopup=function(e,t){g();var a=y(e).append("g"),n=t.label,o=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",s(o))},t.loadTimelinePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.x,i=(n.y,n.label),r=n.content;f(o,"X axis","".concat(d(l)?s(l):l)),f(o,"".concat(i.display),r)},t.loadPiePopup=function(e,t,a,n){g();var o=y(e).append("g"),l=n.label,i=n.value;f(o,l.display,i)}},1338:function(e,t,a){"use strict";a.r(t)},1346:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),i=n(a(4)),r=n(a(1320));a(1323),a(1338);var c=n(a(1321)),p={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},s=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,p=l.default.useState(),s=(0,o.default)(p,2),u=s[0],d=s[1],f=l.default.useRef(),v=l.default.useRef();return l.default.useEffect((function(){u||d(r.default.api.gantt(t))}),[u,t]),l.default.useEffect((function(){if(u&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return u.graphContainer?u.loadContent(t):""}),i[a]);e.push(n)})):a.forEach((function(e){u.loadContent(e)}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[u,a,i]),l.default.useEffect((function(){if(u)if(v.current){u.config.axis.x.upperLimit=t.axis.x.upperLimit,u.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:c.default.deepClone(a.panData),eventline:c.default.deepClone(a.eventline)};u.reflowMultipleDatasets(e)}else v.current=!0}),[u,a,t]),l.default.createElement("div",{id:"".concat(n,"-canvasContainer")},l.default.createElement("div",{id:n}))};s.propTypes=p;t.default=s},1396:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1320)),l=function(e){return 864e5*e};t.default=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},pan:{enabled:!0},showActionLegend:!0,dateline:[{showDatelineIndicator:!0,label:{display:"Release A"},color:"#C97318",shape:o.default.helpers.SHAPES.SQUARE,value:new Date(2016,0,1,9).toISOString()}],tracks:[{key:"track 1",dimension:{trackHeight:80},trackLabel:{display:"Project A",onClick:function(){}},tasks:[{key:"task1",label:{display:"Story A"},onClick:function(){},color:"#007cc3",startDate:new Date(2018,1,1).toISOString(),endDate:new Date(2018,1,10).toISOString(),duration:function(){return l(10)},percentage:40,dependencies:null,style:{isDotted:!0,isHollow:!0}}],activities:[{key:"uid_activity_1",label:{display:"Support"},onClick:function(){},startDate:new Date(2018,1,1).toISOString(),endDate:new Date(2018,1,10).toISOString(),duration:function(){return l(12)},style:{isDotted:!1,isHollow:!1}}],events:[{key:"uid_event_1",label:{display:"Defect A"},onClick:function(){},shape:{path:{id:"caretUp",d:"M0,36l24-24l24,24H0z"},options:{x:-12,y:-12,scale:.5}},color:o.default.helpers.COLORS.BLUE,values:[new Date(2018,3,1,7,0).toISOString()]}],actions:[{key:"uid_action_1",onClick:function(){},values:[new Date(2018,2,1,6,15).toISOString(),new Date(2018,3,1,6,15).toISOString(),new Date(2018,4,1,6,15).toISOString()]},{key:"uid_action_2",onClick:function(){},values:[new Date(2018,6,1,6,15).toISOString()]}]}],actionLegend:[{key:"uid_action_1",label:{display:"Action A"}},{key:"uid_action_2",label:{display:"Action B"},shape:o.default.helpers.SHAPES.DARK.TRIANGLE,color:o.default.helpers.COLORS.GREEN}]}}},1570:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(1322),l=n(a(1320)),i=a(1322),r=[{key:"task10",onClick:o.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2016,0,1,9).toISOString(),endDate:new Date(2016,0,1,12).toISOString()},{key:"task11",onClick:o.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,23).toISOString()}],c=[{key:"uid_action_1",onClick:i.loadPopup,values:[new Date(2016,0,1,6,15).toISOString()]},{key:"uid_action_2",onClick:i.loadPopup,values:[new Date(2016,0,1,7,15).toISOString()]}],p=[{key:"uid_event_4",label:{display:"Defect A"},onClick:i.loadPopup,shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},color:l.default.helpers.COLORS.BLACK,values:[new Date(2016,0,1,5,15).toISOString()]}],s=[{key:"activity5",label:{display:"activity5"},onClick:function(){},color:"#FFDF00",startDate:new Date(2016,0,1,12).toISOString(),endDate:new Date(2016,0,1,15).toISOString(),style:{isDotted:!1,isHollow:!1}}],u={key:"track 0",trackLabel:{display:"Default",onClick:o.loadXAndYAxisLabelPopup},tasks:r,actions:c,events:p,activities:s};t.default=u},1571:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={key:"track 0",actions:[{key:"uid_action_1",values:[new Date(2016,0,1,7,15).toISOString(),new Date(2016,0,1,8,15).toISOString()]},{key:"uid_action_2",values:[new Date(2016,0,1,9,15).toISOString()]}],tasks:[{key:"task10",startDate:new Date(2016,0,1,0).toISOString(),endDate:new Date(2016,0,1,13).toISOString()},{key:"task11",startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,20).toISOString()}],events:[{key:"uid_event_4",shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},values:[new Date(2016,0,1,2,15).toISOString()]}],activities:[{key:"activity5",startDate:new Date(2016,0,1,3).toISOString(),endDate:new Date(2016,0,1,6).toISOString()}]};t.default=n},1926:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),i=n(a(78)),r=n(a(1321)),c=n(a(1346));a(1327);var p=n(a(1396)),s=n(a(1570)),u=n(a(1571)),d={initial:0,factor:3,dataset:[r.default.deepClone(s.default)],graphConfig:r.default.deepClone((0,p.default)("#GanttPanningDynamicData"))};t.default=function(){var e=l.default.useReducer((function(e,t){var a,n=r.default.deepClone(e.graphConfig),o=[r.default.deepClone(u.default)];switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return n.axis.x.lowerLimit=new Date(2016,0,1,a).toISOString(),n.axis.x.upperLimit=new Date(2016,0,2,a).toISOString(),{initial:a,factor:e.factor,dataset:{panData:o},graphConfig:r.default.deepClone(n)}}),d),t=(0,o.default)(e,2),a=t[0],n=t[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement(i.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),l.default.createElement(i.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),l.default.createElement(c.default,{graphID:"GanttPanningDynamicData",graphConfig:a.graphConfig,dataset:a.dataset}))}}}]);