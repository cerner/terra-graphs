import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/pairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/pairedResult/pairedResultDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/pairedResult/pairedResultSimpleData';

const regions = {
  high: [
    {
      axis: 'y',
      start: 140,
      end: 220,
      color: '#c8cacb',
    },
  ],
  low: [
    {
      axis: 'y',
      start: 20,
      end: 70,
    },
  ],
};
/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(pairedResultDefault('#simplePairedResultGraph'));
const contentData = utils.deepClone(data);

contentData[0].regions = {
  high: [regions.high[0]],
  low: regions.low,
};

export default () => <PairedResultGraph graphID="simplePairedResultGraph" graphConfig={graphConfig} dataset={contentData} />;
