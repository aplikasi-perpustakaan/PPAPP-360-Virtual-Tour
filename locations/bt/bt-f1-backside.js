// ── locations/bt/f1-backside.js ──────────────────────────────────────
export default [
  {
    id: 'bt-f1-backside-1',
    name: 'Floor 1 – Backside 1',
    caption: 'BT – Floor 1 – Backside 1',
    panorama: './images/bt/f1-backside/bt-f1-backside-1.jpg',
    thumbnail: './images/bt/f1-backside/thumbs/bt-f1-backside-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'bt-f1-backside-2',
          position: { yaw: '269.19deg', pitch: '-35.50deg' },
          name: 'Go to Backside 2',
        },
                {
          nodeId: 'bt-stairs-back-1',
          position: { yaw: '9.63deg', pitch: '-6.54deg' },
          name: 'Go to Stairs Back 1',
        },
        {
          nodeId: 'bt-f1-tyt-16',
          position: { yaw: '179.57deg', pitch: '-10deg' },
          name: 'Exit to TYT 16',
        },
      ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['backside'],
    },
  },
  {
    id: 'bt-f1-backside-2',
    name: 'Floor 1 – Backside 2',
    caption: 'BT – Floor 1 – Backside 2',
    panorama: './images/bt/f1-backside/bt-f1-backside-2.jpg',
    thumbnail: './images/bt/f1-backside/thumbs/bt-f1-backside-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'bt-f1-backside-1',
          position: { yaw: '92.53deg', pitch: '-19.65deg' },
          name: 'Go to Backside 1',
        },
        {
          nodeId: 'bt-f1-surau-1',
          position: { yaw: '5.10deg', pitch: '-22.48deg' },
          name: 'Go to Surau 1',
        },
        {
          nodeId: 'bt-f1-kids-8',
          position: { yaw: '198.32deg', pitch: '-6.68deg' },
          name: 'Go to Kids',
        },
      ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['backside'],
      },
    },
];
