import React from 'react';
import PairedResultGraph from '@cerner/terra-graphs/lib/components/PairedResult/PairedResultGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';
import getPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultDefault';
import data from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultSimpleData';

const graphConfig = utils.deepClone(getPairedResultConfig('#simplePairedResultGraph'));
const dataset = [utils.deepClone(data)];

export default () => (
  <>
    <div id="tooltip" className="initial-tooltip" />
    <PairedResultGraph graphID="simplePairedResultGraph" graphConfig={graphConfig} dataset={dataset} />
  </>
);
