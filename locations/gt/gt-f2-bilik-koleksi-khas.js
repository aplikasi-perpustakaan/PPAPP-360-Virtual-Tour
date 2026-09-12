// Floor 2 – Bilik Koleksi Khas Section for GT
export default [
  {
    id: 'gt-f2-bilik-koleksi-khas-1',
    name: 'Floor 2 – Bilik Koleksi Khas 1',
    caption: 'GT – Floor 2 – Bilik Koleksi Khas 1',
    panorama: './images/gt/f2-bilik-koleksi-khas/gt-f2-bilik-koleksi-khas-1.jpg',
    thumbnail: './images/gt/f2-bilik-koleksi-khas/thumbs/gt-f2-bilik-koleksi-khas-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'gt-f2-bilik-koleksi-khas-2',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Floor 2 – Bilik Koleksi Khas 2',
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['koleksi'],
    },
  },
  {
    id: 'gt-f2-bilik-koleksi-khas-2',
    name: 'Floor 2 – Bilik Koleksi Khas 2',
    caption: 'GT – Floor 2 – Bilik Koleksi Khas 2',
    panorama: './images/gt/f2-bilik-koleksi-khas/gt-f2-bilik-koleksi-khas-2.jpg',
    thumbnail: './images/gt/f2-bilik-koleksi-khas/thumbs/gt-f2-bilik-koleksi-khas-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'gt-f2-bilik-koleksi-khas-1',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Floor 2 – Bilik Koleksi Khas 1',
      },
      {
        nodeId: 'gt-f2-bilik-koleksi-khas-3',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Floor 2 – Bilik Koleksi Khas 3',
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['koleksi'],
    },
  },
  {
    id: 'gt-f2-bilik-koleksi-khas-3',
    name: 'Floor 2 – Bilik Koleksi Khas 3',
    caption: 'GT – Floor 2 – Bilik Koleksi Khas 3',
    panorama: './images/gt/f2-bilik-koleksi-khas/gt-f2-bilik-koleksi-khas-3.jpg',
    thumbnail: './images/gt/f2-bilik-koleksi-khas/thumbs/gt-f2-bilik-koleksi-khas-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'gt-f2-bilik-koleksi-khas-2',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Floor 2 – Bilik Koleksi Khas 2',
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['koleksi'],
    },
  },
];