import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/simpleLineData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineDefault('#noLowerBound'));
const contentData = utils.deepClone(data);
contentData[0].regions = [
  {
    end: 10,
  },
];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="noLowerBound" graphConfig={graphConfig} dataset={contentData} />
  </>
);

