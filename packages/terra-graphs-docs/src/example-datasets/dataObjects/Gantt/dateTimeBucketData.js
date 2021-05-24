import {
  loadXAndYAxisLabelPopup,
  loadTaskPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const lowerStepTickValues = [
  new Date(2018, 1, 2, 6).toISOString(),
  new Date(2018, 1, 2, 12).toISOString(),
  new Date(2018, 1, 2, 18).toISOString(),
];
const midpointTickValues = [
  new Date(2018, 1, 2, 3).toISOString(),
  new Date(2018, 1, 2, 9).toISOString(),
  new Date(2018, 1, 2, 15).toISOString(),
  new Date(2018, 1, 2, 21).toISOString(),
];
const upperStepTickValues = [
  new Date(2018, 1, 2, 0).toISOString(),
  new Date(2018, 1, 2, 24).toISOString(),
];

const dateTimeBucketData = [
  {
    key: 'track 1',
    trackLabel: {
      display: 'Project A',
      onClick: loadXAndYAxisLabelPopup,
    },
    tasks: [
      {
        key: 'task1',
        onClick: loadTaskPopup,
        label: {
          display: 'Story Apex',
        },
        startDate: new Date(2018, 1, 2, 9).toISOString(),
        endDate: new Date(2018, 1, 2, 19).toISOString(),
      },
    ],
  },
];

export {
  lowerStepTickValues,
  midpointTickValues,
  upperStepTickValues,
  dateTimeBucketData,
};
