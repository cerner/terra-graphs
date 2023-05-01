(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{1837:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(31),r=a.n(n),l=a(55),i=a.n(l),o=(a(0),a(788)),m=["components"],d={},c="wrapper";function s(e){var t=e.components,a=i()(e,m);return Object(o.mdx)(c,r()({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"contributing-to-terra-graphs"},"Contributing to Terra Graphs"),Object(o.mdx)("p",null,"Thanks for contributing to Terra Graphs! :1st_place_medal: :1st_place_medal:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#code-of-conduct"},"Code of Conduct")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#consumers"},"Consumers")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#developers"},"Developers"),Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#development"},"Development"),Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#pulling-in-dependencies"},"Pulling in dependencies")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#building-the-project"},"Building the project")))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#code-review"},"Code Review"),Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#pull-request-checklist"},"Pull Request checklist")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#commit-message-format"},"Commit message format")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#pull-request"},"Pull Request")))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#release"},"Release")))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#breaking-changes"},"Breaking changes"))),Object(o.mdx)("p",null,"This project uses NPM for dependency management and provides NPM scripts to call on ",Object(o.mdx)("inlineCode",{parentName:"p"},"Webpack")," to run tasks on the project.\nTo get started, you will need to checkout this project."),Object(o.mdx)("h2",{id:"code-of-conduct"},"Code of Conduct"),Object(o.mdx)("p",null,"Terra Graphs adheres to the ",Object(o.mdx)("a",{parentName:"p",href:"https://js.foundation/community/code-of-conduct"},"JS Foundation Code of Conduct"),"."),Object(o.mdx)("h2",{id:"consumers"},"Consumers"),Object(o.mdx)("p",null,"We use ",Object(o.mdx)("inlineCode",{parentName:"p"},"Github")," issues for tracking. Please log an issue to ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-graphs/issues"},"https://github.com/cerner/terra-graphs/issues")," and apply the appropriate tags such as ",Object(o.mdx)("inlineCode",{parentName:"p"},"Bug")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"Feature Request"),"."),Object(o.mdx)("h2",{id:"developers"},"Developers"),Object(o.mdx)("p",null,"If you're a developer looking forward to contribute to Terra graphs:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"Create an issue on ",Object(o.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-graphs/issues"},"https://github.com/cerner/terra-graphs/issues")),Object(o.mdx)("li",{parentName:"ol"},"Assign it to yourself"),Object(o.mdx)("li",{parentName:"ol"},"Add the appropiate tags such as ",Object(o.mdx)("inlineCode",{parentName:"li"},"Bug")," or ",Object(o.mdx)("inlineCode",{parentName:"li"},"Feature Request"),"."),Object(o.mdx)("li",{parentName:"ol"},"Once the issue is approved by a member of the Terra team, you may fork the repo and begin work on it."),Object(o.mdx)("li",{parentName:"ol"},"After your contribution is complete, you may create a Pull Request")),Object(o.mdx)("h4",{id:"pulling-in-dependencies"},"Pulling in dependencies"),Object(o.mdx)("p",null,"After checking out the project, you will want to run the following command to pull in dependencies needed by the project:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),Object(o.mdx)("p",null,"When contributing to Terra Graphs, you would need to run the below command and load the test page. The test page auto reloads whenever you make any changes to the .CSS, .JS files or if you make any changes to the sample .html file"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-sh"},"npm start\n")),Object(o.mdx)("p",null,"Open in browser:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-sh"},"http://localhost:8080/\n")),Object(o.mdx)("p",null,"This will generate ",Object(o.mdx)("inlineCode",{parentName:"p"},"dist")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"lib")," folders with ",Object(o.mdx)("inlineCode",{parentName:"p"},"core + packaged dependencies")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"core")," source codes respectively."),Object(o.mdx)("h3",{id:"code-review"},"Code Review"),Object(o.mdx)("h4",{id:"pull-request-checklist"},"Pull Request checklist"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Follow the ",Object(o.mdx)("a",{parentName:"li",href:"https://wiki.ucern.com/display/UserExperience/Standard+Graphs"},"UX Design Standards"),"."),Object(o.mdx)("li",{parentName:"ul"},"Setup a design meeting to discuss overall design of the project."),Object(o.mdx)("li",{parentName:"ul"},"Add the code changes."),Object(o.mdx)("li",{parentName:"ul"},"Add unit tests."),Object(o.mdx)("li",{parentName:"ul"},"Ensure your code is thoroughly unit tested. (Coverage is at ",Object(o.mdx)("inlineCode",{parentName:"li"},"carbon-graphs\\.coverage\\html\\index.html"),")"),Object(o.mdx)("li",{parentName:"ul"},"Ensure no unit tests are broken."),Object(o.mdx)("li",{parentName:"ul"},"Ensure no linting errors are present."),Object(o.mdx)("li",{parentName:"ul"},"Add examples in appropriate tab within ",Object(o.mdx)("inlineCode",{parentName:"li"},"dev"),"."),Object(o.mdx)("li",{parentName:"ul"},"Write documentation in ",Object(o.mdx)("inlineCode",{parentName:"li"},"Markdown"),", following the existing documentation pattern."),Object(o.mdx)("li",{parentName:"ul"},"Include screenshots and animated GIFs in your ",Object(o.mdx)("strong",{parentName:"li"},"pull request")," whenever possible."),Object(o.mdx)("li",{parentName:"ul"},"Follow proper PR title and Commit message ",Object(o.mdx)("a",{parentName:"li",href:"#commit-message-format"},"format"),"."),Object(o.mdx)("li",{parentName:"ul"},"End files with a newline.")),Object(o.mdx)("h4",{id:"commit-message-format"},"Commit message format"),Object(o.mdx)("p",null,"We follow ",Object(o.mdx)("inlineCode",{parentName:"p"},"ESLint")," ",Object(o.mdx)("a",{parentName:"p",href:"https://eslint.org/docs/1.0.0/developer-guide/contributing#step-2-make-your-changes"},"commit convention"),".\nYour commit message should look something like this:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-text"},"<Tag>: <Short description> (fixes #1234)\n")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Note"),":\n1234 in the above example is the ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-graphs/issues"},"Github issue number"),"."),Object(o.mdx)("h4",{id:"pull-request"},"Pull Request"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Provide the PR with all necessary information to ease code review process in the ",Object(o.mdx)("inlineCode",{parentName:"li"},"Description"),", for instance:",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},"Add the appropriate tags such as ",Object(o.mdx)("inlineCode",{parentName:"li"},"bug-fix")," or ",Object(o.mdx)("inlineCode",{parentName:"li"},"enhancement-fix"),"."),Object(o.mdx)("li",{parentName:"ul"},"Screenshots of the working prototype."),Object(o.mdx)("li",{parentName:"ul"},"Files you want the reviewer to focus on."))),Object(o.mdx)("li",{parentName:"ul"},"Respond to all comments."),Object(o.mdx)("li",{parentName:"ul"},"Do ",Object(o.mdx)("strong",{parentName:"li"},"not")," rebase with main and force push until you reach ",Object(o.mdx)("inlineCode",{parentName:"li"},"ready to merge")," status.")),Object(o.mdx)("h3",{id:"release"},"Release"),Object(o.mdx)("p",null,"Release is automated, and will be performed when PR is merged to ",Object(o.mdx)("inlineCode",{parentName:"p"},"main")," branch."),Object(o.mdx)("p",null,"Terra graphs will be released every Tuesday provided there are code changes to be released."),Object(o.mdx)("h2",{id:"breaking-changes"},"Breaking changes"),Object(o.mdx)("p",null,"For any breaking changes, add information on how to migrate from previous version along with changes that was provided.\nCreate an issue and add any stakeholders to that issue.\nThis issue will be closed once you have :+1: from all of the stakeholders (or subsequent issues are created within their own git repo queues)."),Object(o.mdx)("h4",{id:"note"},"Note:"),Object(o.mdx)("p",null,"To run the WDIO tests locally, please install docker version 17.09.0 or higher. Installation instructions can found ",Object(o.mdx)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here"),"."))}s.isMDXComponent=!0}}]);