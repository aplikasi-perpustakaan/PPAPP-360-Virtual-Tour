// ── locations/bt/stairs-front.js ─────────────────────────────────────
export default [
  {
    id: 'bt-stairs-front-1',
    name: 'Front Stairs F1-F2 – 1',
    caption: 'BT – Front Stairs F1-F2 – 1',
    panorama: './images/bt/stairs-front/bt-stairs-front-1.jpg',
    thumbnail: './images/bt/stairs-front/thumbs/bt-stairs-front-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [{
      nodeId: 'bt-f1-lobby-3',
      position: { yaw: '5.24deg', pitch: '0deg' },
      name: 'Go to Lobby 3',
    }, {
      nodeId: 'bt-f2-reading-21',
      position: { yaw: '92.18deg', pitch: '0deg' },
      name: 'Go to Reading 21',
    },
    ],
    markers: [],
    data: {
      floor: 'stairs',
      tags: ['stairs-front'],
    },
  },
];
