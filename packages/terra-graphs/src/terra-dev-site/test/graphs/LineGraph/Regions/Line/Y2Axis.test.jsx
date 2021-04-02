import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineTimesries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/y2AxisData';

const graphConfig = utils.deepClone(lineTimesries('#y2Region'));
graphConfig.axis.y2.show = true;

const contentData = utils.deepClone(data);
contentData[1].regions = [
  {
    axis: 'y2',
    start: 50,
    end: 150,
  },
];

export default () => <LineGraph graphID="y2Region" graphConfig={graphConfig} dataset={contentData} />;
