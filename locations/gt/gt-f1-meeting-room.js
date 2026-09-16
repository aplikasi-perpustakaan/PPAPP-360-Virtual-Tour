export default [
  {
    id: 'gt-f1-meeting-room-1',
    name: 'Floor 1 – Meeting Room 1',
    caption: 'GT – Floor 1 – Meeting Room 1',
    panorama: './images/gt/f1-meeting-room/gt-f1-meeting-room-1.jpg',
    thumbnail: './images/gt/f1-meeting-room/thumbs/gt-f1-meeting-room-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-meeting-room-2',
        position: { yaw: '0deg', pitch: '0deg' },
        name: 'Go to Meeting Room 2',
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['meeting','room'],
    },
  },
  {
    id: 'gt-f1-meeting-room-2',
    name: 'Floor 1 – Meeting Room 2',
    caption: 'GT – Floor 1 – Meeting Room 2',
    panorama: './images/gt/f1-meeting-room/gt-f1-meeting-room-2.jpg',
    thumbnail: './images/gt/f1-meeting-room/thumbs/gt-f1-meeting-room-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-meeting-room-3',
        position: { yaw: '0deg', pitch: '0deg' },
        name: 'Go to Meeting Room 3',
      },
      {
        nodeId: 'gt-f1-meeting-room-1',
        position: { yaw: '180deg', pitch: '0deg' },
        name: 'Go to Meeting Room 1',
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['meeting','room'],
    },
  },
  {
    id: 'gt-f1-meeting-room-3',
    name: 'Floor 1 – Meeting Room 3',
    caption: 'GT – Floor 1 – Meeting Room 3',
    panorama: './images/gt/f1-meeting-room/gt-f1-meeting-room-3.jpg',
    thumbnail: './images/gt/f1-meeting-room/thumbs/gt-f1-meeting-room-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-meeting-room-4',
        position: { yaw: '0deg', pitch: '0deg' },
        name: 'Go to Meeting Room 4',
      },
      {
        nodeId: 'gt-f1-meeting-room-2',
        position: { yaw: '180deg', pitch: '0deg' },
        name: 'Go to Meeting Room 2',
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['meeting','room'],
    },
  },
  {
    id: 'gt-f1-meeting-room-4',
    name: 'Floor 1 – Meeting Room 4',
    caption: 'GT – Floor 1 – Meeting Room 4',
    panorama: './images/gt/f1-meeting-room/gt-f1-meeting-room-4.jpg',
    thumbnail: './images/gt/f1-meeting-room/thumbs/gt-f1-meeting-room-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-meeting-room-3',
        position: { yaw: '180deg', pitch: '0deg' },
        name: 'Go to Meeting Room 3',
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['meeting','room'],
    },
  }
];
