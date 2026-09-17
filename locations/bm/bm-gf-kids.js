// ── locations/bm/bm-gf-kids.js ────────────────────────────────────────
// Ground Floor Children / Kids Section for BM (Bahagian Kanak-Kanak)
// ────────────────────────────────────────────────────────────────

import '../../js/custom-marker.js';

export default [
  {
    id: 'bm-gf-kids-1',
    name: 'Ground Floor – Kids Activity Area',
    caption: 'BM – Ground Floor – Kids Activity Area',
    panorama: './images/bm/gf-kids/bm-gf-kids-1.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-1.jpg',
    defaultYaw: '10deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-reading-2',
        position: { yaw: '262.66deg', pitch: '-4.67deg' },
        name: 'Exit to Main Stacks',
      },
      {
        nodeId: 'bm-gf-kids-2',
        position: { yaw: '10deg', pitch: '-5deg' },
        name: 'Go to Kids Play Corner',
      },
    ],
    markers: [
      {
        id: 'bm-gf-kids-1-marker-1789465322175',
        position: {
          yaw: '145.98deg',
          pitch: '-12.61deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Tandas',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Tandas</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-kids-1-marker-1789465338903',
        position: {
          yaw: '308.11deg',
          pitch: '-13.12deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: '',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/bm/markers/MULTIMEDIA/BTM_multimedia_3.jpg',
          originalUrl: './images/bm/markers/MULTIMEDIA/BTM_multimedia_3.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/MULTIMEDIA/BTM_multimedia_3.jpg\'>\n        <img src=\'./images/bm/markers/MULTIMEDIA/BTM_multimedia_3.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-kids-1-marker-1789465534883',
        position: {
          yaw: '310.99deg',
          pitch: '-12.54deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Sebelum Mengambil Permainan, Sila Maklumkan Kepada Staf Yang Bertugas',
          icon: 'warning',
          color: 'gold',
          animated: true,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'warning\' data-color=\'gold\' animated>\n        <h2>Sebelum Mengambil Permainan, Sila Maklumkan Kepada Staf Yang Bertugas</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'gf',
      tags: ['kids', 'children', 'activity', 'computers'],
    },
  },
  {
    id: 'bm-gf-kids-2',
    name: 'Ground Floor – Kids Play Corner',
    caption: 'BM – Ground Floor – Kids Play Corner',
    panorama: './images/bm/gf-kids/bm-gf-kids-2.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-kids-1',
        position: { yaw: '180deg', pitch: '-5deg' },
        name: 'Return to Kids Activity Area',
      },
    ],
    markers: [
      {
        id: 'bm-gf-kids-2-marker-1789465461917',
        position: {
          yaw: '286.35deg',
          pitch: '-5.34deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Sebelum Mengambil Permainan, Sila Maklumkan Kepada Staf Yang Bertugas',
          icon: 'warning',
          color: 'gold',
          animated: true,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'warning\' data-color=\'gold\' animated>\n        <h2>Sebelum Mengambil Permainan, Sila Maklumkan Kepada Staf Yang Bertugas</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-kids-2-marker-1789465398234',
        position: {
          yaw: '266.29deg',
          pitch: '-7.92deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Notis',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/bm/markers/LOBBY/BTM_lobby_28.jpg',
          originalUrl: './images/bm/markers/LOBBY/BTM_lobby_28.jpg',
          caption: 'Notis'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/LOBBY/BTM_lobby_28.jpg\'>\n        <img src=\'./images/bm/markers/LOBBY/BTM_lobby_28.jpg\' alt=\'Notis\' style=\'cursor:pointer;\' />\n        <h2>Notis</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-kids-2-marker-1789465376003',
        position: {
          yaw: '91.89deg',
          pitch: '7.53deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Digital Hub',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/bm/markers/MULTIMEDIA/BTM_multimedia_2.jpg',
          originalUrl: './images/bm/markers/MULTIMEDIA/BTM_multimedia_2.jpg',
          caption: 'Digital Hub'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/MULTIMEDIA/BTM_multimedia_2.jpg\'>\n        <img src=\'./images/bm/markers/MULTIMEDIA/BTM_multimedia_2.jpg\' alt=\'Digital Hub\' style=\'cursor:pointer;\' />\n        <h2>Digital Hub</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'gf',
      tags: ['kids', 'play', 'toys'],
    },
  },
  {
    id: 'bm-gf-kids-3',
    name: 'Ground Floor – Children’s Room Entrance',
    caption: 'BM – Ground Floor – Children’s Room Entrance',
    panorama: './images/bm/gf-kids/bm-gf-kids-3.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-3.jpg',
    defaultYaw: '320deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-reading-4',
        position: { yaw: '110.82deg', pitch: '-27.09deg' },
        name: 'Exit to Main Stacks',
      },
      {
        nodeId: 'bm-gf-kids-4',
        position: { yaw: '320deg', pitch: '-5deg' },
        name: 'Go to Children’s Reading Area',
      },
      {
        nodeId: 'bm-gf-kids-7',
        position: { yaw: '195.02deg', pitch: '-20.39deg' },
        name: 'Go to Children’s Room Passage',
      },
    ],
    markers: [
      {
        id: 'bm-gf-kids-3-marker-1789465846717',
        position: {
          yaw: '339.33deg',
          pitch: '-13.55deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahasa Melayu Kanak-Kanak',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bahasa Melayu Kanak-Kanak</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'gf',
      tags: ['kids', 'entrance', 'reading'],
    },
  },
  {
    id: 'bm-gf-kids-4',
    name: 'Ground Floor – Children’s Room Central',
    caption: 'BM – Ground Floor – Children’s Room Central',
    panorama: './images/bm/gf-kids/bm-gf-kids-4.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-4.jpg',
    defaultYaw: '350deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-kids-3',
        position: { yaw: '112.07deg', pitch: '-26.14deg' },
        name: 'Go to Room Entrance',
      },
      {
        nodeId: 'bm-gf-kids-5',
        position: { yaw: '24.19deg', pitch: '-28.48deg' },
        name: 'Go to Window Bay Area',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['kids', 'reading', 'books'],
    },
  },
  {
    id: 'bm-gf-kids-5',
    name: 'Ground Floor – Children’s Room Window Bay',
    caption: 'BM – Ground Floor – Children’s Room Window Bay',
    panorama: './images/bm/gf-kids/bm-gf-kids-5.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-5.jpg',
    defaultYaw: '85deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-kids-4',
        position: { yaw: '180deg', pitch: '-5deg' },
        name: 'Go to Central Reading Area',
      },
      {
        nodeId: 'bm-gf-kids-6',
        position: { yaw: '85deg', pitch: '-5deg' },
        name: 'Go to Learning Area',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['kids', 'reading', 'windows'],
    },
  },
  {
    id: 'bm-gf-kids-6',
    name: 'Ground Floor – Children’s Room Learning Area',
    caption: 'BM – Ground Floor – Children’s Room Learning Area',
    panorama: './images/bm/gf-kids/bm-gf-kids-6.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-6.jpg',
    defaultYaw: '90deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-kids-5',
        position: { yaw: '270deg', pitch: '-5deg' },
        name: 'Go to Window Bay',
      },
    ],
    markers: [],
    data: {
      floor: 'gf',
      tags: ['kids', 'learning', 'charts'],
    },
  },
  {
    id: 'bm-gf-kids-7',
    name: 'Ground Floor – Children’s Room Passage',
    caption: 'BM – Ground Floor – Children’s Room Passage',
    panorama: './images/bm/gf-kids/bm-gf-kids-7.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-7.jpg',
    defaultYaw: '10deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-kids-3',
        position: { yaw: '12.44deg', pitch: '-28.56deg' },
        name: 'Go to Room Entrance',
      },
      {
        nodeId: 'bm-gf-kids-8',
        position: { yaw: '189.10deg', pitch: '-23.66deg' },
        name: 'Go to Room Corner',
      },
    ],
    markers: [
      {
        id: 'bm-gf-kids-7-marker-1789465803427',
        position: {
          yaw: '165.20deg',
          pitch: '-22.46deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahasa Tamil Kanak-Kanak',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bahasa Tamil Kanak-Kanak</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'gf',
      tags: ['kids', 'passage', 'table'],
    },
  },
  {
    id: 'bm-gf-kids-8',
    name: 'Ground Floor – Children’s Room Corner',
    caption: 'BM – Ground Floor – Children’s Room Corner',
    panorama: './images/bm/gf-kids/bm-gf-kids-8.jpg',
    thumbnail: './images/bm/gf-kids/thumbs/bm-gf-kids-8.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-kids-7',
        position: { yaw: '12.21deg', pitch: '-24.09deg' },
        name: 'Return to Passage',
      },
    ],
    markers: [
      {
        id: "bm-gf-kids-8-custom-img",
        position: { yaw: '91.17deg', pitch: '-23.31deg' },
        element: (() => {
          const el = document.createElement('custom-marker');
          el.innerHTML = `
            <img src="./images/bm/gf-kids/markers/custom-marker-8-v2.jpg" alt="Bahasa Cina Kanak-Kanak 2" />
            <h2>Children's Corner</h2>
            <p>Bahasa Cina Kanak-Kanak 2</p>
          `;
          return el;
        })(),
        anchor: 'center center',
      },
      {
        id: 'bm-gf-kids-8-marker-1789465819817',
        position: {
          yaw: '91.09deg',
          pitch: '-21.25deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahasa Cina Kanak-Kanak',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bahasa Cina Kanak-Kanak</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'gf',
      tags: ['kids', 'corner', 'books'],
    },
  },
];
