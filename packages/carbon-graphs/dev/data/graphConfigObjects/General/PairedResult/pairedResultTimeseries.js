import Carbon from '@cerner/carbon-graphs/lib/js/carbon';

const pairedResultTimeseries = (id) => ({
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
  showLabel: true,
  showLegend: true,
  showVGrid: true,
  showHGrid: true,
});

export default pairedResultTimeseries;
