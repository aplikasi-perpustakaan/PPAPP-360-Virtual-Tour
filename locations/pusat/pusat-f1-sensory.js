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
        position: { yaw: '118.01deg', pitch: '0.75deg' },
        name: 'Go to Floor 1 - Sensory 3',
        targetYaw: '109.35deg',
        targetPitch: '2.97deg'
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
        position: { yaw: '5.76deg', pitch: '-1.98deg' },
        name: 'Go to Floor 1 - Sensory 1',
        targetYaw: '326.80deg',
        targetPitch: '-5.75deg'
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
        position: { yaw: '233.97deg', pitch: '-8.31deg' },
        name: 'Go to Floor 1 - Sensory 2',
        targetYaw: '222.84deg',
        targetPitch: '-11.60deg'
      },
      
      
      {
        nodeId: 'pusat-f1-sensory-1',
        position: { yaw: '331.83deg', pitch: '-4.10deg' },
        name: 'Go to Floor 1 - Sensory 1',
        targetYaw: '322.82deg',
        targetPitch: '-6.37deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['sensory'],
    },
  },
];
