(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1275:function(e,t,a){"use strict";var n=a(2),l=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=n(a(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(1283)),r=n(a(1277)),p=n(a(1274));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},u=function(e){return e?c(e)?s(e):e:null},c=function(e){return e instanceof Date},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},y=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var l=n.append("g").classed("section",!0),i=function(){var e=p[r],t=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),n=a[0],l=a[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(l)}))},r=0,p=Object.values(a);r<p.length;r++)i()},v=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var l=v(e).append("g"),o=n.x,i=n.y,r=n.label,p=n.high,d=n.mid,y=n.low;o?(f(l,"X axis","".concat(c(o)?s(o):o)),f(l,"".concat(r.display),i)):(f(l,"X axis","".concat(p?u(p.x):d?u(d.x):y?u(y.x):"N/A")),p&&f(l,"High",u(p.y)),d&&f(l,"Mid",u(d.y)),y&&f(l,"Low",u(y.y)))};t.loadBubblePopup=function(e,t,a,n){g();var l=v(e).append("g"),o=n.x,i=n.y,r=n.label,p=n.weight;o&&(f(l,"X axis","".concat(c(o)?s(o):o)),f(l,"year",i)),p&&f(l,"".concat(r.display),"".concat(p))};t.loadBarPopup=function(e,t,a,n){g();var l=v(e).append("g");n.forEach((function(e){return f(l,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){g();var n=v(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),l=t.shape,o=t.label,i=t.color;p.default.notEmpty(l)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",l.options.scale,")")).attr("d",l.path.d).attr("fill",l.path.fill||r.default.DEFAULT_COLOR).attr("id",l.path.id),o.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),v().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){g();var n=v(e).append("g"),l=a.tasks,o=a.activities,i=a.events,r=a.actions;if(l&&l.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(n,"Tasks",p)}if(o&&o.length>0){var d=[];o.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),y(n,"Activities",d)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),y(n,"Events",s)}if(r&&r.length>0){var u=[];r.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),y(n,"Actions",u)}};t.loadTaskPopup=function(e,t,a,n){g();var l=v(e).append("g"),o=n.label,i=n.display,r=n.y,p=n.startDate,d=n.endDate,u=n.percentage;o&&f(l,"Task Name",i),f(l,"Track",r),f(l,"Start Date",s(p)),f(l,"End Date",s(d)),u&&f(l,"Percentage",u)};t.loadDatelinePopup=function(e,t){g();var a=v(e).append("g"),n=t.label,l=t.value;n&&f(a,"Milestone",n.display),f(a,"Date",s(l))};t.loadTimelinePopup=function(e,t,a,n){g();var l=v(e).append("g"),o=n.x,i=(n.y,n.label),r=n.content;f(l,"X axis","".concat(c(o)?s(o):o)),f(l,"".concat(i.display),r)};t.loadPiePopup=function(e,t,a,n){g();var l=v(e).append("g"),o=n.label,i=n.value;f(l,o.display,i)}},1291:function(e,t,a){"use strict";a.r(t)},1299:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(43)),o=n(a(0)),i=n(a(4)),r=n(a(1273));a(1276),a(1291);var p=n(a(1274)),d={graphID:i.default.string.isRequired,graphConfig:i.default.object.isRequired,dataset:i.default.arrayOf(i.default.object),timeout:i.default.arrayOf(i.default.number)},s=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,i=e.timeout,d=o.default.useState(),s=(0,l.default)(d,2),u=s[0],c=s[1],f=o.default.useRef(),y=o.default.useRef();return o.default.useEffect((function(){u||c(r.default.api.gantt(t))}),[u,t]),o.default.useEffect((function(){if(u&&!f.current){var e=[];return a&&(i?a.forEach((function(t,a){var n=setTimeout((function(){return u.graphContainer?u.loadContent(t):""}),i[a]);e.push(n)})):a.forEach((function(e){u.loadContent(e)}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[u,a,i]),o.default.useEffect((function(){if(u)if(y.current){u.config.axis.x.upperLimit=t.axis.x.upperLimit,u.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:p.default.deepClone(a.panData),eventline:p.default.deepClone(a.eventline)};u.reflowMultipleDatasets(e)}else y.current=!0}),[u,a,t]),o.default.createElement("div",{id:"".concat(n,"-canvasContainer")},o.default.createElement("div",{id:n}))};s.propTypes=d;var u=s;t.default=u},1319:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}}}};t.default=n},1500:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1275),l={key:"track 0",trackLabel:{display:"Default",onClick:n.loadXAndYAxisLabelPopup},tasks:[{key:"default",onClick:n.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString()}]};t.default=l},1501:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1275),l={key:"track 1",trackLabel:{display:"Hollow only",onClick:n.loadXAndYAxisLabelPopup},tasks:[{key:"default",onClick:n.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString(),style:{isHollow:!0}}]};t.default=l},1502:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={key:"track 2",trackLabel:{display:"Dotted, Hollow"},tasks:[{key:"default",onClick:a(1275).loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString(),style:{isDotted:!0,isHollow:!0}}]};t.default=n},1503:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1275),l={key:"track 3",trackLabel:{display:"Percentage",onClick:n.loadXAndYAxisLabelPopup},tasks:[{key:"percentage",onClick:n.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString(),percentage:30}]};t.default=l},1504:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1275),l={key:"track 4",trackLabel:{display:"Task Hashed",onClick:n.loadXAndYAxisLabelPopup},tasks:[{key:"task_hash",onClick:n.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString(),style:{isHashed:!0}}]};t.default=l},1505:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={key:"track 5",trackLabel:{display:"Activity",onClick:a(1275).loadXAndYAxisLabelPopup},activities:[{key:"Activity",label:{display:"Story Apex Activity"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString()}]};t.default=n},1506:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={key:"track 6",trackLabel:{display:"Activity Hashed"},activities:[{key:"Hash",label:{display:"Story Apex Activity hash"},color:"#000",startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString(),style:{isHashed:!0}}]};t.default=n},1507:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(1275),l={key:"track 7",trackLabel:{display:"Activity and Task",onClick:n.loadXAndYAxisLabelPopup},tasks:[{key:"Task",onClick:n.loadTaskPopup,label:{display:"Story Apex Task"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString()}],activities:[{key:"Activity and Task",label:{display:"Combination"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString()}]};t.default=l},1868:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=n(a(1274)),i=n(a(1299));a(1280);var r=n(a(1319)),p=n(a(1500)),d=n(a(1501)),s=n(a(1502)),u=n(a(1503)),c=n(a(1504)),f=n(a(1505)),y=n(a(1506)),v=n(a(1507)),g=o.default.deepClone((0,r.default)("#ganttBarType"));g.showActionLegend=!1,g.dateline=[];var k=[p.default,d.default,s.default,u.default,c.default,f.default,y.default,v.default],b=o.default.deepClone(k);t.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),l.default.createElement(i.default,{graphID:"ganttBarType",graphConfig:g,dataset:b}))}}}]);