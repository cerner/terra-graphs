(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1421:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a(1322),r=a(1322),i=[{key:"task1",onClick:e.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2016,0,1,8).toISOString(),endDate:new Date(2016,0,1,12).toISOString()},{key:"task2",onClick:e.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,23).toISOString()}],o=[{key:"uid_action_1",onClick:r.loadPopup,values:[new Date(2016,0,1,6,15).toISOString()]},{key:"uid_action_2",onClick:r.loadPopup,values:[new Date(2016,0,1,7,15).toISOString()]}],p={key:"track 0",trackLabel:{display:"Default",onClick:e.loadXAndYAxisLabelPopup},tasks:i,actions:o};n.default=p},1574:function(t,n,a){"use strict";a.d(n,"a",(function(){return d}));var e=a(29),r=a.n(e),i=a(56),o=a.n(i),p=(a(0),a(813)),l=["components"],c={},s="wrapper";function d(t){var n=t.components,a=o()(t,l);return Object(p.mdx)(s,r()({},c,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { loadPopup } from '../../popup';\n\nconst tasksData = [\n  {\n    key: 'task1',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2016, 0, 1, 8).toISOString(),\n    endDate: new Date(2016, 0, 1, 12).toISOString(),\n  },\n  {\n    key: 'task2',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 23).toISOString(),\n  },\n];\n\nconst actionsData = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 7, 15).toISOString()],\n  },\n];\n\nconst simplePanningData = {\n  key: 'track 0',\n  trackLabel: {\n    display: 'Default',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: tasksData,\n  actions: actionsData,\n};\n\nexport default simplePanningData;\n\n")))}d.isMDXComponent=!0},1807:function(t,n,a){"use strict";var e=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e(a(43)),i=e(a(0)),o=e(a(1320)),p=e(a(78)),l=e(a(1321));a(1323),a(1338);var c,s=e(a(1326)),d=e(a(1396)),u=e(a(1421)),m=l.default.deepClone((0,d.default)("#simpleGanttPanning")),f=[l.default.deepClone(u.default)],g={initial:0,factor:3};n.default=function(){i.default.useEffect((function(){c=o.default.api.gantt(m),f.forEach((function(t){c.loadContent(t)}))}),[]);var t=i.default.useReducer((function(t,n){var a;switch(n.type){case"panLeft":a=t.initial-t.factor;break;case"panRight":a=t.initial+t.factor;break;default:return t}return{initial:a,factor:t.factor}}),g),n=(0,r.default)(t,2),a=n[0],e=n[1];return i.default.useLayoutEffect((function(){c&&(c.config.axis.x.lowerLimit=new Date(2016,0,1,a.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,a.initial).toISOString(),c.reflowMultipleDatasets())}),[a.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(p.default,{className:"button-pan-left",text:"<",onClick:function(){return e({type:"panLeft"})}}),i.default.createElement(p.default,{className:"button-pan-right",text:">",onClick:function(){return e({type:"panRight"})}}),i.default.createElement(s.default,{id:"simpleGanttPanning"}))}},2108:function(t,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return C}));var e=a(29),r=a.n(e),i=a(56),o=a.n(i),p=a(0),l=a.n(p),c=a(813),s=a(1807),d=a.n(s),u=["components"],m={};function f(t){var n=t.components,a=o()(t,u);return Object(c.mdx)("wrapper",r()({},m,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport Button from 'terra-button/lib/Button';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';\nimport graphData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/simplePanningData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttPanningConfig('#simpleGanttPanning'));\nconst dataset = [utils.deepClone(graphData)];\n\nlet graph;\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nconst SimpleGanttPanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"simpleGanttPanning\" />\n    </>\n  );\n};\n\nexport default SimpleGanttPanningExample;\n\n")))}f.isMDXComponent=!0;var g=a(1328),b=a.n(g),h=a(1329),x=function(t){var n=t.title,a=t.description,e=t.isExpanded;return l.a.createElement(b.a,{title:n||"Simple Panning",description:a,example:l.a.createElement(d.a,null),exampleCssSrc:l.a.createElement(h.a,null),exampleSrc:l.a.createElement(f,null),isExpanded:e})},S=a(1572),O=a(1574),j=["components"];a(1331);var k={},D="wrapper";function C(t){var n=t.components,a=o()(t,j);return Object(c.mdx)(D,r()({},k,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"simple-gantt-chart-panning"},"Simple Gantt chart panning"),Object(c.mdx)("p",null,"This is a simple Gantt chart example that implements panning."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(x,{mdxType:"GanttChart"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(S.a,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)(O.a,{mdxType:"DataObject"})))}C.isMDXComponent=!0}}]);