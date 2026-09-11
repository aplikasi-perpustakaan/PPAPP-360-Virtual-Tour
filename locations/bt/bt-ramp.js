// ── locations/bt/ramp.js ──────────────────────────────────────────────
export default [
  {
    id: 'bt-ramp-1',
    name: 'Ramp F1-F2 – 1',
    caption: 'BT – Ramp F1-F2 – 1',
    panorama: './images/bt/ramp/bt-ramp-1.jpg',
    thumbnail: './images/bt/ramp/thumbs/bt-ramp-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-ramp-2',
        position: { yaw: '7.36deg', pitch: '0.49deg' },
        name: 'Go to 2',
      },
      {
        nodeId: 'bt-f1-lobby-2',
        position: { yaw: '188.76deg', pitch: '0.10deg' },
        name: 'Go to Lobby 2',
      },
    ],
    markers: [],
    data: {
      floor: 'ramp',
      tags: ['ramp'],
    },
  },
  {
    id: 'bt-ramp-2',
    name: 'Ramp F1-F2 – 2',
    caption: 'BT – Ramp F1-F2 – 2',
    panorama: './images/bt/ramp/bt-ramp-2.jpg',
    thumbnail: './images/bt/ramp/thumbs/bt-ramp-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-ramp-1',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to 1',
      },
      {
        nodeId: 'bt-ramp-3',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to 3',
      },
    ],
    markers: [],
    data: {
      floor: 'ramp',
      tags: ['ramp'],
    },
  },
  {
    id: 'bt-ramp-3',
    name: 'Ramp F1-F2 – 3',
    caption: 'BT – Ramp F1-F2 – 3',
    panorama: './images/bt/ramp/bt-ramp-3.jpg',
    thumbnail: './images/bt/ramp/thumbs/bt-ramp-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-ramp-2',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to 2',
      },
      {
        nodeId: 'bt-ramp-4',
        position: { yaw: '89.29deg', pitch: '-4.26deg' },
        name: 'Go to 4',
      },
    ],
    markers: [],
    data: {
      floor: 'ramp',
      tags: ['ramp'],
    },
  },
  {
    id: 'bt-ramp-4',
    name: 'Ramp F1-F2 – 4',
    caption: 'BT – Ramp F1-F2 – 4',
    panorama: './images/bt/ramp/bt-ramp-4.jpg',
    thumbnail: './images/bt/ramp/thumbs/bt-ramp-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-ramp-3',
        position: { yaw: '6.93deg', pitch: '0deg' },
        name: 'Go to 3',
      },
      {
        nodeId: 'bt-f2-reading-1',
        position: { yaw: '186.18deg', pitch: '0deg' },
        name: 'Go to Reading 1',
      },
    ],
    markers: [],
    data: {
      floor: 'ramp',
      tags: ['ramp'],
    },
  },
];
