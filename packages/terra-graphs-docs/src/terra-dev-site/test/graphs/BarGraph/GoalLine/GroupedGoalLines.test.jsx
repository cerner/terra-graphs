import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import barDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/groupedBarData';

const regions = [
  [
    {
      axis: 'y',
      x: 1,
      start: 7,
      end: 7,
    },
    {
      axis: 'y',
      x: 2,
      start: 13,
      end: 13,
    },
    {
      axis: 'y',
      x: 3,
      start: 17,
      end: 17,
    },
    {
      axis: 'y',
      x: 4,
      start: 4,
      end: 4,
    },
  ],
  [
    {
      axis: 'y2',
      x: 1,
      start: 7,
      end: 7,
    },
    {
      axis: 'y2',
      x: 2,
      start: 13,
      end: 13,
    },
    {
      axis: 'y2',
      x: 3,
      start: 17,
      end: 17,
    },
    {
      axis: 'y2',
      x: 4,
      start: 4,
      end: 4,
    },
  ],
];
/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(barDefault('#groupedGoalLineBargraph'));

const contentData = utils.deepClone(data);
[contentData[1].regions, contentData[2].regions] = [regions[1], regions[0]];

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <BarGraph graphID="groupedGoalLineBargraph" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
