(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1321:function(e,t,a){"use strict";a.r(t)},1330:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(43)),u=i(a(0)),r=i(a(4)),l=i(a(1315));a(1318),a(1321);var o=i(a(1316)),f={graphID:r.default.string.isRequired,graphConfig:r.default.object.isRequired,dataset:r.default.arrayOf(r.default.object),timeout:r.default.arrayOf(r.default.number)},d=function(e){var t=e.graphConfig,a=e.dataset,i=e.graphID,r=e.timeout,f=u.default.useState(),d=(0,n.default)(f,2),s=d[0],c=d[1],p=u.default.useRef(),h=u.default.useRef();return u.default.useEffect((function(){s||c(l.default.api.graph(t))}),[s,t]),u.default.useEffect((function(){if(s&&!p.current){var e=[];return a&&(r?a.forEach((function(t,a){var i=setTimeout((function(){return s.graphContainer?s.loadContent(l.default.api.line(t)):""}),r[a]);e.push(i)})):a.forEach((function(e){s.loadContent(l.default.api.line(e))}))),p.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,r]),u.default.useEffect((function(){if(s)if(h.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:o.default.deepClone(a.panData),eventline:o.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else h.current=!0}),[s,a,t]),u.default.createElement("div",{id:"".concat(i,"-canvasContainer")},u.default.createElement("div",{id:i}))};d.propTypes=f;var s=d;t.default=s},1530:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="Project long display value which is only for testing, Project long display value which is only for testing Project long display value which is only for testing, Project long display value which is only for testing",n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:i,lowerLimit:80,upperLimit:280},y:{show:!0,label:i,lowerLimit:-18,upperLimit:18},y2:{show:!0,label:i,lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=n},1913:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),u=i(a(1316)),r=i(a(1330));a(1323);var l=i(a(1530)),o=u.default.deepClone((0,l.default)("#labelTruncation"));t.default=function(){return n.default.createElement(r.default,{graphID:"labelTruncation",graphConfig:o})}}}]);