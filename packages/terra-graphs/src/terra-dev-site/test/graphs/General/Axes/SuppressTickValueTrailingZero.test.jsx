import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineDecimalAxes from '@cerner/carbon-graphs/dev/data/graphConfigObjects/General/lineDecimalAxesConfig';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/General/lineDecimalAxesData';
=======
import lineDecimalAxes from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineDecimalAxesConfig';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/lineDecimalAxesData';
>>>>>>> 3b63910... Made changes to folder structure

const graphConfig = utils.deepClone(lineDecimalAxes('#supressTickValue'));

export default () => <LineGraph graphID="supressTickValue" graphConfig={graphConfig} dataset={data} />;
