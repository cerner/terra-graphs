(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1833:function(n,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return c}));var t=e(31),r=e.n(t),i=e(55),l=e.n(i),p=(e(0),e(788)),o=["components"],d={},s="wrapper";function c(n){var a=n.components,e=l()(n,o);return Object(p.mdx)(s,r()({},d,e,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"panning"},"Panning"),Object(p.mdx)("p",null,"Panning is applied with timeline/custom button."),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#structure"},"Structure")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#properties"},"Properties")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#usage"},"Usage"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#reflow"},"reflow")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#reflowmultipledatasets"},"reflowMultipleDatasets"))))),Object(p.mdx)("h2",{id:"structure"},"Structure"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"graphConfig: {\n    ...\n    panning: {\n        enabled: <bool>\n    }\n}\n")),Object(p.mdx)("h2",{id:"properties"},"Properties"),Object(p.mdx)("table",null,Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Expected"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"enabled"),Object(p.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"Set to true when panning is needed")))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"If ",Object(p.mdx)("inlineCode",{parentName:"li"},"graphConfig.panning")," is not provided then enabled will be false.")),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("h3",{id:"reflow"},"reflow"),Object(p.mdx)("p",null,"Panning can only be used with graphs having the construct as Graph, Gantt and Timeline."),Object(p.mdx)("p",null,Object(p.mdx)("strong",{parentName:"p"},"Note:")," Panning with ",Object(p.mdx)("inlineCode",{parentName:"p"},"reflow")," is now deprecated and will be removed in future Major Version Bump. Please use ",Object(p.mdx)("a",{parentName:"p",href:"#reflowmultipledatasets"},"reflowMultipleDatasets"),"."),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},'// axisData\nconst graphConfiguration = {\n    bindTo: "#root",\n    axis: {\n        x: {\n            type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n            label: "Datetime",\n            lowerLimit: new Date(2016, 0, 1, 9, 0).toISOString(),\n            upperLimit: new Date(2016, 0, 1, 15, 59).toISOString()\n        },\n        y: {\n            label: "Temperature (degF)",\n            lowerLimit: 90,\n            upperLimit: 106\n        }\n    }\n};\n')),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},'// graphData\nconst dataSet = {\n    key: "uid_1",\n    label: {\n        display: "Oral Temperature"\n    },\n    shape: Carbon.helpers.SHAPES.RHOMBUS,\n    color: Carbon.helpers.COLORS.BLUE,\n    values: [\n        {\n            x: new Date(2016, 0, 1, 10, 5).toISOString(),\n            y: 96.5\n        },\n        {\n            x: new Date(2016, 0, 1, 12, 15).toISOString(),\n            y: 98.7\n        },\n        {\n            x: new Date(2016, 0, 1, 14, 15).toISOString(),\n            y: 97.4\n        }\n    ]\n};\n')),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},'// panData\nconst panData = {\n    key: "uid_1", // key should already be present in the graph\n    values: [\n        {\n            x: new Date(2016, 0, 1, 10, 5).toISOString(),\n            y: 95\n        },\n        {\n            x: new Date(2016, 0, 1, 12, 15).toISOString(),\n            y: 92\n        },\n        {\n            x: new Date(2016, 0, 1, 14, 15).toISOString(),\n            y: 98\n        }\n    ]\n};\n')),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-javascript"},"export const renderLineWithPanning = (id) => {\n    const axisData = graphConfiguration;\n    axisData.pan = {\n        enabled: true\n    };\n    const graphData = dataSet;\n    graphData.regions = [regions[0]];\n\n    const createGraph = () => {\n        graph.reflow();\n    };\n\n    const graph = Carbon.api.graph(axisData);\n    graph.loadContent(Carbon.api.line(graphData));\n    // Additional data-sets to be loaded here only, like:\n    graph.loadContent(Carbon.api.line(/* Data array */));\n    axisData.axis = graph.config.axis;\n\n    createPanningControls(id, {\n        axisData,\n        creationHandler: createGraph\n    });\n    return graph;\n};\n")),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-javascript"},"export const renderLinePanningWithDynamicData = (id) => {\n    const axisData = graphConfiguration;\n    axisData.pan = {\n        enabled: true\n    };\n    const graphData = dataSet;\n    graphData.regions = [regions[0]];\n\n    const createGraph = () => {\n        graph.reflow(panData);\n    };\n\n    const graph = Carbon.api.graph(axisData);\n    graph.loadContent(Carbon.api.line(graphData));\n    // Additional data-sets to be loaded here only, like:\n    graph.loadContent(Carbon.api.line(/* Data array */));\n    axisData.axis = graph.config.axis;\n\n    createPanningControls(id, {\n        axisData,\n        creationHandler: createGraph\n    });\n    return graph;\n};\n")),Object(p.mdx)("h3",{id:"reflowmultipledatasets"},"reflowMultipleDatasets"),Object(p.mdx)("p",null,"Panning can be used with all graph types except Pie."),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},'// axisData\nconst graphConfiguration = {\n    bindTo: "#root",\n    axis: {\n        x: {\n            type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n            label: "Datetime",\n            lowerLimit: new Date(2016, 0, 1, 9, 0).toISOString(),\n            upperLimit: new Date(2016, 0, 1, 15, 59).toISOString()\n        },\n        y: {\n            label: "Temperature (degF)",\n            lowerLimit: 90,\n            upperLimit: 106\n        }\n    }\n};\n')),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},'// graphData\nconst dataSet = {\n    key: "uid_1",\n    label: {\n        display: "Oral Temperature"\n    },\n    shape: Carbon.helpers.SHAPES.RHOMBUS,\n    color: Carbon.helpers.COLORS.BLUE,\n    values: [\n        {\n            x: new Date(2016, 0, 1, 10, 5).toISOString(),\n            y: 96.5\n        },\n        {\n            x: new Date(2016, 0, 1, 12, 15).toISOString(),\n            y: 98.7\n        },\n        {\n            x: new Date(2016, 0, 1, 14, 15).toISOString(),\n            y: 97.4\n        }\n    ]\n};\n')),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"// panData\nconst panData = {\n    key: \"uid_1\", // key should already be present in the graph\n    values: [\n        {\n            x: new Date(2016, 0, 1, 10, 5).toISOString(),\n            y: 95\n        },\n        {\n            x: new Date(2016, 0, 1, 12, 15).toISOString(),\n            y: 92\n        },\n        {\n            x: new Date(2016, 0, 1, 14, 15).toISOString(),\n            y: 98\n        }\n    ]\n};\n\n//Eventline\nconst newEventline = [\n  {\n    color: Carbon.helpers.COLORS.GREEN,\n    style: {\n      strokeDashArray: '4,4',\n    },\n    value: new Date(2016, 0, 1, 9, 45).toISOString(),\n  },\n];\n")),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-javascript"},"export const renderLineWithPanning = (id) => {\n    const axisData = graphConfiguration;\n    axisData.pan = {\n        enabled: true\n    };\n    const graphData = dataSet;\n    graphData.regions = [regions[0]];\n\n    const createGraph = () => {\n        graph.reflowMultipleDatasets();\n    };\n\n    const graph = Carbon.api.graph(axisData);\n    graph.loadContent(Carbon.api.line(graphData));\n    // Additional data-sets to be loaded here only, like:\n    graph.loadContent(Carbon.api.line(/* Data array */));\n    axisData.axis = graph.config.axis;\n\n    createPanningControls(id, {\n        axisData,\n        creationHandler: createGraph\n    });\n    return graph;\n};\n")),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-javascript"},"export const renderLinePanningWithDynamicDataAndEventline = (id) => {\n    const axisData = graphConfiguration;\n    axisData.pan = {\n        enabled: true\n    };\n    const graphData = dataSet;\n    graphData.regions = [regions[0]];\n\n    const newDataset = {\n      panData: [panData],\n      eventline: newEventline,\n    };\n\n    const createGraph = () => {\n        graph.reflowMultipleDatasets(newDataset);\n    };\n\n    const graph = Carbon.api.graph(axisData);\n    graph.loadContent(Carbon.api.line(graphData));\n    // Additional data-sets to be loaded here only, like:\n    graph.loadContent(Carbon.api.line(/* Data array */));\n    axisData.axis = graph.config.axis;\n\n    createPanningControls(id, {\n        axisData,\n        creationHandler: createGraph\n    });\n    return graph;\n};\n")))}c.isMDXComponent=!0}}]);