import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import BarGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import barDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData';

const region = [
  {
    axis: 'y',
    x: 1,
    start: 10,
    end: 10,
  },
  {
    axis: 'y',
    x: 2,
    start: 40,
    end: 40,
  },
  {
    axis: 'y',
    x: 3,
    start: 55,
    end: 55,
  },
  {
    axis: 'y',
    x: 4,
    start: 30,
    end: 30,
  },
];

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(barDefault('#simpleBargraph'));

const contentData = utils.deepClone(data);
contentData[0].regions = region;
contentData[1].regions = region;
contentData[2].regions = region;

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <BarGraph graphID="simpleBargraph" graphConfig={graphConfig} dataset={contentData} />
  </>
);
