// Floor 1 Main Area Section for GT
export default [
  {
    id: 'gt-f1-main-area-1',
    name: 'Floor 1 – Main Area 1',
    caption: 'GT – Floor 1 – Main Area 1',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-1.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-2',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 2',
      },
      {
        nodeId: 'gt-ext-outside-8',
        position: { yaw: '187.71deg', pitch: '-10deg' },
        name: 'Go to Outside 8'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-1-marker-1789540403193',
        position: {
          yaw: '282.10deg',
          pitch: '-2.50deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Buku sumbangan percuma',
          icon: 'info',
          color: 'blue',
          animated: true,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\' animated>\n        <h2>Buku sumbangan percuma</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-2',
    name: 'Floor 1 – Main Area 2',
    caption: 'GT – Floor 1 – Main Area 2',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-2.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-1',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 1',
      },
      {
        nodeId: 'gt-f1-main-area-3',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 3',
      }
    ],
    markers: [
      {
        id: 'gt-f1-main-area-2-marker-1789531215433',
        position: {
          yaw: '0.84deg',
          pitch: '-10.96deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'PPAPP @ Daerah Timur Laut',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_lobby_7.jpg',
          originalUrl: './images/gt/markers/GT_lobby_7.jpg',
          caption: 'PPAPP @ Daerah Timur Laut'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_7.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_7.jpg\' alt=\'PPAPP @ Daerah Timur Laut\' style=\'cursor:pointer;\' />\n        <h2>PPAPP @ Daerah Timur Laut</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-3',
    name: 'Floor 1 – Main Area 3',
    caption: 'GT – Floor 1 – Main Area 3',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-3.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-2',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 2',
      },
      {
        nodeId: 'gt-f1-main-area-4',
        position: { yaw: '274.98deg', pitch: '-3.03deg' },
        name: 'Go to Area 4',
      }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-4',
    name: 'Floor 1 – Main Area 4',
    caption: 'GT – Floor 1 – Main Area 4',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-4.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-3',
        position: { yaw: '97.54deg', pitch: '-5.77deg' },
        name: 'Go to Area 3',
      },
      {
        nodeId: 'gt-f1-main-area-5',
        position: { yaw: '183.37deg', pitch: '-2.29deg' },
        name: 'Go to Area 5',
        targetYaw: '179.34deg',
        targetPitch: '-4.46deg'
      },
      
      
      {
        nodeId: 'gt-f1-main-area-6',
        position: { yaw: '274.78deg', pitch: '-7.19deg' },
        name: 'Go to Main Area 6'
      },
      {
        nodeId: 'gt-f1-main-area-8',
        position: { yaw: '346.88deg', pitch: '-6.42deg' },
        name: 'Go to Main Area 8'
      },
      {
        nodeId: 'gt-f1-main-area-9',
        position: { yaw: '4.47deg', pitch: '-10deg' },
        name: 'Go to Main Area 9'
      },
      {
        nodeId: 'gt-stairs-1',
        position: { yaw: '31.22deg', pitch: '-5.19deg' },
        name: 'Go to Stairs 1'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-5',
    name: 'Floor 1 – Main Area 5',
    caption: 'GT – Floor 1 – Main Area 5',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-5.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-5.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-4',
        position: { yaw: '350.79deg', pitch: '-8.55deg' },
        name: 'Go to Area 4',
      }
    ],
    markers: [
      {
        id: 'gt-f1-main-area-5-marker-1789557480930',
        position: {
          yaw: '179.61deg',
          pitch: '-17.36deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'E-Sport',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>E-Sport</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-6',
    name: 'Floor 1 – Main Area 6',
    caption: 'GT – Floor 1 – Main Area 6',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-6.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-6.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-7',
        position: { yaw: '274.60deg', pitch: '-7.01deg' },
        name: 'Go to Area 7',
      },
      {
        nodeId: 'gt-f1-main-area-4',
        position: { yaw: '94.78deg', pitch: '-10deg' },
        name: 'Go to Main Area 4'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-6-marker-1789536748660',
        position: {
          yaw: '350.78deg',
          pitch: '-9.06deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Waktu Perkhidmatan',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_lobby_1.jpg',
          originalUrl: './images/gt/markers/GT_lobby_1.jpg',
          caption: 'Waktu Perkhidmatan'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_1.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_1.jpg\' alt=\'Waktu Perkhidmatan\' style=\'cursor:pointer;\' />\n        <h2>Waktu Perkhidmatan</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-6-marker-1789540429010',
        position: {
          yaw: '189.74deg',
          pitch: '-8.50deg'
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
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-7',
    name: 'Floor 1 – Main Area 7',
    caption: 'GT – Floor 1 – Main Area 7',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-7.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-7.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-6',
        position: { yaw: '95.33deg', pitch: '-3.66deg' },
        name: 'Go to Area 6',
      }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-8',
    name: 'Floor 1 – Main Area 8',
    caption: 'GT – Floor 1 – Main Area 8',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-8.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-8.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-9',
        position: { yaw: '48.73deg', pitch: '0deg' },
        name: 'Go to Area 9',
      },
      {
        nodeId: 'gt-f1-main-area-4',
        position: { yaw: '166.88deg', pitch: '-10deg' },
        name: 'Go to Main Area 4'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-8-marker-1789536829691',
        position: {
          yaw: '287.92deg',
          pitch: '1.39deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Visi & Misi PPAPP',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_lobby_5.jpg',
          originalUrl: './images/gt/markers/GT_lobby_5.jpg',
          caption: 'Visi & Misi PPAPP'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_5.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_5.jpg\' alt=\'Visi & Misi PPAPP\' style=\'cursor:pointer;\' />\n        <h2>Visi & Misi PPAPP</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-8-marker-1789536822305',
        position: {
          yaw: '293.09deg',
          pitch: '-0.30deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Piagam Pelanggan',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_lobby_4.jpg',
          originalUrl: './images/gt/markers/GT_lobby_4.jpg',
          caption: 'Piagam Pelanggan'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_4.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_4.jpg\' alt=\'Piagam Pelanggan\' style=\'cursor:pointer;\' />\n        <h2>Piagam Pelanggan</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-8-marker-1789538237445',
        position: {
          yaw: '298.00deg',
          pitch: '1.22deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Skop Penyediaan Perkhidmatan Perpustakaan & Informasi',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_lobby_10.jpg',
          originalUrl: './images/gt/markers/GT_lobby_10.jpg',
          caption: 'Skop Penyediaan Perkhidmatan Perpustakaan & Informasi'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_10.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_10.jpg\' alt=\'Skop Penyediaan Perkhidmatan Perpustakaan & Informasi\' style=\'cursor:pointer;\' />\n        <h2>Skop Penyediaan Perkhidmatan Perpustakaan & Informasi</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-8-marker-1789557434055',
        position: {
          yaw: '249.40deg',
          pitch: '-38.35deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Kaunter Peminjaman & Pemulangan',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Kaunter Peminjaman & Pemulangan</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-9',
    name: 'Floor 1 – Main Area 9',
    caption: 'GT – Floor 1 – Main Area 9',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-9.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-9.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-10',
        position: { yaw: '273.72deg', pitch: '0deg' },
        name: 'Go to Area 10',
      },
      
      {
        nodeId: 'gt-f1-main-area-8',
        position: { yaw: '233.33deg', pitch: '-9.34deg' },
        name: 'Go to Area 8',
      },
      {
        nodeId: 'gt-f1-main-area-11',
        position: { yaw: '310.92deg', pitch: '-10deg' },
        name: 'Go to Main Area 11'
      },
      

      {
        nodeId: 'gt-f1-main-area-12',
        position: { yaw: '63.95deg', pitch: '-9.94deg' },
        name: 'Go to Main Area 12'
      },
      {
        nodeId: 'gt-f1-main-area-4',
        position: { yaw: '184.47deg', pitch: '-2.93deg' },
        name: 'Go to Main Area 4'
      },
      {
        nodeId: 'gt-f1-main-area-14',
        position: { yaw: '3.76deg', pitch: '-5.85deg' },
        name: 'Go to Main Area 14'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-10',
    name: 'Floor 1 – Main Area 10',
    caption: 'GT – Floor 1 – Main Area 10',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-10.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-10.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-9',
        position: { yaw: '88.61deg', pitch: '-49.29deg' },
        name: 'Go to Area 9',
        targetYaw: '0.00deg',
        targetPitch: '0.00deg'
      },
      
      {
        nodeId: 'gt-f1-main-area-11',
        position: { yaw: '47.53deg', pitch: '-6.62deg' },
        name: 'Go to Main Area 11'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-10-marker-1789538194527',
        position: {
          yaw: '231.06deg',
          pitch: '4.97deg'
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
          imageSrc: './images/gt/markers/GT_lobby_5.jpg',
          originalUrl: './images/gt/markers/GT_lobby_5.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_5.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_5.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-10-marker-1789538207754',
        position: {
          yaw: '237.14deg',
          pitch: '1.84deg'
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
          imageSrc: './images/gt/markers/GT_lobby_4.jpg',
          originalUrl: './images/gt/markers/GT_lobby_4.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_4.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_4.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-10-marker-1789538216474',
        position: {
          yaw: '244.44deg',
          pitch: '4.30deg'
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
          imageSrc: './images/gt/markers/GT_lobby_10.jpg',
          originalUrl: './images/gt/markers/GT_lobby_10.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_10.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_10.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-11',
    name: 'Floor 1 – Main Area 11',
    caption: 'GT – Floor 1 – Main Area 11',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-11.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-11.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-10',
        position: { yaw: '227.53deg', pitch: '-10deg' },
        name: 'Go to Main Area 10'
      },
      
      
      {
        nodeId: 'gt-f1-main-area-12',
        position: { yaw: '91.60deg', pitch: '-9.21deg' },
        name: 'Go to Main Area 12'
      },
      
      {
        nodeId: 'gt-f1-main-area-9',
        position: { yaw: '130.92deg', pitch: '-10.56deg' },
        name: 'Go to Main Area 9'
      },
      {
        nodeId: 'gt-f1-main-area-13',
        position: { yaw: '46.27deg', pitch: '-6.03deg' },
        name: 'Go to Main Area 13'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-11-marker-1789531431102',
        position: {
          yaw: '3.77deg',
          pitch: '-35.38deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Kiosk peminjaman / pemulangan buku (layan diri)',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_lobby_3.jpg',
          originalUrl: './images/gt/markers/GT_lobby_3.jpg',
          caption: 'Kiosk peminjaman / pemulangan buku (layan diri)'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_3.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_3.jpg\' alt=\'Kiosk peminjaman / pemulangan buku (layan diri)\' style=\'cursor:pointer;\' />\n        <h2>Kiosk peminjaman / pemulangan buku (layan diri)</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-12',
    name: 'Floor 1 – Main Area 12',
    caption: 'GT – Floor 1 – Main Area 12',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-12.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-12.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-11',
        position: { yaw: '271.60deg', pitch: '-10deg' },
        name: 'Go to Main Area 11'
      },
      
      {
        nodeId: 'gt-f1-main-area-13',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 13',
      },
      {
        nodeId: 'gt-f1-main-area-9',
        position: { yaw: '243.95deg', pitch: '-10deg' },
        name: 'Go to Main Area 9'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-12-marker-1789538261374',
        position: {
          yaw: '61.05deg',
          pitch: '-21.15deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Pencapaian',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_lobby_8.jpg',
          originalUrl: './images/gt/markers/GT_lobby_8.jpg',
          caption: 'Pencapaian'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_8.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_8.jpg\' alt=\'Pencapaian\' style=\'cursor:pointer;\' />\n        <h2>Pencapaian</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-12-marker-1789538281717',
        position: {
          yaw: '120.78deg',
          pitch: '-24.64deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Bahan Baru Untuk Pinjaman',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_lobby_6.jpg',
          originalUrl: './images/gt/markers/GT_lobby_6.jpg',
          caption: 'Bahan Baru Untuk Pinjaman'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_6.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_6.jpg\' alt=\'Bahan Baru Untuk Pinjaman\' style=\'cursor:pointer;\' />\n        <h2>Bahan Baru Untuk Pinjaman</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-13',
    name: 'Floor 1 – Main Area 13',
    caption: 'GT – Floor 1 – Main Area 13',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-13.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-13.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-12',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 12',
      },
      {
        nodeId: 'gt-f1-main-area-14',
        position: { yaw: '254.58deg', pitch: '-5.34deg' },
        name: 'Go to Main Area 14'
      },
      {
        nodeId: 'gt-f1-main-area-21',
        position: { yaw: '19.48deg', pitch: '-10deg' },
        name: 'Go to Main Area 21'
      },
      {
        nodeId: 'gt-f1-main-area-24',
        position: { yaw: '59.32deg', pitch: '-6.13deg' },
        name: 'Go to Main Area 24'
      },
      {
        nodeId: 'gt-f1-main-area-11',
        position: { yaw: '226.27deg', pitch: '-10deg' },
        name: 'Go to Main Area 11'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-14',
    name: 'Floor 1 – Main Area 14',
    caption: 'GT – Floor 1 – Main Area 14',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-14.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-14.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-13',
        position: { yaw: '74.58deg', pitch: '-10deg' },
        name: 'Go to Main Area 13'
      },
      
      {
        nodeId: 'gt-f1-main-area-15',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 15',
      },
      {
        nodeId: 'gt-f1-main-area-9',
        position: { yaw: '183.76deg', pitch: '-10deg' },
        name: 'Go to Main Area 9'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-15',
    name: 'Floor 1 – Main Area 15',
    caption: 'GT – Floor 1 – Main Area 15',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-15.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-15.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-14',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 14',
      },
      {
        nodeId: 'gt-f1-main-area-16',
        position: { yaw: '281.85deg', pitch: '-4.44deg' },
        name: 'Go to Area 16',
      },
      {
        nodeId: 'gt-f1-main-area-19',
        position: { yaw: '2.37deg', pitch: '-9.79deg' },
        name: 'Go to Main Area 19'
      },
      {
        nodeId: 'gt-f1-main-area-21',
        position: { yaw: '97.34deg', pitch: '-10deg' },
        name: 'Go to Main Area 21'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-15-marker-1789536354348',
        position: {
          yaw: '211.48deg',
          pitch: '-3.20deg'
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
          imageSrc: './images/gt/markers/GT_reference_1.jpg',
          originalUrl: './images/gt/markers/GT_reference_1.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_reference_1.jpg\'>\n        <img src=\'./images/gt/markers/GT_reference_1.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-16',
    name: 'Floor 1 – Main Area 16',
    caption: 'GT – Floor 1 – Main Area 16',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-16.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-16.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-15',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 15',
      },
      {
        nodeId: 'gt-f1-main-area-17',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 17',
      },
      {
        nodeId: 'gt-f1-main-area-19',
        position: { yaw: '66.06deg', pitch: '-10deg' },
        name: 'Go to Main Area 19'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-16-marker-1789536282691',
        position: {
          yaw: '321.04deg',
          pitch: '-8.49deg'
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
          imageSrc: './images/gt/markers/GT_lobby_9.jpg',
          originalUrl: './images/gt/markers/GT_lobby_9.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_lobby_9.jpg\'>\n        <img src=\'./images/gt/markers/GT_lobby_9.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-17',
    name: 'Floor 1 – Main Area 17',
    caption: 'GT – Floor 1 – Main Area 17',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-17.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-17.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-16',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 16',
      },
      {
        nodeId: 'gt-f1-main-area-18',
        position: { yaw: '278.61deg', pitch: '-7.86deg' },
        name: 'Go to Main Area 18'
      },
      
      {
        nodeId: 'gt-f1-main-area-19',
        position: { yaw: '130.67deg', pitch: '-10deg' },
        name: 'Go to Main Area 19'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-17-marker-1789533462020',
        position: {
          yaw: '344.61deg',
          pitch: '-28.93deg'
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
          imageSrc: './images/gt/markers/GT_billboard_4.jpg',
          originalUrl: './images/gt/markers/GT_billboard_4.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_billboard_4.jpg\'>\n        <img src=\'./images/gt/markers/GT_billboard_4.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-17-marker-1789533475948',
        position: {
          yaw: '8.39deg',
          pitch: '-26.61deg'
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
          imageSrc: './images/gt/markers/GT_billboard_6.jpg',
          originalUrl: './images/gt/markers/GT_billboard_6.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_billboard_6.jpg\'>\n        <img src=\'./images/gt/markers/GT_billboard_6.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-17-marker-1789533494630',
        position: {
          yaw: '33.78deg',
          pitch: '-28.56deg'
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
          imageSrc: './images/gt/markers/GT_billboard_5.jpg',
          originalUrl: './images/gt/markers/GT_billboard_5.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_billboard_5.jpg\'>\n        <img src=\'./images/gt/markers/GT_billboard_5.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-18',
    name: 'Floor 1 – Main Area 18',
    caption: 'GT – Floor 1 – Main Area 18',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-18.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-18.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-17',
        position: { yaw: '98.61deg', pitch: '-10deg' },
        name: 'Go to Main Area 17'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-18-marker-1789533387258',
        position: {
          yaw: '359.31deg',
          pitch: '-25.50deg'
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
          imageSrc: './images/gt/markers/GT_billboard_2.jpg',
          originalUrl: './images/gt/markers/GT_billboard_2.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_billboard_2.jpg\'>\n        <img src=\'./images/gt/markers/GT_billboard_2.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-18-marker-1789533353123',
        position: {
          yaw: '336.81deg',
          pitch: '-27.93deg'
        },
        size: {
          width: 56,
          height: 56
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: '',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_billboard_3.jpg',
          originalUrl: './images/gt/markers/GT_billboard_3.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_billboard_3.jpg\'>\n        <img src=\'./images/gt/markers/GT_billboard_3.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-18-marker-1789533431133',
        position: {
          yaw: '26.09deg',
          pitch: '-29.58deg'
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
          imageSrc: './images/gt/markers/GT_billboard_1.jpg',
          originalUrl: './images/gt/markers/GT_billboard_1.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_billboard_1.jpg\'>\n        <img src=\'./images/gt/markers/GT_billboard_1.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-19',
    name: 'Floor 1 – Main Area 19',
    caption: 'GT – Floor 1 – Main Area 19',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-19.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-19.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-20',
        position: { yaw: '27.36deg', pitch: '-2.19deg' },
        name: 'Go to Area 20',
      },
      {
        nodeId: 'gt-f1-main-area-15',
        position: { yaw: '182.37deg', pitch: '-10deg' },
        name: 'Go to Main Area 15'
      },
      {
        nodeId: 'gt-f1-main-area-17',
        position: { yaw: '310.67deg', pitch: '-4.29deg' },
        name: 'Go to Main Area 17'
      },
      {
        nodeId: 'gt-f1-main-area-16',
        position: { yaw: '246.06deg', pitch: '-4.52deg' },
        name: 'Go to Main Area 16'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-20',
    name: 'Floor 1 – Main Area 20',
    caption: 'GT – Floor 1 – Main Area 20',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-20.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-20.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-19',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 19',
      },
      {
        nodeId: 'gt-f1-main-area-22',
        position: { yaw: '120.13deg', pitch: '-10deg' },
        name: 'Go to Main Area 22'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-21',
    name: 'Floor 1 – Main Area 21',
    caption: 'GT – Floor 1 – Main Area 21',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-21.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-21.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-22',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 22',
      },
      {
        nodeId: 'gt-f1-main-area-24',
        position: { yaw: '166.65deg', pitch: '-16.64deg' },
        name: 'Go to Main Area 24'
      },
      {
        nodeId: 'gt-f1-main-area-28',
        position: { yaw: '92.25deg', pitch: '-10deg' },
        name: 'Go to Main Area 28'
      },
      {
        nodeId: 'gt-f1-main-area-15',
        position: { yaw: '277.34deg', pitch: '-5.99deg' },
        name: 'Go to Main Area 15'
      },
      {
        nodeId: 'gt-f1-main-area-13',
        position: { yaw: '199.48deg', pitch: '-7.74deg' },
        name: 'Go to Main Area 13'
      },
      {
        nodeId: 'gt-f1-main-area-23',
        position: { yaw: '51.82deg', pitch: '-10.53deg' },
        name: 'Go to Main Area 23',
        targetYaw: '96.94deg',
        targetPitch: '-1.60deg'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-21-marker-1789535919873',
        position: {
          yaw: '296.99deg',
          pitch: '-8.70deg'
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
          imageSrc: './images/gt/markers/GT_reading_4.jpg',
          originalUrl: './images/gt/markers/GT_reading_4.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_reading_4.jpg\'>\n        <img src=\'./images/gt/markers/GT_reading_4.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-22',
    name: 'Floor 1 – Main Area 22',
    caption: 'GT – Floor 1 – Main Area 22',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-22.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-22.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-21',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 21',
      },
      {
        nodeId: 'gt-f1-main-area-23',
        position: { yaw: '129.54deg', pitch: '0.80deg' },
        name: 'Go to Area 23',
      },
      {
        nodeId: 'gt-f1-main-area-20',
        position: { yaw: '300.13deg', pitch: '-7.45deg' },
        name: 'Go to Main Area 20'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-22-marker-1789540555230',
        position: {
          yaw: '50.77deg',
          pitch: '-7.79deg'
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
        id: 'gt-f1-main-area-22-marker-1789617982604',
        position: {
          yaw: '79.94deg',
          pitch: '-9.80deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Majalah',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Majalah</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-23',
    name: 'Floor 1 – Main Area 23',
    caption: 'GT – Floor 1 – Main Area 23',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-23.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-23.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-22',
        position: { yaw: '336.56deg', pitch: '-5.99deg' },
        name: 'Go to Area 22',
      },
      {
        nodeId: 'gt-f1-main-area-21',
        position: { yaw: '232.85deg', pitch: '-8.46deg' },
        name: 'Go to Main Area 21',
        targetYaw: '192.00deg',
        targetPitch: '-4.48deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-24',
    name: 'Floor 1 – Main Area 24',
    caption: 'GT – Floor 1 – Main Area 24',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-24.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-24.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-25',
        position: { yaw: '97.70deg', pitch: '-5.64deg' },
        name: 'Go to Area 25',
      },
      
      {
        nodeId: 'gt-f1-main-area-21',
        position: { yaw: '346.65deg', pitch: '-10deg' },
        name: 'Go to Main Area 21'
      },
      {
        nodeId: 'gt-f1-main-area-13',
        position: { yaw: '239.32deg', pitch: '-10deg' },
        name: 'Go to Main Area 13'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-25',
    name: 'Floor 1 – Main Area 25',
    caption: 'GT – Floor 1 – Main Area 25',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-25.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-25.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-24',
        position: { yaw: '274.66deg', pitch: '-8.61deg' },
        name: 'Go to Area 24',
      },
      {
        nodeId: 'gt-f1-main-area-26',
        position: { yaw: '92.57deg', pitch: '-3.26deg' },
        name: 'Go to Area 26',
      }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-26',
    name: 'Floor 1 – Main Area 26',
    caption: 'GT – Floor 1 – Main Area 26',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-26.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-26.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-25',
        position: { yaw: '276.26deg', pitch: '-4.67deg' },
        name: 'Go to Area 25',
      },
      {
        nodeId: 'gt-f1-main-area-27',
        position: { yaw: '95.09deg', pitch: '-8.25deg' },
        name: 'Go to Area 27',
      }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-27',
    name: 'Floor 1 – Main Area 27',
    caption: 'GT – Floor 1 – Main Area 27',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-27.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-27.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-26',
        position: { yaw: '276.07deg', pitch: '-3.20deg' },
        name: 'Go to Area 26',
      },
      {
        nodeId: 'gt-f1-main-area-28',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 28',
      }
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-28',
    name: 'Floor 1 – Main Area 28',
    caption: 'GT – Floor 1 – Main Area 28',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-28.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-28.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-27',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 27',
      },
      {
        nodeId: 'gt-f1-main-area-29',
        position: { yaw: '96.22deg', pitch: '-10deg' },
        name: 'Go to Main Area 29'
      },
      {
        nodeId: 'gt-f1-main-area-21',
        position: { yaw: '272.25deg', pitch: '-14.47deg' },
        name: 'Go to Main Area 21'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-29',
    name: 'Floor 1 – Main Area 29',
    caption: 'GT – Floor 1 – Main Area 29',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-29.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-29.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-28',
        position: { yaw: '276.22deg', pitch: '-9.26deg' },
        name: 'Go to Main Area 28'
      },
      
      {
        nodeId: 'gt-f1-main-area-30',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 30',
      },
      {
        nodeId: 'gt-f1-main-area-65',
        position: { yaw: '99.24deg', pitch: '-9.98deg' },
        name: 'Go to Main Area 65'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-29-marker-1789558061489',
        position: {
          yaw: '10.76deg',
          pitch: '-4.80deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Kakitangan sahaja',
          icon: 'no-entry',
          color: 'red',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'no-entry\' data-color=\'red\'>\n        <h2>Kakitangan sahaja</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-30',
    name: 'Floor 1 – Main Area 30',
    caption: 'GT – Floor 1 – Main Area 30',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-30.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-30.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-29',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 29',
      },
      {
        nodeId: 'gt-f1-main-area-61',
        position: { yaw: '358.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 61',
      },
      {
        nodeId: 'gt-f1-main-area-63',
        position: { yaw: '96.53deg', pitch: '-9.83deg' },
        name: 'Go to Main Area 63'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-30-marker-1789540516739',
        position: {
          yaw: '13.08deg',
          pitch: '-3.49deg'
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
        id: 'gt-f1-main-area-30-marker-1789540528963',
        position: {
          yaw: '355.83deg',
          pitch: '-3.63deg'
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
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-61',
    name: 'Floor 1 – Main Area 61',
    caption: 'GT – Floor 1 – Main Area 61',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-61.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-61.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-30',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 30',
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-62',
    name: 'Floor 1 – Main Area 62',
    caption: 'GT – Floor 1 – Main Area 62',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-62.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-62.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-63',
    name: 'Floor 1 – Main Area 63',
    caption: 'GT – Floor 1 – Main Area 63',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-63.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-63.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-66',
        position: { yaw: '92.97deg', pitch: '-16.50deg' },
        name: 'Go to Main Area 66'
      },
      
      {
        nodeId: 'gt-f1-main-area-30',
        position: { yaw: '276.53deg', pitch: '-10deg' },
        name: 'Go to Main Area 30'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-64',
    name: 'Floor 1 – Main Area 64',
    caption: 'GT – Floor 1 – Main Area 64',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-64.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-64.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-65',
        position: { yaw: '3.78deg', pitch: '-9.96deg' },
        name: 'Go to Main Area 65'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-65',
    name: 'Floor 1 – Main Area 65',
    caption: 'GT – Floor 1 – Main Area 65',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-65.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-65.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-64',
        position: { yaw: '183.78deg', pitch: '-10deg' },
        name: 'Go to Main Area 64'
      },
      
      
      {
        nodeId: 'gt-f1-main-area-66',
        position: { yaw: '3.40deg', pitch: '-1.48deg' },
        name: 'Go to Area 66',
        targetYaw: '2.03deg',
        targetPitch: '-1.10deg'
      },
      
      
      {
        nodeId: 'gt-f1-main-area-71',
        position: { yaw: '98.96deg', pitch: '-6.12deg' },
        name: 'Go to Main Area 71'
      },
      {
        nodeId: 'gt-f1-main-area-29',
        position: { yaw: '279.24deg', pitch: '-10deg' },
        name: 'Go to Main Area 29'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-66',
    name: 'Floor 1 – Main Area 66',
    caption: 'GT – Floor 1 – Main Area 66',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-66.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-66.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-65',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 65',
      },
      {
        nodeId: 'gt-f1-main-area-67',
        position: { yaw: '1.53deg', pitch: '-3.27deg' },
        name: 'Go to Area 67',
        targetYaw: '358.27deg',
        targetPitch: '-3.83deg'
      },
      
      
      {
        nodeId: 'gt-f1-main-area-63',
        position: { yaw: '272.97deg', pitch: '-10deg' },
        name: 'Go to Main Area 63'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-67',
    name: 'Floor 1 – Main Area 67',
    caption: 'GT – Floor 1 – Main Area 67',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-67.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-67.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-66',
        position: { yaw: '178.45deg', pitch: '-8.15deg' },
        name: 'Go to Area 66',
      },
      {
        nodeId: 'gt-f1-main-area-68',
        position: { yaw: '95.34deg', pitch: '-10deg' },
        name: 'Go to Main Area 68'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-67-marker-1789540496633',
        position: {
          yaw: '355.24deg',
          pitch: '-8.05deg'
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
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-68',
    name: 'Floor 1 – Main Area 68',
    caption: 'GT – Floor 1 – Main Area 68',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-68.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-68.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-67',
        position: { yaw: '275.34deg', pitch: '-5.56deg' },
        name: 'Go to Main Area 67'
      },
      
      {
        nodeId: 'gt-f1-main-area-69',
        position: { yaw: '166.08deg', pitch: '-10deg' },
        name: 'Go to Main Area 69'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-68-marker-1789534295048',
        position: {
          yaw: '53.53deg',
          pitch: '-21.50deg'
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
          imageSrc: './images/gt/markers/GT_kids_1.jpg',
          originalUrl: './images/gt/markers/GT_kids_1.jpg',
          caption: ''
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_kids_1.jpg\'>\n        <img src=\'./images/gt/markers/GT_kids_1.jpg\' alt=\'\' style=\'cursor:pointer;\' />\n        <h2></h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-68-marker-1789558300071',
        position: {
          yaw: '85.39deg',
          pitch: '-1.22deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Mainan Untuk Kanak Kanak',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Mainan Untuk Kanak Kanak</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-68-marker-1789558311853',
        position: {
          yaw: '100.16deg',
          pitch: '-0.55deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Mainan Untuk Kanak Kanak',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Mainan Untuk Kanak Kanak</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-69',
    name: 'Floor 1 – Main Area 69',
    caption: 'GT – Floor 1 – Main Area 69',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-69.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-69.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-68',
        position: { yaw: '346.08deg', pitch: '-9.15deg' },
        name: 'Go to Main Area 68'
      },
      
      {
        nodeId: 'gt-f1-main-area-70',
        position: { yaw: '270.82deg', pitch: '-7.95deg' },
        name: 'Go to Main Area 70',
        targetYaw: '274.57deg',
        targetPitch: '2.05deg'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-69-marker-1789557366958',
        position: {
          yaw: '94.89deg',
          pitch: '-36.42deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Kaunter Pemulangan Bahan Kanak-kanak & I-Play toy',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Kaunter Pemulangan Bahan Kanak-kanak & I-Play toy</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-70',
    name: 'Floor 1 – Main Area 70',
    caption: 'GT – Floor 1 – Main Area 70',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-70.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-70.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-69',
        position: { yaw: '90.82deg', pitch: '-2.87deg' },
        name: 'Go to Main Area 69'
      },
      
      
      {
        nodeId: 'gt-f1-main-area-71',
        position: { yaw: '186.58deg', pitch: '-6.22deg' },
        name: 'Go to Main Area 71',
        targetYaw: '186.94deg',
        targetPitch: '-0.84deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-71',
    name: 'Floor 1 – Main Area 71',
    caption: 'GT – Floor 1 – Main Area 71',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-71.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-71.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-70',
        position: { yaw: '350.04deg', pitch: '-7.25deg' },
        name: 'Go to Main Area 70'
      },
      
      {
        nodeId: 'gt-f1-main-area-72',
        position: { yaw: '99.66deg', pitch: '-13.27deg' },
        name: 'Go to Main Area 72'
      },
      
      {
        nodeId: 'gt-f1-main-area-65',
        position: { yaw: '278.96deg', pitch: '-10deg' },
        name: 'Go to Main Area 65'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-72',
    name: 'Floor 1 – Main Area 72',
    caption: 'GT – Floor 1 – Main Area 72',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-72.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-72.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-71',
        position: { yaw: '279.66deg', pitch: '-10deg' },
        name: 'Go to Main Area 71'
      },
      
      {
        nodeId: 'gt-f1-main-area-73',
        position: { yaw: '23.47deg', pitch: '-3.42deg' },
        name: 'Go to Main Area 73'
      },
      {
        nodeId: 'gt-f1-i-play-toy-1',
        position: { yaw: '195.40deg', pitch: '-8.85deg' },
        name: 'Go to i-Play Toy 1'
      },
    ],
    markers: [
      {
        id: 'gt-f1-main-area-72-marker-1789533944500',
        position: {
          yaw: '189.28deg',
          pitch: '-2.57deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Notis',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_iplay_7.jpg',
          originalUrl: './images/gt/markers/GT_iplay_7.jpg',
          caption: 'Notis'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_iplay_7.jpg\'>\n        <img src=\'./images/gt/markers/GT_iplay_7.jpg\' alt=\'Notis\' style=\'cursor:pointer;\' />\n        <h2>Notis</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-72-marker-1789533960801',
        position: {
          yaw: '195.80deg',
          pitch: '-2.86deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Notis',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_iplay_5.jpg',
          originalUrl: './images/gt/markers/GT_iplay_5.jpg',
          caption: 'Notis'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_iplay_5.jpg\'>\n        <img src=\'./images/gt/markers/GT_iplay_5.jpg\' alt=\'Notis\' style=\'cursor:pointer;\' />\n        <h2>Notis</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-72-marker-1789533921680',
        position: {
          yaw: '191.75deg',
          pitch: '-8.41deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Notis',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_iplay_2.jpg',
          originalUrl: './images/gt/markers/GT_iplay_2.jpg',
          caption: 'Notis'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_iplay_2.jpg\'>\n        <img src=\'./images/gt/markers/GT_iplay_2.jpg\' alt=\'Notis\' style=\'cursor:pointer;\' />\n        <h2>Notis</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-72-marker-1789533895373',
        position: {
          yaw: '199.97deg',
          pitch: '-8.83deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Notis',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_iplay_8.jpg',
          originalUrl: './images/gt/markers/GT_iplay_8.jpg',
          caption: 'Notis'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_iplay_8.jpg\'>\n        <img src=\'./images/gt/markers/GT_iplay_8.jpg\' alt=\'Notis\' style=\'cursor:pointer;\' />\n        <h2>Notis</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-72-marker-1789533883984',
        position: {
          yaw: '195.44deg',
          pitch: '-14.70deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Notis',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/gt/markers/GT_iplay_1.jpg',
          originalUrl: './images/gt/markers/GT_iplay_1.jpg',
          caption: 'Notis'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/gt/markers/GT_iplay_1.jpg\'>\n        <img src=\'./images/gt/markers/GT_iplay_1.jpg\' alt=\'Notis\' style=\'cursor:pointer;\' />\n        <h2>Notis</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      },
      {
        id: 'gt-f1-main-area-72-marker-1789618059478',
        position: {
          yaw: '196.70deg',
          pitch: '10.62deg'
        },
        size: {
          width: 44,
          height: 44
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'I-Play Toy',
          icon: 'info',
          color: 'blue',
          animated: true,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\' animated>\n        <h2>I-Play Toy</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-73',
    name: 'Floor 1 – Main Area 73',
    caption: 'GT – Floor 1 – Main Area 73',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-73.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-73.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [
      {
        nodeId: 'gt-f1-main-area-72',
        position: { yaw: '203.47deg', pitch: '-10deg' },
        name: 'Go to Main Area 72'
      },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'gt-f1-main-area-74',
    name: 'Floor 1 – Main Area 74',
    caption: 'GT – Floor 1 – Main Area 74',
    panorama: './images/gt/f1-main-area/gt-f1-main-area-74.jpg',
    thumbnail: './images/gt/f1-main-area/thumbs/gt-f1-main-area-74.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    links: [],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
];