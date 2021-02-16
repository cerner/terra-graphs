
import React, { Component } from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'

const colorData = utils.deepClone(getDemoData('#backgroundColor', 'LINE_DEFAULT'));

colorData.opaqueBackground = true;

export default () => {
    return <div>
    <div>
<LineGraph graphID="backgroundColor" graphConfig={ colorData } dataset={ colorData.data[0] }/>
</div>
<div style={{ backgroundColor: "#176ba0" }}>
<LineGraph graphID="backgroundColor1"  graphConfig={ getDemoData('#backgroundColor1', 'LINE_DEFAULT') } dataset={ getDemoData('#backgroundColor1', 'LINE_DEFAULT').data[0]} />
</div>
</div>
};
