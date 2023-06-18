(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1836:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(31),l=n.n(a),r=n(56),i=n.n(r),d=(n(0),n(795)),m=["components"],o={},p="wrapper";function b(e){var t=e.components,n=i()(e,m);return Object(d.mdx)(p,l()({},o,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"axes"},"Axes"),Object(d.mdx)("p",null,"Any graph that inherits from ",Object(d.mdx)("inlineCode",{parentName:"p"},"Graph")," API will inherit the following ",Object(d.mdx)("inlineCode",{parentName:"p"},"Axis")," and ",Object(d.mdx)("inlineCode",{parentName:"p"},"Tick")," properties as well."),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#structure"},"Structure")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#properties"},"Properties"),Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#allowCalibration"},"allowCalibration")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#type"},"type")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#orientation"},"orientation")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#note"},"Note")))),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",{parentName:"li",href:"#x-axis-domain-padding"},"X Axis Domain Padding"))),Object(d.mdx)("h2",{id:"structure"},"Structure"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-json"},"axis: {\n    x: <x-axis object>,\n    y: <y-axis object>,\n    y2: <y2-axis object>,\n}\n\n\naxis: {\n    x: {\n        lowerLimit: <number> or <Date>,\n        upperLimit: <number> or <Date>,\n        label: <string>,\n        allowCalibration: <bool>\n        onLabelClick: <Function>,\n        orientation: <string>\n        rangeRounding: <bool>,\n        show: <boolean>,\n        suppressingTrailingZeros: <bool>,\n        ticks: <Ticks object>,\n        type: <string>\n    },\n    y: {\n        lowerLimit: <number> or <Date>,\n        upperLimit: <number> or <Date>,\n        label: <string>,\n        onLabelClick: <Function>,\n        padDomain: <bool>,\n        rangeRounding: <bool>,\n        show: <boolean>,\n        suppressingTrailingZeros: <bool>,\n        ticks: <Ticks object>,\n        type: <string>\n    },\n    y2:{\n        lowerLimit: <number> or <Date>,\n        upperLimit: <number> or <Date>,\n        label: <string>,\n        onLabelClick: <Function>,\n        padDomain: <bool>,\n        rangeRounding: <bool>,\n        show: <boolean>,\n        suppressingTrailingZeros: <bool>,\n        ticks: <Ticks object>,\n        type: <string>\n    }\n\n}\n\n")),Object(d.mdx)("h2",{id:"properties"},"Properties"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(d.mdx)("th",{parentName:"tr",align:null},"Type"),Object(d.mdx)("th",{parentName:"tr",align:null},"Default"),Object(d.mdx)("th",{parentName:"tr",align:null},"Required"),Object(d.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"lowerLimit"),Object(d.mdx)("td",{parentName:"tr",align:null},"number or Date"),Object(d.mdx)("td",{parentName:"tr",align:null},"-"),Object(d.mdx)("td",{parentName:"tr",align:null},"yes"),Object(d.mdx)("td",{parentName:"tr",align:null},"Lower bound for the axis. This is inclusive.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"upperLimit"),Object(d.mdx)("td",{parentName:"tr",align:null},"number or Date"),Object(d.mdx)("td",{parentName:"tr",align:null},"-"),Object(d.mdx)("td",{parentName:"tr",align:null},"yes"),Object(d.mdx)("td",{parentName:"tr",align:null},"Upper bound for the axis. This is inclusive.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"label"),Object(d.mdx)("td",{parentName:"tr",align:null},"string"),Object(d.mdx)("td",{parentName:"tr",align:null},"-"),Object(d.mdx)("td",{parentName:"tr",align:null},"yes"),Object(d.mdx)("td",{parentName:"tr",align:null},"Axis label value. Will not be rendered if nothing is provided.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"allowCalibration"),Object(d.mdx)("td",{parentName:"tr",align:null},"bool"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"false")),Object(d.mdx)("td",{parentName:"tr",align:null},"no"),Object(d.mdx)("td",{parentName:"tr",align:null},"See ",Object(d.mdx)("a",{parentName:"td",href:"#allowCalibration"},"allowCalibration"),".")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"onLabelClick"),Object(d.mdx)("td",{parentName:"tr",align:null},"Function"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(d.mdx)("td",{parentName:"tr",align:null},"no"),Object(d.mdx)("td",{parentName:"tr",align:null},"Any action that can be performed when clicking on label.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"orientation"),Object(d.mdx)("td",{parentName:"tr",align:null},"Function"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"AXES_ORIENTATION.DEFAULT")),Object(d.mdx)("td",{parentName:"tr",align:null},"no"),Object(d.mdx)("td",{parentName:"tr",align:null},"See ",Object(d.mdx)("a",{parentName:"td",href:"#orientation"},"orientation"),".")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"padDomain"),Object(d.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"true")),Object(d.mdx)("td",{parentName:"tr",align:null},"no"),Object(d.mdx)("td",{parentName:"tr",align:null},"Toggle for disabling the padding (only for Y and Y2 axes).")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"rangeRounding"),Object(d.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"true")),Object(d.mdx)("td",{parentName:"tr",align:null},"no"),Object(d.mdx)("td",{parentName:"tr",align:null},"Toggle for range rounding.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"show"),Object(d.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"true")),Object(d.mdx)("td",{parentName:"tr",align:null},"no"),Object(d.mdx)("td",{parentName:"tr",align:null},"Toggle for showing the axis.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"suppressTrailingZeros"),Object(d.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"false")),Object(d.mdx)("td",{parentName:"tr",align:null},"no"),Object(d.mdx)("td",{parentName:"tr",align:null},"Toggle to suppress tick values's trailing zeros when default d3 tick formatting is used. For X axis, this property works only when X axis type is set to AXIS_TYPE.DEFAULT. Specifying ",Object(d.mdx)("inlineCode",{parentName:"td"},"~")," in the tick format takes precedence over ",Object(d.mdx)("inlineCode",{parentName:"td"},"suppressTrailingZeros")," property.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"ticks"),Object(d.mdx)("td",{parentName:"tr",align:null},"object"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"null")),Object(d.mdx)("td",{parentName:"tr",align:null},"no"),Object(d.mdx)("td",{parentName:"tr",align:null},"See ",Object(d.mdx)("a",{parentName:"td",href:"./Ticks"},"Ticks"),".")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},"type"),Object(d.mdx)("td",{parentName:"tr",align:null},"string"),Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"AXIS_TYPE.DEFAULT")),Object(d.mdx)("td",{parentName:"tr",align:null},"no"),Object(d.mdx)("td",{parentName:"tr",align:null},"See ",Object(d.mdx)("a",{parentName:"td",href:"#type"},"type"),". Normal number value or time-based. Only for x-axis.")))),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("h3",{parentName:"li",id:"allowcalibration"},Object(d.mdx)("inlineCode",{parentName:"h3"},"allowCalibration")),Object(d.mdx)("p",{parentName:"li"},"  Set calibration for the axis.\nIf ",Object(d.mdx)("inlineCode",{parentName:"p"},"true"),", then the axis upper and lower limits will update to fit the entire graph on the x-axis.\nThis feature can ",Object(d.mdx)("em",{parentName:"p"},"not")," be used in conjunction with panning.\nIf panning is enabled then this property will be ignored if ",Object(d.mdx)("inlineCode",{parentName:"p"},"true"),"."),Object(d.mdx)("p",{parentName:"li"},"  NOTE: This property is only implemented for the x-axis (",Object(d.mdx)("inlineCode",{parentName:"p"},"config.axis.x.allowCalibration"),").\nPlease refer to ",Object(d.mdx)("a",{parentName:"p",href:"./Graph/##configuration-properties"},"config.allowCalibration")," for calibrating the y-axes."))),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("h3",{parentName:"li",id:"type"},Object(d.mdx)("inlineCode",{parentName:"h3"},"type")),Object(d.mdx)("p",{parentName:"li"},"  Property to set the type of the axis."),Object(d.mdx)("table",{parentName:"li"},Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",{parentName:"tr",align:null},"Constant"),Object(d.mdx)("th",{parentName:"tr",align:null},"Value"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"AXIS_TYPE.DEFAULT")),Object(d.mdx)("td",{parentName:"tr",align:null},"Numeric based x-axis. Will take a ",Object(d.mdx)("inlineCode",{parentName:"td"},"<number>")," for tick values.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"AXIS_TYPE.TIME_SERIES")),Object(d.mdx)("td",{parentName:"tr",align:null},"Timeseries based x-axis. Will take a ",Object(d.mdx)("inlineCode",{parentName:"td"},"<Date>")," for tick values.")))))),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("h3",{parentName:"li",id:"orientation"},Object(d.mdx)("inlineCode",{parentName:"h3"},"orientation")),Object(d.mdx)("p",{parentName:"li"},"  Sets the orientation for the x-axis.\nCan be accessed through ",Object(d.mdx)("inlineCode",{parentName:"p"},"AXES_ORIENTATION"),".\nValid values are:"),Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"AXES_ORIENTATION.TOP")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"AXES_ORIENTATION.BOTTOM"))))),Object(d.mdx)("h4",{id:"note"},"Note:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"y2 axis is mandatory if the ",Object(d.mdx)("strong",{parentName:"li"},"y2.show")," is enabled."),Object(d.mdx)("li",{parentName:"ul"},"Ticks are mandatory for Bar graphs."),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"rangeRounding")," property extends the domain so that it starts and ends on nice round values. This method typically modifies the scale’s domain, and may only extend the bounds to the nearest round value."),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"padDomain")," property is only for Y and Y2 axes."),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"onLabelClick")," property will override default onClick functionality provided by Carbon-graphs."),Object(d.mdx)("li",{parentName:"ul"},"For Bar Graphs, ",Object(d.mdx)("inlineCode",{parentName:"li"},"padDomain")," property will be overridden to false.")),Object(d.mdx)("h2",{id:"x-axis-domain-padding"},"X Axis Domain Padding"),Object(d.mdx)("p",null,"Unlike Y Axis, X Axis can have different types of values as ticks namely numeric, datetime etc. By design, domain padding has not been provided for this reason. Consumers however who are more acquainted with their dataset can judge how much value padding is necessary and achieve similar results as Y Axis."),Object(d.mdx)("p",null,"Example:"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"const padXAxisLimits = (extent) => {\n    const range = extent[1] - extent[0];\n    return [extent[0] - range * 0.05, extent[1] + range * 0.05];\n};\n\nconst datetime = padXAxisLimits(\n    d3.extent([\n        /* Array containing all the datetime in RFC3339 format*/\n    ])\n);\n")))}b.isMDXComponent=!0}}]);