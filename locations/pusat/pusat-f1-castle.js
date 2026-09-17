export default [
  {
    id: 'pusat-f1-castle-1',
    name: 'Floor 1 - Castle 1',
    caption: 'PUSAT - Floor 1 - Castle 1',
    panorama: './images/pusat/f1-castle/pusat-f1-castle-1.jpg',
    thumbnail: './images/pusat/f1-castle/thumbs/pusat-f1-castle-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-castle-2',
        position: { yaw: '265.68deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Castle 2'
      },
      {
        nodeId: 'pusat-f1-castle-3',
        position: { yaw: '213.02deg', pitch: '-6.19deg' },
        name: 'Go to Floor 1 - Castle 3'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['castle'],
    },
  },
  {
    id: 'pusat-f1-castle-2',
    name: 'Floor 1 - Castle 2',
    caption: 'PUSAT - Floor 1 - Castle 2',
    panorama: './images/pusat/f1-castle/pusat-f1-castle-2.jpg',
    thumbnail: './images/pusat/f1-castle/thumbs/pusat-f1-castle-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-castle-1',
        position: { yaw: '85.68deg', pitch: '-8.11deg' },
        name: 'Go to Floor 1 - Castle 1'
      },
      
      {
        nodeId: 'pusat-f1-castle-3',
        position: { yaw: '135.76deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Castle 3'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['castle'],
    },
  },
  {
    id: 'pusat-f1-castle-3',
    name: 'Floor 1 - Castle 3',
    caption: 'PUSAT - Floor 1 - Castle 3',
    panorama: './images/pusat/f1-castle/pusat-f1-castle-3.jpg',
    thumbnail: './images/pusat/f1-castle/thumbs/pusat-f1-castle-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-castle-2',
        position: { yaw: '316.79deg', pitch: '-6.07deg' },
        name: 'Go to Floor 1 - Castle 2',
        targetYaw: '323.93deg',
        targetPitch: '3.79deg'
      },
      
      
      
      {
        nodeId: 'pusat-f1-castle-4',
        position: { yaw: '244.82deg', pitch: '-7.06deg' },
        name: 'Go to Floor 1 - Castle 4',
        targetYaw: '237.50deg',
        targetPitch: '-4.03deg'
      },
      
      
      {
        nodeId: 'pusat-f1-castle-1',
        position: { yaw: '22.35deg', pitch: '-1.79deg' },
        name: 'Go to Floor 1 - Castle 1',
        targetYaw: '46.10deg',
        targetPitch: '-5.84deg'
      },
      
      
      {
        nodeId: 'pusat-f1-kids-15',
        position: { yaw: '133.70deg', pitch: '-8.22deg' },
        name: 'Go to Floor 1 - Kids 15'
      },
    ],
    markers: [
      {
        id: 'pusat-f1-castle-3-marker-1789634521912',
        position: {
          yaw: '341.46deg',
          pitch: '-54.40deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: '',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/pusat/markers/FLOOR-1/PUSAT_F1_57.jpg',
          originalUrl: './images/pusat/markers/FLOOR-1/PUSAT_F1_57.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/pusat/markers/FLOOR-1/PUSAT_F1_57.jpg\'>\n        <img src=\'./images/pusat/markers/FLOOR-1/PUSAT_F1_57.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'pusat-f1-castle-3-marker-1789634552614',
        position: {
          yaw: '5.72deg',
          pitch: '-2.72deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: '',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/pusat/markers/FLOOR-1/PUSAT_F1_58.jpg',
          originalUrl: './images/pusat/markers/FLOOR-1/PUSAT_F1_58.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/pusat/markers/FLOOR-1/PUSAT_F1_58.jpg\'>\n        <img src=\'./images/pusat/markers/FLOOR-1/PUSAT_F1_58.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['castle'],
    },
  },
  {
    id: 'pusat-f1-castle-4',
    name: 'Floor 1 - Castle 4',
    caption: 'PUSAT - Floor 1 - Castle 4',
    panorama: './images/pusat/f1-castle/pusat-f1-castle-4.jpg',
    thumbnail: './images/pusat/f1-castle/thumbs/pusat-f1-castle-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'pusat-f1-castle-3',
        position: { yaw: '62.03deg', pitch: '-10deg' },
        name: 'Go to Floor 1 - Castle 3'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['castle'],
    },
  },
];
