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
      {
        nodeId: 'pusat-f1-e-sports-2',
        position: { yaw: '322.38deg', pitch: '-2.00deg' },
        name: 'Go to Floor 1 - E-Sports 2',
        targetYaw: '330.35deg',
        targetPitch: '1.44deg'
      },
      
      
      {
        nodeId: 'pusat-f1-reading-9',
        position: { yaw: '92.68deg', pitch: '-0.67deg' },
        name: 'Go to Floor 1 - Reading Area 9',
        targetYaw: '60.13deg',
        targetPitch: '-0.83deg'
      },
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
      {
        nodeId: 'pusat-f1-e-sports-1',
        position: { yaw: '147.73deg', pitch: '-1.17deg' },
        name: 'Go to Floor 1 - E-Sports 1',
        targetYaw: '145.97deg',
        targetPitch: '-2.08deg'
      },
      
      
      {
        nodeId: 'pusat-f1-e-sports-3',
        position: { yaw: '326.71deg', pitch: '-0.06deg' },
        name: 'Go to Floor 1 - E-Sports 3',
        targetYaw: '331.16deg',
        targetPitch: '-1.01deg'
      },
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
