import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/pairedResult/PairedResultGraph';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultTimeseries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/pairedResult/pairedResultTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/pairedResult/pairedResultTimeseriesData';
import {
  loadDatelinePopup,
} from '@cerner/carbon-graphs/dev/examples/popup';
/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(pairedResultTimeseries('#pairedResultWithDateLine'));
graphConfig.dateline = [
  {
    showDatelineIndicator: true,
    label: {
      display: 'Action Date',
    },
    color: '#C97318',
    shape: Carbon.helpers.SHAPES.SQUARE,
    onClick: loadDatelinePopup,
    value: new Date(2017, 10, 1).toISOString(),
  },
];

export default () => <PairedResultGraph graphID="pairedResultWithDateLine" graphConfig={graphConfig} dataset={data} />;
