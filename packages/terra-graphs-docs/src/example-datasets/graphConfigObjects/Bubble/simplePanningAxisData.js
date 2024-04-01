import Carbon from '@cerner/carbon-graphs';

const getSimpleAxisData = (id) => ({
  bindTo: id,
  axis: {
    x: {
      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,
      label: 'Datetime',
      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),
      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),
    },
    y: {
      label: 'Bubble',
      lowerLimit: 10,
      upperLimit: 250,
    },
  },
  pan: {
    enabled: true,
  },
});

export default getSimpleAxisData;
