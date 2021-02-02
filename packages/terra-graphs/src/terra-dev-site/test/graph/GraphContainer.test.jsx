import React from 'react';

import {getDemoData} from "../../../../../carbon-graphs/dev/examples/data";
import LineGraph from '../../../LineGraph';

export default () => <LineGraph graphConfig = { getDemoData(`lineGraph`, 'LINE_DEFAULT') } contentConfig = { getDemoData(`lineGraph`, 'LINE_DEFAULT').data[0]} />