// ── locations/bm/bm-gf-reading.js ─────────────────────────────────────
// Ground Floor Reading / Book Stacks section for BM
// ────────────────────────────────────────────────────────────────

export default [
  {
    id: 'bm-gf-reading-1',
    name: 'Ground Floor – Book Stacks & Study Table 1',
    caption: 'BM – Ground Floor – Book Stacks & Study Table 1',
    panorama: './images/bm/gf-reading/bm-gf-reading-1.jpg',
    thumbnail: './images/bm/gf-reading/thumbs/bm-gf-reading-1.jpg',
    defaultYaw: '20deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-lobby-3',
        position: { yaw: '190deg', pitch: '-5deg' },
        name: 'Go to Reading Lounge',
      },
      {
        nodeId: 'bm-gf-reading-2',
        position: { yaw: '20deg', pitch: '-5deg' },
        name: 'Go to Study Table 2',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['reading', 'books', 'stacks', 'study'],
    },
  },
  {
    id: 'bm-gf-reading-2',
    name: 'Ground Floor – Book Stacks & Study Table 2',
    caption: 'BM – Ground Floor – Book Stacks & Study Table 2',
    panorama: './images/bm/gf-reading/bm-gf-reading-2.jpg',
    thumbnail: './images/bm/gf-reading/thumbs/bm-gf-reading-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-reading-1',
        position: { yaw: '180deg', pitch: '-5deg' },
        name: 'Go to Study Table 1',
      },
      {
        nodeId: 'bm-gf-reading-3',
        position: { yaw: '276.84deg', pitch: '-32.85deg' },
        name: 'Go to Reference Collection',
      },
      {
        nodeId: 'bm-gf-kids-1',
        position: { yaw: '85deg', pitch: '-5deg' },
        name: 'Enter Kids Activity Area',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['reading', 'books', 'stacks', 'study'],
    },
  },
  {
    id: 'bm-gf-reading-3',
    name: 'Ground Floor – Reference Collection & Study Area',
    caption: 'BM – Ground Floor – Reference Collection & Study Area',
    panorama: './images/bm/gf-reading/bm-gf-reading-3.jpg',
    thumbnail: './images/bm/gf-reading/thumbs/bm-gf-reading-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-reading-2',
        position: { yaw: '98.22deg', pitch: '-25.01deg' },
        name: 'Go to Book Stacks & Study Table 2',
      },
      {
        nodeId: 'bm-gf-reading-4',
        position: { yaw: '188.61deg', pitch: '-17.44deg' },
        name: 'Go to Book Stacks Junction',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['reading', 'reference', 'books', 'stacks'],
    },
  },
  {
    id: 'bm-gf-reading-4',
    name: 'Ground Floor – Book Stacks Junction',
    caption: 'BM – Ground Floor – Book Stacks Junction',
    panorama: './images/bm/gf-reading/bm-gf-reading-4.jpg',
    thumbnail: './images/bm/gf-reading/thumbs/bm-gf-reading-4.jpg',
    defaultYaw: '280deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-reading-3',
        position: { yaw: '8.88deg', pitch: '-14.49deg' },
        name: 'Go to Reference Collection',
      },
      {
        nodeId: 'bm-gf-reading-5',
        position: { yaw: '189.36deg', pitch: '-29.89deg' },
        name: 'Go to Book Return Area',
      },
      {
        nodeId: 'bm-gf-kids-3',
        position: { yaw: '280deg', pitch: '-5deg' },
        name: 'Enter Children’s Reading Room',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['reading', 'books', 'stacks', 'junction'],
    },
  },
  {
    id: 'bm-gf-reading-5',
    name: 'Ground Floor – Book Stacks & Book Return Area',
    caption: 'BM – Ground Floor – Book Stacks & Book Return Area',
    panorama: './images/bm/gf-reading/bm-gf-reading-5.jpg',
    thumbnail: './images/bm/gf-reading/thumbs/bm-gf-reading-5.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-reading-4',
        position: { yaw: '3.59deg', pitch: '-20.86deg' },
        name: 'Go to Book Stacks Junction',
      },
      {
        nodeId: 'bm-gf-lobby-2',
        position: { yaw: '150.63deg', pitch: '-32.40deg' },
        name: 'Return to Main Lobby',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['reading', 'books', 'stacks', 'return'],
    },
  },
];
