import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getPairedResultTimeseriesPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultPanningWithEventline';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultSimplePanningData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getPairedResultTimeseriesPanningConfig('#PairedResultDynamicEventline'));
const dataset = [utils.deepClone(exampleData)];

const state = {
  initial: 0,
  factor: 3,
};
let graph;

const PairedResultDynamicEventlinePanningExample = () => {
  React.useEffect(() => {
    graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.pairedResult(data));
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

    const newEventline = [
      {
        color: Carbon.helpers.COLORS.BLACK,
        style: {
          strokeDashArray: '2,2',
        },
        value: new Date(2016, 0, 1, 12).toISOString(),
      },
    ];

    const newDataset = {
      panData: [utils.deepClone(exampleData)],
      eventline: newEventline,
    };

    graph.reflowMultipleDatasets(newDataset);
  }, [panState.initial]);

  return (
    <React.Fragment>
      <Button className="button-pan-left" text="<" onClick={() => dispatch({ type: 'panLeft' })} />
      <Button className="button-pan-right" text=">" onClick={() => dispatch({ type: 'panRight' })} />
      <div id="tooltip" className="initial-tooltip" />
      <div id="PairedResultDynamicEventline" class="example-graph-container" />
    </React.Fragment>
  );
};

export default PairedResultDynamicEventlinePanningExample;
