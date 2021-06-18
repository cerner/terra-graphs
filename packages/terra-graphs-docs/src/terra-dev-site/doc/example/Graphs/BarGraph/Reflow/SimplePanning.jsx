import React, { useState } from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getBarPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barPanning';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/simplePanningData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
let graphConfig = utils.deepClone(getBarPanningConfig('#simpleBarPanning'));
const dataset = utils.deepClone(data);
const shift = {
  initial: 0,
  factor: 3,
};
const BarPanningExample = () => {
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

    setPanLeftClicked(false);
  }, [panLeftClicked, panRightClicked]);

  // Pan right Effect
  React.useLayoutEffect(() => {
    if (panLeftClicked || !panRightClicked) {
      return;
    }

    const newGraphConfig = utils.deepClone(graphConfig);
    const hour = shift.initial + shift.factor;
    shift.initial = hour;
    newGraphConfig.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();
    newGraphConfig.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();

    graphConfig = utils.deepClone(newGraphConfig);

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
      {'\n'}
      <Button id="buttonPanRight" text=">" onClick={panRightFunction} />
      <div id="tooltip" className="initial-tooltip" />
      <BarGraph graphID="simpleBarPanning" graphConfig={graphConfig} dataset={dataset} />
    </React.Fragment>
  );
};

export default BarPanningExample;
