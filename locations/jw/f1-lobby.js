export default [
  {
    id: 'jw-f1-lobby-1',
    name: 'Floor 1 – Lobby 1',
    caption: 'JW – Floor 1 – Lobby 1',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-1.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-gf-main-area',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go to Ground Floor Main Area',
        },
        {
          nodeId: 'jw-f1-lobby-2',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 2',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-2',
    name: 'Floor 1 – Lobby 2',
    caption: 'JW – Floor 1 – Lobby 2',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-2.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-3',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 3',
        },
        {
          nodeId: 'jw-f1-lobby-1',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 1',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-3',
    name: 'Floor 1 – Lobby 3',
    caption: 'JW – Floor 1 – Lobby 3',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-3.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-4',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 4',
        },
        {
          nodeId: 'jw-f1-lobby-2',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 2',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-4',
    name: 'Floor 1 – Lobby 4',
    caption: 'JW – Floor 1 – Lobby 4',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-4.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-5',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 5',
        },
        {
          nodeId: 'jw-f1-lobby-3',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 3',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-5',
    name: 'Floor 1 – Lobby 5',
    caption: 'JW – Floor 1 – Lobby 5',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-5.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-5.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-6',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 6',
        },
        {
          nodeId: 'jw-f1-lobby-4',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 4',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-6',
    name: 'Floor 1 – Lobby 6',
    caption: 'JW – Floor 1 – Lobby 6',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-6.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-6.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-7',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 7',
        },
        {
          nodeId: 'jw-f1-lobby-5',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 5',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-7',
    name: 'Floor 1 – Lobby 7',
    caption: 'JW – Floor 1 – Lobby 7',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-7.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-7.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-8',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 8',
        },
        {
          nodeId: 'jw-f1-lobby-6',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 6',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-8',
    name: 'Floor 1 – Lobby 8',
    caption: 'JW – Floor 1 – Lobby 8',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-8.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-8.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-9',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 9',
        },
        {
          nodeId: 'jw-f1-lobby-7',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 7',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-9',
    name: 'Floor 1 – Lobby 9',
    caption: 'JW – Floor 1 – Lobby 9',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-9.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-9.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-10',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 10',
        },
        {
          nodeId: 'jw-f1-lobby-8',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 8',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-10',
    name: 'Floor 1 – Lobby 10',
    caption: 'JW – Floor 1 – Lobby 10',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-10.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-10.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-11',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 11',
        },
        {
          nodeId: 'jw-f1-lobby-9',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 9',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-11',
    name: 'Floor 1 – Lobby 11',
    caption: 'JW – Floor 1 – Lobby 11',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-11.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-11.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-12',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 12',
        },
        {
          nodeId: 'jw-f1-lobby-10',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 10',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-12',
    name: 'Floor 1 – Lobby 12',
    caption: 'JW – Floor 1 – Lobby 12',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-12.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-12.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-13',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 13',
        },
        {
          nodeId: 'jw-f1-lobby-11',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 11',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-13',
    name: 'Floor 1 – Lobby 13',
    caption: 'JW – Floor 1 – Lobby 13',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-13.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-13.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-14',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Go to Lobby 14',
        },
        {
          nodeId: 'jw-f1-lobby-12',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 12',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'jw-f1-lobby-14',
    name: 'Floor 1 – Lobby 14',
    caption: 'JW – Floor 1 – Lobby 14',
    panorama: './images/jw/f1-lobby/jw-f1-lobby-14.jpg',
    thumbnail: './images/jw/f1-lobby/jw-f1-lobby-14.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f1-lobby-13',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Lobby 13',
        },
        {
          nodeId: 'jw-f1-kids-1',
          position: { yaw: '90deg', pitch: '0deg' },
          name: 'Go to Kids Area',
        }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
];
