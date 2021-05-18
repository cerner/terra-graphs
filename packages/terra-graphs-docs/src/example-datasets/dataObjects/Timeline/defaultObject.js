import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {loadTimelinePopup} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const data = {
      key: 'uid_1',
      label: {
        display: 'Timeline A',
      },
      color: Carbon.helpers.COLORS.BLUE,
      onClick: loadTimelinePopup,
      values: [
        {
          x: new Date(2016, 0, 1, 1, 30).toISOString(),
          content: bobRossIpsum,
        },
        {
          x: new Date(2016, 0, 1, 2, 15).toISOString(),
          content: bobRossIpsum,
        },
        {
          x: new Date(2016, 0, 1, 3, 15).toISOString(),
          content: bobRossIpsum,
        },
        {
          x: new Date(2016, 0, 1, 4, 15).toISOString(),
          content: bobRossIpsum,
        },
        {
          x: new Date(2016, 0, 1, 5, 15).toISOString(),
          content: bobRossIpsum,
        },
      ],
};
  
export default data;
