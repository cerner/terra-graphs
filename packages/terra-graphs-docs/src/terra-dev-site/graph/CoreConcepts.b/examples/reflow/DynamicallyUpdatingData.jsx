import React, { useState } from 'react';
import * as d3 from'd3-array';

import Button from 'terra-button';
import Carbon from '@cerner/carbon-graphs';

//  graph configuration object

const graphConfig = {
  bindTo: '#dynamic-data-update-example',
  axis: {
    x: {
      label: 'x-axis',
      lowerLimit: 80,
      upperLimit: 280,
      rangeRounding: false,
    },
    y: {
      label: 'y-axis',
      lowerLimit: -5,
      upperLimit: 20,
    },
  },
  allowCalibration: false,
};

//  graph dataset

const dataset1 = {
  key: 'uid_1',
  label: {
    display: 'Dataset 1',
  },
  color: Carbon.helpers.COLORS.PINK,
  values: [
    { x: 87, y: -2 },
    { x: 95, y: 1 },
    { x: 103, y: -4 },
    { x: 109, y: -2 },
    { x: 128, y: 3 },
    { x: 145, y: 28 },
    { x: 151, y: 7 },
    { x: 164, y: 10 },
    { x: 177, y: 1 },
    { x: 192, y: 6 },
    { x: 203, y: -21 },
    { x: 209, y: -3 },
    { x: 246, y: 3 },
  ],
};

// Updated values for dataset 1
// Color, shape & label of the original dataset is retained if it is not updated
const updatedDataset1 = {
  key: 'uid_1',
  values: [
    { x: 81, y: 21 },
    { x: 107, y: 6 },
    { x: 109, y: 7 },
    { x: 118, y: 5 },
    { x: 117, y: 21 },
    { x: 127, y: -20 },
    { x: 137, y: -9 },
    { x: 141, y: -6 },
    { x: 144, y: 39 },
    { x: 151, y: -14 },
    { x: 156, y: -9 },
    { x: 163, y: 4 },
    { x: 164, y: 29 },
    { x: 170, y: 30 },
    { x: 172, y: 31 },
    { x: 176, y: 34 },
    { x: 185, y: 1 },
    { x: 191, y: -2 },
    { x: 193, y: 38 },
    { x: 198, y: 40 },
  ],
};

const getNewTicks = (currentLower, currentUpper, dataset) => {
  const maxValue = Math.max(...dataset.values.map(value => value.y), currentUpper);
  const minValue = Math.min(...dataset.values.map(value => value.y), currentLower);

  // add padding by using the nice function
  const [newLower, newUpper] = d3.nice(minValue - 1, maxValue + 1, 10);

  // get new tick values
  const ticksCount = 3;
  const ticks = new Array().concat(d3.ticks(newLower, newUpper, ticksCount), [newLower, newUpper] );

  console.log("ticks",ticks);
  console.log("current min, max",[minValue, maxValue]);
  console.log("new min, max", [newLower, newUpper]);

  return {
    newLower,
    newUpper,
    ticks,
  }
}

// graph rendering
let graph;
const DynamicallyUpdatingDataExample = () => {
  const [allowCalibrationStatus, SetAllowCalibrationStatus] = useState(graphConfig.allowCalibration.toString());

  // initial graph load
  React.useEffect(() => {
    graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset1));

    const newTicks = getNewTicks(graph.config.axis.y.upperLimit, graph.config.axis.y.lowerLimit, dataset1);

    graph.config.axis.y.domain.lowerLimit = newTicks.newLower;
    graph.config.axis.y.domain.upperLimit = newTicks.newUpper;
    graph.config.axis.y.ticks.values = newTicks.ticks;

    graph.reflowMultipleDatasets();

    console.log(graph.config.axis.y.upperLimit)

  }, []);

  const handleClickToggleCalibration = () => {
    graph.config.allowCalibration = !graph.config.allowCalibration;
    SetAllowCalibrationStatus(graph.config.allowCalibration.toString());

    graph.reflowMultipleDatasets();
  };

  // dynamically update graph data
  const handleClickUpdateData = () => {
    const newTicks = getNewTicks(graph.config.axis.y.lowerLimit, graph.config.axis.y.upperLimit, updatedDataset1);

    graph.config.axis.y.domain.lowerLimit = newTicks.newLower;
    graph.config.axis.y.domain.upperLimit = newTicks.newUpper;
    graph.config.axis.y.ticks.values = newTicks.ticks;

    graph.reflowMultipleDatasets({
      panData: [updatedDataset1],
    });
  };

  // reset graph to it's original state
  const handleClickReset = () => {
    const newTicks = getNewTicks(graph.config.axis.y.lowerLimit, graph.config.axis.y.upperLimit, dataset1);

    graph.config.axis.y.domain.lowerLimit = newTicks.newLower;
    graph.config.axis.y.domain.upperLimit = newTicks.newUpper;
    graph.config.axis.y.ticks.values = newTicks.ticks;

    graph.reflowMultipleDatasets({
      panData: [dataset1],
    });
  };

  return (
    <>
      <Button text="Toggle Calibration" onClick={handleClickToggleCalibration} />
      <Button text="Update Data" onClick={handleClickUpdateData} />
      <Button text="Reset" onClick={handleClickReset} />
      <div>
        AllowCalibration:
        {allowCalibrationStatus}
      </div>
      <div id="dynamic-data-update-example" />
    </>
  );
};

export default DynamicallyUpdatingDataExample;
