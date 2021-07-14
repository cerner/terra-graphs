import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph.module.scss';
import pairedResultDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultSimpleData';

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
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(pairedResultDefault('#simplePairedResultGraph'));
const contentData = utils.deepClone(exampleData);

contentData[0].regions = {
  high: [regions.high[0]],
  low: regions.low,
};

const SimpleRegionPairedResultExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    contentData.forEach((data) => {
      graph.loadContent(Carbon.api.pairedResult(data));
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="simplePairedResultGraph" />
    </React.Fragment>
  );
};

export default SimpleRegionPairedResultExample;
