import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph.module.scss';
import pairedResultTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseries';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultY2AxisData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(pairedResultTimeseries('#multipleCriticalPairedResultGraph'));
graphConfig.axis.y2.show = true;
const contentData = utils.deepClone(exampleData);

contentData[0].values[3].high.isCritical = true;
contentData[0].values[3].mid.isCritical = true;
contentData[0].values[0].low.isCritical = true;

contentData[1].values[1].high.isCritical = true;
contentData[1].values[1].mid.isCritical = true;
contentData[1].values[1].low.isCritical = true;

const MultipleCriticalPiaredResultExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    contentData.forEach((data) => {
      graph.loadContent(Carbon.api.pairedResult(data));
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="multipleCriticalPairedResultGraph" />
    </React.Fragment>
  );
};

export default MultipleCriticalPiaredResultExample;
