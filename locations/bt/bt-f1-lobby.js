// F1 Lobby Section for BT

export default [
  {

    id: 'bt-f1-lobby-1',
    name: 'Floor 1 – Lobby 1',
    caption: 'BT – Floor 1 – Lobby 1',
    panorama: './images/bt/f1-lobby/bt-f1-lobby-1.jpg',
    thumbnail: './images/bt/f1-lobby/thumbs/bt-f1-lobby-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-ext-outside-5',
        position: { yaw: '186.18deg', pitch: '-7.78deg' },
        name: 'Exit to Outside 5',
      },
      {
        nodeId: 'bt-f1-lobby-3',
        position: { yaw: '95.59deg', pitch: '-3.24deg' },
        name: 'Go to Lobby 3',
      },
      {
        nodeId: 'bt-f1-lobby-2',
        position: { yaw: '7.08deg', pitch: '-7.24deg' },
        name: 'Go to Lobby 2',
      },
    ],
    markers: [
    ],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },

  },
  {

    id: 'bt-f1-lobby-2',
    name: 'Floor 1 – Lobby 2',
    caption: 'BT – Floor 1 – Lobby 2',
    panorama: './images/bt/f1-lobby/bt-f1-lobby-2.jpg',
    thumbnail: './images/bt/f1-lobby/thumbs/bt-f1-lobby-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-f1-lobby-1',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Lobby 1',
      },
      {
        nodeId: 'bt-ramp-1',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Ramp 1',
      },
      {
        nodeId: 'bt-f1-kids-1',
        position: { yaw: '269.76deg', pitch: '-21.08deg' },
        name: 'Enter Kids Section',
      },
      {
        nodeId: 'bt-f1-tyt-1',
        position: { yaw: '88.42deg', pitch: '5.14deg' },
        name: 'Enter TYT Section',
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },

  },
  {

    id: 'bt-f1-lobby-3',
    name: 'Floor 1 – Lobby 3',
    caption: 'BT – Floor 1 – Lobby 3',
    panorama: './images/bt/f1-lobby/bt-f1-lobby-3.jpg',
    thumbnail: './images/bt/f1-lobby/thumbs/bt-f1-lobby-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-f1-lobby-1',
        position: { yaw: '277.64deg', pitch: '-3.96deg' },
        name: 'Go to Lobby 1',
      },
      {
        nodeId: 'bt-stairs-front-1',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Stairs Front 1',
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
];
