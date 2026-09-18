// Stairs Section for GT
export default [
  {
    id: 'gt-stairs-1',
    name: 'Stairs - 1',
    caption: 'GT - Stairs - 1',
    panorama: './images/gt/stairs/gt-stairs-1.jpg',
    thumbnail: './images/gt/stairs/thumbs/gt-stairs-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-stairs-2',
        position: { yaw: '77.91deg', pitch: '4.60deg' },
        name: 'Go to Stairs - 2'
      },
      {
        nodeId: 'gt-f1-main-area-4',
        position: { yaw: '211.22deg', pitch: '-10deg' },
        name: 'Go to Level 1 - Main Area 4'
      },
    ],
    markers: [],
    data: {
      floor: 'stairs',
      tags: ['stairs'],
    },
  },
  {
    id: 'gt-stairs-2',
    name: 'Stairs - 2',
    caption: 'GT - Stairs - 2',
    panorama: './images/gt/stairs/gt-stairs-2.jpg',
    thumbnail: './images/gt/stairs/thumbs/gt-stairs-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-stairs-1',
        position: { yaw: '257.91deg', pitch: '-10deg' },
        name: 'Go to Stairs - 1'
      },
      
      {
        nodeId: 'gt-stairs-3',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Stairs - 3',
      }
    ],
    markers: [],
    data: {
      floor: 'stairs',
      tags: ['stairs'],
    },
  },
  {
    id: 'gt-stairs-3',
    name: 'Stairs - 3',
    caption: 'GT - Stairs - 3',
    panorama: './images/gt/stairs/gt-stairs-3.jpg',
    thumbnail: './images/gt/stairs/thumbs/gt-stairs-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-stairs-2',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Stairs - 2',
      },
      {
        nodeId: 'gt-f2-main-area-1',
        position: { yaw: '4.70deg', pitch: '7.94deg' },
        name: 'Go to Level 2 - Main Area 1'
      },
    ],
    markers: [],
    data: {
      floor: 'stairs',
      tags: ['stairs'],
    },
  },
];