
import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';


export default () => <LineGraph graphID="simpleLinegraph" graphConfig={ getDemoData('#simpleLinegraph', 'LINE_DEFAULT') } dataset={ getDemoData('#simpleLinegraph', 'LINE_DEFAULT').data[0]  }/>
