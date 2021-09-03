const getGanttLabelTruncationConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      show: true,
      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),
      upperLimit: new Date(2019, 1, 1, 12).toISOString(),
      rangeRounding: true, // If set to false, we don't extend the domain
    },
  },
  dateline: [],
});

export default getGanttLabelTruncationConfig;

