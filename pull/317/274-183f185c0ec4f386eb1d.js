(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{2076:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(29),d=n.n(a),r=n(56),i=n.n(r),l=(n(0),n(809)),m=n.p+"cb846c5995363a0ef6cb3da3d336d6f3.png",p=n.p+"ceb0f1477985e1a70891cbc2f293027a.png",o=["components"],c={},b="wrapper";function s(e){var t=e.components,n=i()(e,o);return Object(l.mdx)(b,d()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"padding"},"Padding"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"#container-padding"},"Container Padding")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"#content-padding"},"Content Padding")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"#structure"},"Structure")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"#properties"},"Properties"))),Object(l.mdx)("p",null,"There are 2 kinds of padding that can be applied to graphs:"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"Container Padding"),Object(l.mdx)("li",{parentName:"ol"},"Content Padding")),Object(l.mdx)("h2",{id:"container-padding"},"Container Padding"),Object(l.mdx)("p",null,"Consumer can add CSS padding/margin on the container of the graph whose ID is provided to Carbon's input (via JSON) for inserting the graph. Above properties applied will be used to position the graph's axis, grid, labels, legend etc."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example use case:")," Consumer has multiple graphs and they want to position/line-up all the graphs vertically."),Object(l.mdx)("img",{src:m,alt:"Container",style:{width:1200,height:400,paddingLeft:50}}),Object(l.mdx)("h2",{id:"content-padding"},"Content Padding"),Object(l.mdx)("p",null,"Consumer can use the input JSON's ",Object(l.mdx)("inlineCode",{parentName:"p"},"padding")," property to position the content of the graph in the container."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"WARNING:"),"\nUse of content-based ",Object(l.mdx)("inlineCode",{parentName:"p"},"padding")," property is strictly use-case specific. Flags such as ",Object(l.mdx)("inlineCode",{parentName:"p"},"showLabel")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"axis.x.show")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"axis.y.show")," needs to be hidden appropriately by the consumer."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example use case:")," Consumer has their own axis and labels and wants to only make use of the content and grid lines."),Object(l.mdx)("img",{src:p,alt:"Content",style:{width:1200,height:400,paddingLeft:50}}),Object(l.mdx)("h2",{id:"structure"},"Structure"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-javascript"},"var padding = {\n    top: 10,\n    bottom: 10,\n    left: 30,\n    right: 50\n};\n")),Object(l.mdx)("h2",{id:"properties"},"Properties"),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(l.mdx)("th",{parentName:"tr",align:null},"Expected"),Object(l.mdx)("th",{parentName:"tr",align:null},"Default"),Object(l.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"top")),Object(l.mdx)("td",{parentName:"tr",align:null},"number"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"10")),Object(l.mdx)("td",{parentName:"tr",align:null},"Customize the top-start point of the graph content")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"bottom")),Object(l.mdx)("td",{parentName:"tr",align:null},"number"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"10")),Object(l.mdx)("td",{parentName:"tr",align:null},"Customize the length from the bottom of content relative to bottom-end point of the graph content")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"left")),Object(l.mdx)("td",{parentName:"tr",align:null},"number"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"30")),Object(l.mdx)("td",{parentName:"tr",align:null},"Customize the left-start point of the graph content")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"right")),Object(l.mdx)("td",{parentName:"tr",align:null},"number"),Object(l.mdx)("td",{parentName:"tr",align:null},Object(l.mdx)("inlineCode",{parentName:"td"},"50")),Object(l.mdx)("td",{parentName:"tr",align:null},"Customize the right-end point of the graph content")))),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"For some graphs like Gantt, if top padding is not properly padded, the custom dateline indicators might get cut-off."),Object(l.mdx)("li",{parentName:"ul"},"Axes Labels can appear within the graph if not padded properly."),Object(l.mdx)("li",{parentName:"ul"},"Axes ticks and text might get cut-off when the padding being used is too low than the default padding values."),Object(l.mdx)("li",{parentName:"ul"},"Using negative values for padding is allowed, doing so, it shifts graph content more towards the padded side.")))}s.isMDXComponent=!0}}]);