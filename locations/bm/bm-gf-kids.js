// ── locations/bm/bm-gf-kids.js ────────────────────────────────────────
// Ground Floor Children / Kids Section for BM (Bahagian Kanak-Kanak)
// ────────────────────────────────────────────────────────────────

export default [
  {
    id: 'bm-gf-kids-1',
    name: 'Ground Floor – Kids Activity Area',
    caption: 'BM – Ground Floor – Kids Activity Area',
    panorama: './images/bm/gf-kids/bm-gf-kids-1.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-1.jpg',
    defaultYaw: '10deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-reading-2',
        position: { yaw: '262.66deg', pitch: '-4.67deg' },
        name: 'Exit to Main Stacks',
      },
      {
        nodeId: 'bm-gf-kids-2',
        position: { yaw: '10deg', pitch: '-5deg' },
        name: 'Go to Kids Play Corner',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['kids', 'children', 'activity', 'computers'],
    },
  },
  {
    id: 'bm-gf-kids-2',
    name: 'Ground Floor – Kids Play Corner',
    caption: 'BM – Ground Floor – Kids Play Corner',
    panorama: './images/bm/gf-kids/bm-gf-kids-2.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-kids-1',
        position: { yaw: '180deg', pitch: '-5deg' },
        name: 'Return to Kids Activity Area',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['kids', 'play', 'toys'],
    },
  },
  {
    id: 'bm-gf-kids-3',
    name: 'Ground Floor – Children’s Room Entrance',
    caption: 'BM – Ground Floor – Children’s Room Entrance',
    panorama: './images/bm/gf-kids/bm-gf-kids-3.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-3.jpg',
    defaultYaw: '320deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-reading-4',
        position: { yaw: '110.82deg', pitch: '-27.09deg' },
        name: 'Exit to Main Stacks',
      },
      {
        nodeId: 'bm-gf-kids-4',
        position: { yaw: '320deg', pitch: '-5deg' },
        name: 'Go to Children’s Reading Area',
      },
      {
        nodeId: 'bm-gf-kids-7',
        position: { yaw: '195.02deg', pitch: '-20.39deg' },
        name: 'Go to Children’s Room Passage',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['kids', 'entrance', 'reading'],
    },
  },
  {
    id: 'bm-gf-kids-4',
    name: 'Ground Floor – Children’s Room Central',
    caption: 'BM – Ground Floor – Children’s Room Central',
    panorama: './images/bm/gf-kids/bm-gf-kids-4.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-4.jpg',
    defaultYaw: '350deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-kids-3',
        position: { yaw: '112.07deg', pitch: '-26.14deg' },
        name: 'Go to Room Entrance',
      },
      {
        nodeId: 'bm-gf-kids-5',
        position: { yaw: '24.19deg', pitch: '-28.48deg' },
        name: 'Go to Window Bay Area',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['kids', 'reading', 'books'],
    },
  },
  {
    id: 'bm-gf-kids-5',
    name: 'Ground Floor – Children’s Room Window Bay',
    caption: 'BM – Ground Floor – Children’s Room Window Bay',
    panorama: './images/bm/gf-kids/bm-gf-kids-5.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-5.jpg',
    defaultYaw: '85deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-kids-4',
        position: { yaw: '180deg', pitch: '-5deg' },
        name: 'Go to Central Reading Area',
      },
      {
        nodeId: 'bm-gf-kids-6',
        position: { yaw: '85deg', pitch: '-5deg' },
        name: 'Go to Learning Area',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['kids', 'reading', 'windows'],
    },
  },
  {
    id: 'bm-gf-kids-6',
    name: 'Ground Floor – Children’s Room Learning Area',
    caption: 'BM – Ground Floor – Children’s Room Learning Area',
    panorama: './images/bm/gf-kids/bm-gf-kids-6.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-6.jpg',
    defaultYaw: '90deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-kids-5',
        position: { yaw: '270deg', pitch: '-5deg' },
        name: 'Go to Window Bay',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['kids', 'learning', 'charts'],
    },
  },
  {
    id: 'bm-gf-kids-7',
    name: 'Ground Floor – Children’s Room Passage',
    caption: 'BM – Ground Floor – Children’s Room Passage',
    panorama: './images/bm/gf-kids/bm-gf-kids-7.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-7.jpg',
    defaultYaw: '10deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-kids-3',
        position: { yaw: '12.44deg', pitch: '-28.56deg' },
        name: 'Go to Room Entrance',
      },
      {
        nodeId: 'bm-gf-kids-8',
        position: { yaw: '189.10deg', pitch: '-23.66deg' },
        name: 'Go to Room Corner',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['kids', 'passage', 'table'],
    },
  },
  {
    id: 'bm-gf-kids-8',
    name: 'Ground Floor – Children’s Room Corner',
    caption: 'BM – Ground Floor – Children’s Room Corner',
    panorama: './images/bm/gf-kids/bm-gf-kids-8.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-8.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-gf-kids-7',
        position: { yaw: '12.21deg', pitch: '-24.09deg' },
        name: 'Return to Passage',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['kids', 'corner', 'books'],
    },
  },
];
