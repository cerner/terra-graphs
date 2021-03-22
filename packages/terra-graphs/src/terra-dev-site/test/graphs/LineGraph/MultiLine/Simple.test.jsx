import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/multiLineData';
=======
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/multiLineData';
>>>>>>> 3b63910... Made changes to folder structure

const graphConfig = utils.deepClone(lineDefault('#multiLine'));
const timeoutArray = [0, 750, 750 * 2, 750 * 3, 750 * 4, 750 * 5, 750 * 6];

export default () => <LineGraph graphID="multiLine" graphConfig={graphConfig} dataset={data} timeout={timeoutArray} />;
