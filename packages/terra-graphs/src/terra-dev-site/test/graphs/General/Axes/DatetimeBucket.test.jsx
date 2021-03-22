import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import dateTimeBucket from '@cerner/carbon-graphs/dev/data/graphConfigObjects/General/dateTimeBucket';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/timeseriesData';

const graphConfig = utils.deepClone(dateTimeBucket('#datetimeBucket'));

export default () => <LineGraph graphID="datetimeBucket" graphConfig={graphConfig} dataset={data} />;
=======
import dateTimeBucket from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/dateTimeBucket';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/timeseriesData';

const graphConfig = utils.deepClone(dateTimeBucket('#datetimeBucket'));
const dataArray = [data];

export default () => <LineGraph graphID="datetimeBucket" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure
