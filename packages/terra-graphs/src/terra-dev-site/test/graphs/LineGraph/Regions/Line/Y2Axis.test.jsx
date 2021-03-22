import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineTimesries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/y2AxisData';
=======
import lineTimesries from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/y2AxisData';
>>>>>>> 3b63910... Made changes to folder structure

const graphConfig = utils.deepClone(lineTimesries('#y2Region'));
graphConfig.axis.y2.show = true;

<<<<<<< HEAD
const contentData = utils.deepClone(data);
contentData[1].regions = [
=======
const contentData = utils.deepClone(data[1]);
contentData.regions = [
>>>>>>> 3b63910... Made changes to folder structure
  {
    axis: 'y2',
    start: 50,
    end: 150,
  },
];
<<<<<<< HEAD

export default () => <LineGraph graphID="y2Region" graphConfig={graphConfig} dataset={contentData} />;
=======
const dataArray = [data[0], contentData];

export default () => <LineGraph graphID="y2Region" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure

