import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = [{
  key: 'uid_3',
  label: {
    high: {
      display: 'High',
    },
    mid: {
      display: 'Median',
    },
    low: {
      display: 'Low',
    },
  },
  shape: {
    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,
    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,
    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,
  },
  color: {
    high: Carbon.helpers.COLORS.BLACK,
    mid: Carbon.helpers.COLORS.PURPLE,
    low: Carbon.helpers.COLORS.BLACK,
  },
  onClick: loadPopup,
  values: [
    {
      high: {
        x: 20,
        y: 150,
        region: {
          start: 90,
          end: 150,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
      mid: {
        x: 20,
        y: 40,
      },
      low: {
        x: 20,
        y: 10,
        region: {
          start: 5,
          end: 30,
        },
      },
    },
    {
      high: {
        x: 80,
        y: 100,
        region: {
          start: 90,
          end: 150,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
      mid: {
        x: 80,
        y: 75,
      },
      low: {
        x: 80,
        y: 50,
        region: {
          start: 5,
          end: 30,
        },
      },
    },
    {
      high: {
        x: 150,
        y: 110,
        region: {
          start: 120,
          end: 190,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
      mid: {
        x: 150,
        y: 70,
      },
      low: {
        x: 150,
        y: 30,
        region: {
          start: 5,
          end: 30,
        },
      },
    },
    {
      high: {
        x: 175,
        y: 160,
        region: {
          start: 120,
          end: 190,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
      mid: {
        x: 175,
        y: 120,
      },
      low: {
        x: 175,
        y: 100,
        region: {
          start: 10,
          end: 40,
        },
      },
    },
    {
      high: {
        x: 300,
        y: 190,
        region: {
          start: 120,
          end: 190,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
      mid: {
        x: 300,
        y: 90,
      },
      low: {
        x: 300,
        y: 60,
        region: {
          start: 10,
          end: 40,
        },
      },
    },
    {
      high: {
        x: 560,
        y: 150,
      },
      mid: {
        x: 560,
        y: 40,
      },
      low: {
        x: 560,
        y: 10,
        region: {
          start: 10,
          end: 40,
        },
      },
    },
    {
      high: {
        x: 800,
        y: 180,
        region: {
          start: 120,
          end: 190,
          color: Carbon.helpers.COLORS.GREY,
        },
      },
      mid: {
        x: 800,
        y: 100,
      },
      low: {
        x: 800,
        y: 100,
        region: {
          start: 10,
          end: 40,
        },
      },
    },
  ],
}];

export default data;
