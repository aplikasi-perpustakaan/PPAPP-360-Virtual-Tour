// ── locations/bt/f2-backside.js ────────────────────────────────────
export default [
  {
    id: 'bt-f2-backside-1',
    name: 'Floor 2 – Backside 1',
    caption: 'BT – Floor 2 – Backside 1',
    panorama: './images/bt/f2-backside/bt-f2-backside-1.jpg',
    thumbnail: './images/bt/f2-backside/thumbs/bt-f2-backside-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'bt-f2-backside-2',
          position: { yaw: '94.48deg', pitch: '-12.20deg' },
          name: 'Go to Backside 2',
        },
                {
          nodeId: 'bt-stairs-back-1',
          position: { yaw: '8.29deg', pitch: '-12.08deg' },
          name: 'Go to Stairs Back 1',
        },
        {
          nodeId: 'bt-f2-backside-3',
          position: { yaw: '277.88deg', pitch: '-4.39deg' },
          name: 'Go to Backside 3',
        },
{
          nodeId: 'bt-f2-reading-10',
          position: { yaw: '186.90deg', pitch: '0.41deg' },
          name: 'Go to Reading 10',
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
    thumbnail: './images/bt/f2-backside/thumbs/bt-f2-backside-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'bt-f2-backside-1',
          position: { yaw: '275.84deg', pitch: '-16.67deg' },
          name: 'Go to Backside 1',
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
    thumbnail: './images/bt/f2-backside/thumbs/bt-f2-backside-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'bt-f2-backside-1',
          position: { yaw: '86.75deg', pitch: '0.28deg' },
          name: 'Go to Backside 1',
        },
        {
          nodeId: 'bt-f2-surau-1',
          position: { yaw: '13.25deg', pitch: '-9.97deg' },
          name: 'Go to Surau 1',
        },
      ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['backside'],
      },
    },
];

