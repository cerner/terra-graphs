import React from 'react';
import getDemoData from '../../../../carbon-graphs/dev/examples/data';
import utils from '../../../../carbon-graphs/src/js/helpers/utils';
import JSONPretty from 'react-json-pretty';
import '../../css/DisplayData.module.scss'
 
var graphObj;
function filterGraphConfigData(graphConfig, graphID){
  graphObj = utils.deepClone(getDemoData(graphID, graphConfig));
  delete graphObj.data;
  return graphObj;
}

const DisplayData = ({
  graphConfig, dataArrayNumber, graphID
}) => {
    return (
        <div>
          <h2>Graph Config Object</h2>
          <JSONPretty className="data" data={filterGraphConfigData(graphConfig, graphID)}></JSONPretty>
          <h2>Dataset</h2>
          <JSONPretty id = "dataset" className="data" data={dataArrayNumber.map(element => utils.deepClone(getDemoData(graphID, graphConfig)).data[element])}></JSONPretty>
        </div> 
      );
}

export default DisplayData;
