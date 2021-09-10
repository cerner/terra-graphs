import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import { loadTimelinePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
  key: 'uid_2',
  label: {
    display: 'Timeline B',
  },
  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,
  color: Carbon.helpers.COLORS.GREEN,
  onClick: loadTimelinePopup,
  values: [
    {
      x: new Date(2016, 0, 1, 7, 15).toISOString(),
      content: 'This is custom value of another unit',
    },
    {
      x: new Date(2016, 0, 1, 9, 45).toISOString(),
      content: 'This is custom value of another unit',
    },
    {
      x: new Date(2016, 0, 1, 12).toISOString(),
      content: 'This is custom value of another unit',
    },
  ],
};

export default data;
