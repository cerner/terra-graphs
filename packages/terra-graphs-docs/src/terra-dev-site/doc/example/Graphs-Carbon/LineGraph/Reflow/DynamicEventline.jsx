import React from 'react';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanningEventline';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/panningData-eventline';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getConfigLineTimeseriesPanning('#dynamicEventlineExample'));
const dataset = [utils.deepClone(exampleData[0])];

const initialState = {
  initial: 0,
  factor: 3,
};
let graph;

const DynamicEventlinePanningExample = () => {
  React.useEffect(() => {
    graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.line(data));
    });
  }, []);

  const reducer = (panState, action) => {
    let hour;

    switch (action.type) {
      case 'panLeft':
        hour = panState.initial - panState.factor;
        break;
      case 'panRight':
        hour = panState.initial + panState.factor;
        break;
      default:
        return panState;
    }

    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();

    const newEventline = [
      {
        color: Carbon.helpers.COLORS.GREEN,
        style: {
          strokeDashArray: '4,4',
        },
        value: new Date(2016, 0, 1, 9, 45).toISOString(),
      },
    ];

    const newDataset = {
      panData: [utils.deepClone(exampleData[1])],
      eventline: newEventline,
    };

    graph.reflowMultipleDatasets(newDataset);

    return {
      initial: hour,
      factor: panState.factor,
    };
  };

  const [, dispatch] = React.useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <div id="tooltip" className="initial-tooltip" />
      <div id="dynamicEventlineExample" />
    </React.Fragment>
  );
};

export default DynamicEventlinePanningExample;
