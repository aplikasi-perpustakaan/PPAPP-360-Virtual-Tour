export default [
  {
    id: 'pusat-elevator-1',
    name: 'Elevator 1',
    caption: 'PUSAT - Elevator 1',
    panorama: './images/pusat/elevator/pusat-elevator-1.jpg',
    thumbnail: './images/pusat/elevator/thumbs/pusat-elevator-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-elevator-2',
        position: {
          yaw: '358.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Elevator 2'
      }
    ],
    markers: [],
    data: {
      floor: 'any',
      tags: [
        'elevator'
      ]
    }
  },
  {
    id: 'pusat-elevator-2',
    name: 'Elevator 2',
    caption: 'PUSAT - Elevator 2',
    panorama: './images/pusat/elevator/pusat-elevator-2.jpg',
    thumbnail: './images/pusat/elevator/thumbs/pusat-elevator-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-elevator-1',
        position: {
          yaw: '178.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Elevator 1'
      }
    ],
    markers: [],
    data: {
      floor: 'any',
      tags: [
        'elevator'
      ]
    }
  }
];
