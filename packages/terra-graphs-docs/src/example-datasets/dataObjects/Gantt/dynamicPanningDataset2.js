const scheduled = {
  path: [
    {
      id: 'calendar',
      d:
        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'
        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',
    },
    {
      id: 'circle',
      fill: '#78C346',
      d:
        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',
    },
    {
      id: 'check',
      fill: '#FFF',
      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',
    },
  ],
  options: {
    x: -7,
    y: -7,
    scale: 0.4,
  },
};

const dynamicDataActions = [
  {
    key: 'uid_action_1',
    values: [
      new Date(2016, 0, 1, 7, 15).toISOString(),
      new Date(2016, 0, 1, 8, 15).toISOString(),
    ],
  },
  {
    key: 'uid_action_2',
    values: [new Date(2016, 0, 1, 9, 15).toISOString()],
  },
];

const dynamicDataTasks = [
  {
    key: 'task10',
    startDate: new Date(2016, 0, 1, 0).toISOString(),
    endDate: new Date(2016, 0, 1, 13).toISOString(),
  },
  {
    key: 'task11',
    startDate: new Date(2016, 0, 1, 15).toISOString(),
    endDate: new Date(2016, 0, 1, 20).toISOString(),
  },
];

const dynamicDataEvents = [
  {
    key: 'uid_event_4',
    shape: scheduled,
    values: [new Date(2016, 0, 1, 2, 15).toISOString()],
  },
];

const dynamicDataActivities = [
  {
    key: 'activity5',
    startDate: new Date(2016, 0, 1, 3).toISOString(),
    endDate: new Date(2016, 0, 1, 6).toISOString(),
  },
];

const dynamicPanningDataset2 = {
  key: 'track 0',
  actions: dynamicDataActions,
  tasks: dynamicDataTasks,
  events: dynamicDataEvents,
  activities: dynamicDataActivities,
};

export default dynamicPanningDataset2;
