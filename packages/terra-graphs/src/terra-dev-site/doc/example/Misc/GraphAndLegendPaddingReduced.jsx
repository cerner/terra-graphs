
import React from 'react';
import { getDemoData } from '../../../../../../carbon-graphs/dev/examples/data'
import LineGraph from '../../../../components/Line/LineGraph.jsx';
import utils from '../../../../../../carbon-graphs/src/js/helpers/utils'
// import { createElementLegendBindTo } from '../../../../../../carbon-graphs/dev/examples/helpers';
import {
    CUSTOM_CONTAINER_LEGEND_STYLE,
  } from '../../../../../../carbon-graphs/dev/examples/helpers';
import '../../../../css/Dev.module.scss';

const createElementLegendBindTo = (id) => {
    const parentContainerElem = document.querySelector(`.${id}`);
    debugger;
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

const data = utils.deepClone(
    getDemoData('#graphContainer', 'LINE_TIMESERIES'),
  );
  data.bindLegendTo = '#legendContainer';
  data.removeContainerPadding = true;
  data.legendPadding = {
    left: 2.5,
    right: 2.5,
    top: 2.5,
    bottom: 2.5,
  };
  createElementLegendBindTo('MarkdownWrapper-module__markdown___1A-1-');
  debugger;

export default () => <LineGraph graphID = "graphContainer" graphConfig = { data } dataset={ [ data.data[0], data.data[2]] }/>