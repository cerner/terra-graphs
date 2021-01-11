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
// graphData
const dataSet = {
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
// panningData
const panningData = {
    panData: [
       {
           key: "uid_1", // key should already be present in the graph
            values: [
                {
                    x: new Date(2016, 0, 1, 10, 5).toISOString(),
                    y: 37
                },
                {
                    x: new Date(2016, 0, 1, 12, 15).toISOString(),
                    y: 36
                },
                {
                    x: new Date(2016, 0, 1, 14, 15).toISOString(),
                    y: 35
                }
            ]
       }
    ],
    eventline: [
        {
            color: COLORS.GREY,
            style: {
            strokeDashArray: "4,4"
            },
            value: new Date(2016, 9, 28).toISOString()
        },
        {
            color: COLORS.GREY,
            style: {
            strokeDashArray: "4,4"
            },
            value: new Date(2016, 10, 28).toISOString()
        }
    ],
    xLabel: 'updated xLabel',
    yLabel: 'Temperature (degC)',
    y2Label: 'updated y2Label',
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
        graph.reflow();
    };

    const graph = Carbon.api.graph(axisData);
    graph.loadContent(Carbon.api.line(graphData));
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
export const renderLinePanningWithDynamicData = (id) => {
    const axisData = graphConfiguration;
    axisData.pan = {
        enabled: true
    };
    const graphData = dataSet;
    graphData.regions = [regions[0]];

    const createGraph = () => {
        graph.reflow(panningData);
    };

    const graph = Carbon.api.graph(axisData);
    graph.loadContent(Carbon.api.line(graphData));
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

### panningData

#### Optional

| Property Name | Expected | Default   | Description                        |
| ------------- | -------- | --------- | ---------------------------------- |
| panData       | array  | [] | Allows to pass multiple objects with key-value pairs  |
| eventline       | array  | [] | Allows to pass multiple objects to update eventline. For structure refer [Eventline](../helpers/Eventline.md)  |
| xLabel       | string  | undefined | Updates x-label value  |
| yLabel       | string  | undefined | Updates y-label value  |
| y2Label       | string  | undefined | Updates y2-label value  |
