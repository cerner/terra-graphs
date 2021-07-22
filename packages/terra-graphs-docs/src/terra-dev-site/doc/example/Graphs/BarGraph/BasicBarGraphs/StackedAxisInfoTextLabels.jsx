import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Graph.module.scss';
import '@cerner/terra-graphs/lib/components/Bar/BarGraph.module.scss';
import barDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';
import exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedAxisInfoTextLabelsData';

/*
Please refer to the documentation below to see the graphConfig and data objects
*/
const graphConfig = utils.deepClone(barDefault('#stackedAxisInfoTextLabelsBargraph'));
graphConfig.axis.x.orientation = Carbon.helpers.AXES_ORIENTATION.X.TOP;

const contentData = utils.deepClone(exampleData);
contentData[0].label.isDisabled = true;
contentData[1].label.isDisabled = true;
contentData[2].label.isDisabled = true;


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
      <div id="stackedAxisInfoTextLabelsBargraph" />
    </React.Fragment>
  );
};

export default DisableCalibrationLineExample;
