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

const graphConfig = utils.deepClone(lineTimesries('#lineY2Axis'));
graphConfig.axis.y2.show = true;

export default () => <LineGraph graphID="lineY2Axis" graphConfig={graphConfig} dataset={data} />;
