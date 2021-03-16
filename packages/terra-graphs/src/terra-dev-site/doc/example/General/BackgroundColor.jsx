import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '../../../../css/Dev.module.scss';
import lineDefault from '../../../../../../carbon-graphs/dev/data/line/graphConfigObjects/lineDefault.js'
import data from '../../../../../../carbon-graphs/dev/data/line/dataObjects/simpleLineData'

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#backgroundColor'));
export default () => (
  <div className="backgroundColorClass">
    <LineGraph graphID="backgroundColor" graphConfig={graphConfig} dataset={[data]} />
  </div>
);
