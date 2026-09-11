// ── locations/bm/bm-ext-outside.js ─────────────────────────────────────
// Exterior section for BM (Cawangan Daerah Seberang Perai Tengah)
// ────────────────────────────────────────────────────────────────

export default [
  {
    id: 'bm-ext-outside-1',
    name: 'Exterior – Main Entrance Steps',
    caption: 'BM – Exterior – Main Entrance Steps',
    panorama: './images/bm/ext-outside/bm-ext-outside-1.jpg',
    thumbnail: './images/bm/ext-outside/thumbs/bm-ext-outside-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-ext-outside-2',
        position: { yaw: '45deg', pitch: '-5deg' },
        name: 'Go to Verandah & Signboard',
      },
      {
        nodeId: 'bm-ext-outside-3',
        position: { yaw: '0deg', pitch: '0deg' },
        name: 'Go to Entrance Porch',
      },
    ],
    markers: [],
    data: {
      floor: 'ext',
      tags: ['exterior', 'entrance', 'outside'],
    },
  },
  {
    id: 'bm-ext-outside-2',
    name: 'Exterior – Verandah & Signboard',
    caption: 'BM – Exterior – Verandah & Signboard',
    panorama: './images/bm/ext-outside/bm-ext-outside-2.jpg',
    thumbnail: './images/bm/ext-outside/thumbs/bm-ext-outside-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-ext-outside-1',
        position: { yaw: '225deg', pitch: '-5deg' },
        name: 'Go to Entrance Steps',
      },
      {
        nodeId: 'bm-ext-outside-3',
        position: { yaw: '275deg', pitch: '-5deg' },
        name: 'Go to Entrance Porch',
      },
    ],
    markers: [],
    data: {
      floor: 'ext',
      tags: ['exterior', 'verandah', 'signboard'],
    },
  },
  {
    id: 'bm-ext-outside-3',
    name: 'Exterior – Entrance Porch',
    caption: 'BM – Exterior – Entrance Porch',
    panorama: './images/bm/ext-outside/bm-ext-outside-3.jpg',
    thumbnail: './images/bm/ext-outside/thumbs/bm-ext-outside-3.jpg',
    defaultYaw: '65deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-ext-outside-1',
        position: { yaw: '245deg', pitch: '-10deg' },
        name: 'Go to Entrance Steps',
      },
      {
        nodeId: 'bm-ext-outside-2',
        position: { yaw: '95deg', pitch: '-5deg' },
        name: 'Go to Verandah & Signboard',
      },
      {
        nodeId: 'bm-gf-lobby-1',
        position: { yaw: '65deg', pitch: '-5deg' },
        name: 'Enter Library',
      },
    ],
    markers: [],
    data: {
      floor: 'ext',
      tags: ['exterior', 'porch', 'entrance'],
    },
  },
];
