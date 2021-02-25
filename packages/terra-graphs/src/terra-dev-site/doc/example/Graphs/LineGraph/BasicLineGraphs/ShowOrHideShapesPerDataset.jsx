import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import LineGraph from '@cerner/terra-graphs/lib/components/Line/LineGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib/components/Dev.module.scss';
import lineDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Line/lineDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Line/defaultMultiLineData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(lineDefault('#showOrHideShapesPerDataset'));

const contentData = utils.deepClone(data);
contentData[0].showShapes = false;
contentData[0].color = Carbon.helpers.COLORS.BLUE;
contentData[0].style = { strokeDashArray: '2,2' };

export default () => (
  <React.Fragment>
    <div id="tooltip" className="initial-tooltip" />
    <LineGraph graphID="showOrHideShapesPerDataset" graphConfig={graphConfig} dataset={contentData} />
  </React.Fragment>
);
