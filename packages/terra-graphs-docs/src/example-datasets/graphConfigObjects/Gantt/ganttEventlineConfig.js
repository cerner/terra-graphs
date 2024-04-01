import Carbon from '@cerner/carbon-graphs';

const getGanttEventlineConfig = (id) => ({
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
  eventline: [
    {
      color: Carbon.helpers.COLORS.GREY,
      style: {
        strokeDashArray: '4,4',
      },
      value: new Date(2018, 10, 13).toISOString(),
    },
    {
      color: Carbon.helpers.COLORS.BLACK,
      style: {
        strokeDashArray: '2,2',
      },
      value: new Date(2018, 10, 20).toISOString(),
    },
  ],
});

export default getGanttEventlineConfig;

