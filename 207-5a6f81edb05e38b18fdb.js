(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1293:function(e,t,a){"use strict";a.r(t)},1302:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(a(43)),n=i(a(0)),r=i(a(4)),f=i(a(1287));a(1290),a(1293);var o=i(a(1288)),l={graphID:r.default.string.isRequired,graphConfig:r.default.object.isRequired,dataset:r.default.arrayOf(r.default.object),timeout:r.default.arrayOf(r.default.number)},d=function(e){var t=e.graphConfig,a=e.dataset,i=e.graphID,r=e.timeout,l=n.default.useState(),d=(0,u.default)(l,2),s=d[0],c=d[1],p=n.default.useRef(),v=n.default.useRef();return n.default.useEffect((function(){s||c(f.default.api.graph(t))}),[s,t]),n.default.useEffect((function(){if(s&&!p.current){var e=[];return a&&(r?a.forEach((function(t,a){var i=setTimeout((function(){return s.graphContainer?s.loadContent(f.default.api.line(t)):""}),r[a]);e.push(i)})):a.forEach((function(e){s.loadContent(f.default.api.line(e))}))),p.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,r]),n.default.useEffect((function(){if(s)if(v.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:o.default.deepClone(a.panData),eventline:o.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else v.current=!0}),[s,a,t]),n.default.createElement("div",{id:"".concat(i,"-canvasContainer")},n.default.createElement("div",{id:i}))};d.propTypes=l;var s=d;t.default=s},1498:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(a(1287)),n=function(e){return{bindTo:e,axis:{x:{type:u.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=n},1904:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(a(0)),n=i(a(1288)),r=i(a(1302));a(1294);var f=i(a(1498)),o=n.default.deepClone((0,f.default)("#staticXAxisTicks"));t.default=function(){return u.default.createElement(r.default,{graphID:"staticXAxisTicks",graphConfig:o})}}}]);