export default [
  {
    id: 'pusat-f2-stairs-1',
    name: 'Floor 2 - Stairs 1',
    caption: 'PUSAT - Floor 2 - Stairs 1',
    panorama: './images/pusat/f2-stairs/pusat-f2-stairs-1.jpg',
    thumbnail: './images/pusat/f2-stairs/thumbs/pusat-f2-stairs-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-stairs-2',
        position: {
          yaw: '358.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Floor 2 - Stairs 2'
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'stairs'
      ]
    }
  },
  {
    id: 'pusat-f2-stairs-2',
    name: 'Floor 2 - Stairs 2',
    caption: 'PUSAT - Floor 2 - Stairs 2',
    panorama: './images/pusat/f2-stairs/pusat-f2-stairs-2.jpg',
    thumbnail: './images/pusat/f2-stairs/thumbs/pusat-f2-stairs-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-stairs-1',
        position: {
          yaw: '178.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Floor 2 - Stairs 1'
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'stairs'
      ]
    }
  }
];
