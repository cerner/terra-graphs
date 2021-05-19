import { COLORS } from '@cerner/carbon-graphs/lib/js/helpers/constants';
import {
  loadTaskPopup,
  loadXAndYAxisLabelPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const percentageData = [{
  key: 'track 1',
  trackLabel: {
    display: 'Percentage',
    onClick: loadXAndYAxisLabelPopup,
  },
  tasks: [
    {
      key: 'task3',
      onClick: loadTaskPopup,
      color: COLORS.ORANGE,
      label: {
        display: 'Story Apex',
      },
      percentage: 20,
      startDate: new Date(2018, 8, 1).toISOString(),
      endDate: new Date(2019, 0, 12).toISOString(),
    },
    {
      key: 'task5',
      onClick: loadTaskPopup,
      color: COLORS.GREEN,
      label: {
        display: 'Story Zelda',
      },
      percentage: 60,
      startDate: new Date(2018, 2, 1).toISOString(),
      endDate: new Date(2018, 5, 12).toISOString(),
    },
  ],
}];

export default percentageData;
