export default [
  {
    id: 'pusat-f2-meeting-room-1',
    name: 'Level 2 - Meeting Room 1',
    caption: 'PUSAT - Level 2 - Meeting Room 1',
    panorama: './images/pusat/f2-meeting-room/pusat-f2-meeting-room-1.jpg',
    thumbnail: './images/pusat/f2-meeting-room/thumbs/pusat-f2-meeting-room-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-meeting-room-2',
        position: { yaw: '307.42deg', pitch: '-1.24deg' },
        name: 'Go to Level 2 - Meeting Room 2',
        targetYaw: '297.60deg',
        targetPitch: '-7.25deg'
      },
      
      
      {
        nodeId: 'pusat-f2-reading-25',
        position: { yaw: '132.10deg', pitch: '-11.12deg' },
        name: 'Go to Level 2 - Reading Area 25',
        targetYaw: '169.29deg',
        targetPitch: '1.33deg'
      },
      {
        nodeId: 'pusat-f2-meeting-room-3',
        position: { yaw: '8.71deg', pitch: '-10deg' },
        name: 'Go to Level 2 - Meeting Room 3'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'meeting room'
      ]
    }
  },
  {
    id: 'pusat-f2-meeting-room-2',
    name: 'Level 2 - Meeting Room 2',
    caption: 'PUSAT - Level 2 - Meeting Room 2',
    panorama: './images/pusat/f2-meeting-room/pusat-f2-meeting-room-2.jpg',
    thumbnail: './images/pusat/f2-meeting-room/thumbs/pusat-f2-meeting-room-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-meeting-room-1',
        position: { yaw: '126.41deg', pitch: '-5.87deg' },
        name: 'Go to Level 2 - Meeting Room 1',
        targetYaw: '130.06deg',
        targetPitch: '0.15deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'meeting room'
      ]
    }
  },
  {
    id: 'pusat-f2-meeting-room-3',
    name: 'Level 2 - Meeting Room 3',
    caption: 'PUSAT - Level 2 - Meeting Room 3',
    panorama: './images/pusat/f2-meeting-room/pusat-f2-meeting-room-3.jpg',
    thumbnail: './images/pusat/f2-meeting-room/thumbs/pusat-f2-meeting-room-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-meeting-room-1',
        position: { yaw: '188.71deg', pitch: '-1.60deg' },
        name: 'Go to Level 2 - Meeting Room 1',
        targetYaw: '124.78deg',
        targetPitch: '-0.76deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'meeting room'
      ]
    }
  }
];
