export default [
  {
    id: 'pusat-f2-intersect-room-1',
    name: 'Floor 2 - Intersect Room 1',
    caption: 'PUSAT - Floor 2 - Intersect Room 1',
    panorama: './images/pusat/f2-intersect-room/pusat-f2-intersect-room-1.jpg',
    thumbnail: './images/pusat/f2-intersect-room/thumbs/pusat-f2-intersect-room-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-intersect-room-2',
        position: {
          yaw: '358.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Floor 2 - Intersect Room 2'
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'intersect room'
      ]
    }
  },
  {
    id: 'pusat-f2-intersect-room-2',
    name: 'Floor 2 - Intersect Room 2',
    caption: 'PUSAT - Floor 2 - Intersect Room 2',
    panorama: './images/pusat/f2-intersect-room/pusat-f2-intersect-room-2.jpg',
    thumbnail: './images/pusat/f2-intersect-room/thumbs/pusat-f2-intersect-room-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-intersect-room-3',
        position: {
          yaw: '358.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Floor 2 - Intersect Room 3'
      },
      {
        nodeId: 'pusat-f2-intersect-room-1',
        position: {
          yaw: '178.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Floor 2 - Intersect Room 1'
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'intersect room'
      ]
    }
  },
  {
    id: 'pusat-f2-intersect-room-3',
    name: 'Floor 2 - Intersect Room 3',
    caption: 'PUSAT - Floor 2 - Intersect Room 3',
    panorama: './images/pusat/f2-intersect-room/pusat-f2-intersect-room-3.jpg',
    thumbnail: './images/pusat/f2-intersect-room/thumbs/pusat-f2-intersect-room-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-intersect-room-2',
        position: {
          yaw: '178.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Floor 2 - Intersect Room 2'
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'intersect room'
      ]
    }
  }
];
