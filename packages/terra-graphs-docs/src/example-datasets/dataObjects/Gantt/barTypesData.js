import {
  loadXAndYAxisLabelPopup,
  loadTaskPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const contentArray = [];
contentArray.push({
  key: 'track 0',
  trackLabel: {
    display: 'Default',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: [
    {
      key: 'default',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
    },
  ],
});

contentArray.push({
  key: 'track 1',
  trackLabel: {
    display: 'Hollow only',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: [
    {
      key: 'default',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
      style: {
        isHollow: true,
      },
    },
  ],
});

contentArray.push({
  key: 'track 2',
  trackLabel: {
    display: 'Dotted, Hollow',
  },
  tasks: [
    {
      key: 'default',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
      style: {
        isDotted: true,
        isHollow: true,
      },
    },
  ],
});

contentArray.push({
  key: 'track 3',
  trackLabel: {
    display: 'Percentage',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: [
    {
      key: 'percentage',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
      percentage: 30,
    },
  ],
});

contentArray.push({
  key: 'track 4',
  trackLabel: {
    display: 'Task Hashed',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: [
    {
      key: 'task_hash',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
      style: {
        isHashed: true,
      },
    },
  ],
});

contentArray.push({
  key: 'track 5',
  trackLabel: {
    display: 'Activity',
    onClick: loadXAndYAxisLabelPopup,
  },
  activities: [
    {
      key: 'Activity',
      label: {
        display: 'Story Apex Activity',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
    },
  ],
});

contentArray.push({
  key: 'track 6',
  trackLabel: {
    display: 'Activity Hashed',
  },
  activities: [
    {
      key: 'Hash',
      label: {
        display: 'Story Apex Activity hash',
      },
      color: '#000',
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
      style: {
        isHashed: true,
      },
    },
  ],
});

contentArray.push({
  key: 'track 7',
  trackLabel: {
    display: 'Activity and Task',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: [
    {
      key: 'Task',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex Task',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
    },
  ],
  activities: [
    {
      key: 'Activity and Task',
      label: {
        display: 'Combination',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 11, 1).toISOString(),
    },
  ],
});

export default contentArray;
