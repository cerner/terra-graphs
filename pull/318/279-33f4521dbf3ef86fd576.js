(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{2119:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return m}));var t=n(29),r=n.n(t),l=n(56),i=n.n(l),p=(n(0),n(809)),o=n.p+"79b2ba6be2c7a957573284c905bab1bc.png",c=["components"],d={},s="wrapper";function m(e){var a=e.components,n=i()(e,c);return Object(p.mdx)(s,r()({},d,n,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#getting-started"},"Getting Started"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#install-carbon-graphs"},"Install Carbon-Graphs")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#add-carbon-to-a-website"},"Add Carbon to a Website")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#add-carbon-in-your-application"},"Add Carbon in your application")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#drawing-a-line-graph"},"Drawing a Line Graph"))))),Object(p.mdx)("h2",{id:"install-carbon-graphs"},"Install Carbon-Graphs"),Object(p.mdx)("p",null,"Install with ",Object(p.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs"),":"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-html"},"  npm i @cerner/carbon-graphs --save-dev\n")),Object(p.mdx)("p",null,"Now that you have installed ",Object(p.mdx)("inlineCode",{parentName:"p"},"Carbon Graphs"),", let's see how we can integrate it with your source-code."),Object(p.mdx)("h2",{id:"add-carbon-to-a-website"},"Add Carbon to a Website"),Object(p.mdx)("p",null,"You can use Carbon in a ",Object(p.mdx)("inlineCode",{parentName:"p"},"<script>")," tag."),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-html"},'<script src="dist/js/carbon-graphs.js"><\/script>\n<link rel="stylesheet" type="text/css" href="dist/css/carbon-graphs.css" />\n')),Object(p.mdx)("h2",{id:"add-carbon-in-your-application"},"Add Carbon in your application"),Object(p.mdx)("p",null,"Carbon is written using ",Object(p.mdx)("inlineCode",{parentName:"p"},"ES2015")," modules. Create a custom bundle using Rollup, Webpack, or your preferred bundler. To import Carbon into an ES2015 application:"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},'import Carbon from "@cerner/carbon-graphs/dist/js/carbon-graphs.js";\nimport "@cerner/carbon-graphs/dist/css/carbon-graphs.css";\n')),Object(p.mdx)("h2",{id:"drawing-a-line-graph"},"Drawing a Line Graph"),Object(p.mdx)("p",null,"Let’s see how easy it can be to get started!"),Object(p.mdx)("p",null,"To create a line graph, first create an HTML element that will hold the graph. Here, we are specifying a main element with an id of root."),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-html"},'<main id="root"></main>\n')),Object(p.mdx)("p",null,"From there, we will initialize a JavaScript object that configures various aspects of the graph, including where the graph will be drawn and how the axes should appear."),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},'const graphConfiguration = {\n    bindTo: "#root",\n    axis: {\n        x: {\n            type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n            label: "Datetime",\n            lowerLimit: new Date(2016, 0, 1, 9, 0).toISOString(),\n            upperLimit: new Date(2016, 0, 1, 15, 59).toISOString()\n        },\n        y: {\n            label: "Temperature (degF)",\n            lowerLimit: 90,\n            upperLimit: 106\n        }\n    }\n};\n')),Object(p.mdx)("p",null,"Next, we’ll configure the data-set we want to plot."),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},'const dataset = {\n    key: "uid_1",\n    label: {\n        display: "Oral Temperature"\n    },\n    shape: Carbon.helpers.SHAPES.RHOMBUS,\n    color: Carbon.helpers.COLORS.BLUE,\n    values: [\n        {\n            x: new Date(2016, 0, 1, 10, 5).toISOString(),\n            y: 96.5\n        },\n        {\n            x: new Date(2016, 0, 1, 12, 15).toISOString(),\n            y: 98.7\n        },\n        {\n            x: new Date(2016, 0, 1, 14, 15).toISOString(),\n            y: 97.4\n        }\n    ]\n};\n')),Object(p.mdx)("p",null,"And to wrap it all up, we’ll call ",Object(p.mdx)("inlineCode",{parentName:"p"},"loadContent")," to draw the content."),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"const graph = Carbon.api.graph(graphConfiguration);\ngraph.loadContent(Carbon.api.line(dataset));\n")),Object(p.mdx)("p",null,"That’s it!"),Object(p.mdx)("img",{src:o,alt:"Getting Started",style:{width:600,height:400,paddingLeft:380}}))}m.isMDXComponent=!0}}]);