// ── locations/bt/f1-surau.js ─────────────────────────────────────────
export default [
  {
    id: 'bt-f2-surau-1',
    name: 'Floor 2 – Surau 1',
    caption: 'BT – Floor 2 – Surau 1',
    panorama: './images/bt/f1-surau/bt-f1-surau-1.jpg',
    thumbnail: './images/bt/f1-surau/thumbs/bt-f1-surau-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-f2-surau-2',
        position: { yaw: '358.45deg', pitch: '0deg' },
        name: 'Go to Surau 2',
      },
      {
        nodeId: 'bt-f2-backside-3',
        position: { yaw: '176.80deg', pitch: '0deg' },
        name: 'Go to Backside 3',
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['surau'],
    },
  },
  {
    id: 'bt-f2-surau-2',
    name: 'Floor 2 – Surau 2',
    caption: 'BT – Floor 2 – Surau 2',
    panorama: './images/bt/f1-surau/bt-f1-surau-2.jpg',
    thumbnail: './images/bt/f1-surau/thumbs/bt-f1-surau-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-f2-surau-1',
        position: { yaw: '178.45deg', pitch: '0deg' },
        name: 'Go to Surau 1',
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['surau'],
    },
  },
];
