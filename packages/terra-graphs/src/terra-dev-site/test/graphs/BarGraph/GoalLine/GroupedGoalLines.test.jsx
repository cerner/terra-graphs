import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import barDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Bar/barDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Bar/groupedBarData';

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
contentData[1].regions = regions[1];
contentData[2].regions = regions[0];

export default () => <BarGraph graphID="groupedGoalLineBargraph" graphConfig={graphConfig} dataset={contentData} />;
