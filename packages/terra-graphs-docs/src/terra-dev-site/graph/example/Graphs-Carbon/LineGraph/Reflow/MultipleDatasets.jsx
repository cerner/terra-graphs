import React from 'react';
import Button from 'terra-button/lib/Button';
import Carbon from '@cerner/carbon-graphs';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning';
import initialData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';
import updatedData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1newData';
import initialData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries3';
import updatedData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries3newData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getConfigLineTimeseriesPanning('#multipleDatasetsExample'));
const dataset = [
  utils.deepClone(initialData1),
  utils.deepClone(initialData2),
];
const state = {
  initial: 0,
  factor: 3,
};

let graph;

const MultipleDatasetsLinePanningExample = () => {
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
      panData: [
        utils.deepClone(updatedData1),
        utils.deepClone(updatedData2),
      ],
    };

    graph.reflowMultipleDatasets(newDataset);
  }, [panState.initial]);
  return (
    <>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <ExampleGraphContainer id="multipleDatasetsExample" />
    </>
  );
};

export default MultipleDatasetsLinePanningExample;
