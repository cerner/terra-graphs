import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/defaultMultiLineData';

const graphConfig = utils.deepClone(lineDefault('#criticalityMultiLine'));

const contentData = utils.deepClone(data);
contentData[0].values[0].isCritical = true;
contentData[0].values[5].isCritical = true;
contentData[0].values[10].isCritical = true;

contentData[1].values[6].isCritical = true;
contentData[1].values[11].isCritical = true;

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="criticalityMultiLine" graphConfig={graphConfig} dataset={contentData} />
  </>
);
