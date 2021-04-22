import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/pairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import pairedResultTimeseries from '@cerner/carbon-graphs/dev/data/graphConfigObjects/pairedResult/pairedResultTimeseries';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/pairedResult/pairedResultY2AxisData';

export const multiRegion = {
  high: [
    {
      axis: 'y',
      start: 120,
      end: 170,
      color: '#c8cacb',
    },
  ],
  low: [
    {
      axis: 'y',
      start: 20,
      end: 100,
    },
  ],
};
export const multiRegionAlt = {
  high: [
    {
      axis: 'y2',
      start: 210,
      end: 280,
      color: '#c8cacb',
    },
  ],
  low: [
    {
      axis: 'y2',
      start: 175,
      end: 200,
    },
  ],
};

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(pairedResultTimeseries('#timeseriesPairedResultGraph'));
graphConfig.axis.y2.show = true;
const contentData = utils.deepClone(data);
contentData[0].regions = multiRegion;
contentData[1].regions = multiRegionAlt;

export default () => <PairedResultGraph graphID="timeseriesPairedResultGraph" graphConfig={graphConfig} dataset={contentData} />;
