import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Bar/BarGraph.module.scss';
import barDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData';

const region = [
  {
    axis: 'y',
    x: 1,
    start: 10,
    end: 10,
  },
  {
    axis: 'y',
    x: 2,
    start: 40,
    end: 40,
  },
  {
    axis: 'y',
    x: 3,
    start: 55,
    end: 55,
  },
  {
    axis: 'y',
    x: 4,
    start: 30,
    end: 30,
  },
];

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(barDefault('#simpleBargraph'));

const contentData = utils.deepClone(exampleData);
contentData[0].regions = region;
contentData[1].regions = region;
contentData[2].regions = region;

const DisableCalibrationLineExample = () => {
  React.useEffect(() => {
    const graph = Carbon.api.graph(graphConfig);
    contentData.forEach((data) => {
      graph.loadContent(Carbon.api.bar(data));
    });
  }, []);
  return (
    <React.Fragment>
      <div id="tooltip" className="initial-tooltip" />
      <div id="simpleBargraph" />
    </React.Fragment>
  );
};

export default DisableCalibrationLineExample;
