import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import barDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Bar/barDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Bar/stackedBarData';

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


export default () => <BarGraph graphID="simpleBargraph" graphConfig={graphConfig} dataset={contentData} />;
