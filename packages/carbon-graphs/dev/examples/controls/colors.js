import * as d3 from '../../../src/js/d3Modules';
import Carbon from '../../../src/js/carbon';

import { vector } from '../helpers';

const renderColorsExample = (id) => {
  const sect = document.createElement('section');
  sect.setAttribute('class', 'shape-container');
  const svgElement = vector.render(sect, id, '0 0 1080 150');
  document.querySelector(`#${id}`).appendChild(sect);
  d3.select(svgElement)
    .attr('style', 'background: #fafafa; margin: 1rem;', true)
    .append('g')
    .selectAll('circle')
    .data(Object.keys(Carbon.helpers.COLORS))
    .enter()
    .append('circle')
    .attr('r', 20)
    .attr('cx', (d, i) => i * 68 + 30)
    .attr('cy', () => 75)
    .attr('style', (d) => `fill: ${Carbon.helpers.COLORS[d]};`);
};

export default renderColorsExample;
