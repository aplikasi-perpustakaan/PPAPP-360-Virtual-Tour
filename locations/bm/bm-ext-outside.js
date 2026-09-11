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
        position: { yaw: '100.02deg', pitch: '-11.85deg' },
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
        position: { yaw: '286.87deg', pitch: '-12.68deg' },
        name: 'Go to Entrance Steps',
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
        position: { yaw: '186.93deg', pitch: '-33.47deg' },
        name: 'Go to Entrance Steps',
      },
      {
        nodeId: 'bm-gf-lobby-1',
        position: { yaw: '94.01deg', pitch: '-16.18deg' },
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
