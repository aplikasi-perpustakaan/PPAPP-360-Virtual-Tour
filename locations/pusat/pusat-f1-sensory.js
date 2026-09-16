export default [
  {
    id: 'pusat-f1-sensory-1',
    name: 'Floor 1 - Sensory 1',
    caption: 'PUSAT - Floor 1 - Sensory 1',
    panorama: './images/pusat/f1-sensory/pusat-f1-sensory-1.jpg',
    thumbnail: './images/pusat/f1-sensory/thumbs/pusat-f1-sensory-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-sensory-2',
        position: { yaw: '169.31deg', pitch: '-6.63deg' },
        name: 'Go to Floor 1 - Sensory 2'
      },
      
      {
        nodeId: 'pusat-f1-kids-6',
        position: { yaw: '325.49deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Kids 6'
      },
      {
        nodeId: 'pusat-f1-sensory-3',
        position: { yaw: '115.47deg', pitch: '-0.11deg' },
        name: 'Go to Floor 1 - Sensory 3'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['sensory'],
    },
  },
  {
    id: 'pusat-f1-sensory-2',
    name: 'Floor 1 - Sensory 2',
    caption: 'PUSAT - Floor 1 - Sensory 2',
    panorama: './images/pusat/f1-sensory/pusat-f1-sensory-2.jpg',
    thumbnail: './images/pusat/f1-sensory/thumbs/pusat-f1-sensory-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-sensory-1',
        position: { yaw: '349.31deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Sensory 1'
      },
      
      {
        nodeId: 'pusat-f1-sensory-3',
        position: { yaw: '53.02deg', pitch: '-3.96deg' },
        name: 'Go to Floor 1 - Sensory 3'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['sensory'],
    },
  },
  {
    id: 'pusat-f1-sensory-3',
    name: 'Floor 1 - Sensory 3',
    caption: 'PUSAT - Floor 1 - Sensory 3',
    panorama: './images/pusat/f1-sensory/pusat-f1-sensory-3.jpg',
    thumbnail: './images/pusat/f1-sensory/thumbs/pusat-f1-sensory-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-sensory-2',
        position: { yaw: '233.02deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Sensory 2'
      },
      {
        nodeId: 'pusat-f1-sensory-1',
        position: { yaw: '295.47deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Sensory 1'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['sensory'],
    },
  },
];
