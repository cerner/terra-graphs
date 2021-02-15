
import React from 'react';
import { getDemoData } from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'


export default () => <LineGraph graphID="dashedLine" graphConfig={ getDemoData('#dashedLine', 'LINE_DEFAULT') } dataset={ getDemoData('#dashedLine', 'LINE_DEFAULT').data[1]  }/>


 