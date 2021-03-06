import React from 'react';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import dateTimeBucket from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/dateTimeBucket';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/timeseriesData';

const graphConfig = utils.deepClone(dateTimeBucket('#datetimeBucket'));
const dataset = utils.deepClone(data);

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="datetimeBucket" graphConfig={graphConfig} dataset={dataset} />
  </React.Fragment>
);
