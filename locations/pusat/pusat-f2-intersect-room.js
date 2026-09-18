export default [
  {
    id: 'pusat-f2-intersect-room-1',
    name: 'Level 2 - Intersect Room 1',
    caption: 'PUSAT - Level 2 - Intersect Room 1',
    panorama: './images/pusat/f2-intersect-room/pusat-f2-intersect-room-1.jpg',
    thumbnail: './images/pusat/f2-intersect-room/thumbs/pusat-f2-intersect-room-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-intersect-room-2',
        position: { yaw: '73.04deg', pitch: '-9.85deg' },
        name: 'Go to Level 2 - Intersect Room 2',
        targetYaw: '118.59deg',
        targetPitch: '-10.21deg'
      },
      
      
      {
        nodeId: 'pusat-f2-reading-11',
        position: { yaw: '337.98deg', pitch: '-5.55deg' },
        name: 'Go to Level 2 - Reading Area 11',
        targetYaw: '301.29deg',
        targetPitch: '-3.00deg'
      },
      {
        nodeId: 'pusat-f2-intersect-room-3',
        position: { yaw: '220.99deg', pitch: '-4.58deg' },
        name: 'Go to Level 2 - Intersect Room 3',
        targetYaw: '325.25deg',
        targetPitch: '-4.64deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'intersect room'
      ]
    }
  },
  {
    id: 'pusat-f2-intersect-room-2',
    name: 'Level 2 - Intersect Room 2',
    caption: 'PUSAT - Level 2 - Intersect Room 2',
    panorama: './images/pusat/f2-intersect-room/pusat-f2-intersect-room-2.jpg',
    thumbnail: './images/pusat/f2-intersect-room/thumbs/pusat-f2-intersect-room-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-intersect-room-3',
        position: { yaw: '300.78deg', pitch: '-1.64deg' },
        name: 'Go to Level 2 - Intersect Room 3',
        targetYaw: '330.86deg',
        targetPitch: '-2.48deg'
      },
      
      
      {
        nodeId: 'pusat-f2-intersect-room-1',
        position: { yaw: '340.54deg', pitch: '-2.90deg' },
        name: 'Go to Level 2 - Intersect Room 1',
        targetYaw: '329.94deg',
        targetPitch: '-5.75deg'
      },
      {
        nodeId: 'pusat-f2-auditorium-1',
        position: { yaw: '153.22deg', pitch: '-10.51deg' },
        name: 'Go to Level 2 - Auditorium 1',
        targetYaw: '185.56deg',
        targetPitch: '7.44deg'
      },
    ],
    markers: [
      {
        id: 'pusat-f2-intersect-room-2-marker-1789635994150',
        position: {
          yaw: '121.74deg',
          pitch: '-8.00deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bilik Auditorium',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bilik Auditorium</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f2',
      tags: [
        'intersect room'
      ]
    }
  },
  {
    id: 'pusat-f2-intersect-room-3',
    name: 'Level 2 - Intersect Room 3',
    caption: 'PUSAT - Level 2 - Intersect Room 3',
    panorama: './images/pusat/f2-intersect-room/pusat-f2-intersect-room-3.jpg',
    thumbnail: './images/pusat/f2-intersect-room/thumbs/pusat-f2-intersect-room-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-intersect-room-2',
        position: { yaw: '128.82deg', pitch: '-3.00deg' },
        name: 'Go to Level 2 - Intersect Room 2',
        targetYaw: '121.94deg',
        targetPitch: '-3.91deg'
      },
      
      
      {
        nodeId: 'pusat-f2-intersect-room-1',
        position: { yaw: '104.56deg', pitch: '-3.29deg' },
        name: 'Go to Level 2 - Intersect Room 1',
        targetYaw: '337.83deg',
        targetPitch: '-0.36deg'
      },
      {
        nodeId: 'pusat-f2-training-room-1',
        position: { yaw: '321.58deg', pitch: '-7.81deg' },
        name: 'Go to Level 2 - Training Room 1',
        targetYaw: '235.83deg',
        targetPitch: '5.53deg'
      },
    ],
    markers: [
      {
        id: 'pusat-f2-intersect-room-3-marker-1789636054964',
        position: {
          yaw: '323.54deg',
          pitch: '-8.76deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bilik Latihan',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bilik Latihan</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f2',
      tags: [
        'intersect room'
      ]
    }
  }
];
