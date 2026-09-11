export default [
  {
    id: 'jw-f2-facilities-1',
    name: 'Floor 2 – Facilities 1',
    caption: 'JW – Floor 2 – Facilities 1',
    panorama: './images/jw/f2-facilities/jw-f2-facilities-1.jpg',
    thumbnail: './images/jw/f2-facilities/thumbs/jw-f2-facilities-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'jw-f2-reference-18',
        position: { yaw: '291.38deg', pitch: '0deg' },
        name: 'Go back to Reference Area',
      },
      {
        nodeId: 'jw-f2-facilities-2',
        position: { yaw: '0deg', pitch: '0deg' },
        name: 'Go to Facilities 2',
      },
      {
        nodeId: 'jw-f2-facilities-3',
        position: { yaw: '56.25deg', pitch: '0deg' },
        name: 'Go to Facilities 3',
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['facilities'],
    },
  },
  {
    id: 'jw-f2-facilities-2',
    name: 'Floor 2 – Facilities 2',
    caption: 'JW – Floor 2 – Facilities 2',
    panorama: './images/jw/f2-facilities/jw-f2-facilities-2.jpg',
    thumbnail: './images/jw/f2-facilities/thumbs/jw-f2-facilities-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'jw-f2-reference-18',
        position: { yaw: '180deg', pitch: '0deg' },
        name: 'Go back to Reference Area',
      },
      {
        nodeId: 'jw-f2-facilities-1',
        position: { yaw: '180deg', pitch: '0deg' },
        name: 'Go back to Facilities 1',
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['facilities'],
    },
  },
  {
    id: 'jw-f2-facilities-3',
    name: 'Floor 2 – Facilities 3',
    caption: 'JW – Floor 2 – Facilities 3',
    panorama: './images/jw/f2-facilities/jw-f2-facilities-3.jpg',
    thumbnail: './images/jw/f2-facilities/thumbs/jw-f2-facilities-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'jw-f2-facilities-1',
        position: { yaw: '222.07deg', pitch: '0deg' },
        name: 'Go to Facilities 1',
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['facilities'],
    },
  },
];
