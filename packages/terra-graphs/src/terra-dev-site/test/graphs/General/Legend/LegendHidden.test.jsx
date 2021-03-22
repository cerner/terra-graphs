import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/simpleLineData';
=======
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/simpleLineData';
>>>>>>> 3b63910... Made changes to folder structure

const graphConfig = utils.deepClone(lineDefault('#legendHidden'));
graphConfig.showLegend = false;
const dataArray = [data];

<<<<<<< HEAD
export default () => <LineGraph graphID="legendHidden" graphConfig={graphConfig} dataset={data} />;
=======
export default () => <LineGraph graphID="legendHidden" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure

