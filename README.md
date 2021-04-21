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
![GitHub package.json version](https://img.shields.io/github/package-json/v/cerner/terra-graphs)
[![carbon-graphs bugs](https://img.shields.io/github/issues/cerner/terra-graphs/carbon-graphs%20bug?label=carbon-graphs%20bug)](https://github.com/cerner/terra-graphs/labels/carbon-graphs%20bug)
[![terra-graphs bugs](https://img.shields.io/github/issues/cerner/terra-graphs/terra-graphs%20bug?label=terra-graphs%20bug)](https://github.com/cerner/terra-graphs/labels/terra-graphs%20bug)

Terra Graphs is a graphing library built using D3 visualization library. It provides an API for generating native graphs such as Line and Paired Result graphs based on design standards.

- [Packages](#packages)
  - [Versioning](#versioning)
  - [Status](#status)
- [Supported Browsers](#supported-browsers)
- [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Install](#install)
- [Features](#features)
    -   [Graph types](#graph-types)
    -   [Graph Settings and Toggles](#graph-settings-and-toggles)
    -   [Other highlights](#other-highlights)
- [Internationalization (I18n)](#internationalization-i18n)
  - [Packages Requiring I18n](#packages-requiring-i18n)
- [Contributing](#contributing)
- [Local Development](#local-development)
- [LICENSE](#license)


<hr>
<!--  -->

<h2 id="packages">
  Packages
</h2>

This repo consists of two packages: 
1. Carbon-graphs: Vanilla JavaScript implementation of the graphing library.
2. Terra-graphs: React implementation of graphing library.

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
| Packages     | Version | Status | Dependencies |
|--------------------|---------|--------|--------------|
| [Carbon-graphs](./packages/carbon-graphs/README.md)| ![npm](https://img.shields.io/npm/v/@cerner/carbon-graphs)| ![Stable](https://badgen.net/badge/status/Stable/green)| [![carbon-graphs](https://img.shields.io/david/cerner/terra-graphs?path=packages%2Fcarbon-graphs)](https://david-dm.org/cerner/terra-graphs?path=packages/carbon-graphs)|

<!-- AUTO-GENERATED-CONTENT:END *-->

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

### Getting Started

-   [Getting Started](./packages/terra-docs/docs/getting-started/GettingStarted.md)
-   [API Reference](./packages/terra-docs/docs/README.md)

<hr>
<!--  -->

## Features

-   Adheres to Cerner standard design template
-   Responsive
-   Native-built graphs
-   Default theme for data points

### Graph types

-   [Line](./packages/terra-docs/docs/controls/Line.md#usage)
-   [Multi Line](./packages/terra-docs/docs/controls/Line.md#multi-line)
-   [Spline Line](./packages/terra-docs/docs/controls/Line.md#spline-line)
-   [Paired Result](./packages/terra-docs/docs/controls/PairedResult.md#usage)
-   [Bar](./packages/terra-docs/docs/controls/Bar.md#usage)
-   [Timeline](./packages/terra-docs/docs/controls/Timeline.md#usage)
-   [Pie](./packages/terra-docs/docs/controls/Pie.md#usage)
-   [Gantt](./packages/terra-docs/docs/controls/Gantt.md#usage)
-   [Scatter](./packages/terra-docs/docs/controls/Scatter.md#usage)
-   [Bubble](./packages/terra-docs/docs/controls/Bubble.md#usage)
    -   [Bubble Single Dataset](./packages/terra-docs/docs/controls/BubbleSingleDataset.md)
    -   [Bubble Multiple Dataset](./packages/terra-docs/docs/controls/BubbleMultipleDataset.md)


### Graph Settings and Toggles

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

<h2 id="internationalization-i18n">
  Internationalization (I18n)
</h2>

Please review [Terra's Internationalization documentation](https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/internationalization-intro) for more information. Included are directions on consumption and how internationalization is setup.

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

* For local development on Terra-graphs, first install dependencies using:
```sh
npm install
```

* Tests can be executed using:
```sh
npm run test
```

* To view any visual changes, the dev site can be launched using:
```sh
npm run dev 
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
