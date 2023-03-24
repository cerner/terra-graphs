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
[![Build Status](https://github.com/cerner/terra-graphs/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/cerner/terra-graphs/actions/workflows/ci-cd.yml)
[![lerna](https://badgen.net/badge/maintained%20with/lerna/cc00ff)](https://lerna.js.org/)
![GitHub package.json version](https://img.shields.io/github/package-json/v/cerner/terra-graphs)
[![bugs](https://img.shields.io/github/issues/cerner/terra-graphs/bug?label=bugs)](https://github.com/cerner/terra-graphs/labels/bug)

Terra Graphs is a graphing library built using D3 visualization library. It provides an API for generating native graphs such as Line and Paired Result graphs based on design standards.

- [Packages](#packages)
  - [Versioning](#versioning)
  - [Status](#status)
- [Supported Browsers](#supported-browsers)
- [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Install](#install)
- [Features](#features)
  - [Graph types](#graph-types)
  - [Graph Settings and Toggles](#graph-settings-and-toggles)
  - [Other highlights](#other-highlights)
- [Internationalization (I18n)](#internationalization-i18n)
  - [Packages Requiring I18n](#packages-requiring-i18n)
- [Contributing](#contributing)
- [Local Development](#local-development)
- [Local Development using Docker (Dev Containers)](#docker-local-development)
- [LICENSE](#license)

---

## Packages

This repo consists of two packages:

1. Carbon-graphs: Vanilla JavaScript implementation of the graphing library.
2. Terra-graphs: React implementation of graphing library.

### Versioning

When a component reaches v1.0.0., it is considered to be stable and will follow [SemVer](http://semver.org/) for versioning.

1. MAJOR versions represent breaking changes
2. MINOR versions represent added functionality in a backwards-compatible manner
3. PATCH versions represent backwards-compatible bug fixes

Consult the component CHANGELOGs, related issues, and PRs for more information.

We view the React.js props API of our components as our main public API. We use this to guide us when versioning components.

Prior to components reaching v1.0.0, a component is considered to be in a beta stage.
Components in beta stage may include breaking changes, new features, and bug fixes all within v0.x.x releases.

### Status

![Stable](https://badgen.net/badge/status/Stable/green)
![Beta](https://badgen.net/badge/status/Beta/orange)
![Deprecated](https://badgen.net/badge/status/Deprecated/grey)

| Packages     | Version | Status | Dependencies |
|--------------------|---------|--------|--------------|
| [Carbon-graphs](./packages/carbon-graphs/README.md)| ![npm](https://img.shields.io/npm/v/@cerner/carbon-graphs)| ![Stable](https://badgen.net/badge/status/Stable/green)| [![carbon-graphs](https://img.shields.io/david/cerner/terra-graphs?path=packages%2Fcarbon-graphs)](https://david-dm.org/cerner/terra-graphs?path=packages/carbon-graphs)|

---

## Supported Browsers

| Browser                     | Version |
|-----------------------------|---------|
| Chrome & Chrome for Android | Current |
| Edge                        | Current |
| Firefox                     | Current |
| Internet Explorer           | 10 & 11 |
| Safari & Mobile Safari      | Current |

---

## Getting Started

### Dependencies

- D3
- Polyfills:
  - Object.assign
  - Object.values

### Install

You can install Carbon via `npm` or download the [latest release](https://github.com/cerner/terra-graphs/releases/latest) from GitHub.

```sh
npm i @cerner/carbon-graphs --save-dev
```

- [Getting Started](./packages/terra-graphs-docs/docs/getting-started/GettingStarted.md)
- [API Reference](./packages/terra-graphs-docs/docs/README.md)

---

## Features

- Adheres to Cerner standard design template
- Responsive
- Native-built graphs
- Default theme for data points

### Graph types

- [Line](./packages/terra-graphs-docs/docs/controls/Line.md#usage)
- [Multi Line](./packages/terra-graphs-docs/docs/controls/Line.md#multi-line)
- [Spline Line](./packages/terra-graphs-docs/docs/controls/Line.md#spline-line)
- [Paired Result](./packages/terra-graphs-docs/docs/controls/PairedResult.md#usage)
- [Bar](./packages/terra-graphs-docs/docs/controls/Bar.md#usage)
- [Timeline](./packages/terra-graphs-docs/docs/controls/Timeline.md#usage)
- [Pie](./packages/terra-graphs-docs/docs/controls/Pie.md#usage)
- [Gantt](./packages/terra-graphs-docs/docs/controls/Gantt.md#usage)
- [Scatter](./packages/terra-graphs-docs/docs/controls/Scatter.md#usage)
- [Bubble](./packages/terra-graphs-docs/docs/controls/Bubble.md#usage)
  - [Bubble Single Dataset](./packages/terra-graphs-docs/docs/controls/BubbleSingleDataset.md)
  - [Bubble Multiple Dataset](./packages/terra-graphs-docs/docs/controls/BubbleMultipleDataset.md)

### Graph Settings and Toggles

- Legend
- Labels
- Grid `vertical & horizontal`
- Axes `x and y or y2`
- Regions `horizontal`

### Other highlights

- Supports different shapes for each data-set
- Supports custom SVG shapes for data-sets
- `Non-contiguous` data point line graph
- `Sparkline` graph (with Shapes as hidden)
- Criticality indicators for data point
- Locale support for axes ticks
- Y and Y2 Axes label along with respective shapes
- Graph Panning

## Internationalization (I18n)

Please review [Terra's Internationalization documentation](https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/internationalization-intro) for more information. Included are directions on consumption and how internationalization is setup.

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

---

## Local Development

- For local development on Terra-graphs, first install dependencies using:

```sh
npm install
```

- Tests can be executed using:

```sh
npm run test
```

- To view any visual changes, the dev site can be launched using:

```sh
npm run dev
```

---

<h2 id="docker-local-development">
  Local Development using Docker (Dev Containers)
</h2>

1. Install [Rancher](https://rancherdesktop.io/) or [Docker](https://www.docker.com/).
    - [Rancher](https://rancherdesktop.io/) is free and open-source and is highly recommended whereas Docker may require a license for use.
2. Install [Microsoft VS Code](https://code.visualstudio.com/Download).
3. Install the [Dev Container extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
    - Navigate to View -> Extension  -> Search for and install _Dev Containers_ (or "ms-vscode-remote.remote-containers")
    - More information on [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
4. Build the dev container:
    - (Option 1) - Opening local workspace in dev container
      - Clone the repository (or fork) locally and open the project in Visual Studio Code
      - Navigate to View -> Command Palette and run **Dev Containers: Open Workspace in Container**
    - (Option 2) - Recommended for Windows for hot-reloading to work during development and improved performance: Creating the dev container using dev volumes (for more information and guidance, see the [Official Guide](https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume))
      - If you have git setup and have global config file _~/.gitconfig_ locally, these settings should automatically be transferred to the dev container
      - Navigate to View -> Command Palette and run **Dev Containers: Clone Repository in Container Volume**
      - Paste the GitHub URL of this repository (or fork)
      - VS Code will now reload the workspace and create/start the dev container and volume
      - Please note: changes made using this option will only update files in the Docker volume. It is recommended to commit changes often in case the volume is deleted or dev container gets removed.
5. You're now running in a dev container.  Use the terminal of the dev container in Visual Studio Code to issue any npm or bash commands.
6. Before running any WDIO tests, make sure to perform the following steps:
    - Open a new terminal (outside the dev container) and navigate to  ".devcontainer/" path in your repository.
    - Execute the command `"docker compose -f docker-compose-wdio.yml up"`. Selenium hub should spin up. Leave this running in the background. If you see errors saying "container name already exists", run `"docker container prune"` command followed by pressing "y" to clear up any unused containers and try running the previous command again.
    - You can now run `npm run test:docker` or `npm run wdio:docker` commands to run WDIO tests from inside the Dev Container.
    - NOTE: Optionally, if you want to run other WDIO commands in the dev container, you can also edit the root package.json file WDIO scripts to include `--disableSeleniumService=true` flag. This will disable the selenium service from spinning up again.
      For example:
       ```sh
       "scripts": {
        "wdio-fusion": "terra wdio --disableSeleniumService=true --themes orion-fusion-theme",
        }
       ```
7. To terminate a dev container:
    - Use command line or Rancher/Docker Desktop OR
    - Using Visual Studio Code
      - Select the Remote Explorer icon in the Activity Bar or View -> Command Palette and run **Remote Explorer: Focus on Containers View**
      - Locate the **terra-graphs_devcontainer** or currently running dev container under "Dev Containers"
      - Right click and select **Stop Container** and close the workspace
        - You can also select **Rebuild Container** to restart the dev container
8. To reopen a dev container:
    - Existing local workspace (for Option 1)
      - Open the project in Visual Studio Code
      - Ensure the workspace contains the .devcontainer folder
      - Navigate to View -> Command Palette and run **Dev Containers: Open Workspace in Container**
    - Isolated dev container volume (for Option 2)
      - Open Visual Studio Code
      - Use the Remote Explorer icon in the Activity Bar or View -> Command Palette and run **Remote Explorer: Focus on Containers View** to view containers
      - Locate the **terra-graphs_devcontainer** under "Dev Containers"
      - Hover over the dev container and click the Folder icon labelled **Open Folder in Container** or by right clicking and selecting **Open Folder in Container**


## LICENSE

Copyright 2020 - present Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
