// Floor 1 – i-Play Toy Section for GT
export default [
  {
    id: 'gt-f1-i-play-toy-1',
    name: 'Floor 1 – i-Play Toy 1',
    caption: 'GT – Floor 1 – i-Play Toy 1',
    panorama: './images/gt/f1-i-play-toy/gt-f1-i-play-toy-1.jpg',
    thumbnail: './images/gt/f1-i-play-toy/thumbs/gt-f1-i-play-toy-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'gt-f1-i-play-toy-2',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Floor 1 – i-Play Toy 2',
      }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['toy'],
    },
  },
  {
    id: 'gt-f1-i-play-toy-2',
    name: 'Floor 1 – i-Play Toy 2',
    caption: 'GT – Floor 1 – i-Play Toy 2',
    panorama: './images/gt/f1-i-play-toy/gt-f1-i-play-toy-2.jpg',
    thumbnail: './images/gt/f1-i-play-toy/thumbs/gt-f1-i-play-toy-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'gt-f1-i-play-toy-1',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Floor 1 – i-Play Toy 1',
      },
      {
        nodeId: 'gt-f1-i-play-toy-3',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Floor 1 – i-Play Toy 3',
      }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['toy'],
    },
  },
  {
    id: 'gt-f1-i-play-toy-3',
    name: 'Floor 1 – i-Play Toy 3',
    caption: 'GT – Floor 1 – i-Play Toy 3',
    panorama: './images/gt/f1-i-play-toy/gt-f1-i-play-toy-3.jpg',
    thumbnail: './images/gt/f1-i-play-toy/thumbs/gt-f1-i-play-toy-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'gt-f1-i-play-toy-2',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Floor 1 – i-Play Toy 2',
      },
      {
        nodeId: 'gt-f1-i-play-toy-4',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Floor 1 – i-Play Toy 4',
      }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['toy'],
    },
  },
  {
    id: 'gt-f1-i-play-toy-4',
    name: 'Floor 1 – i-Play Toy 4',
    caption: 'GT – Floor 1 – i-Play Toy 4',
    panorama: './images/gt/f1-i-play-toy/gt-f1-i-play-toy-4.jpg',
    thumbnail: './images/gt/f1-i-play-toy/thumbs/gt-f1-i-play-toy-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'gt-f1-i-play-toy-3',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Floor 1 – i-Play Toy 3',
      }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['toy'],
    },
  },
];