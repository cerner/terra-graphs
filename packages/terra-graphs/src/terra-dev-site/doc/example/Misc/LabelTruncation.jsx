
import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'

export default () => <LineGraph graphID="labelTruncation" graphConfig={ getDemoData(`#labelTruncation`, 'LABEL_TRUNCATION') } dataset={ getDemoData('#labelTruncation', 'LABEL_TRUNCATION').data[0]  }/>


 