import React, { useState } from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import Button from 'terra-button/lib/Button';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import getPairedResultTimeseriesPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/simplePanningData';

let graphConfig = utils.deepClone(getPairedResultTimeseriesPanningConfig('#simplePairedResultPanning'));

const dataset = utils.deepClone(data);
const shift = {
  initial: 0,
  factor: 3,
};
const PairedResultPanningExample = () => {
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
      <PairedResultGraph graphID="simplePairedResultPanning" graphConfig={graphConfig} dataset={dataset} />
    </React.Fragment>
  );
};

export default PairedResultPanningExample;
