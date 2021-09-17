import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Bar/BarGraph.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import barTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barTimeseries';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/timeseriesData';
import {
  loadDatelinePopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(barTimeseries('#timeseriesBarWithDateline'));

graphConfig.dateline = [
  {
    showDatelineIndicator: true,
    label: {
      display: 'Action Date',
    },
    color: '#C97318',
    shape: Carbon.helpers.SHAPES.SQUARE,
    onClick: loadDatelinePopup,
    value: new Date(2017, 12, 2).toISOString(),
  },
];
graphConfig.clickPassThrough = {
  dateline: false,
};
graphConfig.showVGrid = false;
const dataset = utils.deepClone(exampleData);

export default () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.bar(data));
    });
  }, []);

  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="timeseriesBarWithDateline" class="example-graph-container" />
    </React.Fragment>
  );
};
