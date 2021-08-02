import React from 'react';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Timeline/Timeline.module.scss';
import data1 from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Timeline/defaultDataset';
import data2 from '@cerner/terra-graphs-docs/src/example-datasets/dataObjects/Timeline/criticalDataset';
import getTimelinePanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelinePanningConfig';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getTimelinePanningConfig('#TimelinePanningDynamicExample'));
const dataset = [utils.deepClone(data1)];

const initialState = {
  initial: 0,
  factor: 3,
};

let graph;

const TimelinePanningDynamicDataExample = () => {
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

    const newDataset = {
      panData: utils.deepClone(data2),
    };

    graph.reflowMultipleDatasets(newDataset);
  }, [panState.initial]);

  return (
    <React.Fragment>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <div id="tooltip" className="initial-tooltip" />
      <div id="TimelinePanningDynamicExample" />
    </React.Fragment>
  );
};

export default TimelinePanningDynamicDataExample;
