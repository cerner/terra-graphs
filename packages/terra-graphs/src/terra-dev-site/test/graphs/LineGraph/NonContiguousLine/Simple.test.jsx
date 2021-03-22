import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineTimesries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/nonContiguouslineData';

const graphConfig = utils.deepClone(lineTimesries('#simpleLinegraph'));

export default () => <LineGraph graphID="simpleLinegraph" graphConfig={graphConfig} dataset={data} />;
=======
import lineTimesries from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/nonContiguouslineData';

const graphConfig = utils.deepClone(lineTimesries('#simpleLinegraph'));
const dataArray = [data];

export default () => <LineGraph graphID="simpleLinegraph" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure
