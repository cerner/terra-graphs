(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{1333:function(e,t,a){"use strict";a.r(t)},1340:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(43)),i=n(a(0)),r=n(a(4)),l=n(a(1315));a(1318),a(1333);var f=n(a(1316)),o={graphID:r.default.string.isRequired,graphConfig:r.default.object.isRequired,dataset:r.default.arrayOf(r.default.object),timeout:r.default.arrayOf(r.default.number)},d=function(e){var t=e.graphConfig,a=e.dataset,n=e.graphID,r=e.timeout,o=i.default.useState(),d=(0,u.default)(o,2),c=d[0],s=d[1],p=i.default.useRef(),v=i.default.useRef();return i.default.useEffect((function(){c||s(l.default.api.gantt(t))}),[c,t]),i.default.useEffect((function(){if(c&&!p.current){var e=[];return a&&(r?a.forEach((function(t,a){var n=setTimeout((function(){return c.graphContainer?c.loadContent(t):""}),r[a]);e.push(n)})):a.forEach((function(e){c.loadContent(e)}))),p.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[c,a,r]),i.default.useEffect((function(){if(c)if(v.current){c.config.axis.x.upperLimit=t.axis.x.upperLimit,c.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:f.default.deepClone(a.panData),eventline:f.default.deepClone(a.eventline)};c.reflowMultipleDatasets(e)}else v.current=!0}),[c,a,t]),i.default.createElement("div",{id:"".concat(n,"-canvasContainer")},i.default.createElement("div",{id:n}))};d.propTypes=o;var c=d;t.default=c},1553:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}},dateline:[]}};t.default=n},1554:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={key:"track 1",trackLabel:{display:"Really really long project name that cannot be shown realistically"}};t.default=n},1896:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(0)),i=n(a(1316)),r=n(a(1340));a(1323);var l=n(a(1553)),f=n(a(1554)),o=i.default.deepClone((0,l.default)("#ganttLabelTruncation")),d=[i.default.deepClone(f.default)];t.default=function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),u.default.createElement(r.default,{graphID:"ganttLabelTruncation",graphConfig:o,dataset:d}))}}}]);