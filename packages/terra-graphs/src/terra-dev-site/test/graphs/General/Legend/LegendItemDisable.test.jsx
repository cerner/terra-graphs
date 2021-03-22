import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineTimeseries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/multiTimeseriesData';
=======
import lineTimeseries from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/multiTimeseriesData';
>>>>>>> 3b63910... Made changes to folder structure

const graphConfig = utils.deepClone(lineTimeseries('#legendItemDisable'));

const contentData = utils.deepClone(data);
contentData[0].label.isDisabled = true;

export default () => <LineGraph graphID="legendItemDisable" graphConfig={graphConfig} dataset={contentData} />;
