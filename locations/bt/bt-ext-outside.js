// Ext Outside Section for BT

export default [
  {

    id: 'bt-ext-outside-1',
    name: 'Exterior – Outside 1',
    caption: 'BT – Exterior – Outside 1',
    panorama: './images/bt/ext-outside/bt-ext-outside-1.jpg',
    thumbnail: './images/bt/ext-outside/thumbs/bt-ext-outside-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-ext-outside-2',
        position: { yaw: '358.45deg', pitch: '0deg' },
        name: 'Go to Outside 2',
      },
    ],
    markers: [],
    data: {
      floor: 'ext',
      tags: ['exterior', 'outside'],
    },

  },
  {

    id: 'bt-ext-outside-2',
    name: 'Exterior – Outside 2',
    caption: 'BT – Exterior – Outside 2',
    panorama: './images/bt/ext-outside/bt-ext-outside-2.jpg',
    thumbnail: './images/bt/ext-outside/thumbs/bt-ext-outside-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-ext-outside-1',
        position: { yaw: '178.45deg', pitch: '0deg' },
        name: 'Go to Outside 1',
      },
      {
        nodeId: 'bt-ext-outside-3',
        position: { yaw: '3.87deg', pitch: '0deg' },
        name: 'Go to Outside 3',
      },
    ],
    markers: [],
    data: {
      floor: 'ext',
      tags: ['exterior', 'outside'],
    },

  },
  {

    id: 'bt-ext-outside-3',
    name: 'Exterior – Outside 3',
    caption: 'BT – Exterior – Outside 3',
    panorama: './images/bt/ext-outside/bt-ext-outside-3.jpg',
    thumbnail: './images/bt/ext-outside/thumbs/bt-ext-outside-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-ext-outside-2',
        position: { yaw: '183.87deg', pitch: '0deg' },
        name: 'Go to Outside 2',
      },
      {
        nodeId: 'bt-ext-outside-4',
        position: { yaw: '6.59deg', pitch: '0deg' },
        name: 'Go to Outside 4',
      },
    ],
    markers: [],
    data: {
      floor: 'ext',
      tags: ['exterior', 'outside'],
    },

  },
  {

    id: 'bt-ext-outside-4',
    name: 'Exterior – Outside 4',
    caption: 'BT – Exterior – Outside 4',
    panorama: './images/bt/ext-outside/bt-ext-outside-4.jpg',
    thumbnail: './images/bt/ext-outside/thumbs/bt-ext-outside-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-ext-outside-3',
        position: { yaw: '186.59deg', pitch: '0deg' },
        name: 'Go to Outside 3',
      },
      {
        nodeId: 'bt-ext-outside-5',
        position: { yaw: '48.87deg', pitch: '0deg' },
        name: 'Go to Outside 5',
      },
    ],
    markers: [],
    data: {
      floor: 'ext',
      tags: ['exterior', 'outside'],
    },

  },
  {

    id: 'bt-ext-outside-5',
    name: 'Exterior – Outside 5',
    caption: 'BT – Exterior – Outside 5',
    panorama: './images/bt/ext-outside/bt-ext-outside-5.jpg',
    thumbnail: './images/bt/ext-outside/thumbs/bt-ext-outside-5.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bt-ext-outside-4',
        position: { yaw: '228.87deg', pitch: '0deg' },
        name: 'Go to Outside 4',
      },
      {
        nodeId: 'bt-f1-lobby-1',
        position: { yaw: '358.45deg', pitch: '0deg' },
        name: 'Enter Lobby 1',
      },
    ],
    markers: [],
    data: {
      floor: 'ext',
      tags: ['exterior', 'outside'],
    },
  },
];
