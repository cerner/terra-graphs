import Carbon from '@cerner/carbon-graphs';
import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

// Dataset to be used in a multiline graph with value regions
const data = {
  key: 'uid_4',
  label: {
    display: 'Data Label 4',
  },
  color: Carbon.helpers.COLORS.PURPLE,
  shape: Carbon.helpers.SHAPES.DARK.SQUARE,
  onClick: loadPopup,
  legendOptions: {
    showLine: true,
    showShape: true,
  },
  values: [{
    x: 85,
    y: -5,
    regions: [{
      start: -10,
      end: 0,
      color: Carbon.helpers.COLORS.LAVENDER
    },{
      start: 0,
      end: 10,
      color: Carbon.helpers.COLORS.GREY
    }]
  },{
    x: 115,
    y: -10,
    regions: [{
      start: -15,
      end: -5,
      color: Carbon.helpers.COLORS.LAVENDER
    },{
      start: 5,
      end: 15,
      color: Carbon.helpers.COLORS.GREY
    }]
  },{
    x: 155,
    y: -15,
    regions: [{
      start: -20,
      end: -10,
      color: Carbon.helpers.COLORS.LAVENDER
    },{
      start: 10,
      end: 20,
      color: Carbon.helpers.COLORS.GREY
    }]
  },{
    x: 175,
    y: -20,
    regions: [{
      start: -25,
      end: -15,
      color: Carbon.helpers.COLORS.LAVENDER
    },{
      start: 15,
      end: 25,
      color: Carbon.helpers.COLORS.GREY
    }]
  },{
    x: 225,
    y: -15,
    regions: [{
      start: -20,
      end: -10,
      color: Carbon.helpers.COLORS.LAVENDER
    },{
      start: 10,
      end: 20,
      color: Carbon.helpers.COLORS.GREY
    }]
  },{
    x: 255,
    y: -10,
    regions: [{
      start: -15,
      end: -5,
      color: Carbon.helpers.COLORS.LAVENDER
    },{
      start: 5,
      end: 15,
      color: Carbon.helpers.COLORS.GREY
    }]
  },{
    x: 275,
    y: -5,
    regions: [{
      start: -10,
      end: -0,
      color: Carbon.helpers.COLORS.LAVENDER
    },{
      start: 0,
      end: 10,
      color: Carbon.helpers.COLORS.GREY
    }]
  }]
};

export default data;
