// ── locations/bt/stairs-back.js ──────────────────────────────────────
export default [
  {
    id: 'bt-stairs-back-1',
    name: 'Back Stairs F1-F2 – 1',
    caption: 'BT – Back Stairs F1-F2 – 1',
    panorama: './images/bt/stairs-back/bt-stairs-back-1.jpg',
    thumbnail: './images/bt/stairs-back/thumbs/bt-stairs-back-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-f2-backside-1',
        position: { yaw: '265.41deg', pitch: '0deg' },
        name: 'Go to Backside 1',
      }, {
        nodeId: 'bt-f1-backside-1',
        position: { yaw: '169.08deg', pitch: '0deg' },
        name: 'Go to Backside 1',
      },],
    markers: [],
    data: {
      floor: 'stairs',
      tags: ['stairs-back'],
    },
  },
];
