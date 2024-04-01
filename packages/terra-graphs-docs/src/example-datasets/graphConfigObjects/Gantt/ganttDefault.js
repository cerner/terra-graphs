import Carbon from '@cerner/carbon-graphs';
import {
  loadDatelinePopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const daysToMilliseconds = (d) => 24 * 60 * 60 * 1000 * d;
const getGanttDefaultConfig = (id) => ({
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
  tracks: [
    {
      key: 'track 1',
      dimension: {
        trackHeight: 80,
      },
      trackLabel: {
        display: 'Project A',
        onClick: () => {
          // Call consumer implementation here or NOP
        },
      },
      tasks: [
        {
          key: 'task1',
          label: {
            display: 'Story A',
          },
          onClick: () => {
          },
          color: '#007cc3',
          startDate: new Date(2018, 1, 1).toISOString(),
          endDate: new Date(2018, 1, 10).toISOString(),
          duration: () => daysToMilliseconds(10),
          percentage: 40,
          dependencies: null, // TODO FUTURE implementation
          style: {
            isDotted: true,
            isHollow: true,
          },
        },
      ],
      activities: [
        // Optional, consumer can skip this to get a valid gantt chart.
        {
          key: 'uid_activity_1',
          label: {
            display: 'Support',
          },
          onClick: () => {
          },
          startDate: new Date(2018, 1, 1).toISOString(),
          endDate: new Date(2018, 1, 10).toISOString(),
          duration: () => daysToMilliseconds(12),
          style: {
            isDotted: false,
            isHollow: false,
          },
        },
      ],
      events: [
        {
          key: 'uid_event_1',
          label: {
            display: 'Defect A',
          },
          onClick: () => {
          },
          shape: {
            path: {
              id: 'caretUp',
              d: 'M0,36l24-24l24,24H0z',
            },
            options: {
              x: -12,
              y: -12,
              scale: 0.5,
            },
          },
          color: Carbon.helpers.COLORS.BLUE,
          values: [new Date(2018, 3, 1, 7, 0).toISOString()],
        },
      ],
      actions: [
        {
          key: 'uid_action_1',
          onClick: () => {
          },
          values: [
            new Date(2018, 2, 1, 6, 15).toISOString(),
            new Date(2018, 3, 1, 6, 15).toISOString(),
            new Date(2018, 4, 1, 6, 15).toISOString(),
          ],
        },
        {
          key: 'uid_action_2',
          onClick: () => {
          },
          values: [new Date(2018, 6, 1, 6, 15).toISOString()],
        },
      ],
    },
  ],
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
});

export default getGanttDefaultConfig;

