import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineTimesries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';
import {
  loadDatelinePopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineTimesries('#timeseriesDateLine'));
graphConfig.dateline = [
  {
    showDatelineIndicator: true,
    label: {
      display: 'Current Date',
    },
    color: '#C97318',
    shape: Carbon.helpers.SHAPES.DARK.SQUARE,
    onClick: loadDatelinePopup,
    value: new Date(2016, 0, 1, 6).toISOString(),
  },
];
graphConfig.clickPassThrough = {
  dateline: false,
};
const dataset = utils.deepClone(exampleData);

const TimelineWithDatelineScatterExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.scatter(data));
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="timeseriesDateLine" class="example-graph-container" />
    </React.Fragment>
  );
};

export default TimelineWithDatelineScatterExample;
