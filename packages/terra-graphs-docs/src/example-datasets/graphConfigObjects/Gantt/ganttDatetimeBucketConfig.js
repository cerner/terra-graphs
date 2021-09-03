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

const getGanttDatetimeBucketConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      show: true,
      lowerLimit: new Date(2018, 1, 1, 23).toISOString(),
      upperLimit: new Date(2018, 1, 3, 1).toISOString(),
      rangeRounding: true, // If set to false, we don't extend the domain
      ticks: {
        format: '%H',
        lowerStepTickValues,
        midpointTickValues,
        upperStepTickValues,
      },
    },
  },
  dateline: [],
});

export default getGanttDatetimeBucketConfig;

