import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Timeline from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Timeline/Timeline';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getTimelineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelineDefaultConfig';
import dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/criticalDataset1.js';
import dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/criticalDataset2.js';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(getTimelineConfig('#simpleTimelineGraph'));
const dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <Timeline graphID="simpleTimelineGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
