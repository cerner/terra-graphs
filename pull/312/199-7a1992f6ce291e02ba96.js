(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1278:function(e,t,a){"use strict";a.r(t)},1288:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(a(43)),r=i(a(0)),n=i(a(4)),f=i(a(1273));a(1276),a(1278);var l=i(a(1274)),o={graphID:n.default.string.isRequired,graphConfig:n.default.object.isRequired,dataset:n.default.arrayOf(n.default.object),timeout:n.default.arrayOf(n.default.number)},s=function(e){var t=e.graphConfig,a=e.dataset,i=e.graphID,n=e.timeout,o=r.default.useState(),s=(0,u.default)(o,2),d=s[0],c=s[1],p=r.default.useRef(),v=r.default.useRef();return r.default.useEffect((function(){d||c(f.default.api.graph(t))}),[d,t]),r.default.useEffect((function(){if(d&&!p.current){var e=[];return a&&(n?a.forEach((function(t,a){var i=setTimeout((function(){return d.graphContainer?d.loadContent(f.default.api.line(t)):""}),n[a]);e.push(i)})):a.forEach((function(e){d.loadContent(f.default.api.line(e))}))),p.current=!0,function(){e.forEach((function(e){clearTimeout(e)}))}}}),[d,a,n]),r.default.useEffect((function(){if(d)if(v.current){d.config.axis.x.upperLimit=t.axis.x.upperLimit,d.config.axis.x.lowerLimit=t.axis.x.lowerLimit;var e={panData:l.default.deepClone(a.panData),eventline:l.default.deepClone(a.eventline)};d.reflowMultipleDatasets(e)}else v.current=!0}),[d,a,t]),r.default.createElement("div",{id:"".concat(i,"-canvasContainer")},r.default.createElement("div",{id:i}))};s.propTypes=o;var d=s;t.default=d},1486:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){return{bindTo:e,axis:{x:{label:"Data",lowerLimit:20.7,upperLimit:22.7,suppressTrailingZeros:!0},y:{label:"Line Set A",lowerLimit:.2,upperLimit:3.8,suppressTrailingZeros:!0},y2:{show:!0,label:"Line Set B",lowerLimit:10.2,upperLimit:13.8,suppressTrailingZeros:!0}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,ticksCount:7}};t.default=i},1892:function(e,t,a){"use strict";var i=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(a(0)),r=i(a(1274)),n=i(a(1288));a(1280);var f=i(a(1486)),l=r.default.deepClone((0,f.default)("#supressTickValue"));t.default=function(){return u.default.createElement(n.default,{graphID:"supressTickValue",graphConfig:l})}}}]);