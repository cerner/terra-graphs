import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultTimeseries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/PairedResult/pairedResultTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/PairedResult/pairedResultTimeseriesData';
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
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="pairedResultWithDateLine" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
