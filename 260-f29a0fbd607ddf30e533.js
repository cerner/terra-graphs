(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1842:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(31),l=a.n(n),r=a(55),m=a.n(r),d=(a(0),a(788)),i=["components"],c={},p="wrapper";function b(e){var t=e.components,a=m()(e,i);return Object(d.mdx)(p,l()({},c,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"eventline"},"Eventline"),Object(d.mdx)("p",null,"An ",Object(d.mdx)("inlineCode",{parentName:"p"},"Eventline")," is a dotted line (by default) used to show an event occurring at a specific time.\nUnlike ",Object(d.mdx)("inlineCode",{parentName:"p"},"Dateline"),", ",Object(d.mdx)("inlineCode",{parentName:"p"},"Eventline")," does not have an indicator and therefore is not interactable.\nConsumers is expected to define the use-case accordingly."),Object(d.mdx)("p",null,"If ",Object(d.mdx)("inlineCode",{parentName:"p"},"eventLine")," is provided then the ",Object(d.mdx)("inlineCode",{parentName:"p"},"value")," property is mandatory."),Object(d.mdx)("p",null,"When using Eventline with graph then ",Object(d.mdx)("inlineCode",{parentName:"p"},"x axis type")," must be ",Object(d.mdx)("strong",{parentName:"p"},"timeseries"),"."),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#structure"},"Structure")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#properties"},"Properties"),Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#style"},"style"))))),Object(d.mdx)("h2",{id:"structure"},"Structure"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-json"},"  dateline:[\n    {\n      color: <hex value as string>,\n      value: <Date>,\n      style: <style object>\n    }\n  ]\n")),Object(d.mdx)("h2",{id:"properties"},"Properties"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(d.mdx)("th",{parentName:"tr",align:null},"Type"),Object(d.mdx)("th",{parentName:"tr",align:null},"Default"),Object(d.mdx)("th",{parentName:"tr",align:null},"Required"),Object(d.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"color"),Object(d.mdx)("td",{parentName:"tr",align:null},"string (ISO8601)"),Object(d.mdx)("td",{parentName:"tr",align:null},"-"),Object(d.mdx)("td",{parentName:"tr",align:null},"yes"),Object(d.mdx)("td",{parentName:"tr",align:null},"Value for the color of the eventline. Can be a hex value or constant from ",Object(d.mdx)("a",{parentName:"td",href:"./colors"},"Colors"),".")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"value"),Object(d.mdx)("td",{parentName:"tr",align:null},"Date"),Object(d.mdx)("td",{parentName:"tr",align:null},"-"),Object(d.mdx)("td",{parentName:"tr",align:null},"yes"),Object(d.mdx)("td",{parentName:"tr",align:null},"Position where eventline needs to be placed.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"style"),Object(d.mdx)("td",{parentName:"tr",align:null},"object"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},'{strokeDashArray: "2,2"}')),Object(d.mdx)("td",{parentName:"tr",align:null},"no"),Object(d.mdx)("td",{parentName:"tr",align:null},"See ",Object(d.mdx)("a",{parentName:"td",href:"#style"},"style"),".")))),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("h3",{parentName:"li",id:"style"},Object(d.mdx)("inlineCode",{parentName:"h3"},"style")),Object(d.mdx)("p",{parentName:"li"},"Each line can have a style object in the values level."),Object(d.mdx)("pre",{parentName:"li"},Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"    style: { strokeDashArray: <string> },\n")),Object(d.mdx)("table",{parentName:"li"},Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(d.mdx)("th",{parentName:"tr",align:null},"Type"),Object(d.mdx)("th",{parentName:"tr",align:null},"Required"),Object(d.mdx)("th",{parentName:"tr",align:null},"Default"),Object(d.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"strokeDashArray"),Object(d.mdx)("td",{parentName:"tr",align:null},"string"),Object(d.mdx)("td",{parentName:"tr",align:null},"no"),Object(d.mdx)("td",{parentName:"tr",align:null},'"0"'),Object(d.mdx)("td",{parentName:"tr",align:null},"Applies stroke-dasharray CSS property to the SVG line.")))))))}b.isMDXComponent=!0}}]);