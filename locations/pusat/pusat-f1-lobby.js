export default [
  {
    id: 'pusat-f1-lobby-1',
    name: 'Floor 1 - Lobby 1',
    caption: 'PUSAT - Floor 1 - Lobby 1',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-1.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f1-lobby-2',
        position: { yaw: '359.49deg', pitch: '-6.85deg' },
        name: 'Go to Floor 1 - Lobby 2',
        targetYaw: '356.05deg',
        targetPitch: '-4.83deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-2',
    name: 'Floor 1 - Lobby 2',
    caption: 'PUSAT - Floor 1 - Lobby 2',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-2.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-3', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 3' },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-3',
    name: 'Floor 1 - Lobby 3',
    caption: 'PUSAT - Floor 1 - Lobby 3',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-3.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-2', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-4', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 4' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-4',
    name: 'Floor 1 - Lobby 4',
    caption: 'PUSAT - Floor 1 - Lobby 4',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-4.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-3', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-5', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 5' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-5',
    name: 'Floor 1 - Lobby 5',
    caption: 'PUSAT - Floor 1 - Lobby 5',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-5.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-5.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-4', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-6', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 6' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-6',
    name: 'Floor 1 - Lobby 6',
    caption: 'PUSAT - Floor 1 - Lobby 6',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-6.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-6.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-5', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-7', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 7' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-7',
    name: 'Floor 1 - Lobby 7',
    caption: 'PUSAT - Floor 1 - Lobby 7',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-7.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-7.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-6', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-8', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 8' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-8',
    name: 'Floor 1 - Lobby 8',
    caption: 'PUSAT - Floor 1 - Lobby 8',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-8.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-8.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-7', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-9', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 9' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-9',
    name: 'Floor 1 - Lobby 9',
    caption: 'PUSAT - Floor 1 - Lobby 9',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-9.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-9.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-8', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-10', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 10' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-10',
    name: 'Floor 1 - Lobby 10',
    caption: 'PUSAT - Floor 1 - Lobby 10',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-10.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-10.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-9', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-11', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 11' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-11',
    name: 'Floor 1 - Lobby 11',
    caption: 'PUSAT - Floor 1 - Lobby 11',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-11.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-11.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-10', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-12', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 12' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-12',
    name: 'Floor 1 - Lobby 12',
    caption: 'PUSAT - Floor 1 - Lobby 12',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-12.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-12.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-11', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-13', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 13' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-13',
    name: 'Floor 1 - Lobby 13',
    caption: 'PUSAT - Floor 1 - Lobby 13',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-13.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-13.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-12', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-14', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 14' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-14',
    name: 'Floor 1 - Lobby 14',
    caption: 'PUSAT - Floor 1 - Lobby 14',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-14.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-14.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-13', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-15', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 15' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-15',
    name: 'Floor 1 - Lobby 15',
    caption: 'PUSAT - Floor 1 - Lobby 15',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-15.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-15.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-14', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-16', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 16' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-16',
    name: 'Floor 1 - Lobby 16',
    caption: 'PUSAT - Floor 1 - Lobby 16',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-16.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-16.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-15', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-17', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 17' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-17',
    name: 'Floor 1 - Lobby 17',
    caption: 'PUSAT - Floor 1 - Lobby 17',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-17.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-17.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-16', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-18', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 18' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-18',
    name: 'Floor 1 - Lobby 18',
    caption: 'PUSAT - Floor 1 - Lobby 18',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-18.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-18.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-17', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-19', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 19' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-19',
    name: 'Floor 1 - Lobby 19',
    caption: 'PUSAT - Floor 1 - Lobby 19',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-19.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-19.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-18', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-20', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 20' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-20',
    name: 'Floor 1 - Lobby 20',
    caption: 'PUSAT - Floor 1 - Lobby 20',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-20.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-20.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-19', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-21', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 21' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-21',
    name: 'Floor 1 - Lobby 21',
    caption: 'PUSAT - Floor 1 - Lobby 21',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-21.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-21.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-20', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-22', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 22' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-22',
    name: 'Floor 1 - Lobby 22',
    caption: 'PUSAT - Floor 1 - Lobby 22',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-22.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-22.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-21', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-23', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 23' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-23',
    name: 'Floor 1 - Lobby 23',
    caption: 'PUSAT - Floor 1 - Lobby 23',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-23.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-23.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-22', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-24', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 24' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-24',
    name: 'Floor 1 - Lobby 24',
    caption: 'PUSAT - Floor 1 - Lobby 24',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-24.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-24.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-23', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-25', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 25' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-25',
    name: 'Floor 1 - Lobby 25',
    caption: 'PUSAT - Floor 1 - Lobby 25',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-25.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-25.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-24', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-26', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 26' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-26',
    name: 'Floor 1 - Lobby 26',
    caption: 'PUSAT - Floor 1 - Lobby 26',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-26.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-26.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-25', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-27', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 27' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-27',
    name: 'Floor 1 - Lobby 27',
    caption: 'PUSAT - Floor 1 - Lobby 27',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-27.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-27.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-26', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-28', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 28' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-28',
    name: 'Floor 1 - Lobby 28',
    caption: 'PUSAT - Floor 1 - Lobby 28',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-28.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-28.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-27', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-lobby-29', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 29' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-29',
    name: 'Floor 1 - Lobby 29',
    caption: 'PUSAT - Floor 1 - Lobby 29',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-29.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-29.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-lobby-28', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
];
