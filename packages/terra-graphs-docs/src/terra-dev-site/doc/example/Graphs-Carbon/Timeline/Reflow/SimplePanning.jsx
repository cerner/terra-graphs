import React from 'react';
import Button from 'terra-button/lib/Button';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Timeline/Timeline.module.scss';
import ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';
import getTimelinePanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelinePanningConfig';
import dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset1.js';
import dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset2.js';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getTimelinePanningConfig('#TimelinePanningExample'));
const dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];

const initialState = {
  initial: 0,
  factor: 3,
};

let graph;

const TimelinePanningExample = () => {
  React.useEffect(() => {
    graph = Carbon.api.timeline(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
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

  const [panState, dispatch] = React.useReducer(reducer, initialState);

  React.useLayoutEffect(() => {
    if (!graph) { return; }

    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();
    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();

    graph.reflowMultipleDatasets();
  }, [panState.initial]);

  return (
    <>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <ExampleGraphContainer id="TimelinePanningExample" />
    </>
  );
};

export default TimelinePanningExample;
