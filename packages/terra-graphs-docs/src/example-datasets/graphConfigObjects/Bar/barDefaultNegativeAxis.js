import Carbon from '@cerner/carbon-graphs';

const getbarConfig = (id) => ({
  bindTo: id,
  bindLegendTo: null,
  axis: {
    x: {
      show: true,
      label: 'Data',
      lowerLimit: 0,
      upperLimit: 8,
      ticks: {
        values: [1, 2, 3, 4, 5, 6, 7],
        format: '.0f',
      },
      orientation: Carbon.helpers.AXES_ORIENTATION.X.TOP,
    },
    y: {
      show: true,
      label: 'Bar Set A',
      lowerLimit: -15,
      upperLimit: 0,
    },
    y2: {
      show: false,
      label: 'Bar Set B',
      lowerLimit: 0,
      upperLimit: 30,
    },
  },
  showLabel: true,
  showLegend: true,
  showShapes: true,
  showVGrid: false,
  showHGrid: true,
});

export default getbarConfig;

