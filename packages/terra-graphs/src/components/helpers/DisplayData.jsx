import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSONPretty from 'react-json-pretty';
import PropTypes from 'prop-types';
import getDemoData from '../../../../carbon-graphs/dev/examples/data';
import utils from '../../../../carbon-graphs/src/js/helpers/utils';
import '../../css/DisplayData.module.scss';

const propTypes = {
  /**
     * Graph object name.
     */
  graphConfig: PropTypes.string,
  /**
     * ID for graph object.
     */
  graphID: PropTypes.string,
  /**
     * data array number in graph object.
     */
  dataArrayNumber: PropTypes.array,
};

let graphObj;
function filterGraphConfigData(graphConfig, graphID) {
  graphObj = utils.deepClone(getDemoData(graphID, graphConfig));
  delete graphObj.data;
  return graphObj;
}

const DisplayData = ({
  graphConfig, dataArrayNumber, graphID,
}) => (
  <div>
    <h2>Graph Config Object</h2>
    <JSONPretty className="data" data={filterGraphConfigData(graphConfig, graphID)} />
    <h2>Dataset</h2>
    <JSONPretty id="dataset" className="data" data={dataArrayNumber.map(element => utils.deepClone(getDemoData(graphID, graphConfig)).data[element])} />
  </div>
);

DisplayData.propTypes = propTypes;

export default DisplayData;
