import React, { useState } from 'react';

import Button from 'terra-button';

import Carbon from '@cerner/carbon-graphs';

//  graph configuration object

const graphConfig = {
  bindTo: '#dynamic-data-update-multiple-datasets-example',
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
  allowCalibration: true,
};

//  graph datasets

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

const dataset2 = {
  key: 'uid_2',
  label: {
    display: 'Dataset 2',
  },
  color: Carbon.helpers.COLORS.LAVENDER,
  values: [
    { x: 106, y: 19 },
    { x: 111, y: 45 },
    { x: 111, y: -1 },
    { x: 113, y: 25 },
    { x: 130, y: 12 },
    { x: 133, y: 39 },
    { x: 144, y: 45 },
    { x: 155, y: 37 },
    { x: 166, y: 20 },
    { x: 181, y: 60 },
    { x: 182, y: 29 },
    { x: 187, y: -6 },
    { x: 189, y: 54 },
    { x: 195, y: 59 },
    { x: 222, y: 32 },
  ],
};

// updated datasets

// updated values for dataset 1
// color, shape & label of the original dataset is retained if it is not updated
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

const updatedDataset2 = {
  key: 'uid_2',
  values: [
    { x: 101, y: 31 },
    { x: 104, y: 7 },
    { x: 107, y: 120 },
    { x: 131, y: 19 },
    { x: 141, y: -5 },
    { x: 150, y: 27 },
    { x: 150, y: -1 },
    { x: 158, y: 28 },
    { x: 192, y: 27 },
    { x: 212, y: 13 },
    { x: 212, y: 46 },
    { x: 217, y: 3 },
    { x: 224, y: 0 },
  ],
};

// graph rendering
let graph;
const DynamicallyUpdatingDataExample = () => {
  const [allowCalibrationStatus, SetAllowCalibrationStatus] = useState(graphConfig.allowCalibration.toString());

  React.useEffect(() => {
    graph = Carbon.api.graph(graphConfig);
    graph.loadContent(Carbon.api.line(dataset1));
    graph.loadContent(Carbon.api.line(dataset2));
  }, []);

  const handleClickToggleCalibration = () => {
    graph.config.allowCalibration = !graph.config.allowCalibration;
    SetAllowCalibrationStatus(graph.config.allowCalibration.toString());

    graph.reflowMultipleDatasets();
  };

  const handleClickUpdateData = () => {
    graph.reflowMultipleDatasets({
      panData: [updatedDataset1, updatedDataset2],
    });
  };

  const handleClickReset = () => {
    graph.unloadContent(Carbon.api.line(dataset1));
    graph.unloadContent(Carbon.api.line(dataset2));
    graph.loadContent(Carbon.api.line(dataset1));
    graph.loadContent(Carbon.api.line(dataset2));
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
      <div id="dynamic-data-update-multiple-datasets-example" />
    </>
  );
};

export default DynamicallyUpdatingDataExample;
