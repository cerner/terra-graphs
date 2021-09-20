import React from 'react';
import LineGraph from '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import lineTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/multiTimeseriesData';

const graphConfig = utils.deepClone(lineTimeseries('#legendItemDisable'));

const contentData = utils.deepClone(data);
contentData[0].label.isDisabled = true;

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="legendItemDisable" graphConfig={graphConfig} dataset={contentData} />
  </>
);
