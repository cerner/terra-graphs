import React from 'react';
import Button from 'terra-button/lib/Button';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning';
import initialData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';
import updatedData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1-newData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getConfigLineTimeseriesPanning('#dynamicLineData'));
const dataset = utils.deepClone(initialData);
const state = {
  initial: 0,
  factor: 3,
};

let graph;

const DynamicLinePanningExample = () => {
  React.useEffect(() => {
    graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset));
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

    return {
      initial: hour,
      factor: panState.factor,
    };
  };

  const [panState, dispatch] = React.useReducer(reducer, state);

  React.useLayoutEffect(() => {
    if (!graph) { return; }

    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();
    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();

    const newDataset = {
      panData: [utils.deepClone(updatedData)],
    };

    graph.reflowMultipleDatasets(newDataset);
  }, [panState.initial]);

  return (
    <>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <ExampleGraphContainer id="dynamicLineData" />
    </>
  );
};

export default DynamicLinePanningExample;
