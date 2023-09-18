(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{1849:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var i=a(29),n=a.n(i),l=a(56),d=a.n(l),m=(a(0),a(809)),r=["components"],o={},p="wrapper";function c(e){var t=e.components,a=d()(e,r);return Object(m.mdx)(p,n()({},o,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"errors"},"Errors"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#input"},"Input")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#axis-type-timeseries"},"Axis Type: Timeseries")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#constraints"},"Constraints"),Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#legend"},"Legend")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#axis"},"Axis")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#data-point-onclick"},"Data point OnClick")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#locale"},"Locale")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#data-point-values"},"Data point values"))))),Object(m.mdx)("h2",{id:"input"},"Input"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"No bind id is provided"),Object(m.mdx)("li",{parentName:"ul"},"No axes information is provided ","[x, y]"),Object(m.mdx)("li",{parentName:"ul"},"No lower and upper limits are provided for axes"),Object(m.mdx)("li",{parentName:"ul"},"No Y axis label is provided"),Object(m.mdx)("li",{parentName:"ul"},"No data is provided"),Object(m.mdx)("li",{parentName:"ul"},"No data key is provided"),Object(m.mdx)("li",{parentName:"ul"},"Data keys are not unique (If multiple data-sets are provided)"),Object(m.mdx)("li",{parentName:"ul"},"No data values are not provided")),Object(m.mdx)("h2",{id:"axis-type-timeseries"},"Axis Type: Timeseries"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Data points are type ",Object(m.mdx)("inlineCode",{parentName:"li"},"timeseries")," but the x-axis bounds are ",Object(m.mdx)("inlineCode",{parentName:"li"},"default")),Object(m.mdx)("li",{parentName:"ul"},"Data points are type ",Object(m.mdx)("inlineCode",{parentName:"li"},"default")," but the x-axis bounds are ",Object(m.mdx)("inlineCode",{parentName:"li"},"timeseries")),Object(m.mdx)("li",{parentName:"ul"},"Data point values provided should be in UTC"),Object(m.mdx)("li",{parentName:"ul"},"Data point values provided should be in ",Object(m.mdx)("a",{parentName:"li",href:"http://www.faqs.org/rfcs/rfc3339.html"},"RFC 3339")," format")),Object(m.mdx)("h2",{id:"constraints"},"Constraints"),Object(m.mdx)("h4",{id:"legend"},"Legend"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"Legend")," only loads if the data-set label is provided",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"This is part of a functionality, any ",Object(m.mdx)("inlineCode",{parentName:"li"},"content")," using Graph API will have the ability to load data within graph and not show legend item"))),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"Graph")," and ",Object(m.mdx)("inlineCode",{parentName:"li"},"Legend")," can be loaded in a separate containers when ",Object(m.mdx)("inlineCode",{parentName:"li"},"bindTo")," and ",Object(m.mdx)("inlineCode",{parentName:"li"},"bindLegendTo")," element id's are provided respectively")),Object(m.mdx)("h4",{id:"axis"},"Axis"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"If ",Object(m.mdx)("inlineCode",{parentName:"li"},"y2")," axis is enabled, then the data-sets expect the ",Object(m.mdx)("inlineCode",{parentName:"li"},'yAxis: "y2"')," property")),Object(m.mdx)("h4",{id:"data-point-onclick"},"Data point OnClick"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"The ",Object(m.mdx)("inlineCode",{parentName:"li"},"onClick")," property needs to be a callback function"),Object(m.mdx)("li",{parentName:"ul"},"Callback function will be called on click of a data point, this function will determine the action performed")),Object(m.mdx)("h4",{id:"locale"},"Locale"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"If ",Object(m.mdx)("inlineCode",{parentName:"li"},"locale")," is provided, ",Object(m.mdx)("inlineCode",{parentName:"li"},"ticks.format")," is expected to be provided as well otherwise there is no effect on the graph itself.")),Object(m.mdx)("h4",{id:"data-point-values"},"Data point values"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"values")," will not be subjected to any kind of pre-processing before generating the graph. ",Object(m.mdx)("inlineCode",{parentName:"li"},"values")," co-ordinates are expected to be linear/sorted.")))}c.isMDXComponent=!0}}]);