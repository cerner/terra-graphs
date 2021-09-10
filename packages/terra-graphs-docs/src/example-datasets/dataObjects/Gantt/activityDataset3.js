import { COLORS } from '@cerner/carbon-graphs/lib/js/helpers/constants';
import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const activityDataset3 = [
  {
    key: 'activity4',
    color: COLORS.LIGHT_BLUE,
    onMouseEnter: loadTaskPopup,
    onMouseMove: loadTaskPopup,
    label: {
      display: 'Story Charming Activity',
    },
    startDate: new Date(2016, 0, 1, 10, 30).toISOString(),
    endDate: new Date(2016, 0, 1, 12, 30).toISOString(),
    style: {
      isDotted: false,
      isHollow: false,
    },
  },
];

export default activityDataset3;
