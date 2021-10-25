import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const getScatterTimeseriesConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
      label: 'Datetime',
      lowerLimit: new Date(2016, 0, 1, 0, 0).toISOString(),
      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),
    },
    y: {
      label: 'Line Set A',
      lowerLimit: 10,
      upperLimit: 30,
    },
    y2: {
      show: false,
      label: 'Line Set B',
      lowerLimit: 0,
      upperLimit: 250,
    },
  },
  eventline: [
    {
      color: Carbon.helpers.COLORS.GREY,
      style: {
        strokeDashArray: '4,4',
      },
      value: new Date(2016, 0, 1, 8).toISOString(),
    },
    {
      color: Carbon.helpers.COLORS.BLACK,
      style: {
        strokeDashArray: '2,2',
      },
      value: new Date(2016, 0, 1, 12).toISOString(),
    },
  ],
  showLabel: true,
  showLegend: true,
  showShapes: true,
  showVGrid: true,
  showHGrid: true,
});

export default getScatterTimeseriesConfig;
