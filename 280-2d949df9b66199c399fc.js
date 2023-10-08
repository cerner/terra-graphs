(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{2017:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(29),r=a.n(n),i=a(56),l=a.n(i),m=(a(0),a(814)),d=["components"],c={},o="wrapper";function s(e){var t=e.components,a=l()(e,d);return Object(m.mdx)(o,r()({},c,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("p",{align:"center"},Object(m.mdx)("img",{height:"128",width:"128",src:"https://github.com/cerner/terra-graphs/raw/main/terra.png"})),Object(m.mdx)("h1",{align:"center"},"Terra Graphs"),Object(m.mdx)("p",null,Object(m.mdx)("a",{parentName:"p",href:"http://engineering.cerner.com/2014/01/cerner-and-open-source/"},Object(m.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/Cerner/OSS/blue",alt:"Cerner OSS"})),"\n",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-graphs/blob/main/LICENSE"},Object(m.mdx)("img",{parentName:"a",src:"https://badgen.net/github/license/cerner/terra-graphs",alt:"License"})),"\n",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-graphs/actions/workflows/ci-cd.yml"},Object(m.mdx)("img",{parentName:"a",src:"https://github.com/cerner/terra-graphs/actions/workflows/ci-cd.yml/badge.svg",alt:"Build Status"})),"\n",Object(m.mdx)("a",{parentName:"p",href:"https://lerna.js.org/"},Object(m.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/maintained%20with/lerna/cc00ff",alt:"lerna"})),"\n",Object(m.mdx)("img",{parentName:"p",src:"https://img.shields.io/github/package-json/v/cerner/terra-graphs",alt:"GitHub package.json version"}),"\n",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-graphs/labels/bug"},Object(m.mdx)("img",{parentName:"a",src:"https://img.shields.io/github/issues/cerner/terra-graphs/bug?label=bugs",alt:"bugs"}))),Object(m.mdx)("p",null,"Terra Graphs is a graphing library built using D3 visualization library. It provides an API for generating native graphs such as Line and Paired Result graphs based on design standards."),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#packages"},"Packages"),Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#versioning"},"Versioning")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#status"},"Status")))),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#supported-browsers"},"Supported Browsers")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#getting-started"},"Getting Started"),Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#dependencies"},"Dependencies")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#install"},"Install")))),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#features"},"Features"),Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#graph-types"},"Graph types")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#graph-settings-and-toggles"},"Graph Settings and Toggles")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#other-highlights"},"Other highlights")))),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#internationalization-i18n"},"Internationalization (I18n)"),Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#packages-requiring-i18n"},"Packages Requiring I18n")))),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#contributing"},"Contributing")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#local-development"},"Local Development")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#docker-local-development"},"Local Development using Docker (Dev Containers)")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"#license"},"LICENSE"))),Object(m.mdx)("hr",null),Object(m.mdx)("h2",{id:"packages"},"Packages"),Object(m.mdx)("p",null,"This repo consists of two packages:"),Object(m.mdx)("ol",null,Object(m.mdx)("li",{parentName:"ol"},"Carbon-graphs: Vanilla JavaScript implementation of the graphing library."),Object(m.mdx)("li",{parentName:"ol"},"Terra-graphs: React implementation of graphing library.")),Object(m.mdx)("h3",{id:"versioning"},"Versioning"),Object(m.mdx)("p",null,"When a component reaches v1.0.0., it is considered to be stable and will follow ",Object(m.mdx)("a",{parentName:"p",href:"http://semver.org/"},"SemVer")," for versioning."),Object(m.mdx)("ol",null,Object(m.mdx)("li",{parentName:"ol"},"MAJOR versions represent breaking changes"),Object(m.mdx)("li",{parentName:"ol"},"MINOR versions represent added functionality in a backwards-compatible manner"),Object(m.mdx)("li",{parentName:"ol"},"PATCH versions represent backwards-compatible bug fixes")),Object(m.mdx)("p",null,"Consult the component CHANGELOGs, related issues, and PRs for more information."),Object(m.mdx)("p",null,"We view the React.js props API of our components as our main public API. We use this to guide us when versioning components."),Object(m.mdx)("p",null,"Prior to components reaching v1.0.0, a component is considered to be in a beta stage.\nComponents in beta stage may include breaking changes, new features, and bug fixes all within v0.x.x releases."),Object(m.mdx)("h3",{id:"status"},"Status"),Object(m.mdx)("p",null,Object(m.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/status/Stable/green",alt:"Stable"}),"\n",Object(m.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/status/Beta/orange",alt:"Beta"}),"\n",Object(m.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"})),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:null},"Packages"),Object(m.mdx)("th",{parentName:"tr",align:null},"Version"),Object(m.mdx)("th",{parentName:"tr",align:null},"Status"),Object(m.mdx)("th",{parentName:"tr",align:null},"Dependencies"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("a",{parentName:"td",href:"./packages/carbon-graphs/README.md"},"Carbon-graphs")),Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("img",{parentName:"td",src:"https://img.shields.io/npm/v/@cerner/carbon-graphs",alt:"npm"})),Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("img",{parentName:"td",src:"https://badgen.net/badge/status/Stable/green",alt:"Stable"})),Object(m.mdx)("td",{parentName:"tr",align:null},Object(m.mdx)("a",{parentName:"td",href:"https://david-dm.org/cerner/terra-graphs?path=packages/carbon-graphs"},Object(m.mdx)("img",{parentName:"a",src:"https://img.shields.io/david/cerner/terra-graphs?path=packages%2Fcarbon-graphs",alt:"carbon-graphs"})))))),Object(m.mdx)("hr",null),Object(m.mdx)("h2",{id:"supported-browsers"},"Supported Browsers"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",{parentName:"tr",align:null},"Browser"),Object(m.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"Chrome & Chrome for Android"),Object(m.mdx)("td",{parentName:"tr",align:null},"Current")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"Edge"),Object(m.mdx)("td",{parentName:"tr",align:null},"Current")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"Firefox"),Object(m.mdx)("td",{parentName:"tr",align:null},"Current")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"Internet Explorer"),Object(m.mdx)("td",{parentName:"tr",align:null},"10 & 11")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",{parentName:"tr",align:null},"Safari & Mobile Safari"),Object(m.mdx)("td",{parentName:"tr",align:null},"Current")))),Object(m.mdx)("hr",null),Object(m.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(m.mdx)("h3",{id:"dependencies"},"Dependencies"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"D3"),Object(m.mdx)("li",{parentName:"ul"},"Polyfills:",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"Object.assign"),Object(m.mdx)("li",{parentName:"ul"},"Object.values")))),Object(m.mdx)("h3",{id:"install"},"Install"),Object(m.mdx)("p",null,"You can install Carbon via ",Object(m.mdx)("inlineCode",{parentName:"p"},"npm")," or download the ",Object(m.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-graphs/releases/latest"},"latest release")," from GitHub."),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-sh"},"npm i @cerner/carbon-graphs --save-dev\n")),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/getting-started/GettingStarted.md"},"Getting Started")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/README.md"},"API Reference"))),Object(m.mdx)("hr",null),Object(m.mdx)("h2",{id:"features"},"Features"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Adheres to Cerner standard design template"),Object(m.mdx)("li",{parentName:"ul"},"Responsive"),Object(m.mdx)("li",{parentName:"ul"},"Native-built graphs"),Object(m.mdx)("li",{parentName:"ul"},"Default theme for data points")),Object(m.mdx)("h3",{id:"graph-types"},"Graph types"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/Line.md#usage"},"Line")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/Line.md#multi-line"},"Multi Line")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/Line.md#spline-line"},"Spline Line")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/PairedResult.md#usage"},"Paired Result")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/Bar.md#usage"},"Bar")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/Timeline.md#usage"},"Timeline")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/Pie.md#usage"},"Pie")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/Gantt.md#usage"},"Gantt")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/Scatter.md#usage"},"Scatter")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/Bubble.md#usage"},"Bubble"),Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/BubbleSingleDataset.md"},"Bubble Single Dataset")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"./packages/terra-graphs-docs/docs/controls/BubbleMultipleDataset.md"},"Bubble Multiple Dataset"))))),Object(m.mdx)("h3",{id:"graph-settings-and-toggles"},"Graph Settings and Toggles"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Legend"),Object(m.mdx)("li",{parentName:"ul"},"Labels"),Object(m.mdx)("li",{parentName:"ul"},"Grid ",Object(m.mdx)("inlineCode",{parentName:"li"},"vertical & horizontal")),Object(m.mdx)("li",{parentName:"ul"},"Axes ",Object(m.mdx)("inlineCode",{parentName:"li"},"x and y or y2")),Object(m.mdx)("li",{parentName:"ul"},"Regions ",Object(m.mdx)("inlineCode",{parentName:"li"},"horizontal"))),Object(m.mdx)("h3",{id:"other-highlights"},"Other highlights"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Supports different shapes for each data-set"),Object(m.mdx)("li",{parentName:"ul"},"Supports custom SVG shapes for data-sets"),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"Non-contiguous")," data point line graph"),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"Sparkline")," graph (with Shapes as hidden)"),Object(m.mdx)("li",{parentName:"ul"},"Criticality indicators for data point"),Object(m.mdx)("li",{parentName:"ul"},"Locale support for axes ticks"),Object(m.mdx)("li",{parentName:"ul"},"Y and Y2 Axes label along with respective shapes"),Object(m.mdx)("li",{parentName:"ul"},"Graph Panning")),Object(m.mdx)("h2",{id:"internationalization-i18n"},"Internationalization (I18n)"),Object(m.mdx)("p",null,"Please review ",Object(m.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/internationalization-intro"},"Terra's Internationalization documentation")," for more information. Included are directions on consumption and how internationalization is setup."),Object(m.mdx)("h2",{id:"contributing"},"Contributing"),Object(m.mdx)("p",null,"Please read through our ",Object(m.mdx)("a",{parentName:"p",href:"CONTRIBUTING.md"},"contributing guidelines"),". Included are directions for issue reporting and pull requests."),Object(m.mdx)("hr",null),Object(m.mdx)("h2",{id:"local-development"},"Local Development"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"For local development on Terra-graphs, first install dependencies using:")),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Tests can be executed using:")),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-sh"},"npm run test\n")),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"To view any visual changes, the dev site can be launched using:")),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-sh"},"npm run dev\n")),Object(m.mdx)("hr",null),Object(m.mdx)("h2",{id:"docker-local-development"},"Local Development using Docker (Dev Containers)"),Object(m.mdx)("ol",null,Object(m.mdx)("li",{parentName:"ol"},"Install ",Object(m.mdx)("a",{parentName:"li",href:"https://rancherdesktop.io/"},"Rancher")," or ",Object(m.mdx)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"),".",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",{parentName:"li",href:"https://rancherdesktop.io/"},"Rancher")," is free and open-source and is highly recommended whereas Docker may require a license for use."))),Object(m.mdx)("li",{parentName:"ol"},"Install ",Object(m.mdx)("a",{parentName:"li",href:"https://code.visualstudio.com/Download"},"Microsoft VS Code"),"."),Object(m.mdx)("li",{parentName:"ol"},"Install the ",Object(m.mdx)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"},"Dev Container extension"),".",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"Navigate to View -> Extension  -> Search for and install ",Object(m.mdx)("em",{parentName:"li"},"Dev Containers"),' (or "ms-vscode-remote.remote-containers")'),Object(m.mdx)("li",{parentName:"ul"},"More information on ",Object(m.mdx)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/devcontainers/containers"},"Dev Containers")))),Object(m.mdx)("li",{parentName:"ol"},"Build the dev container:",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"(Option 1) - Opening local workspace in dev container",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"Clone the repository (or fork) locally and open the project in Visual Studio Code"),Object(m.mdx)("li",{parentName:"ul"},"Navigate to View -> Command Palette and run ",Object(m.mdx)("strong",{parentName:"li"},"Dev Containers: Open Workspace in Container")))),Object(m.mdx)("li",{parentName:"ul"},"(Option 2) - Recommended for Windows for hot-reloading to work during development and improved performance: Creating the dev container using dev volumes (for more information and guidance, see the ",Object(m.mdx)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume"},"Official Guide"),")",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"If you have git setup and have global config file ",Object(m.mdx)("em",{parentName:"li"},"~/.gitconfig")," locally, these settings should automatically be transferred to the dev container"),Object(m.mdx)("li",{parentName:"ul"},"Navigate to View -> Command Palette and run ",Object(m.mdx)("strong",{parentName:"li"},"Dev Containers: Clone Repository in Container Volume")),Object(m.mdx)("li",{parentName:"ul"},"Paste the GitHub URL of this repository (or fork)"),Object(m.mdx)("li",{parentName:"ul"},"VS Code will now reload the workspace and create/start the dev container and volume"),Object(m.mdx)("li",{parentName:"ul"},"Please note: changes made using this option will only update files in the Docker volume. It is recommended to commit changes often in case the volume is deleted or dev container gets removed."))))),Object(m.mdx)("li",{parentName:"ol"},"You're now running in a dev container.  Use the terminal of the dev container in Visual Studio Code to issue any npm or bash commands."),Object(m.mdx)("li",{parentName:"ol"},"Before running any WDIO tests, make sure to perform the following steps:",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},'Open a new terminal (outside the dev container) and navigate to  ".devcontainer/" path in your repository.'),Object(m.mdx)("li",{parentName:"ul"},"Execute the command ",Object(m.mdx)("inlineCode",{parentName:"li"},'"docker compose -f docker-compose-wdio.yml up"'),'. Selenium hub should spin up. Leave this running in the background. If you see errors saying "container name already exists", run ',Object(m.mdx)("inlineCode",{parentName:"li"},'"docker container prune"'),' command followed by pressing "y" to clear up any unused containers and try running the previous command again.'),Object(m.mdx)("li",{parentName:"ul"},"You can now run ",Object(m.mdx)("inlineCode",{parentName:"li"},"npm run test:docker")," or ",Object(m.mdx)("inlineCode",{parentName:"li"},"npm run wdio:docker")," commands to run WDIO tests from inside the Dev Container."),Object(m.mdx)("li",{parentName:"ul"},"NOTE: Optionally, if you want to run other WDIO commands in the dev container, you can also edit the root package.json file WDIO scripts to include ",Object(m.mdx)("inlineCode",{parentName:"li"},"--disableSeleniumService=true")," flag. This will disable the selenium service from spinning up again.\nFor example:",Object(m.mdx)("pre",{parentName:"li"},Object(m.mdx)("code",{parentName:"pre",className:"language-sh"},'"scripts": {\n "wdio-fusion": "terra wdio --disableSeleniumService=true --themes orion-fusion-theme",\n }\n'))))),Object(m.mdx)("li",{parentName:"ol"},"To terminate a dev container:",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"Use command line or Rancher/Docker Desktop OR"),Object(m.mdx)("li",{parentName:"ul"},"Using Visual Studio Code",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"Select the Remote Explorer icon in the Activity Bar or View -> Command Palette and run ",Object(m.mdx)("strong",{parentName:"li"},"Remote Explorer: Focus on Containers View")),Object(m.mdx)("li",{parentName:"ul"},"Locate the ",Object(m.mdx)("strong",{parentName:"li"},"terra-graphs_devcontainer"),' or currently running dev container under "Dev Containers"'),Object(m.mdx)("li",{parentName:"ul"},"Right click and select ",Object(m.mdx)("strong",{parentName:"li"},"Stop Container")," and close the workspace",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"You can also select ",Object(m.mdx)("strong",{parentName:"li"},"Rebuild Container")," to restart the dev container"))))))),Object(m.mdx)("li",{parentName:"ol"},"To reopen a dev container:",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"Existing local workspace (for Option 1)",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"Open the project in Visual Studio Code"),Object(m.mdx)("li",{parentName:"ul"},"Ensure the workspace contains the .devcontainer folder"),Object(m.mdx)("li",{parentName:"ul"},"Navigate to View -> Command Palette and run ",Object(m.mdx)("strong",{parentName:"li"},"Dev Containers: Open Workspace in Container")))),Object(m.mdx)("li",{parentName:"ul"},"Isolated dev container volume (for Option 2)",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"Open Visual Studio Code"),Object(m.mdx)("li",{parentName:"ul"},"Use the Remote Explorer icon in the Activity Bar or View -> Command Palette and run ",Object(m.mdx)("strong",{parentName:"li"},"Remote Explorer: Focus on Containers View")," to view containers"),Object(m.mdx)("li",{parentName:"ul"},"Locate the ",Object(m.mdx)("strong",{parentName:"li"},"terra-graphs_devcontainer"),' under "Dev Containers"'),Object(m.mdx)("li",{parentName:"ul"},"Hover over the dev container and click the Folder icon labelled ",Object(m.mdx)("strong",{parentName:"li"},"Open Folder in Container")," or by right clicking and selecting ",Object(m.mdx)("strong",{parentName:"li"},"Open Folder in Container"))))))),Object(m.mdx)("h2",{id:"license"},"LICENSE"),Object(m.mdx)("p",null,"Copyright 2020 - present Cerner Innovation, Inc."),Object(m.mdx)("p",null,'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at'),Object(m.mdx)("p",null," "," "," "," ",Object(m.mdx)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0"},"http://www.apache.org/licenses/LICENSE-2.0")),Object(m.mdx)("p",null,'Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'))}s.isMDXComponent=!0}}]);