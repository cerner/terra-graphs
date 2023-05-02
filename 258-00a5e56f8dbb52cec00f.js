(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{1828:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(31),l=a.n(n),r=a(55),d=a.n(r),m=(a(0),a(788)),i=["components"],p={},c="wrapper";function b(e){var t=e.components,a=d()(e,i);return Object(m.mdx)(c,l()({},p,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"dateline"},"Dateline"),Object(m.mdx)("p",null,"If Dateline is provided then the ",Object(m.mdx)("inlineCode",{parentName:"p"},"value")," property is mandatory."),Object(m.mdx)("p",null,"When using dateline with graph then ",Object(m.mdx)("inlineCode",{parentName:"p"},"x axis type")," must be ",Object(m.mdx)("strong",{parentName:"p"},"timeseries")," it is mandatory."),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#structure"},"Structure")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#properties"},"Properties"),Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#label"},"label"))))),Object(m.mdx)("h2",{id:"structure"},"Structure"),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-js"},"  dateline:[\n    {\n      color: <hex value as string>,\n      shape: <string>,\n      value: <Date>,\n      style: <style object>,\n      label: {\n          display: <string>\n      },\n      onClick: <function>,\n      showDatelineIndicator: <boolshowDatelineIndicator>,\n    }\n  ]\n")),Object(m.mdx)("h2",{id:"properties"},"Properties"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(m.mdx)("th",{parentName:"tr",align:null},"Type"),Object(m.mdx)("th",{parentName:"tr",align:null},"Default"),Object(m.mdx)("th",{parentName:"tr",align:null},"Required"),Object(m.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"color"),Object(m.mdx)("td",{parentName:"tr",align:null},"string (ISO8601)"),Object(m.mdx)("td",{parentName:"tr",align:null},"-"),Object(m.mdx)("td",{parentName:"tr",align:null},"yes"),Object(m.mdx)("td",{parentName:"tr",align:null},"Value for the color of the dateline. Can be a hex value or constant from ",Object(m.mdx)("a",{parentName:"td",href:"./colors"},"Colors"),".")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"shape"),Object(m.mdx)("td",{parentName:"tr",align:null},"string (ISO8601)"),Object(m.mdx)("td",{parentName:"tr",align:null},"-"),Object(m.mdx)("td",{parentName:"tr",align:null},"yes"),Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"Shape")," of the indicator above dateline. See ",Object(m.mdx)("a",{parentName:"td",href:"./Shapes"},"Shapes"),".")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"value"),Object(m.mdx)("td",{parentName:"tr",align:null},"Date"),Object(m.mdx)("td",{parentName:"tr",align:null},"-"),Object(m.mdx)("td",{parentName:"tr",align:null},"yes"),Object(m.mdx)("td",{parentName:"tr",align:null},"Position where eventline needs to be placed.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"label"),Object(m.mdx)("td",{parentName:"tr",align:null},"object"),Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(m.mdx)("td",{parentName:"tr",align:null},"no"),Object(m.mdx)("td",{parentName:"tr",align:null},"See ",Object(m.mdx)("a",{parentName:"td",href:"#label"},"label"),".")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"onClick"),Object(m.mdx)("td",{parentName:"tr",align:null},"function"),Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(m.mdx)("td",{parentName:"tr",align:null},"no"),Object(m.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking the dataline, such as to display a popup.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"showDatelineIndicator"),Object(m.mdx)("td",{parentName:"tr",align:null},"bool"),Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"false")),Object(m.mdx)("td",{parentName:"tr",align:null},"no"),Object(m.mdx)("td",{parentName:"tr",align:null},"Shows a clickable indicator above dateline.")))),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"shape")," is required if ",Object(m.mdx)("inlineCode",{parentName:"li"},"showDatelineIndicator")," is ",Object(m.mdx)("inlineCode",{parentName:"li"},"true"),".\nIf ",Object(m.mdx)("inlineCode",{parentName:"li"},"showDatelineIndicator")," is explicitly set to false then ",Object(m.mdx)("inlineCode",{parentName:"li"},"shape")," is optional.")),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("h3",{parentName:"li",id:"label"},Object(m.mdx)("inlineCode",{parentName:"h3"},"label")),Object(m.mdx)("p",{parentName:"li"},Object(m.mdx)("strong",{parentName:"p"},"type:")," object\n",Object(m.mdx)("strong",{parentName:"p"},"default value:")," ",Object(m.mdx)("inlineCode",{parentName:"p"},"{}")),Object(m.mdx)("p",{parentName:"li"},"  Label for the dataset in the legend. If it is not provided then it will not be shown in the legend."),Object(m.mdx)("pre",{parentName:"li"},Object(m.mdx)("code",{parentName:"pre"},"```json\n  label: {\n    display: <string>\n  }\n```\n")),Object(m.mdx)("table",{parentName:"li"},Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(m.mdx)("th",{parentName:"tr",align:null},"Type"),Object(m.mdx)("th",{parentName:"tr",align:null},"Required"),Object(m.mdx)("th",{parentName:"tr",align:null},"Default"),Object(m.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"display"),Object(m.mdx)("td",{parentName:"tr",align:null},"string"),Object(m.mdx)("td",{parentName:"tr",align:null},"no"),Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(m.mdx)("td",{parentName:"tr",align:null},"Text to display as the label for the dataset.")))))))}b.isMDXComponent=!0}}]);