import React from 'react';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Line/LineGraph.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getConfigLineTimeseriesPanning('#linePanningExample'));
const dataset = utils.deepClone(exampleData);

const state = {
  initial: 0,
  factor: 3,
};
let graph;

const SimpleLinePanningExample = () => {
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

    graph.reflowMultipleDatasets();

    return {
      initial: hour,
      factor: panState.factor,
    };
  };

  const [, dispatch] = React.useReducer(reducer, state);

  return (
    <>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <ExampleGraphContainer id="linePanningExample" />
    </>
  );
};

export default SimpleLinePanningExample;
