(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{2074:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var a=t(31),i=t.n(a),r=t(55),l=t.n(r),d=(t(0),t(788)),m=t.p+"91f6f8ffdbbd462fae8add16b0e847fe.png",o=["components"],p={},c="wrapper";function b(e){var n=e.components,t=l()(e,o);return Object(d.mdx)(c,i()({},p,t,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"carbon-lifecycle"},"Carbon Lifecycle"),Object(d.mdx)("p",null,"For a consistent development experience Carbon uses the same underlying interface for all graph types. All Carbon graphs are separated into 2 parts: ",Object(d.mdx)("inlineCode",{parentName:"p"},"Construct")," & ",Object(d.mdx)("inlineCode",{parentName:"p"},"GraphContent"),"."),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#construct"},"Construct"),Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#loadcontentinput"},Object(d.mdx)("inlineCode",{parentName:"a"},"loadContent(input)"))),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#unloadcontentinput"},Object(d.mdx)("inlineCode",{parentName:"a"},"unloadContent(input)"))),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#destroy"},Object(d.mdx)("inlineCode",{parentName:"a"},"destroy"))))),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#important-information"},"Important information")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#graphcontent"},"GraphContent"))),Object(d.mdx)("h2",{id:"construct"},"Construct"),Object(d.mdx)("p",null,Object(d.mdx)("inlineCode",{parentName:"p"},"Construct")," is the base for ",Object(d.mdx)("inlineCode",{parentName:"p"},"Graph")," and other types of graph that serves as a container for the datasets (content). Usually this takes care of one or more of the following:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"X Axis"),Object(d.mdx)("li",{parentName:"ul"},"Y Axis"),Object(d.mdx)("li",{parentName:"ul"},"Vertical Grid"),Object(d.mdx)("li",{parentName:"ul"},"Horizontal Grid"),Object(d.mdx)("li",{parentName:"ul"},"X Axis labels"),Object(d.mdx)("li",{parentName:"ul"},"Y Axis labels"),Object(d.mdx)("li",{parentName:"ul"},"Legend")),Object(d.mdx)("p",null,"Construct exposes following functions to handle the graph or its contents:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"loadContent")," - Load a dataset in the graph"),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"unloadContent")," - Remove a dataset from the graph"),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"destroy")," - Destroys the graph"),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"generate")," - Called ",Object(d.mdx)("em",{parentName:"li"},"internally")," when instantiating the graph"),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"resize")," - Called ",Object(d.mdx)("em",{parentName:"li"},"internally")," on window resize event to resize the graph")),Object(d.mdx)("h3",{id:"loadcontentinput"},Object(d.mdx)("inlineCode",{parentName:"h3"},"loadContent(input)")),Object(d.mdx)("p",null,"To load a graph content:"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-javascript"},'var data = {\n    key: "uid_1",\n    label: {\n        display: "Data Label 1"\n    },\n    values: [\n        {\n            x: "2016-03-01T12:00:00Z",\n            y: 14\n        },\n        {\n            x: "2016-04-10T12:00:00Z",\n            y: 1\n        },\n        {\n            x: "2016-11-01T12:00:00Z",\n            y: 18\n        }\n    ]\n};\n// Shortened for brevity, lineGraph is an instance of Carbon.api.graph\nlineGraph.loadContent(Carbon.api.line(data));\n')),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Note:")," Follow documentation of corresponding graph type for more information on loading respective contents in a graph."),Object(d.mdx)("h3",{id:"unloadcontentinput"},Object(d.mdx)("inlineCode",{parentName:"h3"},"unloadContent(input)")),Object(d.mdx)("p",null,"To remove a dataset from graph, the consumer has to provide the corresponding unique ",Object(d.mdx)("inlineCode",{parentName:"p"},"key")," and ",Object(d.mdx)("inlineCode",{parentName:"p"},"label")," object."),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Shortened for brevity, lineGraph is an instance of Carbon.api.graph\nlineGraph.unloadContent({\n    key: "uid_1",\n    trackLabel: {\n        display: "Data Label 1"\n    }\n});\n')),Object(d.mdx)("h3",{id:"destroy"},Object(d.mdx)("inlineCode",{parentName:"h3"},"destroy")),Object(d.mdx)("p",null,"Destroys the graph generated within the container."),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Shortened for brevity, lineGraph is an instance of Carbon.api.graph\nlineGraph.destroy();\n")),Object(d.mdx)("h2",{id:"important-information"},"Important information"),Object(d.mdx)("p",null,"Only graphs that share the same rules of ",Object(d.mdx)("inlineCode",{parentName:"p"},"Construct")," can be combined together."),Object(d.mdx)("p",null,"For instance:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"A ",Object(d.mdx)("inlineCode",{parentName:"li"},"Gantt")," chart ",Object(d.mdx)("strong",{parentName:"li"},"cannot")," be combined with a ",Object(d.mdx)("inlineCode",{parentName:"li"},"Line")," graph -> ",Object(d.mdx)("inlineCode",{parentName:"li"},"Line")," needs a X and Y axis whereas ",Object(d.mdx)("inlineCode",{parentName:"li"},"Gantt")," chart Construct only has X Axis when drawn."),Object(d.mdx)("li",{parentName:"ul"},"A ",Object(d.mdx)("inlineCode",{parentName:"li"},"Timeline")," graph ",Object(d.mdx)("strong",{parentName:"li"},"cannot")," be combined with a ",Object(d.mdx)("inlineCode",{parentName:"li"},"Line")," graph -> ",Object(d.mdx)("inlineCode",{parentName:"li"},"Line")," needs a X and Y axis whereas ",Object(d.mdx)("inlineCode",{parentName:"li"},"Timeline")," graph doesn't have a Y Axis."),Object(d.mdx)("li",{parentName:"ul"},"A ",Object(d.mdx)("inlineCode",{parentName:"li"},"Line")," graph ",Object(d.mdx)("strong",{parentName:"li"},"can")," be combined with a ",Object(d.mdx)("inlineCode",{parentName:"li"},"Bar")," or ",Object(d.mdx)("inlineCode",{parentName:"li"},"Paired Result"),".")),Object(d.mdx)("h2",{id:"graphcontent"},"GraphContent"),Object(d.mdx)("p",null,Object(d.mdx)("inlineCode",{parentName:"p"},"GraphContent")," is the representation of the dataset drawn within the ",Object(d.mdx)("inlineCode",{parentName:"p"},"Construct"),". For instance, for ",Object(d.mdx)("inlineCode",{parentName:"p"},"Line")," graph, the ",Object(d.mdx)("inlineCode",{parentName:"p"},"Construct")," is the Axes, Labels and Legend while the ",Object(d.mdx)("inlineCode",{parentName:"p"},"GraphContent")," is the line itself."),Object(d.mdx)("p",null,"Separation of ",Object(d.mdx)("em",{parentName:"p"},"container")," and ",Object(d.mdx)("em",{parentName:"p"},"content")," allows us to:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Render multiple ",Object(d.mdx)("inlineCode",{parentName:"li"},"GraphContent"),"s within a single ",Object(d.mdx)("inlineCode",{parentName:"li"},"Construct"),"."),Object(d.mdx)("li",{parentName:"ul"},"Draw different combinations of graphs i.e. we can draw a ",Object(d.mdx)("em",{parentName:"li"},"Combination graph")," with ",Object(d.mdx)("em",{parentName:"li"},"2 Bar graphs")," or ",Object(d.mdx)("em",{parentName:"li"},"1 Bar graph")," and ",Object(d.mdx)("em",{parentName:"li"},"1 line graph")," without ever needing to building those natively in Carbon."),Object(d.mdx)("li",{parentName:"ul"},"Draw different combinations of graph in any order necessary.")),Object(d.mdx)("img",{src:m,alt:"Graph Content",style:{width:600,height:400,paddingLeft:380}}))}b.isMDXComponent=!0}}]);