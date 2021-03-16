import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineTimeseries from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries';
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/timeseriesData';

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
const dataArray = [data];

export default () => <LineGraph graphID="xAxisAlternateLocale" graphConfig={graphConfig} dataset={dataArray} />;
