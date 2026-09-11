// ── locations/bm/bm-gf-lobby.js ───────────────────────────────────────
// Ground Floor Lobby section for BM (Cawangan Daerah Seberang Perai Tengah)
// ────────────────────────────────────────────────────────────────

export default [
  {
    id: 'bm-gf-lobby-1',
    name: 'Ground Floor – Entrance & Service Counter',
    caption: 'BM – Ground Floor – Entrance & Service Counter',
    panorama: './images/bm/gf-lobby/bm-gf-lobby-1.jpg',
    thumbnail: './images/bm/gf-lobby/thumbs/bm-gf-lobby-1.jpg',
    defaultYaw: '15deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-ext-outside-3',
        position: { yaw: '280deg', pitch: '-5deg' },
        name: 'Exit to Porch',
      },
      {
        nodeId: 'bm-gf-lobby-2',
        position: { yaw: '38.18deg', pitch: '-27.50deg' },
        name: 'Go to Main Lobby & Aisle',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['lobby', 'counter', 'entrance'],
    },
  },
  {
    id: 'bm-gf-lobby-2',
    name: 'Ground Floor – Main Lobby & Aisle',
    caption: 'BM – Ground Floor – Main Lobby & Aisle',
    panorama: './images/bm/gf-lobby/bm-gf-lobby-2.jpg',
    thumbnail: './images/bm/gf-lobby/thumbs/bm-gf-lobby-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-lobby-1',
        position: { yaw: '215.96deg', pitch: '-33.69deg' },
        name: 'Go to Service Counter',
      },
      {
        nodeId: 'bm-gf-lobby-3',
        position: { yaw: '17.53deg', pitch: '-24.20deg' },
        name: 'Go to Reading Lounge',
      },
      {
        nodeId: 'bm-gf-reading-5',
        position: { yaw: '335deg', pitch: '-5deg' },
        name: 'Go to Book Stacks',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['lobby', 'hall', 'aisle'],
    },
  },
  {
    id: 'bm-gf-lobby-3',
    name: 'Ground Floor – Reading Lounge',
    caption: 'BM – Ground Floor – Reading Lounge',
    panorama: './images/bm/gf-lobby/bm-gf-lobby-3.jpg',
    thumbnail: './images/bm/gf-lobby/thumbs/bm-gf-lobby-3.jpg',
    defaultYaw: '340deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-lobby-2',
        position: { yaw: '231.82deg', pitch: '-36.66deg' },
        name: 'Go to Main Lobby',
      },
      {
        nodeId: 'bm-gf-reading-1',
        position: { yaw: '340deg', pitch: '-5deg' },
        name: 'Go to Book Stacks & Study Area',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['lobby', 'lounge', 'seating'],
    },
  },
];
