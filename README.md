<!-- Logo -->
<p align="center">
  <img height="128" width="128" src="https://github.com/cerner/terra-graphs/raw/main/terra.png" />
</p>

<!-- Name -->
<h1 align="center">
  Terra Graphs
</h1>

[![Cerner OSS](https://badgen.net/badge/Cerner/OSS/blue)](http://engineering.cerner.com/2014/01/cerner-and-open-source/)
[![License](https://badgen.net/github/license/cerner/terra-graphs)](https://github.com/cerner/terra-graphs/blob/main/LICENSE)
[![Build Status](https://travis-ci.com/cerner/terra-graphs.svg?branch=main)](https://travis-ci.com/cerner/terra-graphs)
[![lerna](https://badgen.net/badge/maintained%20with/lerna/cc00ff)](https://lerna.js.org/)
[![npm latest version](https://img.shields.io/npm/v/@cerner/carbon-graphs/latest.svg)](https://www.npmjs.com/package/@cerner/carbon-graphs)
[![dependencies Status](https://david-dm.org/cerner/terra-graphs/status.svg)](https://david-dm.org/cerner/terra-graphs)
[![devDependencies status](https://badgen.net/david/dev/cerner/terra-graphs)](https://david-dm.org/cerner/terra-graphs?type=dev)
[![Bugs](https://img.shields.io/github/issues/cerner/carbon-graphs/bug.svg)](https://github.com/cerner/terra-graphs/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug)

Terra Graphs is a graphing library built using D3 visualization library. It provides an API for generating native graphs such as Line and Paired Result graphs based on design standards.

- [Supported Browsers](#supported-browsers)
- [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Install](#install)
- [Features](#features)
    -   [Graph types](#graph-types)
    -   [Graph Settings/Toggles](#graph-settingstoggles)
    -   [Other highlights](#other-highlights)
- [Potential features](#potential-features)
- [Packages](#packages)
  - [Versioning](#versioning)
  - [Status](#status)
  - [Deprecated](#deprecated)
- [Supported Browsers](#supported-browsers)
- [Internationalization (I18n)](#internationalization-i18n)
  - [Packages Requiring I18n](#packages-requiring-i18n)
- [Contributing](#contributing)
- [Local Development](#local-development)
- [LICENSE](#license)



<!-- - [Supported Browsers](#supported-browsers)
- [Packages](#packages)
  - [Versioning](#versioning)
  - [Status](#status)
  - [Deprecated](#deprecated)
- [Supported Browsers](#supported-browsers)
- [Internationalization (I18n)](#internationalization-i18n)
  - [Packages Requiring I18n](#packages-requiring-i18n)
- [Contributing](#contributing)
- [Local Development](#local-development)
- [LICENSE](#license) -->

<hr>
<!--  -->

## Supported Browsers

| Browser                     | Version |
|-----------------------------|---------|
| Chrome & Chrome for Android | Current |
| Edge                        | Current |
| Firefox                     | Current |
| Internet Explorer           | 10 & 11 |
| Safari & Mobile Safari      | Current |

<hr>
<!--  -->

## Getting Started

### Dependencies
-   D3
-   Polyfills:
    -   Object.assign
    -   Object.values

### Install

You can install Carbon via `npm` or download the [latest release](https://github.com/cerner/terra-graphs/releases/latest) from GitHub.

```sh
npm i @cerner/carbon-graphs --save-dev
```

<!-- ```sh
npm i @cerner/Terra Graphs-graphs --save-dev
``` -->

### Getting Started

-   [Getting Started](./docs/getting-started/GettingStarted.md)
-   [API Reference](docs/README.md)

<hr>
<!--  -->

## Features

-   Adheres to Cerner standard design template
-   Responsive
-   Native-built graphs
-   Default theme for data points

### Graph types

-   [Line](./docs/controls/Line.md#usage)
-   [Multi Line](./docs/controls/Line.md#multi-line)
-   [Spline Line](./docs/controls/Line.md#spline-line)
-   [Paired Result](./docs/controls/PairedResult.md#usage)
-   [Bar](./docs/controls/Bar.md#usage)
-   [Timeline](./docs/controls/Timeline.md#usage)
-   [Pie](./docs/controls/Pie.md#usage)
-   [Gantt](./docs/controls/Gantt.md#usage)
-   [Scatter](./docs/controls/Scatter.md#usage)
-   [Bubble](./docs/controls/Bubble.md#usage)
    -   [Bubble Single Dataset](./docs/controls/BubbleSingleDataset.md)
    -   [Bubble Multiple Dataset](./docs/controls/BubbleMultipleDataset.md)


### Graph Settings/Toggles

-   Legend
-   Labels
-   Grid `vertical & horizontal`
-   Axes `x and y or y2`
-   Regions `horizontal`

### Other highlights

-   Supports different shapes for each data-set
-   Supports custom SVG shapes for data-sets
-   `Non-contiguous` data point line graph
-   `Sparkline` graph (with Shapes as hidden)
-   Criticality indicators for data point
-   Locale support for axes ticks
-   Y and Y2 Axes label along with respective shapes
-   Graph Panning

<hr>
<!--  -->

<h2 id="packages">
  Packages
</h2>

<h3 id="versioning">
  Versioning
</h3>

When a component reaches v1.0.0., it is considered to be stable and will follow [SemVer](http://semver.org/) for versioning.
1. MAJOR versions represent breaking changes
2. MINOR versions represent added functionality in a backwards-compatible manner
3. PATCH versions represent backwards-compatible bug fixes

Consult the component CHANGELOGs, related issues, and PRs for more information.

We view the React.js props API of our components as our main public API. We use this to guide us when versioning components.

Prior to components reaching v1.0.0, a component is considered to be in a beta stage.
Components in beta stage may include breaking changes, new features, and bug fixes all within v0.x.x releases.

<h3 id="status">
  Status
</h3>

![Stable](https://badgen.net/badge/status/Stable/green)
![Beta](https://badgen.net/badge/status/Beta/orange)
![Deprecated](https://badgen.net/badge/status/Deprecated/grey)

<!-- AUTO-GENERATED-CONTENT:START (SUBPACKAGELIST) -->
| Terra Package      | Version | Status | Dependencies |
|--------------------|---------|--------|--------------|
<!-- AUTO-GENERATED-CONTENT:END *-->

<hr>
<!--  -->

<h2 id="internationalization-i18n">
  Internationalization (I18n)
</h2>

Please review [Terra's Internationalization documentation](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization) for more information. Included are directions on consumption and how internationalization is setup.

<hr>
<!--  -->

<h2 id="contributing">
  Contributing
</h2>

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

<hr>
<!--  -->

<h2 id="local-development">
  Local Development
</h2>

1. Install docker https://www.docker.com/ to run browser tests.
2. Install dependencies and run tests.
```sh
npm install
npm run test
```

<hr>
<!--  -->

<h2 id="license">
  LICENSE
</h2>

Copyright 2020 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
