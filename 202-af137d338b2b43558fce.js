(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{1320:function(e,t,a){"use strict";a.r(t)},1330:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(43)),u=i(a(0)),r=i(a(4)),l=i(a(1315));a(1318),a(1320);var f=i(a(1316)),o={graphID:r.default.string.isRequired,graphConfig:r.default.object.isRequired,dataset:r.default.arrayOf(r.default.object),timeout:r.default.arrayOf(r.default.number)},d=function(e){var t=e.graphConfig,a=e.dataset,i=e.graphID,r=e.timeout,o=u.default.useState(),d=(0,n.default)(o,2),s=d[0],c=d[1],p=u.default.useRef(),h=u.default.useRef();return u.default.useEffect((function(){s||c(l.default.api.graph(t))}),[s,t]),u.default.useEffect((function(){if(s&&!p.current){var e=[];return a&&(r?a.forEach((function(t,a){var i=setTimeout((function(){return s.graphContainer?s.loadContent(l.default.api.line(t)):""}),r[a]);e.push(i)})):a.forEach((function(e){s.loadContent(l.default.api.line(e))}))),p.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,r]),u.default.useEffect((function(){if(s)if(h.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:f.default.deepClone(a.panData),eventline:f.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else h.current=!0}),[s,a,t]),u.default.createElement("div",{id:"".concat(i,"-canvasContainer")},u.default.createElement("div",{id:i}))};d.propTypes=o;t.default=d},1533:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!1,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1931:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),u=i(a(1316)),r=i(a(1330));a(1322);var l=i(a(1533)),f=u.default.deepClone((0,l.default)("#labelHidden"));t.default=function(){return n.default.createElement(r.default,{graphID:"labelHidden",graphConfig:f})}}}]);