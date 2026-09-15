export default [
  {
    id: 'pusat-f1-i-play-toys-1',
    name: 'Floor 1 - I Play Toys 1',
    caption: 'PUSAT - Floor 1 - I Play Toys 1',
    panorama: './images/pusat/f1-i-play-toys/pusat-f1-i-play-toys-1.jpg',
    thumbnail: './images/pusat/f1-i-play-toys/thumbs/pusat-f1-i-play-toys-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-i-play-toys-2', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to I Play Toys 2' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['i-play-toys'],
    },
  },
  {
    id: 'pusat-f1-i-play-toys-2',
    name: 'Floor 1 - I Play Toys 2',
    caption: 'PUSAT - Floor 1 - I Play Toys 2',
    panorama: './images/pusat/f1-i-play-toys/pusat-f1-i-play-toys-2.jpg',
    thumbnail: './images/pusat/f1-i-play-toys/thumbs/pusat-f1-i-play-toys-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-i-play-toys-1', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-i-play-toys-3', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to I Play Toys 3' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['i-play-toys'],
    },
  },
  {
    id: 'pusat-f1-i-play-toys-3',
    name: 'Floor 1 - I Play Toys 3',
    caption: 'PUSAT - Floor 1 - I Play Toys 3',
    panorama: './images/pusat/f1-i-play-toys/pusat-f1-i-play-toys-3.jpg',
    thumbnail: './images/pusat/f1-i-play-toys/thumbs/pusat-f1-i-play-toys-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-i-play-toys-2', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-i-play-toys-4', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to I Play Toys 4' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['i-play-toys'],
    },
  },
  {
    id: 'pusat-f1-i-play-toys-4',
    name: 'Floor 1 - I Play Toys 4',
    caption: 'PUSAT - Floor 1 - I Play Toys 4',
    panorama: './images/pusat/f1-i-play-toys/pusat-f1-i-play-toys-4.jpg',
    thumbnail: './images/pusat/f1-i-play-toys/thumbs/pusat-f1-i-play-toys-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-i-play-toys-3', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      { nodeId: 'pusat-f1-i-play-toys-5', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to I Play Toys 5' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['i-play-toys'],
    },
  },
  {
    id: 'pusat-f1-i-play-toys-5',
    name: 'Floor 1 - I Play Toys 5',
    caption: 'PUSAT - Floor 1 - I Play Toys 5',
    panorama: './images/pusat/f1-i-play-toys/pusat-f1-i-play-toys-5.jpg',
    thumbnail: './images/pusat/f1-i-play-toys/thumbs/pusat-f1-i-play-toys-5.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'pusat-f1-i-play-toys-4', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['i-play-toys'],
    },
  },
];
