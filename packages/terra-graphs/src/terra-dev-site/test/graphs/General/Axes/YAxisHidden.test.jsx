import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#yAxisHidden'));
graphConfig.axis.y.show = false;

export default () => <LineGraph graphID="yAxisHidden" graphConfig={graphConfig} dataset={data} />;
=======
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#yAxisHidden'));
graphConfig.axis.y.show = false;
const dataArray = [data];

export default () => <LineGraph graphID="yAxisHidden" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure
