import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/simpleLineData';

const graphConfig = utils.deepClone(lineDefault('#backgroundColor'));
const dataset = utils.deepClone(data);

export default () => (
  <div className="background-color-class">
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="backgroundColor" graphConfig={graphConfig} dataset={dataset} />
  </div>
);
