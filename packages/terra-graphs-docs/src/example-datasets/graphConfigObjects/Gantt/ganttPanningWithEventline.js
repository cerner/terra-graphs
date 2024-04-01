import Carbon from '@cerner/carbon-graphs';

const getGanttPanningWithEventlineConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      show: true,
      lowerLimit: new Date(2016, 0, 1, 0).toISOString(),
      upperLimit: new Date(2016, 0, 2, 0).toISOString(),
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
  pan: {
    enabled: true,
  },
  showActionLegend: true,
  eventline: [
    {
      color: Carbon.helpers.COLORS.GREY,
      style: {
        strokeDashArray: '4,4',
      },
      value: new Date(2016, 0, 1, 4).toISOString(),
    },
  ],
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
});

export default getGanttPanningWithEventlineConfig;

