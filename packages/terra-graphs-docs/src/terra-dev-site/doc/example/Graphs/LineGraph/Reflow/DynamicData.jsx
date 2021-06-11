import React, { useState } from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData2';
// import data2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/y2AxisData';


/*
Please refer to the documentation below to see the graphConfig and data objects
*/
let graphConfig = utils.deepClone(getConfigLineTimeseriesPanning('#linePanningExample'));
const dataset = [utils.deepClone(data[0])];
let newDataset = {}
// let dataset = utils.deepClone(data);
const shift = {
  initial: 0,
  factor: 3,
};

const LinePanningExample = () => {
  const [panLeftClicked, setPanLeftClicked] = useState(false);
  const [panRightClicked, setPanRightClicked] = useState(false);

  // Pan left Effect
  React.useLayoutEffect(() => {
    if (!panLeftClicked || panRightClicked) {
      return;
    }

    const newGraphConfig = utils.deepClone(graphConfig);
    const hour = shift.initial - shift.factor;
    shift.initial = hour;

    newGraphConfig.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    newGraphConfig.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();
    graphConfig = utils.deepClone(newGraphConfig);

    newDataset.panData = [utils.deepClone(data[0])];

    setPanLeftClicked(false);
  }, [panLeftClicked, panRightClicked]);

  // Pan right Effect
  React.useLayoutEffect(() => {
    if (panLeftClicked || !panRightClicked) {
      return
    }

    const newGraphConfig = utils.deepClone(graphConfig);
    const hour = shift.initial + shift.factor;
    shift.initial = hour;

    newGraphConfig.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    newGraphConfig.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();
    graphConfig = utils.deepClone(newGraphConfig);

    newDataset.panData = [utils.deepClone(data[1])];

    setPanRightClicked(false);
  }, [panLeftClicked, panRightClicked]);

  const panLeftFunction = () => {
    setPanLeftClicked(true);
  };

  const panRightFunction = () => {
    setPanRightClicked(true);
  };

  return (
    <React.Fragment>
      <Button id="buttonPanLeft" text="<" onClick={panLeftFunction} />
      <Button id="buttonPanRight" text=">" onClick={panRightFunction} />
      <div id="tooltip" className="initial-tooltip" />
      <LineGraph graphID="linePanningExample" graphConfig={graphConfig} dataset={dataset} panData={newDataset}/>
    </React.Fragment>
  );
};

export default LinePanningExample;
