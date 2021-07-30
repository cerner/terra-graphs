import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Timeline/Timeline.module.scss';
import getTimelineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelineConfigObject';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/criticalDataset.js';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/

const graphConfig = utils.deepClone(getTimelineConfig('#simpleTimelineGraph'));
const dataset = utils.deepClone(exampleData);

const SimpleTimelineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.timeline(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(data);
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="simpleTimelineGraph" />
    </React.Fragment>
  );
};

export default SimpleTimelineExample;
