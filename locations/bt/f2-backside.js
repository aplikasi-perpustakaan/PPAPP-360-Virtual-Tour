// ── locations/bt/f2-backside.js ────────────────────────────────────
export default [
  {
    id: 'bt-f2-backside-1',
    name: 'Floor 2 – Backside 1',
    caption: 'BT – Floor 2 – Backside 1',
    panorama: './images/bt/f2-backside/bt-f2-backside-1.jpg',
    thumbnail: './images/bt/f2-backside/bt-f2-backside-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'bt-f2-backside-2',
          position: { yaw: '358.45deg', pitch: '-8.15deg' },
          name: 'Go to Backside 2',
        },
      ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['backside'],
    },
  },
  {
    id: 'bt-f2-backside-2',
    name: 'Floor 2 – Backside 2',
    caption: 'BT – Floor 2 – Backside 2',
    panorama: './images/bt/f2-backside/bt-f2-backside-2.jpg',
    thumbnail: './images/bt/f2-backside/bt-f2-backside-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'bt-f2-backside-1',
          position: { yaw: '178.45deg', pitch: '-8.15deg' },
          name: 'Go to Backside 1',
        },
        {
          nodeId: 'bt-f2-backside-3',
          position: { yaw: '358.45deg', pitch: '-8.15deg' },
          name: 'Go to Backside 3',
        },
      ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['backside'],
    },
  },
  {
    id: 'bt-f2-backside-3',
    name: 'Floor 2 – Backside 3',
    caption: 'BT – Floor 2 – Backside 3',
    panorama: './images/bt/f2-backside/bt-f2-backside-3.jpg',
    thumbnail: './images/bt/f2-backside/bt-f2-backside-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'bt-f2-backside-2',
          position: { yaw: '178.45deg', pitch: '-8.15deg' },
          name: 'Go to Backside 2',
        },
      ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['backside'],
      },
    },
];

