import Carbon from '@cerner/carbon-graphs/lib/js/carbon';
import {
  loadPopup,
} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';

const scheduled = {
  path: [
    {
      id: 'calendar',
      d:
        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'
        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',
    },
    {
      id: 'circle',
      fill: '#78C346',
      d:
        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',
    },
    {
      id: 'check',
      fill: '#FFF',
      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',
    },
  ],
  options: {
    x: -7,
    y: -7,
    scale: 0.4,
  },
};

const dueSoon = {
  path: [
    {
      id: 'clock',
      d:
        'M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 '
        + '1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 '
        + '0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-'
        + '1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9'
        + '-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 '
        + '5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z',
    },
    {
      id: 'diamond',
      fill: '#E50000',
      d:
        'M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 '
        + '.1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z',
    },
    {
      id: 'exclamation',
      fill: '#FFF',
      d: 'M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z',
    },
  ],
  options: {
    x: -7,
    y: -7,
    scale: 0.35,
  },
};

const alert = {
  path: [
    {
      id: 'triangle',
      fill: '#E50000',
      d:
        'M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z',
    },
    {
      id: 'exclamation',
      fill: '#FFF',
      d: 'M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z',
    },
  ],
  options: {
    x: -6.5,
    y: -7.5,
    scale: 0.35,
  },
};

const eventsData = [
  [
    {
      key: 'uid_event_1',
      label: {
        display: 'Defect A',
      },
      onClick: loadPopup,
      shape: scheduled,
      color: Carbon.helpers.COLORS.BLACK,
      values: [new Date(2018, 2, 5).toISOString()],
    },
    {
      key: 'uid_event_2',
      label: {
        display: 'Defect B',
      },
      shape: dueSoon,
      color: Carbon.helpers.COLORS.WHITE,
      values: [new Date(2018, 5, 4).toISOString()],
    },
    {
      key: 'uid_event_3',
      label: {
        display: 'Defect C',
      },
      shape: alert,
      values: [new Date(2018, 3, 30).toISOString()],
    },
  ],
  [
    {
      key: 'uid_event_4',
      label: {
        display: 'Defect A',
      },
      onClick: loadPopup,
      shape: scheduled,
      color: Carbon.helpers.COLORS.BLACK,
      values: [new Date(2016, 0, 1, 5, 15).toISOString()],
    },
  ],
  [
    {
      key: 'uid_event_4',
      label: {
        display: 'Defect B',
      },
      onClick: loadPopup,
      shape: dueSoon,
      color: Carbon.helpers.COLORS.BLACK,
      values: [new Date(2016, 0, 1, 7, 30).toISOString()],
    },
  ],
];

export default eventsData;
