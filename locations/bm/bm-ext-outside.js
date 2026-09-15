// ── locations/bm/bm-ext-outside.js ─────────────────────────────────────
// Exterior section for BM (Cawangan Daerah Seberang Perai Tengah)
// ────────────────────────────────────────────────────────────────

export default [
  {
    id: 'bm-ext-outside-1',
    name: 'Exterior – Main Entrance Steps',
    caption: 'BM – Exterior – Main Entrance Steps',
    panorama: './images/bm/ext-outside/bm-ext-outside-1.jpg',
    thumbnail: './images/bm/ext-outside/thumbs/bm-ext-outside-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-ext-outside-2',
        position: { yaw: '100.02deg', pitch: '-11.85deg' },
        name: 'Go to Verandah & Signboard',
      },
      {
        nodeId: 'bm-ext-outside-3',
        position: { yaw: '0deg', pitch: '0deg' },
        name: 'Go to Entrance Porch',
      },
    ],
    markers: [
      {
        id: 'bm-ext-outside-1-marker-1789464325044',
        position: {
          yaw: '56.69deg',
          pitch: '-17.91deg'
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
          imageSrc: './images/bm/markers/OUTSIDE/BTM_outside_6.jpg',
          originalUrl: './images/bm/markers/OUTSIDE/BTM_outside_6.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/OUTSIDE/BTM_outside_6.jpg\'>\n        <img src=\'./images/bm/markers/OUTSIDE/BTM_outside_6.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'ext',
      tags: ['exterior', 'entrance', 'outside'],
    },
  },
  {
    id: 'bm-ext-outside-2',
    name: 'Exterior – Verandah & Signboard',
    caption: 'BM – Exterior – Verandah & Signboard',
    panorama: './images/bm/ext-outside/bm-ext-outside-2.jpg',
    thumbnail: './images/bm/ext-outside/thumbs/bm-ext-outside-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-ext-outside-1',
        position: { yaw: '286.87deg', pitch: '-12.68deg' },
        name: 'Go to Entrance Steps',
      },
    ],
    markers: [
      {
        id: 'bm-ext-outside-2-marker-1789464292064',
        position: {
          yaw: '12.54deg',
          pitch: '9.41deg'
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
          imageSrc: './images/bm/markers/OUTSIDE/BTM_outside_1.jpg',
          originalUrl: './images/bm/markers/OUTSIDE/BTM_outside_1.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/OUTSIDE/BTM_outside_1.jpg\'>\n        <img src=\'./images/bm/markers/OUTSIDE/BTM_outside_1.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'ext',
      tags: ['exterior', 'verandah', 'signboard'],
    },
  },
  {
    id: 'bm-ext-outside-3',
    name: 'Exterior – Entrance Porch',
    caption: 'BM – Exterior – Entrance Porch',
    panorama: './images/bm/ext-outside/bm-ext-outside-3.jpg',
    thumbnail: './images/bm/ext-outside/thumbs/bm-ext-outside-3.jpg',
    defaultYaw: '65deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'bm-ext-outside-1',
        position: { yaw: '186.93deg', pitch: '-33.47deg' },
        name: 'Go to Entrance Steps',
      },
      {
        nodeId: 'bm-gf-lobby-1',
        position: { yaw: '94.01deg', pitch: '-16.18deg' },
        name: 'Enter Library',
        targetYaw: '94.06deg',
        targetPitch: '-12.28deg'
      },
    ],
    markers: [
      {
        id: 'bm-ext-outside-3-marker-1789464415832',
        position: {
          yaw: '74.17deg',
          pitch: '-11.07deg'
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
          imageSrc: './images/bm/markers/OUTSIDE/BTM_outside_2.jpg',
          originalUrl: './images/bm/markers/OUTSIDE/BTM_outside_2.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/OUTSIDE/BTM_outside_2.jpg\'>\n        <img src=\'./images/bm/markers/OUTSIDE/BTM_outside_2.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'bm-ext-outside-3-marker-1789464432407',
        position: {
          yaw: '99.90deg',
          pitch: '-18.15deg'
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
          color: 'gold',
          animated: false,
          imageSrc: './images/bm/markers/OUTSIDE/BTM_outside_3.jpg',
          originalUrl: './images/bm/markers/OUTSIDE/BTM_outside_3.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'gold\' data-url=\'./images/bm/markers/OUTSIDE/BTM_outside_3.jpg\'>\n        <img src=\'./images/bm/markers/OUTSIDE/BTM_outside_3.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'ext',
      tags: ['exterior', 'porch', 'entrance'],
    },
  },
];
