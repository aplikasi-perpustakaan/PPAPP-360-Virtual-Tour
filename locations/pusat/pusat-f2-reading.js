export default [
  {
    id: 'pusat-f2-reading-1',
    name: 'Floor 2 - Reading 1',
    caption: 'PUSAT - Floor 2 - Reading 1',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-1.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-2',
        position: { yaw: '193.02deg', pitch: '-2.84deg' },
        name: 'Go to Floor 2 - Reading 2',
        targetYaw: '226.67deg',
        targetPitch: '-1.12deg'
      },
      
      
      {
        nodeId: 'pusat-f2-stairs-1',
        position: { yaw: '128.65deg', pitch: '-7.32deg' },
        name: 'Go to Floor 2 - Stairs 1',
        targetYaw: '49.83deg',
        targetPitch: '-17.50deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-2',
    name: 'Floor 2 - Reading 2',
    caption: 'PUSAT - Floor 2 - Reading 2',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-2.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-1',
        position: { yaw: '1.56deg', pitch: '-3.35deg' },
        name: 'Go to Floor 2 - Reading 1',
        targetYaw: '11.78deg',
        targetPitch: '-1.16deg'
      },
      
      
      {
        nodeId: 'pusat-f2-stairs-1',
        position: { yaw: '51.61deg', pitch: '-4.77deg' },
        name: 'Go to Floor 2 - Stairs 1',
        targetYaw: '50.81deg',
        targetPitch: '-8.52deg'
      },
      {
        nodeId: 'pusat-f2-reading-8',
        position: { yaw: '232.42deg', pitch: '-3.82deg' },
        name: 'Go to Floor 2 - Reading 8',
        targetYaw: '213.06deg',
        targetPitch: '-0.65deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-3',
    name: 'Floor 2 - Reading 3',
    caption: 'PUSAT - Floor 2 - Reading 3',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-3.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-3.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-4',
        position: { yaw: '232.80deg', pitch: '0.56deg' },
        name: 'Go to Floor 2 - Reading 4',
        targetYaw: '246.23deg',
        targetPitch: '0.74deg'
      },
      
      
      
      {
        nodeId: 'pusat-f2-stairs-1',
        position: { yaw: '350.38deg', pitch: '-10deg' },
        name: 'Go to Floor 2 - Stairs 1'
      },
    ],
    markers: [
      {
        id: 'pusat-f2-reading-3-marker-1789635196324',
        position: {
          yaw: '124.93deg',
          pitch: '14.49deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahasa Melayu (Rujukan)',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bahasa Melayu (Rujukan)</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'pusat-f2-reading-3-marker-1789635225746',
        position: {
          yaw: '192.90deg',
          pitch: '10.55deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahasa Cina (Rujukan)',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bahasa Cina (Rujukan)</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-4',
    name: 'Floor 2 - Reading 4',
    caption: 'PUSAT - Floor 2 - Reading 4',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-4.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-4.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-5',
        position: { yaw: '242.97deg', pitch: '0.13deg' },
        name: 'Go to Floor 2 - Reading 5',
        targetYaw: '236.49deg',
        targetPitch: '8.81deg'
      },
      
      
      {
        nodeId: 'pusat-f2-reading-3',
        position: { yaw: '64.59deg', pitch: '-4.79deg' },
        name: 'Go to Floor 2 - Reading 3',
        targetYaw: '56.84deg',
        targetPitch: '-2.54deg'
      },
    ],
    markers: [
      {
        id: 'pusat-f2-reading-4-marker-1789635251710',
        position: {
          yaw: '81.94deg',
          pitch: '3.42deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahasa Melayu (Rujukan)',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bahasa Melayu (Rujukan)</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'pusat-f2-reading-4-marker-1789635270681',
        position: {
          yaw: '94.07deg',
          pitch: '6.69deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahasa Tamil (Rujukan)',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bahasa Tamil (Rujukan)</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'pusat-f2-reading-4-marker-1789635303098',
        position: {
          yaw: '138.07deg',
          pitch: '12.97deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Ensiklopedia Bahasa Melayu',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Ensiklopedia Bahasa Melayu</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'pusat-f2-reading-4-marker-1789635446576',
        position: {
          yaw: '205.13deg',
          pitch: '9.10deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Ensiklopedia Bahasa Inggeris',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Ensiklopedia Bahasa Inggeris</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'pusat-f2-reading-4-marker-1789635591693',
        position: {
          yaw: '284.81deg',
          pitch: '-0.66deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Internet',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/pusat/markers/FLOOR-2/PUSAT_F2_8.jpg',
          originalUrl: './images/pusat/markers/FLOOR-2/PUSAT_F2_8.jpg',
          caption: 'Internet'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/pusat/markers/FLOOR-2/PUSAT_F2_8.jpg\'>\n        <img src=\'./images/pusat/markers/FLOOR-2/PUSAT_F2_8.jpg\' alt=\'Internet\' style=\'cursor:pointer;\' />\n        <h2>Internet</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-5',
    name: 'Floor 2 - Reading 5',
    caption: 'PUSAT - Floor 2 - Reading 5',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-5.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-5.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-4',
        position: { yaw: '58.25deg', pitch: '-4.51deg' },
        name: 'Go to Floor 2 - Reading 4',
        targetYaw: '65.18deg',
        targetPitch: '2.17deg'
      },
      {
        nodeId: 'pusat-f2-reading-11',
        position: { yaw: '153.57deg', pitch: '-4.14deg' },
        name: 'Go to Floor 2 - Reading 11',
        targetYaw: '121.34deg',
        targetPitch: '-5.10deg'
      },
      {
        nodeId: 'pusat-f2-reading-12',
        position: { yaw: '215.45deg', pitch: '-5.42deg' },
        name: 'Go to Floor 2 - Reading 12',
        targetYaw: '219.54deg',
        targetPitch: '0.44deg'
      },
      {
        nodeId: 'pusat-f2-reading-7',
        position: { yaw: '328.27deg', pitch: '-5.28deg' },
        name: 'Go to Floor 2 - Reading 7',
        targetYaw: '326.76deg',
        targetPitch: '0.27deg'
      },
    ],
    markers: [
      {
        id: 'pusat-f2-reading-5-marker-1789635473599',
        position: {
          yaw: '74.23deg',
          pitch: '3.18deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Ensiklopedia Bahasa Inggeris',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Ensiklopedia Bahasa Inggeris</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'pusat-f2-reading-5-marker-1789635484731',
        position: {
          yaw: '86.12deg',
          pitch: '7.05deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Koleksi Akta',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Koleksi Akta</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-6',
    name: 'Floor 2 - Reading 6',
    caption: 'PUSAT - Floor 2 - Reading 6',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-6.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-6.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-7',
        position: { yaw: '282.38deg', pitch: '-1.29deg' },
        name: 'Go to Floor 2 - Reading 7',
        targetYaw: '327.05deg',
        targetPitch: '-2.17deg'
      },
    ],
    markers: [
      {
        id: 'pusat-f2-reading-6-marker-1789635521022',
        position: {
          yaw: '51.53deg',
          pitch: '-20.93deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Mikrofilem',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/pusat/markers/FLOOR-2/PUSAT_F2_2.jpg',
          originalUrl: './images/pusat/markers/FLOOR-2/PUSAT_F2_2.jpg',
          caption: 'Mikrofilem'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/pusat/markers/FLOOR-2/PUSAT_F2_2.jpg\'>\n        <img src=\'./images/pusat/markers/FLOOR-2/PUSAT_F2_2.jpg\' alt=\'Mikrofilem\' style=\'cursor:pointer;\' />\n        <h2>Mikrofilem</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-7',
    name: 'Floor 2 - Reading 7',
    caption: 'PUSAT - Floor 2 - Reading 7',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-7.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-7.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-8',
        position: { yaw: '331.71deg', pitch: '-2.66deg' },
        name: 'Go to Floor 2 - Reading 8',
        targetYaw: '308.72deg',
        targetPitch: '-4.79deg'
      },
      
      
      {
        nodeId: 'pusat-f2-reading-6',
        position: { yaw: '82.08deg', pitch: '-7.33deg' },
        name: 'Go to Floor 2 - Reading 6',
        targetYaw: '53.86deg',
        targetPitch: '-11.80deg'
      },
      {
        nodeId: 'pusat-f2-reading-5',
        position: { yaw: '170.36deg', pitch: '-3.57deg' },
        name: 'Go to Floor 2 - Reading 5',
        targetYaw: '232.00deg',
        targetPitch: '-1.19deg'
      },
      {
        nodeId: 'pusat-f2-reading-20',
        position: { yaw: '245.90deg', pitch: '-5.12deg' },
        name: 'Go to Floor 2 - Reading 20'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-8',
    name: 'Floor 2 - Reading 8',
    caption: 'PUSAT - Floor 2 - Reading 8',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-8.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-8.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-9',
        position: { yaw: '304.11deg', pitch: '-3.16deg' },
        name: 'Go to Floor 2 - Reading 9',
        targetYaw: '299.97deg',
        targetPitch: '-0.41deg'
      },
      
      
      {
        nodeId: 'pusat-f2-reading-7',
        position: { yaw: '129.46deg', pitch: '-5.48deg' },
        name: 'Go to Floor 2 - Reading 7',
        targetYaw: '147.55deg',
        targetPitch: '-8.85deg'
      },
      {
        nodeId: 'pusat-f2-reading-20',
        position: { yaw: '185.98deg', pitch: '-6.18deg' },
        name: 'Go to Floor 2 - Reading 20',
        targetYaw: '224.78deg',
        targetPitch: '0.27deg'
      },
      {
        nodeId: 'pusat-f2-reading-2',
        position: { yaw: '52.42deg', pitch: '-10deg' },
        name: 'Go to Floor 2 - Reading 2'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-9',
    name: 'Floor 2 - Reading 9',
    caption: 'PUSAT - Floor 2 - Reading 9',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-9.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-9.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-10',
        position: { yaw: '313.25deg', pitch: '-2.70deg' },
        name: 'Go to Floor 2 - Reading 10',
        targetYaw: '334.99deg',
        targetPitch: '1.83deg'
      },
      
      
      {
        nodeId: 'pusat-f2-reading-8',
        position: { yaw: '125.30deg', pitch: '-8.42deg' },
        name: 'Go to Floor 2 - Reading 8',
        targetYaw: '126.77deg',
        targetPitch: '-1.70deg'
      },
      {
        nodeId: 'pusat-elevator-2',
        position: { yaw: '222.62deg', pitch: '-7.39deg' },
        name: 'Go to Elevator 2',
        targetYaw: '0.00deg',
        targetPitch: '0.00deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-10',
    name: 'Floor 2 - Reading 10',
    caption: 'PUSAT - Floor 2 - Reading 10',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-10.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-10.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-9',
        position: { yaw: '168.06deg', pitch: '-3.22deg' },
        name: 'Go to Floor 2 - Reading 9',
        targetYaw: '122.81deg',
        targetPitch: '-4.68deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-11',
    name: 'Floor 2 - Reading 11',
    caption: 'PUSAT - Floor 2 - Reading 11',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-11.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-11.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-5',
        position: { yaw: '303.38deg', pitch: '-5.65deg' },
        name: 'Go to Floor 2 - Reading 5',
        targetYaw: '332.08deg',
        targetPitch: '4.93deg'
      },
      {
        nodeId: 'pusat-f2-intersect-room-1',
        position: { yaw: '122.45deg', pitch: '-7.07deg' },
        name: 'Go to Floor 2 - Intersect Room 1',
        targetYaw: '154.44deg',
        targetPitch: '-0.56deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-12',
    name: 'Floor 2 - Reading 12',
    caption: 'PUSAT - Floor 2 - Reading 12',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-12.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-12.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-13',
        position: { yaw: '218.77deg', pitch: '-0.44deg' },
        name: 'Go to Floor 2 - Reading 13',
        targetYaw: '241.96deg',
        targetPitch: '-0.67deg'
      },
      
      
      
      {
        nodeId: 'pusat-f2-reading-5',
        position: { yaw: '35.45deg', pitch: '-10deg' },
        name: 'Go to Floor 2 - Reading 5'
      },
    ],
    markers: [
      {
        id: 'pusat-f2-reading-12-marker-1789635679279',
        position: {
          yaw: '301.77deg',
          pitch: '1.23deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'image',
          title: 'Web OPAC',
          icon: 'info',
          color: 'blue',
          animated: false,
          imageSrc: './images/pusat/markers/FLOOR-2/PUSAT_F2_1.jpg',
          originalUrl: './images/pusat/markers/FLOOR-2/PUSAT_F2_1.jpg',
          caption: 'Web OPAC'
        },
        html: '<custom-marker type=\'image\' data-icon=\'info\' data-color=\'blue\' data-url=\'./images/pusat/markers/FLOOR-2/PUSAT_F2_1.jpg\'>\n        <img src=\'./images/pusat/markers/FLOOR-2/PUSAT_F2_1.jpg\' alt=\'Web OPAC\' style=\'cursor:pointer;\' />\n        <h2>Web OPAC</h2>\n        <p style=\'font-size: 11px; opacity:0.7;\'>🔍 Click to enlarge</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-13',
    name: 'Floor 2 - Reading 13',
    caption: 'PUSAT - Floor 2 - Reading 13',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-13.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-13.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-14',
        position: { yaw: '243.20deg', pitch: '-1.73deg' },
        name: 'Go to Floor 2 - Reading 14',
        targetYaw: '247.04deg',
        targetPitch: '-0.46deg'
      },
      
      
      {
        nodeId: 'pusat-f2-reading-12',
        position: { yaw: '64.26deg', pitch: '-4.61deg' },
        name: 'Go to Floor 2 - Reading 12',
        targetYaw: '44.96deg',
        targetPitch: '-6.64deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-14',
    name: 'Floor 2 - Reading 14',
    caption: 'PUSAT - Floor 2 - Reading 14',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-14.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-14.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-13',
        position: { yaw: '69.03deg', pitch: '-9.83deg' },
        name: 'Go to Floor 2 - Reading 13',
        targetYaw: '67.12deg',
        targetPitch: '-3.75deg'
      },
      {
        nodeId: 'pusat-f2-reading-16',
        position: { yaw: '248.63deg', pitch: '-13.27deg' },
        name: 'Go to Floor 2 - Reading 16',
        targetYaw: '235.32deg',
        targetPitch: '-6.85deg'
      },
      {
        nodeId: 'pusat-f2-reading-17',
        position: { yaw: '205.50deg', pitch: '-10deg' },
        name: 'Go to Floor 2 - Reading 17'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-15',
    name: 'Floor 2 - Reading 15',
    caption: 'PUSAT - Floor 2 - Reading 15',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-15.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-15.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-16',
    name: 'Floor 2 - Reading 16',
    caption: 'PUSAT - Floor 2 - Reading 16',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-16.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-16.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-14',
        position: { yaw: '68.63deg', pitch: '-10deg' },
        name: 'Go to Floor 2 - Reading 14'
      },
      {
        nodeId: 'pusat-f2-reading-17',
        position: { yaw: '133.39deg', pitch: '-10deg' },
        name: 'Go to Floor 2 - Reading 17'
      },
    ],
    markers: [
      {
        id: 'pusat-f2-reading-16-marker-1789635724682',
        position: {
          yaw: '287.95deg',
          pitch: '-3.45deg'
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
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-17',
    name: 'Floor 2 - Reading 17',
    caption: 'PUSAT - Floor 2 - Reading 17',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-17.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-17.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-18',
        position: { yaw: '170.84deg', pitch: '-0.03deg' },
        name: 'Go to Floor 2 - Reading 18',
        targetYaw: '156.15deg',
        targetPitch: '4.93deg'
      },
      {
        nodeId: 'pusat-f2-reading-14',
        position: { yaw: '25.50deg', pitch: '-13.46deg' },
        name: 'Go to Floor 2 - Reading 14'
      },
      {
        nodeId: 'pusat-f2-reading-16',
        position: { yaw: '313.39deg', pitch: '-9.36deg' },
        name: 'Go to Floor 2 - Reading 16'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-18',
    name: 'Floor 2 - Reading 18',
    caption: 'PUSAT - Floor 2 - Reading 18',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-18.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-18.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-19',
        position: { yaw: '157.24deg', pitch: '-0.37deg' },
        name: 'Go to Floor 2 - Reading 19',
        targetYaw: '138.86deg',
        targetPitch: '-0.62deg'
      },
      
      
      {
        nodeId: 'pusat-f2-reading-17',
        position: { yaw: '337.40deg', pitch: '-8.30deg' },
        name: 'Go to Floor 2 - Reading 17',
        targetYaw: '351.43deg',
        targetPitch: '7.48deg'
      },
    ],
    markers: [
      {
        id: 'pusat-f2-reading-18-marker-1789635825918',
        position: {
          yaw: '5.30deg',
          pitch: '0.15deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahasa Inggeris (Rujukan)',
          icon: 'info',
          color: 'blue',
          animated: true,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\' animated>\n        <h2>Bahasa Inggeris (Rujukan)</h2>\n        <p></p>\n      </custom-marker>'
      },
      {
        id: 'pusat-f2-reading-18-marker-1789635820466',
        position: {
          yaw: '351.16deg',
          pitch: '-1.03deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bahasa Inggeris (Rujukan)',
          icon: 'info',
          color: 'blue',
          animated: true,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\' animated>\n        <h2>Bahasa Inggeris (Rujukan)</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-19',
    name: 'Floor 2 - Reading 19',
    caption: 'PUSAT - Floor 2 - Reading 19',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-19.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-19.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-18',
        position: { yaw: '322.16deg', pitch: '-4.08deg' },
        name: 'Go to Floor 2 - Reading 18',
        targetYaw: '338.76deg',
        targetPitch: '-1.94deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-20',
    name: 'Floor 2 - Reading 20',
    caption: 'PUSAT - Floor 2 - Reading 20',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-20.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-20.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-21',
        position: { yaw: '205.65deg', pitch: '-4.22deg' },
        name: 'Go to Floor 2 - Reading 21',
        targetYaw: '221.02deg',
        targetPitch: '2.61deg'
      },
      
      
      {
        nodeId: 'pusat-f2-reading-8',
        position: { yaw: '5.98deg', pitch: '-10deg' },
        name: 'Go to Floor 2 - Reading 8'
      },
      
      {
        nodeId: 'pusat-f2-reading-7',
        position: { yaw: '65.90deg', pitch: '-10deg' },
        name: 'Go to Floor 2 - Reading 7'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-21',
    name: 'Floor 2 - Reading 21',
    caption: 'PUSAT - Floor 2 - Reading 21',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-21.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-21.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-22',
        position: { yaw: '226.69deg', pitch: '-2.75deg' },
        name: 'Go to Floor 2 - Reading 22',
        targetYaw: '227.33deg',
        targetPitch: '0.17deg'
      },
      
      
      
      
      
      {
        nodeId: 'pusat-f2-reading-20',
        position: { yaw: '2.55deg', pitch: '-8.38deg' },
        name: 'Go to Floor 2 - Reading 20',
        targetYaw: '8.30deg',
        targetPitch: '-0.78deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-22',
    name: 'Floor 2 - Reading 22',
    caption: 'PUSAT - Floor 2 - Reading 22',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-22.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-22.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-23',
        position: { yaw: '280.95deg', pitch: '-2.35deg' },
        name: 'Go to Floor 2 - Reading 23',
        targetYaw: '321.79deg',
        targetPitch: '-4.71deg'
      },
      
      
      
      {
        nodeId: 'pusat-f2-reading-21',
        position: { yaw: '40.26deg', pitch: '-2.43deg' },
        name: 'Go to Floor 2 - Reading 21',
        targetYaw: '40.95deg',
        targetPitch: '6.31deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-23',
    name: 'Floor 2 - Reading 23',
    caption: 'PUSAT - Floor 2 - Reading 23',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-23.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-23.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-22',
        position: { yaw: '111.70deg', pitch: '-4.32deg' },
        name: 'Go to Floor 2 - Reading 22',
        targetYaw: '38.61deg',
        targetPitch: '-1.64deg'
      },
      {
        nodeId: 'pusat-f2-reading-24',
        position: { yaw: '241.58deg', pitch: '-10deg' },
        name: 'Go to Floor 2 - Reading 24'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-24',
    name: 'Floor 2 - Reading 24',
    caption: 'PUSAT - Floor 2 - Reading 24',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-24.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-24.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-25',
        position: { yaw: '238.43deg', pitch: '-0.62deg' },
        name: 'Go to Floor 2 - Reading 25',
        targetYaw: '255.11deg',
        targetPitch: '0.74deg'
      },
      {
        nodeId: 'pusat-f2-reading-23',
        position: { yaw: '61.58deg', pitch: '-3.77deg' },
        name: 'Go to Floor 2 - Reading 23',
        targetYaw: '62.08deg',
        targetPitch: '1.48deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-25',
    name: 'Floor 2 - Reading 25',
    caption: 'PUSAT - Floor 2 - Reading 25',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-25.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-25.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-26',
        position: { yaw: '211.34deg', pitch: '-2.10deg' },
        name: 'Go to Floor 2 - Reading 26',
        targetYaw: '156.97deg',
        targetPitch: '-6.96deg'
      },
      
      
      {
        nodeId: 'pusat-f2-reading-24',
        position: { yaw: '74.25deg', pitch: '-4.93deg' },
        name: 'Go to Floor 2 - Reading 24',
        targetYaw: '63.69deg',
        targetPitch: '-2.04deg'
      },
      {
        nodeId: 'pusat-f2-meeting-room-1',
        position: { yaw: '18.47deg', pitch: '-9.85deg' },
        name: 'Go to Floor 2 - Meeting Room 1',
        targetYaw: '308.03deg',
        targetPitch: '-0.23deg'
      },
    ],
    markers: [
      {
        id: 'pusat-f2-reading-25-marker-1789635881207',
        position: {
          yaw: '17.40deg',
          pitch: '-6.99deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Bilik Mesyuarat',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Bilik Mesyuarat</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-26',
    name: 'Floor 2 - Reading 26',
    caption: 'PUSAT - Floor 2 - Reading 26',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-26.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-26.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-27',
        position: {
          yaw: '358.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Floor 2 - Reading 27'
      },
      {
        nodeId: 'pusat-f2-reading-25',
        position: {
          yaw: '178.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Floor 2 - Reading 25'
      }
    ],
    markers: [
      {
        id: 'pusat-f2-reading-26-marker-1789635908136',
        position: {
          yaw: '198.02deg',
          pitch: '-17.10deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        data: {
          type: 'info',
          title: 'Koleksi Braille PPAPP',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: ''
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>Koleksi Braille PPAPP</h2>\n        <p></p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  },
  {
    id: 'pusat-f2-reading-27',
    name: 'Floor 2 - Reading 27',
    caption: 'PUSAT - Floor 2 - Reading 27',
    panorama: './images/pusat/f2-reading/pusat-f2-reading-27.jpg',
    thumbnail: './images/pusat/f2-reading/thumbs/pusat-f2-reading-27.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-reading-26',
        position: {
          yaw: '178.45deg',
          pitch: '-8.15deg'
        },
        name: 'Go to Floor 2 - Reading 26'
      }
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'reading'
      ]
    }
  }
];
