import Carbon from '../../../../src/js/carbon';
import Bar from '../../../../src/js/controls/Bar';
import Gantt from '../../../../src/js/controls/Gantt';
import Graph from '../../../../src/js/controls/Graph';
import Line from '../../../../src/js/controls/Line';
import PairedResult from '../../../../src/js/controls/PairedResult';
import Pie from '../../../../src/js/controls/Pie';
import Timeline from '../../../../src/js/controls/Timeline';
import Shape from '../../../../src/js/core/Shape/Shape';
import Scatter from '../../../../src/js/controls/Scatter';
import {
  Bubble,
  BubbleSingleDataset,
  BubbleMultipleDataset,
} from '../../../../src/js/controls/Bubble';

import {
  ganttInput,
  LIBRARY_LIST,
  nativeInput,
  pieInput,
  timelineInput,
  TOOLS_LIST,
} from './helpers';

describe('Carbon', () => {
  let graphContainer;

  beforeEach(() => {
    graphContainer = document.createElement('div');
    graphContainer.id = 'testGraph_carbon';
    graphContainer.setAttribute('style', 'width: 1024px; height: 400px;');
    document.body.appendChild(graphContainer);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('registers all graph types', () => {
    const keys = Object.keys(Carbon.api);
    expect(keys).toBeDefined();
    expect(keys.every((i) => LIBRARY_LIST.indexOf(i) > -1)).toBeTruthy();
    expect(keys.length).toBe(LIBRARY_LIST.length);
  });
  it('registers all graph tools', () => {
    const keys = Object.keys(Carbon.tools);
    expect(keys).toBeDefined();
    expect(keys.every((i) => TOOLS_LIST.indexOf(i) > -1)).toBeTruthy();
    expect(keys.length).toBe(TOOLS_LIST.length);
  });
  it('registers Graph', () => {
    const graph = Carbon.api.graph(nativeInput);
    expect(typeof Carbon.api.graph).toEqual('function');
    expect(graph).toBeInstanceOf(Graph);
  });
  it('registers Line graph', () => {
    const data = {
      key: 'uid_1',
      label: {
        display: 'Data Label 1',
      },
      values: [
        {
          x: 35,
          y: 4,
        },
      ],
    };
    const line = Carbon.api.line(data);
    expect(typeof Carbon.api.line).toEqual('function');
    expect(line).toBeInstanceOf(Line);
  });
  it('registers Paired Result graph', () => {
    const data = {
      key: 'uid_1',
      values: [
        {
          high: {
            x: 45,
            y: 350,
          },
        },
      ],
    };
    const paired = Carbon.api.pairedResult(data);
    expect(typeof Carbon.api.pairedResult).toEqual('function');
    expect(paired).toBeInstanceOf(PairedResult);
  });
  it('registers Shape', () => {
    const shape = Carbon.tools.shape(Carbon.helpers.SHAPES.RHOMBUS);
    expect(typeof Carbon.tools.shape).toEqual('function');
    expect(shape).toBeInstanceOf(Shape);
  });
  it('registers Shape - Dark', () => {
    const shape = Carbon.tools.shape(Carbon.helpers.SHAPES.DARK.RHOMBUS);
    expect(typeof Carbon.tools.shape).toEqual('function');
    expect(shape).toBeInstanceOf(Shape);
  });
  it('registers Shape - Light', () => {
    const shape = Carbon.tools.shape(Carbon.helpers.SHAPES.LIGHT.RHOMBUS);
    expect(typeof Carbon.tools.shape).toEqual('function');
    expect(shape).toBeInstanceOf(Shape);
  });
  it('registers defaultSVGProps', () => {
    const _svgProps = Carbon.tools.defaultSVGProps();
    expect(typeof Carbon.tools.defaultSVGProps).toEqual('function');
    expect(_svgProps).toBeInstanceOf(Object);
    expect(_svgProps.svgClassNames).toEqual('');
    expect(_svgProps.svgStyles).toEqual('');
    expect(typeof _svgProps.transformFn).toEqual('function');
    expect(typeof _svgProps.onClickFn).toEqual('function');
    expect(_svgProps.a11yAttributes).toEqual({});
  });
  it('registers Gantt', () => {
    const gantt = Carbon.api.gantt(ganttInput);
    expect(typeof Carbon.api.gantt).toEqual('function');
    expect(gantt).toBeInstanceOf(Gantt);
  });

  // TODO: fix failing test
  it.skip('registers Timeline', () => {
    const timeline = Carbon.api.timeline(timelineInput);
    expect(typeof Carbon.api.timeline).toEqual('function');
    expect(timeline).toBeInstanceOf(Timeline);
  });
  it('registers Bar', () => {
    const data = {
      key: 'uid_1',
      label: {
        display: 'Data Label 1',
      },
      values: [
        {
          x: 35,
          y: 4,
        },
      ],
    };
    const bar = Carbon.api.bar(data);
    expect(typeof Carbon.api.bar).toEqual('function');
    expect(bar).toBeInstanceOf(Bar);
  });
  it('registers Pie', () => {
    const pie = Carbon.api.pie(pieInput);
    expect(typeof Carbon.api.line).toEqual('function');
    expect(pie).toBeInstanceOf(Pie);
  });
  it('registers Scatter', () => {
    const data = {
      key: 'uid_1',
      label: {
        display: 'Data Label 1',
      },
      values: [
        {
          x: 35,
          y: 4,
        },
      ],
    };
    const scatter = Carbon.api.scatter(data);
    expect(typeof Carbon.api.scatter).toEqual('function');
    expect(scatter).toBeInstanceOf(Scatter);
  });
  it('registers Bubble', () => {
    const data = {
      key: 'uid_12',
      label: {
        display: 'Data Label 1',
      },
      values: [
        {
          x: 35,
          y: 4,
        },
      ],
    };

    const bubble = Carbon.api.bubble(data);
    expect(typeof Carbon.api.bubble).toEqual('function');
    expect(bubble).toBeInstanceOf(Bubble);
  });
  it('registers BubbleSingleDataset', () => {
    const data = {
      key: 'uid_12',
      label: {
        display: 'Data Label 1',
      },
      values: [
        {
          x: 35,
          y: 4,
        },
      ],
    };

    const bubbleSingleDataset = Carbon.api.bubbleSingleDataset(data);
    expect(typeof Carbon.api.bubbleSingleDataset).toBe('function');
    expect(bubbleSingleDataset).toBeInstanceOf(BubbleSingleDataset);
  });
  it('registers BubbleMultipleDataset', () => {
    const data = {
      key: 'uid_12',
      label: {
        display: 'Data Label 1',
      },
      values: [
        {
          x: 35,
          y: 4,
        },
      ],
    };

    const bubbleMultipleDataset = Carbon.api.bubbleMultipleDataset(data);
    expect(typeof Carbon.api.bubbleMultipleDataset).toEqual('function');
    expect(bubbleMultipleDataset).toBeInstanceOf(BubbleMultipleDataset);
  });
});
