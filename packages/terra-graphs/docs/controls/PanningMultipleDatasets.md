# Panning

Panning is applied with timeline/custom button

-   [Panning](#panning)
    -   [Usage](#usage)
    -   [JSON Properties](#json-properties)
        -   [Root](#root)
            -   [Optional](#optional)
    -   [Constraints](#constraints)

## Usage

Panning can only be used with graphs having the construct as Graph, Gantt and Timeline.

```jsx
// axisData
const graphConfiguration = {
    bindTo: "#root",
    axis: {
        x: {
            type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
            label: "Datetime",
            lowerLimit: new Date(2016, 0, 1, 9, 0).toISOString(),
            upperLimit: new Date(2016, 0, 1, 15, 59).toISOString()
        },
        y: {
            label: "Temperature (degF)",
            lowerLimit: 90,
            upperLimit: 106
        }
    }
};
```

```jsx
// graphData1
const dataSet1 = {
    key: "uid_1",
    label: {
        display: "Oral Temperature"
    },
    shape: Carbon.helpers.SHAPES.RHOMBUS,
    color: Carbon.helpers.COLORS.BLUE,
    values: [
        {
            x: new Date(2016, 0, 1, 10, 5).toISOString(),
            y: 96.5
        },
        {
            x: new Date(2016, 0, 1, 12, 15).toISOString(),
            y: 98.7
        },
        {
            x: new Date(2016, 0, 1, 14, 15).toISOString(),
            y: 97.4
        }
    ]
};
```

```jsx
// graphData2
const dataSet2 = {
    key: "uid_2",
    label: {
        display: "Blood Pressure"
    },
    shape: Carbon.helpers.SHAPES.SQUARE,
    color: Carbon.helpers.COLORS.GREEN,
    values: [
        {
            x: new Date(2016, 0, 1, 10, 5).toISOString(),
            y: 105
        },
        {
            x: new Date(2016, 0, 1, 12, 15).toISOString(),
            y: 117
        },
        {
            x: new Date(2016, 0, 1, 14, 15).toISOString(),
            y: 125
        }
    ]
};
```

```jsx
// panningData
const panningData = {
  panData: [
        {
            key: "uid_1", // key should already be present in the graph
            values: [
                {
                    x: new Date(2016, 0, 1, 10, 5).toISOString(),
                    y: 95
                },
                {
                    x: new Date(2016, 0, 1, 12, 15).toISOString(),
                    y: 92
                },
                {
                    x: new Date(2016, 0, 1, 14, 15).toISOString(),
                    y: 98
                }
            ]
        },
        {
            key: "uid_2", // key should already be present in the graph
            values: [
                {
                    x: new Date(2016, 0, 1, 10, 5).toISOString(),
                    y: 109
                },
                {
                    x: new Date(2016, 0, 1, 12, 15).toISOString(),
                    y: 113
                },
                {
                    x: new Date(2016, 0, 1, 14, 15).toISOString(),
                    y: 130
                }
            ],
        },
    ],
    // These variables can be used to update label value for x,y and y2 axes respectively.
    xLabel: 'xLabel',
    yLabel: 'yLabel',
    y2Label: 'y2Label',
};
```

```javascript
export const renderLineWithPanning = (id) => {
    const axisData = graphConfiguration;
    axisData.pan = {
        enabled: true
    };
    const graphData = dataSet;
    graphData.regions = [regions[0]];

    const createGraph = () => {
        graph.reflowWithMultipleDatasets();
    };

    const graph = Carbon.api.graph(axisData);
    graph.loadContent(Carbon.api.line(graphData1));
    // Additional data-sets to be loaded here only, like:
    graph.loadContent(Carbon.api.line(/* Data array */));
    axisData.axis = graph.config.axis;

    createPanningControls(id, {
        axisData,
        creationHandler: createGraph
    });
    return graph;
};
```

```javascript
export const renderLinePanningMultipleDatasets = (id) => {
    const axisData = graphConfiguration;
    axisData.pan = {
        enabled: true
    };
    const graphData = dataSet;
    graphData.regions = [regions[0]];

    const createGraph = () => {
        graph.reflowWithMultipleDatasets(panningData);
    };

    const graph = Carbon.api.graph(axisData);
    graph.loadContent(Carbon.api.line(graphData1));
    graph.loadContent(Carbon.api.line(graphData2));
    // Additional data-sets to be loaded here only, like:
    graph.loadContent(Carbon.api.line(/* Data array */));
    axisData.axis = graph.config.axis;

    createPanningControls(id, {
        axisData,
        creationHandler: createGraph
    });
    return graph;
};
```

## JSON Properties

### Root

#### Optional

| Property Name | Expected | Default   | Description                        |
| ------------- | -------- | --------- | ---------------------------------- |
| enabled       | boolean  | undefined | Set to true when panning is needed |

## Constraints

-   If panning is not provided then enabled will be false.
