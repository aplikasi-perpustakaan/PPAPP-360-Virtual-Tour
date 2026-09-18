export default [
  {
    id: 'pusat-f2-training-room-1',
    name: 'Floor 2 - Training Room 1',
    caption: 'PUSAT - Floor 2 - Training Room 1',
    panorama: './images/pusat/f2-training-room/pusat-f2-training-room-1.jpg',
    thumbnail: './images/pusat/f2-training-room/thumbs/pusat-f2-training-room-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-training-room-2',
        position: { yaw: '236.59deg', pitch: '0.83deg' },
        name: 'Go to Floor 2 - Training Room 2',
        targetYaw: '252.07deg',
        targetPitch: '1.42deg'
      },
      
      
      {
        nodeId: 'pusat-f2-intersect-room-3',
        position: { yaw: '59.47deg', pitch: '-7.69deg' },
        name: 'Go to Floor 2 - Intersect Room 3',
        targetYaw: '141.94deg',
        targetPitch: '-2.60deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'training room'
      ]
    }
  },
  {
    id: 'pusat-f2-training-room-2',
    name: 'Floor 2 - Training Room 2',
    caption: 'PUSAT - Floor 2 - Training Room 2',
    panorama: './images/pusat/f2-training-room/pusat-f2-training-room-2.jpg',
    thumbnail: './images/pusat/f2-training-room/thumbs/pusat-f2-training-room-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-training-room-3',
        position: { yaw: '164.64deg', pitch: '-4.46deg' },
        name: 'Go to Floor 2 - Training Room 3',
        targetYaw: '138.87deg',
        targetPitch: '4.55deg'
      },
      
      
      {
        nodeId: 'pusat-f2-training-room-1',
        position: { yaw: '73.66deg', pitch: '-4.23deg' },
        name: 'Go to Floor 2 - Training Room 1',
        targetYaw: '56.36deg',
        targetPitch: '-10.53deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'training room'
      ]
    }
  },
  {
    id: 'pusat-f2-training-room-3',
    name: 'Floor 2 - Training Room 3',
    caption: 'PUSAT - Floor 2 - Training Room 3',
    panorama: './images/pusat/f2-training-room/pusat-f2-training-room-3.jpg',
    thumbnail: './images/pusat/f2-training-room/thumbs/pusat-f2-training-room-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-training-room-2',
        position: {
          yaw: '178.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Floor 2 - Training Room 2'
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'training room'
      ]
    }
  }
];
