import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/General/labelTruncation';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#labelTruncation'));

export default () => <LineGraph graphID="labelTruncation" graphConfig={graphConfig} dataset={data} />;
=======
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/simpleLineData';
import lineDefault from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/labelTruncation';

const graphConfig = utils.deepClone(lineDefault('#labelTruncation'));
const dataArray = [data];

export default () => <LineGraph graphID="labelTruncation" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure

