import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/disableCalibrationData';

const graphConfig = utils.deepClone(lineDefault('#disableCalibration'));
graphConfig.allowCalibration = false;

export default () => <LineGraph graphID="disableCalibration" graphConfig={graphConfig} dataset={data} />;
=======
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/disableCalibrationData';

const graphConfig = utils.deepClone(lineDefault('#disableCalibration'));
graphConfig.allowCalibration = false;
const dataArray = [data];

export default () => <LineGraph graphID="disableCalibration" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure

