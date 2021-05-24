import { COLORS } from '@cerner/carbon-graphs/lib/js/helpers/constants';
import {
  loadTaskPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const activitiesData = [
  [
    {
      key: 'activity1',
      label: {
        display: 'activity1',
      },
      onClick: () => {},
      color: '#FFDF00',
      startDate: new Date(2018, 1, 1).toISOString(),
      endDate: new Date(2018, 4, 10).toISOString(),
      style: {
        isDotted: false,
        isHollow: false,
      },
    },
  ],
  [
    {
      key: 'activity2-hashed',
      label: {
        display: 'Story Apex Hashed Activity',
      },
      color: '#000',
      startDate: new Date(2018, 0, 1).toISOString(),
      endDate: new Date(2018, 3, 1).toISOString(),
      style: {
        isDotted: false,
        isHollow: false,
        isHashed: true,
      },
    },
    {
      key: 'activity3',
      color: '#ff0000',
      label: {
        display: 'Story Apex Activity',
      },
      startDate: new Date(2018, 3, 1).toISOString(),
      endDate: new Date(2018, 9, 10).toISOString(),
      style: {
        isDotted: false,
        isHollow: false,
      },
    },
  ],
  [
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
  ],
  [
    {
      key: 'activity5',
      label: {
        display: 'activity5',
      },
      onClick: () => {},
      color: '#FFDF00',
      startDate: new Date(2016, 0, 1, 12).toISOString(),
      endDate: new Date(2016, 0, 1, 15).toISOString(),
      style: {
        isDotted: false,
        isHollow: false,
      },
    },
  ],
];

export default activitiesData;
