(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{1320:function(e,t,a){"use strict";a.r(t)},1330:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(43)),u=i(a(0)),r=i(a(4)),f=i(a(1315));a(1318),a(1320);var l=i(a(1316)),o={graphID:r.default.string.isRequired,graphConfig:r.default.object.isRequired,dataset:r.default.arrayOf(r.default.object),timeout:r.default.arrayOf(r.default.number)},d=function(e){var t=e.graphConfig,a=e.dataset,i=e.graphID,r=e.timeout,o=u.default.useState(),d=(0,n.default)(o,2),c=d[0],s=d[1],p=u.default.useRef(),v=u.default.useRef();return u.default.useEffect((function(){c||s(f.default.api.graph(t))}),[c,t]),u.default.useEffect((function(){if(c&&!p.current){var e=[];return a&&(r?a.forEach((function(t,a){var i=setTimeout((function(){return c.graphContainer?c.loadContent(f.default.api.line(t)):""}),r[a]);e.push(i)})):a.forEach((function(e){c.loadContent(f.default.api.line(e))}))),p.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[c,a,r]),u.default.useEffect((function(){if(c)if(v.current){c.config.axis.x.upperLimit=t.axis.x.upperLimit,c.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:l.default.deepClone(a.panData),eventline:l.default.deepClone(a.eventline)};c.reflowMultipleDatasets(e)}else v.current=!0}),[c,a,t]),u.default.createElement("div",{id:"".concat(i,"-canvasContainer")},u.default.createElement("div",{id:i}))};d.propTypes=o;t.default=d},1538:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}}},1942:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),u=i(a(1316)),r=i(a(1330));a(1322);var f=i(a(1538)),l=u.default.deepClone((0,f.default)("#verticalGridHidden"));t.default=function(){return n.default.createElement(r.default,{graphID:"verticalGridHidden",graphConfig:l})}}}]);