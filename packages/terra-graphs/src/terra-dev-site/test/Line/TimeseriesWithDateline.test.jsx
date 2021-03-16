import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../css/Dev.module.scss';
import lineTimesries from '../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineTimeseries'
import data from '../../../../../carbon-graphs/dev/data/line/dataObjects/timeseriesData';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
    loadDatelinePopup,
 } from '../../../../../carbon-graphs/dev/examples/popup';

const graphConfig = utils.deepClone(lineTimesries('#timeseriesDateLine'));
graphConfig.dateline = [
    {
      showDatelineIndicator: true,
      label: {
        display: 'Current Date',
      },
      color: '#C97318',
      shape: Carbon.helpers.SHAPES.DARK.SQUARE,
      onClick: loadDatelinePopup,
      value: new Date(2016, 0, 1, 6).toISOString(),
    },
  ];
  const dataArray = [data];

export default () => <LineGraph graphID="timeseriesDateLine" graphConfig={graphConfig} dataset={dataArray} />;
