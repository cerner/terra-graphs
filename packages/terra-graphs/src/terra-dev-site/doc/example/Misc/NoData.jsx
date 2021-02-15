
import React from 'react';
import { getDemoData } from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';


export default () => <LineGraph graphID="nodata" graphConfig={ getDemoData('#nodata', 'NO_DATA_VIEW') } dataset={ getDemoData('#nodata', 'NO_DATA_VIEW').data[0]  }/>


 