import React from 'react';
// import Graph from '../../../components/Graph'
import LineGraph from '../../../LineGraph'
import {getDemoData} from "../../../../../carbon-graphs/dev/examples/data";

export default () => <LineGraph graphConfig = { getDemoData(`lineGraph`, 'LINE_DEFAULT') } contentConfig = { getDemoData(`lineGraph`, 'LINE_DEFAULT').data[0]} />

// <Graph input = { getDemoData(`lineGraph`, 'LINE_DEFAULT') }/>;

// <Graph data={[5,10,1,3]} size={[500,500]}/>

//<Graph input = { getDemoData(`lineGraph`, 'LINE_DEFAULT') }/>;

//input = { getDemoData('lineGraph', 'LINE_DEFAULT') }
