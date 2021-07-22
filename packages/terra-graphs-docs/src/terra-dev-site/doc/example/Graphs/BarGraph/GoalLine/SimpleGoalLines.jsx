import React from 'react';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import '@cerner/terra-graphs-docs/lib/Css/ExampleGraphContainer.module.scss';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Bar/BarGraph.module.scss';
import barDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/simpleBarData';

const regions = [
  {
    axis: 'y',
    x: 1,
    start: 7,
    end: 7,
  },
  {
    axis: 'y',
    x: 2,
    start: 13,
    end: 13,
  },
  {
    axis: 'y',
    x: 3,
    start: 17,
    end: 17,
  },
  {
    axis: 'y',
    x: 4,
    start: 4,
    end: 4,
  },
];

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(barDefault('#simpleGoalLineBargraph'));

const contentData = utils.deepClone(exampleData);
contentData[0].regions = regions;

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
      <div id="simpleGoalLineBargraph" />
    </React.Fragment>
  );
};

export default DisableCalibrationLineExample;
