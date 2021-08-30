import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const getPairedResultEventlineTimeseriesConfig = (id) => ({
  bindTo: id,
  axis: {
    x: {
      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
      label: 'Datetime',
      lowerLimit: '2016-03-02T12:00:00Z',
      upperLimit: '2018-12-10T12:00:00Z',
      ticks: {
        format: '%b %Y',
      },
    },
    y: {
      label: 'Paired Set A',
      lowerLimit: 0,
      upperLimit: 200,
    },
    y2: {
      show: false,
      label: 'Paired Set B',
      lowerLimit: 100,
      upperLimit: 350,
    },
  },
  eventline: [
    {
      color: Carbon.helpers.COLORS.GREY,
      style: {
        strokeDashArray: '4,4',
      },
      value: new Date(2016, 8, 1, 8).toISOString(),
    },
    {
      color: Carbon.helpers.COLORS.BLACK,
      style: {
        strokeDashArray: '2,2',
      },
      value: new Date(2017, 5, 1, 12).toISOString(),
    },
  ],
  clickPassThrough: {
    dateline: false,
  },
  showLabel: true,
  showLegend: true,
  showVGrid: true,
  showHGrid: true,
});

export default getPairedResultEventlineTimeseriesConfig;
