export default [
  {
    id: 'jw-f2-esport-1',
    name: 'Floor 2 – e-Sport 1',
    caption: 'JW – Floor 2 – e-Sport 1',
    panorama: './images/jw/f2-esport/jw-f2-esport-1.jpg',
    thumbnail: './images/jw/f2-esport/thumbs/jw-f2-esport-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f2-esport-2',
          position: { yaw: '246.89deg', pitch: '-20.53deg' },
          name: 'Go to e-Sport 2',
        },
        {
          nodeId: 'jw-f2-reference-4',
          position: { yaw: '84.90deg', pitch: '-21.95deg' },
          name: 'Go to Reference 4',
        },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['esport'],
    },
  },
  {
    id: 'jw-f2-esport-2',
    name: 'Floor 2 – e-Sport 2',
    caption: 'JW – Floor 2 – e-Sport 2',
    panorama: './images/jw/f2-esport/jw-f2-esport-2.jpg',
    thumbnail: './images/jw/f2-esport/thumbs/jw-f2-esport-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f2-esport-3',
          position: { yaw: '331.77deg', pitch: '-21.64deg' },
          name: 'Go to e-Sport 3',
        },
        {
          nodeId: 'jw-f2-esport-1',
          position: { yaw: '61.11deg', pitch: '-16.42deg' },
          name: 'Go back to e-Sport 1',
        },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['esport'],
    },
  },
  {
    id: 'jw-f2-esport-3',
    name: 'Floor 2 – e-Sport 3',
    caption: 'JW – Floor 2 – e-Sport 3',
    panorama: './images/jw/f2-esport/jw-f2-esport-3.jpg',
    thumbnail: './images/jw/f2-esport/thumbs/jw-f2-esport-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f2-esport-2',
          position: { yaw: '161.97deg', pitch: '-22.08deg' },
          name: 'Go back to e-Sport 2',
        },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['esport'],
    },
  },
  {
    id: 'jw-f2-esport-4',
    name: 'Floor 2 – e-Sport 4',
    caption: 'JW – Floor 2 – e-Sport 4',
    panorama: './images/jw/f2-esport/jw-f2-esport-4.jpg',
    thumbnail: './images/jw/f2-esport/thumbs/jw-f2-esport-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f2-esport-5',
          position: { yaw: '276.17deg', pitch: '-8.20deg' },
          name: 'Go to e-Sport 5',
        },
        {
          nodeId: 'jw-f2-reference-2',
          position: { yaw: '95.05deg', pitch: '-18.14deg' },
          name: 'Go to Reference 2',
        }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['esport'],
    },
  },
  {
    id: 'jw-f2-esport-5',
    name: 'Floor 2 – e-Sport 5',
    caption: 'JW – Floor 2 – e-Sport 5',
    panorama: './images/jw/f2-esport/jw-f2-esport-5.jpg',
    thumbnail: './images/jw/f2-esport/thumbs/jw-f2-esport-5.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
        {
          nodeId: 'jw-f2-reference-10',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to Reference Area',
        },
        {
          nodeId: 'jw-f2-esport-4',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go back to e-Sport 4',
        }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: ['esport'],
    },
  },
];
