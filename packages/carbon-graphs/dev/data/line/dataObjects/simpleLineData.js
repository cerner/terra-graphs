import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
    loadPopup,
 } from '../../../examples/popup';
  
const data = {
key: 'uid_1',
label: {
    display: 'Data Label 1',
},
color: Carbon.helpers.COLORS.BLACK,
onClick: loadPopup,
values: new Array(20).fill('').map((_, i) => ({
    y: Math.sin(i) * Math.PI,
    x: 85 + i * 10,
})),
}

export default data;