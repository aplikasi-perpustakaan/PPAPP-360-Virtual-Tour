// ── locations/bm/bm-gf-reading.js ─────────────────────────────────────
// Ground Floor Reading / Book Stacks section for BM
// ────────────────────────────────────────────────────────────────

export default [
  {
    id: 'bm-gf-reading-1',
    name: 'Ground Floor – Book Stacks & Study Table 1',
    caption: 'BM – Ground Floor – Book Stacks & Study Table 1',
    panorama: './images/bm/gf-reading/bm-gf-reading-1.jpg',
    thumbnail: './images/bm/gf-reading/thumbs/bm-gf-reading-1.jpg',
    defaultYaw: '20deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-lobby-3',
        position: { yaw: '190deg', pitch: '-5deg' },
        name: 'Go to Reading Lounge',
      },
      {
        nodeId: 'bm-gf-reading-2',
        position: { yaw: '20deg', pitch: '-5deg' },
        name: 'Go to Study Table 2',
      },
    ],
    markers: [
      {
        id: 'bm-gf-reading-1-marker-1789464956705',
        position: {
          yaw: '143.40deg',
          pitch: '9.85deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahan Rujukan BM',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bahan Rujukan BM</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-reading-1-marker-1789464977129',
        position: {
          yaw: '332.14deg',
          pitch: '11.43deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Novel BI',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Novel BI</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-reading-1-marker-1789464924315',
        position: {
          yaw: '68.32deg',
          pitch: '-4.48deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Tandas',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/bm/markers/FACILITIES/BTM_facilities_1.jpg',
          originalUrl: './images/bm/markers/FACILITIES/BTM_facilities_1.jpg',
          caption: 'Tandas'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/FACILITIES/BTM_facilities_1.jpg\'>\n        <img src=\'./images/bm/markers/FACILITIES/BTM_facilities_1.jpg\' alt=\'Tandas\' style=\'cursor:pointer;\' />\n        <h2>Tandas</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'gf',
      tags: ['reading', 'books', 'stacks', 'study'],
    },
  },
  {
    id: 'bm-gf-reading-2',
    name: 'Ground Floor – Book Stacks & Study Table 2',
    caption: 'BM – Ground Floor – Book Stacks & Study Table 2',
    panorama: './images/bm/gf-reading/bm-gf-reading-2.jpg',
    thumbnail: './images/bm/gf-reading/thumbs/bm-gf-reading-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-reading-1',
        position: { yaw: '180deg', pitch: '-5deg' },
        name: 'Go to Study Table 1',
      },
      {
        nodeId: 'bm-gf-reading-3',
        position: { yaw: '276.84deg', pitch: '-32.85deg' },
        name: 'Go to Reference Collection',
      },
      {
        nodeId: 'bm-gf-kids-1',
        position: { yaw: '85deg', pitch: '-5deg' },
        name: 'Enter Kids Activity Area',
      },
    ],
    markers: [
      {
        id: 'bm-gf-reading-2-marker-1789465116670',
        position: {
          yaw: '21.02deg',
          pitch: '10.31deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bukan Fiksyen',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bukan Fiksyen</h2>\n        <p></p>\n      </custom-marker>'
      },
      
      
      {
        id: 'bm-gf-reading-2-marker-1789465156250',
        position: {
          yaw: '25.15deg',
          pitch: '4.17deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahasa Tamil',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bahasa Tamil</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-reading-2-marker-1789465167070',
        position: {
          yaw: '16.37deg',
          pitch: '4.08deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahasa Cina',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bahasa Cina</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-reading-2-marker-1789465198290',
        position: {
          yaw: '346.44deg',
          pitch: '8.90deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bukan Fiksyen',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bukan Fiksyen</h2>\n        <p></p>\n      </custom-marker>'
      },
      
      
      
      {
        id: 'bm-gf-reading-2-marker-1789465094058',
        position: {
          yaw: '101.36deg',
          pitch: '-3.96deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Bahagian Multimedia',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/bm/markers/MULTIMEDIA/BTM_multimedia_1.jpg',
          originalUrl: './images/bm/markers/MULTIMEDIA/BTM_multimedia_1.jpg',
          caption: 'Bahagian Multimedia'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/MULTIMEDIA/BTM_multimedia_1.jpg\'>\n        <img src=\'./images/bm/markers/MULTIMEDIA/BTM_multimedia_1.jpg\' alt=\'Bahagian Multimedia\' style=\'cursor:pointer;\' />\n        <h2>Bahagian Multimedia</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-reading-2-marker-1789465270857',
        position: {
          yaw: '310.95deg',
          pitch: '0.13deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Kakitangan Sahaja',
          icon: 'no-entry',
          color: 'red',
          animated: true,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'no-entry\' data-color=\'red\' animated>\n        <h2>Kakitangan Sahaja</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-reading-2-marker-1789465220833',
        position: {
          yaw: '346.55deg',
          pitch: '3.78deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'BM & BI 571 - 959',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/bm/markers/LOBBY/BTM_lobby_16.jpg',
          originalUrl: './images/bm/markers/LOBBY/BTM_lobby_16.jpg',
          caption: 'BM & BI 571 - 959'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/LOBBY/BTM_lobby_16.jpg\'>\n        <img src=\'./images/bm/markers/LOBBY/BTM_lobby_16.jpg\' alt=\'BM & BI 571 - 959\' style=\'cursor:pointer;\' />\n        <h2>BM & BI 571 - 959</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-reading-2-marker-1789465255534',
        position: {
          yaw: '321.56deg',
          pitch: '3.75deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'BM & BI 000 - 570',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/bm/markers/LOBBY/BTM_lobby_14.jpg',
          originalUrl: './images/bm/markers/LOBBY/BTM_lobby_14.jpg',
          caption: 'BM & BI 000 - 570'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/LOBBY/BTM_lobby_14.jpg\'>\n        <img src=\'./images/bm/markers/LOBBY/BTM_lobby_14.jpg\' alt=\'BM & BI 000 - 570\' style=\'cursor:pointer;\' />\n        <h2>BM & BI 000 - 570</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'gf',
      tags: ['reading', 'books', 'stacks', 'study'],
    },
  },
  {
    id: 'bm-gf-reading-3',
    name: 'Ground Floor – Reference Collection & Study Area',
    caption: 'BM – Ground Floor – Reference Collection & Study Area',
    panorama: './images/bm/gf-reading/bm-gf-reading-3.jpg',
    thumbnail: './images/bm/gf-reading/thumbs/bm-gf-reading-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-reading-2',
        position: { yaw: '98.22deg', pitch: '-25.01deg' },
        name: 'Go to Book Stacks & Study Table 2',
      },
      {
        nodeId: 'bm-gf-reading-4',
        position: { yaw: '188.61deg', pitch: '-17.44deg' },
        name: 'Go to Book Stacks Junction',
      },
    ],
    markers: [
      {
        id: 'bm-gf-reading-3-marker-1789465560604',
        position: {
          yaw: '241.20deg',
          pitch: '17.82deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Buku Rujukan',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Buku Rujukan</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-reading-3-marker-1789465591374',
        position: {
          yaw: '165.87deg',
          pitch: '5.72deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Novel BM',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/bm/markers/LOBBY/BTM_lobby_13.jpg',
          originalUrl: './images/bm/markers/LOBBY/BTM_lobby_13.jpg',
          caption: 'Novel BM'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/LOBBY/BTM_lobby_13.jpg\'>\n        <img src=\'./images/bm/markers/LOBBY/BTM_lobby_13.jpg\' alt=\'Novel BM\' style=\'cursor:pointer;\' />\n        <h2>Novel BM</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'gf',
      tags: ['reading', 'reference', 'books', 'stacks'],
    },
  },
  {
    id: 'bm-gf-reading-4',
    name: 'Ground Floor – Book Stacks Junction',
    caption: 'BM – Ground Floor – Book Stacks Junction',
    panorama: './images/bm/gf-reading/bm-gf-reading-4.jpg',
    thumbnail: './images/bm/gf-reading/thumbs/bm-gf-reading-4.jpg',
    defaultYaw: '280deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-reading-3',
        position: { yaw: '8.88deg', pitch: '-14.49deg' },
        name: 'Go to Reference Collection',
      },
      {
        nodeId: 'bm-gf-reading-5',
        position: { yaw: '189.36deg', pitch: '-29.89deg' },
        name: 'Go to Book Return Area',
      },
      {
        nodeId: 'bm-gf-kids-3',
        position: { yaw: '280deg', pitch: '-5deg' },
        name: 'Enter Children’s Reading Room',
      },
    ],
    markers: [
      {
        id: 'bm-gf-reading-4-marker-1789465622155',
        position: {
          yaw: '335.77deg',
          pitch: '13.63deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahan Rujukan',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bahan Rujukan</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'bm-gf-reading-4-marker-1789465768850',
        position: {
          yaw: '282.39deg',
          pitch: '20.75deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Bahagian Kanak-Kanak',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/bm/markers/LOBBY/BTM_lobby_31.jpg',
          originalUrl: './images/bm/markers/LOBBY/BTM_lobby_31.jpg',
          caption: 'Bahagian Kanak-Kanak'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/bm/markers/LOBBY/BTM_lobby_31.jpg\'>\n        <img src=\'./images/bm/markers/LOBBY/BTM_lobby_31.jpg\' alt=\'Bahagian Kanak-Kanak\' style=\'cursor:pointer;\' />\n        <h2>Bahagian Kanak-Kanak</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'gf',
      tags: ['reading', 'books', 'stacks', 'junction'],
    },
  },
  {
    id: 'bm-gf-reading-5',
    name: 'Ground Floor – Book Stacks & Book Return Area',
    caption: 'BM – Ground Floor – Book Stacks & Book Return Area',
    panorama: './images/bm/gf-reading/bm-gf-reading-5.jpg',
    thumbnail: './images/bm/gf-reading/thumbs/bm-gf-reading-5.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'bm-gf-reading-4',
        position: { yaw: '3.59deg', pitch: '-20.86deg' },
        name: 'Go to Book Stacks Junction',
      },
      {
        nodeId: 'bm-gf-lobby-2',
        position: { yaw: '150.63deg', pitch: '-32.40deg' },
        name: 'Return to Main Lobby',
      },
    ],
    markers: [
      {
        id: 'bm-gf-reading-5-marker-1789465874602',
        position: {
          yaw: '103.87deg',
          pitch: '-1.95deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Kakitangan Sahaja',
          icon: 'no-entry',
          color: 'red',
          animated: true,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'no-entry\' data-color=\'red\' animated>\n        <h2>Kakitangan Sahaja</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'gf',
      tags: ['reading', 'books', 'stacks', 'return'],
    },
  },
];
