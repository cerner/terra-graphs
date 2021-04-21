import React from 'react';
import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import BarGraph from '@cerner/terra-graphs/lib/components/Bar/BarGraph';
import utils from '@cerner/carbon-graphs/lib/js/helpers/utils';
import '@cerner/terra-graphs/lib//components/Dev.module.scss';
import barDefault from '@cerner/carbon-graphs/dev/data/graphConfigObjects/Bar/barDefault';
import data from '@cerner/carbon-graphs/dev/data/dataObjects/Bar/stackedAxisInfoTextLabelsData';

/*
Please refer documentation below to see graphConfig and data objects.
*/
const graphConfig = utils.deepClone(barDefault('#stackedAxisInfoTextLabelsBargraph'));
graphConfig.axis.x.orientation = Carbon.helpers.AXES_ORIENTATION.X.TOP;

const contentData = utils.deepClone(data);
contentData[0].label.isDisabled = true;
contentData[1].label.isDisabled = true;
contentData[2].label.isDisabled = true;

export default () => <BarGraph graphID="stackedAxisInfoTextLabelsBargraph" graphConfig={graphConfig} dataset={contentData} />;
