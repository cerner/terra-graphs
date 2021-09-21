import React from 'react';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/disableCalibrationData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(lineDefault('#disableCalibration'));
graphConfig.allowCalibration = false;
const dataset = utils.deepClone(data);

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="disableCalibration" graphConfig={graphConfig} dataset={dataset} />
  </>
);

