import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph.module.scss';
import pairedResultTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseries';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultY2AxisData';

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
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(pairedResultTimeseries('#timeseriesPairedResultGraph'));
graphConfig.axis.y2.show = true;
const contentData = utils.deepClone(exampleData);
contentData[0].regions = multiRegion;
contentData[1].regions = multiRegionAlt;

const PiaredResultExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    contentData.forEach((data) => {
      graph.loadContent(Carbon.api.pairedResult(data));
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="timeseriesPairedResultGraph" />
    </React.Fragment>
  );
};

export default PiaredResultExample;
