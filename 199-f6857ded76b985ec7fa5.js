(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1326:function(e,t,a){"use strict";a.r(t)},1336:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(43)),u=i(a(0)),r=i(a(4)),o=i(a(1321));a(1324),a(1326);var f=i(a(1322)),l={graphID:r.default.string.isRequired,graphConfig:r.default.object.isRequired,dataset:r.default.arrayOf(r.default.object),timeout:r.default.arrayOf(r.default.number)},d=function(e){var t=e.graphConfig,a=e.dataset,i=e.graphID,r=e.timeout,l=u.default.useState(),d=(0,n.default)(l,2),s=d[0],c=d[1],p=u.default.useRef(),h=u.default.useRef();return u.default.useEffect((function(){s||c(o.default.api.graph(t))}),[s,t]),u.default.useEffect((function(){if(s&&!p.current){var e=[];return a&&(r?a.forEach((function(t,a){var i=setTimeout((function(){return s.graphContainer?s.loadContent(o.default.api.line(t)):""}),r[a]);e.push(i)})):a.forEach((function(e){s.loadContent(o.default.api.line(e))}))),p.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,r]),u.default.useEffect((function(){if(s)if(h.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:f.default.deepClone(a.panData),eventline:f.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else h.current=!0}),[s,a,t]),u.default.createElement("div",{id:"".concat(i,"-canvasContainer")},u.default.createElement("div",{id:i}))};d.propTypes=l;t.default=d},1358:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1953:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),u=i(a(1322)),r=i(a(1336));a(1328);var o=i(a(1358)),f=u.default.deepClone((0,o.default)("#nodata"));t.default=function(){return n.default.createElement(r.default,{graphID:"nodata",graphConfig:f})}}}]);