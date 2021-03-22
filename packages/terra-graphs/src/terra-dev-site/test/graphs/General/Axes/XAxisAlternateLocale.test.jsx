import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
<<<<<<< HEAD
import lineTimeseries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/timeseriesData';
=======
import lineTimeseries from '@cerner/carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries';
import data from '@cerner/carbon-graphs/dev/data/line/dataObjects/timeseriesData';
>>>>>>> 3b63910... Made changes to folder structure

const tickValues = [
  new Date(2016, 0, 1, 1, 0).toISOString(),
  new Date(2016, 0, 1, 5, 0).toISOString(),
  new Date(2016, 0, 1, 10, 0).toISOString(),
  new Date(2016, 0, 1, 15, 0).toISOString(),
  new Date(2016, 0, 1, 20, 0).toISOString(),
];

const graphConfig = utils.deepClone(lineTimeseries('#xAxisAlternateLocale'));
graphConfig.locale = Carbon.helpers.LOCALE.de_DE;
graphConfig.axis.x.ticks = {
  values: tickValues,
  format: '%A %e %B %Y, %X',
};
<<<<<<< HEAD

export default () => <LineGraph graphID="xAxisAlternateLocale" graphConfig={graphConfig} dataset={data} />;
=======
const dataArray = [data];

export default () => <LineGraph graphID="xAxisAlternateLocale" graphConfig={graphConfig} dataset={dataArray} />;
>>>>>>> 3b63910... Made changes to folder structure
