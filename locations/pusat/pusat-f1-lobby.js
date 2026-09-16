export default [
  {
    id: 'pusat-f1-lobby-1',
    name: 'Floor 1 - Lobby 1',
    caption: 'PUSAT - Floor 1 - Lobby 1',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-1.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-2',
        position: { yaw: '5.99deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 2'
      },
      
      {
        nodeId: 'pusat-f1-lobby-29',
        position: { yaw: '102.09deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 29'
      },
    ],
    markers: [
      {
        id: 'pusat-f1-lobby-1-marker-1789556189154',
        position: {
          yaw: '311.76deg',
          pitch: '-12.05deg'
        },
        size: {
          width: 56,
          height: 56
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'P. Ramlee section',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>P. Ramlee section</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-2',
    name: 'Floor 1 - Lobby 2',
    caption: 'PUSAT - Floor 1 - Lobby 2',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-2.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      { nodeId: 'pusat-f1-lobby-3', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 3' },
      {
        nodeId: 'pusat-f1-lobby-1',
        position: { yaw: '185.99deg', pitch: '-8.63deg' },
        name: 'Go to Floor 1 - Lobby 1'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-3',
    name: 'Floor 1 - Lobby 3',
    caption: 'PUSAT - Floor 1 - Lobby 3',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-3.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      { nodeId: 'pusat-f1-lobby-2', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      {
        nodeId: 'pusat-f1-lobby-4',
        position: { yaw: '317.71deg', pitch: '-3.41deg' },
        name: 'Go to Floor 1 - Lobby 4'
      },
      {
        nodeId: 'pusat-f1-lobby-8',
        position: { yaw: '352.81deg', pitch: '-5.84deg' },
        name: 'Go to Floor 1 - Lobby 8'
      },
      {
        nodeId: 'pusat-f1-lobby-12',
        position: { yaw: '50.73deg', pitch: '-3.58deg' },
        name: 'Go to Floor 1 - Lobby 12',
        targetYaw: '52.59deg',
        targetPitch: '0.05deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-4',
    name: 'Floor 1 - Lobby 4',
    caption: 'PUSAT - Floor 1 - Lobby 4',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-4.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-3',
        position: { yaw: '137.71deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 3'
      },
      
      {
        nodeId: 'pusat-f1-lobby-5',
        position: { yaw: '326.30deg', pitch: '-5.97deg' },
        name: 'Go to Floor 1 - Lobby 5'
      },
      {
        nodeId: 'pusat-f1-lobby-7',
        position: { yaw: '265.51deg', pitch: '-9.25deg' },
        name: 'Go to Floor 1 - Lobby 7'
      },
      
      {
        nodeId: 'pusat-f1-lobby-8',
        position: { yaw: '62.59deg', pitch: '-11.54deg' },
        name: 'Go to Floor 1 - Lobby 8'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-5',
    name: 'Floor 1 - Lobby 5',
    caption: 'PUSAT - Floor 1 - Lobby 5',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-5.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-5.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-4',
        position: { yaw: '146.30deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 4'
      },
      {
        nodeId: 'pusat-f1-lobby-6',
        position: { yaw: '286.72deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 6'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-6',
    name: 'Floor 1 - Lobby 6',
    caption: 'PUSAT - Floor 1 - Lobby 6',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-6.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-6.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-7',
        position: { yaw: '157.42deg', pitch: '-17.14deg' },
        name: 'Go to Floor 1 - Lobby 7'
      },
      {
        nodeId: 'pusat-f1-lobby-5',
        position: { yaw: '106.72deg', pitch: '-3.34deg' },
        name: 'Go to Floor 1 - Lobby 5'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-7',
    name: 'Floor 1 - Lobby 7',
    caption: 'PUSAT - Floor 1 - Lobby 7',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-7.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-7.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-6',
        position: { yaw: '337.42deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 6'
      },
      
      
      {
        nodeId: 'pusat-f1-lobby-4',
        position: { yaw: '85.51deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 4'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-8',
    name: 'Floor 1 - Lobby 8',
    caption: 'PUSAT - Floor 1 - Lobby 8',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-8.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-8.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-9',
        position: { yaw: '53.71deg', pitch: '-5.20deg' },
        name: 'Go to Floor 1 - Lobby 9'
      },
      
      {
        nodeId: 'pusat-f1-lobby-4',
        position: { yaw: '242.59deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 4'
      },
      {
        nodeId: 'pusat-f1-lobby-3',
        position: { yaw: '172.81deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 3'
      },
      {
        nodeId: 'pusat-f1-lobby-11',
        position: { yaw: '118.05deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 11'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-9',
    name: 'Floor 1 - Lobby 9',
    caption: 'PUSAT - Floor 1 - Lobby 9',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-9.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-9.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-8',
        position: { yaw: '233.71deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 8'
      },
      
      {
        nodeId: 'pusat-f1-lobby-10',
        position: { yaw: '54.20deg', pitch: '-3.52deg' },
        name: 'Go to Floor 1 - Lobby 10'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-10',
    name: 'Floor 1 - Lobby 10',
    caption: 'PUSAT - Floor 1 - Lobby 10',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-10.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-10.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-9',
        position: { yaw: '234.20deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 9'
      },
      {
        nodeId: 'pusat-f1-lobby-12',
        position: { yaw: '149.56deg', pitch: '-6.20deg' },
        name: 'Go to Floor 1 - Lobby 12'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-11',
    name: 'Floor 1 - Lobby 11',
    caption: 'PUSAT - Floor 1 - Lobby 11',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-11.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-11.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-12',
        position: { yaw: '33.44deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 12'
      },
      {
        nodeId: 'pusat-f1-lobby-27',
        position: { yaw: '162.64deg', pitch: '-2.78deg' },
        name: 'Go to Floor 1 - Lobby 27',
        targetYaw: '145.77deg',
        targetPitch: '8.78deg'
      },
      {
        nodeId: 'pusat-f1-lobby-8',
        position: { yaw: '298.05deg', pitch: '-6.45deg' },
        name: 'Go to Floor 1 - Lobby 8',
        targetYaw: '321.75deg',
        targetPitch: '3.10deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-12',
    name: 'Floor 1 - Lobby 12',
    caption: 'PUSAT - Floor 1 - Lobby 12',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-12.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-12.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-11',
        position: { yaw: '214.52deg', pitch: '-7.56deg' },
        name: 'Go to Floor 1 - Lobby 11',
        targetYaw: '197.36deg',
        targetPitch: '0.62deg'
      },
      
      
      
      {
        nodeId: 'pusat-f1-lobby-13',
        position: { yaw: '106.48deg', pitch: '-5.36deg' },
        name: 'Go to Floor 1 - Lobby 13'
      },
      {
        nodeId: 'pusat-f1-lobby-10',
        position: { yaw: '327.21deg', pitch: '-1.65deg' },
        name: 'Go to Floor 1 - Lobby 10',
        targetYaw: '333.39deg',
        targetPitch: '-0.76deg'
      },
      
      
      {
        nodeId: 'pusat-f1-lobby-14',
        position: { yaw: '38.73deg', pitch: '-0.02deg' },
        name: 'Go to Floor 1 - Lobby 14'
      },
      {
        nodeId: 'pusat-f1-lobby-3',
        position: { yaw: '231.49deg', pitch: '-8.80deg' },
        name: 'Go to Floor 1 - Lobby 3',
        targetYaw: '263.07deg',
        targetPitch: '-4.66deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-13',
    name: 'Floor 1 - Lobby 13',
    caption: 'PUSAT - Floor 1 - Lobby 13',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-13.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-13.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-12',
        position: { yaw: '286.48deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 12'
      },
      
      { nodeId: 'pusat-f1-lobby-14', position: { yaw: '0deg', pitch: '0deg' }, name: 'Go to Lobby 14' }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-14',
    name: 'Floor 1 - Lobby 14',
    caption: 'PUSAT - Floor 1 - Lobby 14',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-14.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-14.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      { nodeId: 'pusat-f1-lobby-13', position: { yaw: '180deg', pitch: '0deg' }, name: 'Go back' },
      {
        nodeId: 'pusat-f1-lobby-15',
        position: { yaw: '18.87deg', pitch: '1.60deg' },
        name: 'Go to Floor 1 - Lobby 15'
      },
      
      {
        nodeId: 'pusat-f1-lobby-12',
        position: { yaw: '218.73deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 12'
      },
      {
        nodeId: 'pusat-f1-lobby-19',
        position: { yaw: '119.12deg', pitch: '-2.60deg' },
        name: 'Go to Floor 1 - Lobby 19',
        targetYaw: '139.77deg',
        targetPitch: '2.41deg'
      },
      {
        nodeId: 'pusat-f1-lobby-17',
        position: { yaw: '76.67deg', pitch: '0.68deg' },
        name: 'Go to Floor 1 - Lobby 17',
        targetYaw: '49.30deg',
        targetPitch: '4.49deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-15',
    name: 'Floor 1 - Lobby 15',
    caption: 'PUSAT - Floor 1 - Lobby 15',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-15.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-15.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-14',
        position: { yaw: '228.28deg', pitch: '-3.94deg' },
        name: 'Go to Floor 1 - Lobby 14',
        targetYaw: '233.84deg',
        targetPitch: '0.93deg'
      },
      
      
      
      {
        nodeId: 'pusat-f1-lobby-16',
        position: { yaw: '68.34deg', pitch: '-2.09deg' },
        name: 'Go to Floor 1 - Lobby 16'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-16',
    name: 'Floor 1 - Lobby 16',
    caption: 'PUSAT - Floor 1 - Lobby 16',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-16.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-16.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-15',
        position: { yaw: '237.46deg', pitch: '-3.48deg' },
        name: 'Go to Floor 1 - Lobby 15',
        targetYaw: '241.17deg',
        targetPitch: '-2.10deg'
      },
      
      
      
      {
        nodeId: 'pusat-f1-lobby-17',
        position: { yaw: '145.27deg', pitch: '-6.50deg' },
        name: 'Go to Floor 1 - Lobby 17'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-17',
    name: 'Floor 1 - Lobby 17',
    caption: 'PUSAT - Floor 1 - Lobby 17',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-17.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-17.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-16',
        position: { yaw: '325.95deg', pitch: '-0.75deg' },
        name: 'Go to Floor 1 - Lobby 16',
        targetYaw: '331.97deg',
        targetPitch: '2.97deg'
      },
      
      
      
      {
        nodeId: 'pusat-f1-lobby-18',
        position: { yaw: '46.02deg', pitch: '-4.44deg' },
        name: 'Go to Floor 1 - Lobby 18'
      },
      {
        nodeId: 'pusat-f1-lobby-26',
        position: { yaw: '210.71deg', pitch: '-2.24deg' },
        name: 'Go to Floor 1 - Lobby 26',
        targetYaw: '249.67deg',
        targetPitch: '-12.67deg'
      },
      {
        nodeId: 'pusat-f1-lobby-19',
        position: { yaw: '229.25deg', pitch: '-7.53deg' },
        name: 'Go to Floor 1 - Lobby 19',
        targetYaw: '231.55deg',
        targetPitch: '-1.17deg'
      },
      {
        nodeId: 'pusat-f1-lobby-14',
        position: { yaw: '253.69deg', pitch: '-6.76deg' },
        name: 'Go to Floor 1 - Lobby 14',
        targetYaw: '215.27deg',
        targetPitch: '-1.68deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-18',
    name: 'Floor 1 - Lobby 18',
    caption: 'PUSAT - Floor 1 - Lobby 18',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-18.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-18.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-17',
        position: { yaw: '236.57deg', pitch: '-3.26deg' },
        name: 'Go to Floor 1 - Lobby 17',
        targetYaw: '231.10deg',
        targetPitch: '0.01deg'
      },
      
      
      {
        nodeId: 'pusat-f1-kids-1',
        position: { yaw: '323.88deg', pitch: '-8.31deg' },
        name: 'Go to Floor 1 - Kids 1',
        targetYaw: '335.25deg',
        targetPitch: '-2.95deg'
      },
      
      {
        nodeId: 'pusat-f1-lobby-20',
        position: { yaw: '149.81deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 20'
      },
      {
        nodeId: 'pusat-f1-lobby-23',
        position: { yaw: '100.45deg', pitch: '1.70deg' },
        name: 'Go to Floor 1 - Lobby 23',
        targetYaw: '55.74deg',
        targetPitch: '2.13deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-19',
    name: 'Floor 1 - Lobby 19',
    caption: 'PUSAT - Floor 1 - Lobby 19',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-19.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-19.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-20',
        position: { yaw: '68.77deg', pitch: '1.36deg' },
        name: 'Go to Floor 1 - Lobby 20',
        targetYaw: '64.51deg',
        targetPitch: '-0.70deg'
      },
      
      
      
      {
        nodeId: 'pusat-f1-lobby-14',
        position: { yaw: '289.61deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 14'
      },
      {
        nodeId: 'pusat-f1-lobby-17',
        position: { yaw: '49.25deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 17'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-20',
    name: 'Floor 1 - Lobby 20',
    caption: 'PUSAT - Floor 1 - Lobby 20',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-20.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-20.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-19',
        position: { yaw: '260.63deg', pitch: '-8.49deg' },
        name: 'Go to Floor 1 - Lobby 19'
      },
      
      {
        nodeId: 'pusat-f1-lobby-21',
        position: { yaw: '151.17deg', pitch: '1.17deg' },
        name: 'Go to Floor 1 - Lobby 21',
        targetYaw: '165.96deg',
        targetPitch: '-5.27deg'
      },
      
      
      {
        nodeId: 'pusat-f1-lobby-23',
        position: { yaw: '32.24deg', pitch: '-3.31deg' },
        name: 'Go to Floor 1 - Lobby 23'
      },
      {
        nodeId: 'pusat-f1-lobby-18',
        position: { yaw: '331.46deg', pitch: '-1.38deg' },
        name: 'Go to Floor 1 - Lobby 18',
        targetYaw: '326.76deg',
        targetPitch: '-2.18deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-21',
    name: 'Floor 1 - Lobby 21',
    caption: 'PUSAT - Floor 1 - Lobby 21',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-21.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-21.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-20',
        position: { yaw: '335.42deg', pitch: '-2.94deg' },
        name: 'Go to Floor 1 - Lobby 20',
        targetYaw: '331.56deg',
        targetPitch: '-3.03deg'
      },
      
      
      
      {
        nodeId: 'pusat-f1-lobby-22',
        position: { yaw: '167.33deg', pitch: '-5.87deg' },
        name: 'Go to Floor 1 - Lobby 22',
        targetYaw: '159.13deg',
        targetPitch: '4.16deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-22',
    name: 'Floor 1 - Lobby 22',
    caption: 'PUSAT - Floor 1 - Lobby 22',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-22.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-22.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-21',
        position: { yaw: '344.03deg', pitch: '2.31deg' },
        name: 'Go to Floor 1 - Lobby 21',
        targetYaw: '340.46deg',
        targetPitch: '-0.83deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-23',
    name: 'Floor 1 - Lobby 23',
    caption: 'PUSAT - Floor 1 - Lobby 23',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-23.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-23.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-24',
        position: { yaw: '55.88deg', pitch: '2.21deg' },
        name: 'Go to Floor 1 - Lobby 24',
        targetYaw: '61.93deg',
        targetPitch: '-0.73deg'
      },
      
      
      
      {
        nodeId: 'pusat-f1-lobby-20',
        position: { yaw: '186.49deg', pitch: '-2.90deg' },
        name: 'Go to Floor 1 - Lobby 20',
        targetYaw: '151.36deg',
        targetPitch: '-3.24deg'
      },
      
      
      {
        nodeId: 'pusat-f1-lobby-18',
        position: { yaw: '291.24deg', pitch: '-16.65deg' },
        name: 'Go to Floor 1 - Lobby 18',
        targetYaw: '323.88deg',
        targetPitch: '-8.31deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-24',
    name: 'Floor 1 - Lobby 24',
    caption: 'PUSAT - Floor 1 - Lobby 24',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-24.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-24.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-23',
        position: { yaw: '238.67deg', pitch: '-8.50deg' },
        name: 'Go to Floor 1 - Lobby 23',
        targetYaw: '239.83deg',
        targetPitch: '-7.40deg'
      },
      
      
      {
        nodeId: 'pusat-f1-lobby-25',
        position: { yaw: '61.99deg', pitch: '0.40deg' },
        name: 'Go to Floor 1 - Lobby 25',
        targetYaw: '57.22deg',
        targetPitch: '-5.87deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-25',
    name: 'Floor 1 - Lobby 25',
    caption: 'PUSAT - Floor 1 - Lobby 25',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-25.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-25.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-24',
        position: { yaw: '258.27deg', pitch: '-5.05deg' },
        name: 'Go to Floor 1 - Lobby 24',
        targetYaw: '241.61deg',
        targetPitch: '-1.15deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-26',
    name: 'Floor 1 - Lobby 26',
    caption: 'PUSAT - Floor 1 - Lobby 26',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-26.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-26.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-17',
        position: { yaw: '21.59deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 17'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-27',
    name: 'Floor 1 - Lobby 27',
    caption: 'PUSAT - Floor 1 - Lobby 27',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-27.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-27.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-28',
        position: { yaw: '175.14deg', pitch: '-4.45deg' },
        name: 'Go to Lobby 28',
        targetYaw: '195.26deg',
        targetPitch: '-3.28deg'
      },
      
      
      
      {
        nodeId: 'pusat-f1-lobby-11',
        position: { yaw: '342.64deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 11'
      },
      {
        nodeId: 'pusat-f1-lobby-29',
        position: { yaw: '220.28deg', pitch: '-4.18deg' },
        name: 'Go to Floor 1 - Lobby 29',
        targetYaw: '193.67deg',
        targetPitch: '-9.97deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-28',
    name: 'Floor 1 - Lobby 28',
    caption: 'PUSAT - Floor 1 - Lobby 28',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-28.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-28.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-27',
        position: { yaw: '338.95deg', pitch: '-6.23deg' },
        name: 'Go back',
        targetYaw: '334.01deg',
        targetPitch: '-6.69deg'
      },
      
      
      {
        nodeId: 'pusat-f1-lobby-29',
        position: { yaw: '278.57deg', pitch: '-7.73deg' },
        name: 'Go to Lobby 29',
        targetYaw: '275.03deg',
        targetPitch: '-5.84deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
  {
    id: 'pusat-f1-lobby-29',
    name: 'Floor 1 - Lobby 29',
    caption: 'PUSAT - Floor 1 - Lobby 29',
    panorama: './images/pusat/f1-lobby/pusat-f1-lobby-29.jpg',
    thumbnail: './images/pusat/f1-lobby/thumbs/pusat-f1-lobby-29.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-lobby-28',
        position: { yaw: '96.72deg', pitch: '-7.24deg' },
        name: 'Go back',
        targetYaw: '88.10deg',
        targetPitch: '9.58deg'
      },
      
      
      {
        nodeId: 'pusat-f1-lobby-1',
        position: { yaw: '276.45deg', pitch: '-18.36deg' },
        name: 'Go to Floor 1 - Lobby 1',
        targetYaw: '279.68deg',
        targetPitch: '-4.60deg'
      },
      {
        nodeId: 'pusat-f1-lobby-27',
        position: { yaw: '356.06deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Lobby 27'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['lobby'],
    },
  },
];
