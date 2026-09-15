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
      { nodeId: 'pusat-f1-castle-2', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Castle 2' }
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
      { nodeId: 'pusat-f1-castle-1', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-castle-3', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Castle 3' }
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
      { nodeId: 'pusat-f1-castle-2', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-castle-4', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Castle 4' }
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
      { nodeId: 'pusat-f1-castle-3', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['castle'],
    },
  },
];
