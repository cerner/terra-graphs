(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1320:function(e,t,a){"use strict";a.r(t)},1330:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(43)),r=i(a(0)),u=i(a(4)),o=i(a(1315));a(1318),a(1320);var f=i(a(1316)),l={graphID:u.default.string.isRequired,graphConfig:u.default.object.isRequired,dataset:u.default.arrayOf(u.default.object),timeout:u.default.arrayOf(u.default.number)},d=function(e){var t=e.graphConfig,a=e.dataset,i=e.graphID,u=e.timeout,l=r.default.useState(),d=(0,n.default)(l,2),s=d[0],c=d[1],p=r.default.useRef(),v=r.default.useRef();return r.default.useEffect((function(){s||c(o.default.api.graph(t))}),[s,t]),r.default.useEffect((function(){if(s&&!p.current){var e=[];return a&&(u?a.forEach((function(t,a){var i=setTimeout((function(){return s.graphContainer?s.loadContent(o.default.api.line(t)):""}),u[a]);e.push(i)})):a.forEach((function(e){s.loadContent(o.default.api.line(e))}))),p.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[s,a,u]),r.default.useEffect((function(){if(s)if(v.current){s.config.axis.x.upperLimit=t.axis.x.upperLimit,s.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:f.default.deepClone(a.panData),eventline:f.default.deepClone(a.eventline)};s.reflowMultipleDatasets(e)}else v.current=!0}),[s,a,t]),r.default.createElement("div",{id:"".concat(i,"-canvasContainer")},r.default.createElement("div",{id:i}))};d.propTypes=l;var s=d;t.default=s},1529:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(1315)),r=function(e){return{bindTo:e,axis:{x:{type:n.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString(),ticks:{values:[new Date(2016,0,1,1,0).toISOString(),new Date(2016,0,1,5,0).toISOString(),new Date(2016,0,1,10,0).toISOString(),new Date(2016,0,1,15,0).toISOString(),new Date(2016,0,1,20,0).toISOString()],format:"%a %b %e %X %Y"}},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=r},1939:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=i(a(1316)),u=i(a(1330));a(1322);var o=i(a(1529)),f=r.default.deepClone((0,o.default)("#xAxisTicksFormatted"));t.default=function(){return n.default.createElement(u.default,{graphID:"xAxisTicksFormatted",graphConfig:f})}}}]);