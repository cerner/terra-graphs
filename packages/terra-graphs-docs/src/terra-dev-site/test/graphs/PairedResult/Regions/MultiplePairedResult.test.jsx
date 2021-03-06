import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import pairedResultTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultY2AxisData';

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

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="timeseriesPairedResultGraph" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
