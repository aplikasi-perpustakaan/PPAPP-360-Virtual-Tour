export default [
  {
    id: 'jw-stairs-1',
    name: 'Stairs - 1',
    caption: 'JW - Stairs - 1',
    panorama: './images/jw/stairs/jw-stairs-1.jpg',
    thumbnail: './images/jw/stairs/thumbs/jw-stairs-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'jw-f1-lobby-5',
        position: { yaw: '322.41deg', pitch: '0deg' },
        name: 'Go to Level 1 - Lobby 5',
      },
      {
        nodeId: 'jw-f2-reference-1',
        position: { yaw: '258.86deg', pitch: '0deg' },
        name: 'Go to Level 2 - Reference Area 1',
      }

    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['stairs'],
    },
  },
];
