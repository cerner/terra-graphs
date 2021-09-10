import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadDatelinePopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const getGanttReducedPaddingConfig = (id) => ({
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
  actionLegend: [
    {
      key: 'uid_action_1',
      label: {
        display: 'Action A',
      },
    },
    {
      key: 'uid_action_2',
      label: {
        display: 'Action B',
      },
      shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,
      color: Carbon.helpers.COLORS.GREEN,
    },
  ],
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
  showActionLegend: true,
  removeContainerPadding: true,
  legendPadding: {
    left: 2.5,
    right: 2.5,
    top: 2.5,
    bottom: 2.5,
  },
});

export default getGanttReducedPaddingConfig;

