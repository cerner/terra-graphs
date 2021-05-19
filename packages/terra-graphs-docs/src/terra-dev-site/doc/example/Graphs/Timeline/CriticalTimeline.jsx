import React from 'react';
import Timeline from '@cerner/terra-graphs/lib/components/Timeline/Timeline';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getTimelineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelineConfigObject';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/criticalDataset.js';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getTimelineConfig('#criticalTimeline'));
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <Timeline graphID="criticalTimeline" graphConfig={graphConfig} dataset={[dataset]} />
  </React.Fragment>
);
