export default [
  {
    id: 'pusat-f1-e-sports-1',
    name: 'Floor 1 - E-Sports 1',
    caption: 'PUSAT - Floor 1 - E-Sports 1',
    panorama: './images/pusat/f1-e-sports/pusat-f1-e-sports-1.jpg',
    thumbnail: './images/pusat/f1-e-sports/thumbs/pusat-f1-e-sports-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      { nodeId: 'pusat-f1-e-sports-2', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to E-Sports 2' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['e-sports'],
    },
  },
  {
    id: 'pusat-f1-e-sports-2',
    name: 'Floor 1 - E-Sports 2',
    caption: 'PUSAT - Floor 1 - E-Sports 2',
    panorama: './images/pusat/f1-e-sports/pusat-f1-e-sports-2.jpg',
    thumbnail: './images/pusat/f1-e-sports/thumbs/pusat-f1-e-sports-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      { nodeId: 'pusat-f1-e-sports-1', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-e-sports-3', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to E-Sports 3' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['e-sports'],
    },
  },
  {
    id: 'pusat-f1-e-sports-3',
    name: 'Floor 1 - E-Sports 3',
    caption: 'PUSAT - Floor 1 - E-Sports 3',
    panorama: './images/pusat/f1-e-sports/pusat-f1-e-sports-3.jpg',
    thumbnail: './images/pusat/f1-e-sports/thumbs/pusat-f1-e-sports-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      { nodeId: 'pusat-f1-e-sports-2', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['e-sports'],
    },
  },
];
