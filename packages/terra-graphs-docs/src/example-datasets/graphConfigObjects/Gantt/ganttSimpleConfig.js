import Carbon from '@cerner/carbon-graphs';
import {
  loadDatelinePopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const getGanttSimpleConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      show: true,
      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),
      upperLimit: new Date(2019, 1, 1, 12).toISOString(),
      rangeRounding: true, // If set to false, we don't extend the domain
    },
  },
  clickPassThrough: {
    task: false,
    activity: false,
    event: false,
    action: false,
    dateline: false,
  },
  dateline: [
    {
      showDatelineIndicator: true,
      label: {
        display: 'DST Start',
      },
      color: '#405978',
      shape: Carbon.helpers.SHAPES.DARK.DIAMOND,
      onClick: loadDatelinePopup,
      value: new Date(2018, 2, 10).toISOString(),
    },
    {
      showDatelineIndicator: true,
      label: {
        display: 'Current Date',
      },
      color: '#C97318',
      shape: Carbon.helpers.SHAPES.DARK.SQUARE,
      onClick: loadDatelinePopup,
      value: new Date(2018, 8, 5).toISOString(),
    },
    {
      showDatelineIndicator: true,
      label: {
        display: 'DST End',
      },
      color: '#405978',
      shape: Carbon.helpers.SHAPES.DARK.DIAMOND,
      onClick: loadDatelinePopup,
      value: new Date(2018, 10, 3).toISOString(),
    },
  ],
});

export default getGanttSimpleConfig;

