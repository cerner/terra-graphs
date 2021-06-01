import React, { useState } from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/simpleLineData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineDefault('#simpleLinegraph'));
const dataset = utils.deepClone(data);

const LinePanningExample = () => {

  const [panDataset, setPanDataset] = useState(dataset);

  React.useEffect(()=>{
  setPanDataset(dataset);
  console.log(panDataset);
  dataset[0].label.display = "updated label";
},[]);

return (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="simpleLinegraph" graphConfig={graphConfig} dataset={panDataset} />
  </React.Fragment>
);

};

export default LinePanningExample;
