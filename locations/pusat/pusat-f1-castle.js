export default [
  {
    id: 'pusat-f1-castle-1',
    name: 'Floor 1 - Castle 1',
    caption: 'PUSAT - Floor 1 - Castle 1',
    panorama: './images/pusat/f1-castle/pusat-f1-castle-1.jpg',
    thumbnail: './images/pusat/f1-castle/thumbs/pusat-f1-castle-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f1-castle-2',
        position: { yaw: '265.68deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Castle 2'
      },
      {
        nodeId: 'pusat-f1-castle-3',
        position: { yaw: '213.02deg', pitch: '-6.19deg' },
        name: 'Go to Floor 1 - Castle 3'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['castle'],
    },
  },
  {
    id: 'pusat-f1-castle-2',
    name: 'Floor 1 - Castle 2',
    caption: 'PUSAT - Floor 1 - Castle 2',
    panorama: './images/pusat/f1-castle/pusat-f1-castle-2.jpg',
    thumbnail: './images/pusat/f1-castle/thumbs/pusat-f1-castle-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f1-castle-1',
        position: { yaw: '85.68deg', pitch: '-8.11deg' },
        name: 'Go to Floor 1 - Castle 1'
      },
      
      {
        nodeId: 'pusat-f1-castle-3',
        position: { yaw: '135.76deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Castle 3'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['castle'],
    },
  },
  {
    id: 'pusat-f1-castle-3',
    name: 'Floor 1 - Castle 3',
    caption: 'PUSAT - Floor 1 - Castle 3',
    panorama: './images/pusat/f1-castle/pusat-f1-castle-3.jpg',
    thumbnail: './images/pusat/f1-castle/thumbs/pusat-f1-castle-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f1-castle-2',
        position: { yaw: '315.76deg', pitch: '-8.67deg' },
        name: 'Go to Floor 1 - Castle 2'
      },
      
      {
        nodeId: 'pusat-f1-castle-4',
        position: { yaw: '242.03deg', pitch: '-8.80deg' },
        name: 'Go to Floor 1 - Castle 4'
      },
      {
        nodeId: 'pusat-f1-castle-1',
        position: { yaw: '33.02deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Castle 1'
      },
      {
        nodeId: 'pusat-f1-kids-15',
        position: { yaw: '133.70deg', pitch: '-8.22deg' },
        name: 'Go to Floor 1 - Kids 15'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['castle'],
    },
  },
  {
    id: 'pusat-f1-castle-4',
    name: 'Floor 1 - Castle 4',
    caption: 'PUSAT - Floor 1 - Castle 4',
    panorama: './images/pusat/f1-castle/pusat-f1-castle-4.jpg',
    thumbnail: './images/pusat/f1-castle/thumbs/pusat-f1-castle-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f1-castle-3',
        position: { yaw: '62.03deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Castle 3'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['castle'],
    },
  },
];
