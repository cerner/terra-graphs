(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{1579:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:"#legendContainer",dimension:{height:300},showLegend:!0}};t.default=n},1955:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=n(a(0)),l=n(a(1275)),i=n(a(1601));a(1278);var o=n(a(1579)),r=n(a(1349)),u=n(a(1350)),f=n(a(1351)),c=l.default.deepClone((0,o.default)("#graphContainer")),s=[l.default.deepClone(r.default),l.default.deepClone(u.default),l.default.deepClone(f.default)];t.default=function(){return d.default.createElement("div",{id:"customLegendPlacement"},d.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),d.default.createElement("div",{className:"bindto-container"},d.default.createElement("div",{id:"legendContainer",className:"legend-bindto-container"}),d.default.createElement("div",{id:"graphContainer",className:"legend-bindto-graph-container"})),d.default.createElement(i.default,{graphID:"graphContainer",graphConfig:c,dataset:s}))}}}]);