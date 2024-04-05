import React from 'react';
import AllowCalibrationDisabled from '../../../graph/CoreConfiguration.b/examples/AllowCalibrationDisabled';
import AllowCalibrationEnabled from '../../../graph/CoreConfiguration.b/examples/AllowCalibrationEnabled';

export default () => (
  <div id="allow-calibration-examples">
    <h3>allowCalibration Disabled</h3>
    <AllowCalibrationDisabled />

    <h3>allowCalibration Enabled</h3>
    <AllowCalibrationEnabled />
  </div>
);
