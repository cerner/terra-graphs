import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Bar/BarGraph.module.scss';
import barTimeseries from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barTimeseries';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/timeseriesData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(barTimeseries('#timeseriesBargraph'));
const dataset = utils.deepClone(exampleData);

const DisableCalibrationLineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    dataset.forEach((data) => {
      graph.loadContent(Carbon.api.bar(data));
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="timeseriesBargraph" />
    </React.Fragment>
  );
};

export default DisableCalibrationLineExample;
