(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1289:function(e,a,t){"use strict";var l=t(2),o=t(18);Object.defineProperty(a,"__esModule",{value:!0}),a.loadY2AxisLabelPopup=a.loadXAndYAxisLabelPopup=a.loadTrackPopup=a.loadTimelinePopup=a.loadTextLabelPopup=a.loadTaskPopup=a.loadPopup=a.loadPiePopup=a.loadDatelinePopup=a.loadBubblePopup=a.loadBarPopup=void 0;var n=l(t(43)),p=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=s(a);if(t&&t.has(e))return t.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var i=n?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(l,p,i):l[p]=e[p]}l.default=e,t&&t.set(e,l);return l}(t(1297)),i=l(t(1291)),r=l(t(1288));function s(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:a})(e)}var u=function(e){return new Date(e).toLocaleString()},c=function(e){return e?d(e)?u(e):e:null},d=function(e){return e instanceof Date},f=function(e,a,t){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a),l.append("g").classed("popup-text",!0).text(t)},v=function(e,a,t){var l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a);for(var o=l.append("g").classed("section",!0),p=function(){var e=r[i],a=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,n.default)(e,2),l=t[0],o=t[1],p=a.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(o)}))},i=0,r=Object.values(t);i<r.length;i++)p()},y=function(e){var a=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){p.select(a).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(e)&&e(),p.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),p.select("#tooltip").style("left","".concat(p.event.pageX+5,"px")).style("top","".concat(p.event.pageY+5,"px"))},x=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};a.loadPopup=function(e,a,t,l){x();var o=y(e).append("g"),n=l.x,p=l.y,i=l.label,r=l.high,s=l.mid,v=l.low;n?(f(o,"X axis","".concat(d(n)?u(n):n)),f(o,"".concat(i.display),p)):(f(o,"X axis","".concat(r?c(r.x):s?c(s.x):v?c(v.x):"N/A")),r&&f(o,"High",c(r.y)),s&&f(o,"Mid",c(s.y)),v&&f(o,"Low",c(v.y)))};a.loadBubblePopup=function(e,a,t,l){x();var o=y(e).append("g"),n=l.x,p=l.y,i=l.label,r=l.weight;n&&(f(o,"X axis","".concat(d(n)?u(n):n)),f(o,"year",p)),r&&f(o,"".concat(i.display),"".concat(r))};a.loadBarPopup=function(e,a,t,l){x();var o=y(e).append("g");l.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))};a.loadTextLabelPopup=function(e,a,t){x();var l=y(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=a.shape,n=a.label,p=a.color;r.default.notEmpty(o)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),n.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(p,";")).text("".concat(n.display)),n.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(n.secondaryDisplay))};a.loadXAndYAxisLabelPopup=function(e){x(),y().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};a.loadY2AxisLabelPopup=function(e){var a,t;x(),(t=document.querySelector("#tooltip"),p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){p.select(t).attr("style","display:none;").selectAll("g").remove(),r.default.isFunction(a)&&a(),p.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),p.select("#tooltip").style("left","".concat(p.event.pageX-250,"px")).style("top","".concat(p.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};a.loadTrackPopup=function(e,a,t){x();var l=y(e).append("g"),o=t.tasks,n=t.activities,p=t.events,i=t.actions;if(o&&o.length>0){var r=[];r.forEach((function(e){r.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Tasks",r)}if(n&&n.length>0){var s=[];n.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),v(l,"Activities",s)}if(p&&p.length>0){var u=[];p.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),v(l,"Events",u)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),v(l,"Actions",c)}};a.loadTaskPopup=function(e,a,t,l){x();var o=y(e).append("g"),n=l.label,p=l.display,i=l.y,r=l.startDate,s=l.endDate,c=l.percentage;n&&f(o,"Task Name",p),f(o,"Track",i),f(o,"Start Date",u(r)),f(o,"End Date",u(s)),c&&f(o,"Percentage",c)};a.loadDatelinePopup=function(e,a){x();var t=y(e).append("g"),l=a.label,o=a.value;l&&f(t,"Milestone",l.display),f(t,"Date",u(o))};a.loadTimelinePopup=function(e,a,t,l){x();var o=y(e).append("g"),n=l.x,p=(l.y,l.label),i=l.content;f(o,"X axis","".concat(d(n)?u(n):n)),f(o,"".concat(p.display),i)};a.loadPiePopup=function(e,a,t,l){x();var o=y(e).append("g"),n=l.label,p=l.value;f(o,n.display,p)}},1304:function(e,a,t){"use strict";t.r(a)},1312:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=l(t(43)),n=l(t(0)),p=l(t(4)),i=l(t(1287));t(1290),t(1304);var r=l(t(1288)),s={graphID:p.default.string.isRequired,graphConfig:p.default.object.isRequired,dataset:p.default.arrayOf(p.default.object),timeout:p.default.arrayOf(p.default.number)},u=function(e){var a=e.graphConfig,t=e.dataset,l=e.graphID,p=e.timeout,s=n.default.useState(),u=(0,o.default)(s,2),c=u[0],d=u[1],f=n.default.useRef(),v=n.default.useRef();return n.default.useEffect((function(){c||d(i.default.api.graph(a))}),[c,a]),n.default.useEffect((function(){if(c&&!f.current){var e=[];return t&&(p?t.forEach((function(a,t){var l=setTimeout((function(){return c.graphContainer?c.loadContent(i.default.api.bar(a)):""}),p[t]);e.push(l)})):t.forEach((function(e){c.loadContent(i.default.api.bar(e))}))),f.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[c,t,p]),n.default.useEffect((function(){if(c)if(v.current){c.config.axis.x.upperLimit=a.axis.x.upperLimit,c.config.axis.x.lowerLimit=a.axis.x.lowerLimit;var e={panData:r.default.deepClone(t.panData),eventline:r.default.deepClone(t.eventline)};c.reflowMultipleDatasets(e)}else v.current=!0}),[c,t,a]),n.default.createElement("div",{id:"".concat(l,"-canvasContainer")},n.default.createElement("div",{id:l}))};u.propTypes=s;var c=u;a.default=c},1318:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:35},y2:{show:!1,label:"Bar Set B",lowerLimit:0,upperLimit:30}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};a.default=l},1456:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=l(t(1287)),n=t(1289),p={key:"axisinfo_bar_1",label:{display:"Dataset 1"},group:"uid_bar_1",color:o.default.helpers.COLORS.YELLOW,onClick:n.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:5,y:0},{x:6,y:10}],axisInfoRow:[{axis:"x",x:1,value:{onClick:n.loadTextLabelPopup,characterCount:4,color:o.default.helpers.COLORS.ORANGE,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z",fill:o.default.helpers.COLORS.ORANGE},options:{x:-6,y:-6,scale:.25}},label:{display:"1234567",secondaryDisplay:"ICU"}}},{axis:"x",x:2,value:{onClick:n.loadTextLabelPopup,color:o.default.helpers.COLORS.BLACK,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z",fill:o.default.helpers.COLORS.PURPLE},options:{x:-6,y:-6,scale:.25}},label:{display:"65",secondaryDisplay:"ICU"}}},{axis:"x",x:3,value:{onClick:n.loadTextLabelPopup,color:o.default.helpers.COLORS.GREEN,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z"},options:{x:-6,y:-6,scale:.25}},label:{display:"42",secondaryDisplay:"ICU"}}},{axis:"x",x:4,value:{onClick:n.loadTextLabelPopup,color:o.default.helpers.COLORS.BLACK,shape:{},label:{display:"23",secondaryDisplay:""}}},{axis:"x",x:5,value:{onClick:n.loadTextLabelPopup,color:o.default.helpers.COLORS.BLACK,shape:{},label:{display:"",secondaryDisplay:"ICU"}}},{axis:"x",x:6,value:{onClick:n.loadTextLabelPopup,color:o.default.helpers.COLORS.BLACK,shape:{},label:{display:"25",secondaryDisplay:"ICU"}}}]};a.default=p},1848:function(e,a,t){"use strict";var l=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=l(t(0)),n=l(t(1288)),p=l(t(1312));t(1294);var i=l(t(1318)),r=l(t(1456)),s=n.default.deepClone((0,i.default)("#axisInfoTextLabelsBarGraph")),u=[n.default.deepClone(r.default)];a.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement(p.default,{graphID:"axisInfoTextLabelsBarGraph",graphConfig:s,dataset:u}))}}}]);