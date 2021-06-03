import React, { useState } from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import lineTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
var graphConfig = utils.deepClone(lineTimeseries('#simpleLinegraph'));
const dataset = utils.deepClone(data);
const shift = {
  initial: 0,
  factor: 3,
};
graphConfig.pan = {
  enabled: true,
}

const LinePanningExample = () => {

  const [panDataset, setPanDataset] = useState(dataset);
  const [panLeftClicked, setPanLeftClicked] = useState(false);
  const [panRightClicked, setPanRightClicked] = useState(false);
  // const shift = {
  //   initial: 0,
  //   factor: 3,
  // };

  // Pan left Effect
  React.useEffect(()=>{
    console.log(panDataset);
    
    const newGraphConfig = utils.deepClone(graphConfig);
    const hour = shift.initial - shift.factor;
    shift.initial = hour;
    newGraphConfig.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    newGraphConfig.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();

    graphConfig = utils.deepClone(newGraphConfig);

    dataset[0].label.display = "updated label";
    // setPanDataset(dataset);
    setPanLeftClicked(false);
  },[panLeftClicked]);

  // Pan right Effect
  React.useEffect(()=>{
    console.log(panDataset);
  
    const newGraphConfig = utils.deepClone(graphConfig);
    const hour = shift.initial + shift.factor;
    shift.initial = hour;
    newGraphConfig.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    newGraphConfig.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();

    graphConfig = utils.deepClone(newGraphConfig);

    // setPanDataset(dataset);
    setPanRightClicked(false);
  },[panRightClicked]);


const panLeftFunction = () => {
  setPanLeftClicked(true);
}

const panRightFunction = () => {
  setPanRightClicked(true);
}

return (
  <React.Fragment>
    <Button text="<" onClick={panLeftFunction} />
    <Button text=">" onClick={panRightFunction} />
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="simpleLinegraph" graphConfig={graphConfig} dataset={panDataset} />
  </React.Fragment>
);

};

export default LinePanningExample;
