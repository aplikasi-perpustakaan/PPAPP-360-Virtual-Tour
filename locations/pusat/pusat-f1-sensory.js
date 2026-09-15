export default [
  {
    id: 'pusat-f1-sensory-1',
    name: 'Floor 1 - Sensory 1',
    caption: 'PUSAT - Floor 1 - Sensory 1',
    panorama: './images/pusat/f1-sensory/pusat-f1-sensory-1.jpg',
    thumbnail: './images/pusat/f1-sensory/thumbs/pusat-f1-sensory-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-sensory-2', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Sensory 2' }
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
    links: [
      { nodeId: 'pusat-f1-sensory-1', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-sensory-3', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Sensory 3' }
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
    links: [
      { nodeId: 'pusat-f1-sensory-2', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['sensory'],
    },
  },
];
