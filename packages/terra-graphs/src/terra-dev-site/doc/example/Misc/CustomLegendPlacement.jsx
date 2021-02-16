
import React from 'react';
import getDemoData from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'
import '../../../../css/Dev.module.scss';

const createElementLegendBindTo = (id) => {
    const parentContainerElem = document.querySelector(`.${id}`);
    const container = document.createElement('div');
    container.setAttribute('class', 'bindto-container');
    // Prepare legend container
    const legendContainer = document.createElement('div');
    const graphContainer = document.createElement('div');
    legendContainer.setAttribute('id', 'legendContainer');
    legendContainer.setAttribute('class', 'legend-bindto-container');
    // Prepare graph container
    graphContainer.setAttribute('id', 'graphContainer');
    graphContainer.setAttribute('class', 'legend-bindto-graph-container');
    container.appendChild(legendContainer);
    container.appendChild(graphContainer);
  
    parentContainerElem.appendChild(container);
  };

createElementLegendBindTo('MarkdownWrapper-module__markdown___1A-1-');
const data = utils.deepClone(
    getDemoData('#graphContainer', 'LINE_TIMESERIES'),
  );
data.bindLegendTo = '#legendContainer';

export default () => <div>
        <div className = 'bindto-container'>
            <div id = 'legendContainer' className = 'legend-bindto-container'>
            </div>
            <div id = 'graphContainer' className = 'legend-bindto-graph-container'>
            </div>
            </div>
            <LineGraph graphID = "graphContainer" graphConfig={ data } dataset={ [ data.data[0], data.data[2]] }/> 
    </div>