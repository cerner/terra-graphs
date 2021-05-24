import {
  loadTaskPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const daysToMilliseconds = (d) => 24 * 60 * 60 * 1000 * d;
const tasksData = [
  [
    {
      key: 'task1',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 3, 10).toISOString(),
    },
    {
      key: 'task2',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Broccoli',
      },
      startDate: new Date(2018, 8, 1).toISOString(),
      endDate: new Date(2018, 9, 10).toISOString(),
    },
  ],
  [
    {
      key: 'task3',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 3, 1).toISOString(),
      endDate: new Date(2018, 7, 10).toISOString(),
    },
  ],
  [
    {
      key: 'task4',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Charming',
      },
      startDate: new Date(2018, 6, 1).toISOString(),
      endDate: new Date(2018, 7, 10).toISOString(),
    },
    {
      key: 'task5',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Broccoli',
      },
      startDate: new Date(2018, 10, 1).toISOString(),
      endDate: new Date(2018, 10, 1).toISOString(),
    },
  ],
  [
    {
      key: 'task6',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2018, 6, 1).toISOString(),
      endDate: new Date(2018, 9, 10).toISOString(),
    },
  ],
  [
    {
      key: 'task7',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Donny',
      },
      startDate: new Date(2016, 0, 1, 1).toISOString(),
      endDate: new Date(2016, 0, 1, 6).toISOString(),
      duration: () => daysToMilliseconds(14),
    },
    {
      key: 'task8',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Fargo',
      },
      startDate: new Date(2016, 0, 1, 8).toISOString(),
      endDate: new Date(2016, 0, 1, 11).toISOString(),
      duration: () => daysToMilliseconds(10),
    },
    {
      key: 'task9',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Broccoli Task hash',
      },
      startDate: new Date(2016, 0, 1, 12).toISOString(),
      endDate: new Date(2016, 0, 1, 16).toISOString(),
      style: {
        isHashed: true,
      },
    },
  ],
  [
    {
      key: 'task10',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Apex',
      },
      startDate: new Date(2016, 0, 1, 8).toISOString(),
      endDate: new Date(2016, 0, 1, 12).toISOString(),
    },
    {
      key: 'task11',
      onClick: loadTaskPopup,
      label: {
        display: 'Story Broccoli',
      },
      startDate: new Date(2016, 0, 1, 15).toISOString(),
      endDate: new Date(2016, 0, 1, 23).toISOString(),
    },
  ],
];

export default tasksData;
