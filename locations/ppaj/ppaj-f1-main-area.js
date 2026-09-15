// ── F1 Main Area Section for PPAJ ─────────────────────────────────

export default [
  {
    id: 'ppaj-f1-01',
    name: 'Level 1 – Area 01',
    caption: 'PPAJ – Level 1 – Area 01',
    panorama: './images/ppaj/f1/ppaj-f1-01.jpg',
    thumbnail: './images/ppaj/f1/thumbs/ppaj-f1-01.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    defaultZoomLvl: 0,
    sphereCorrection: { pan: '6.23deg', tilt: '2.90deg', roll: '0deg' },
    links: [
      { nodeId: 'ppaj-f1-02', position: { yaw: '0deg', pitch: '0deg' } },
    ],
    markers: [
      {
        id: 'ppaj-f1-01-img-1',
        position: { yaw: '358.06deg', pitch: '4.94deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_5.jpg" alt="AEON lobby 5" /><h2>AEON lobby 5</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-01-img-2',
        position: { yaw: '19.40deg', pitch: '3.21deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_6.jpg" alt="AEON lobby 6" /><h2>AEON lobby 6</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-01-img-3',
        position: { yaw: '14.10deg', pitch: '9.33deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/OUTSIDE/AEON_outside_1.jpg" alt="AEON outside 1" /><h2>AEON outside 1</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-01-img-4',
        position: { yaw: '6.74deg', pitch: '-3.15deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/OUTSIDE/AEON_outside_3.jpg" alt="AEON outside 3" /><h2>AEON outside 3</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-01-img-5',
        position: { yaw: '19.81deg', pitch: '-6.17deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/OUTSIDE/AEON_outside_4.jpg" alt="AEON outside 4" /><h2>AEON outside 4</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-01-marker-1789428336164',
        position: {
          yaw: '32.68deg',
          pitch: '-5.79deg'
        },
        size: {
          width: 32,
          height: 32
        },
        anchor: 'center center',
        tooltip: 'fFa',
        data: {
          type: 'info',
          title: 'fFa',
          icon: 'info',
          color: 'blue',
          animated: false,
          content: 'dsa'
        },
        html: '<custom-marker type=\'info\' data-icon=\'info\' data-color=\'blue\'>\n        <h2>fFa</h2>\n        <p>dsa</p>\n      </custom-marker>'
      }
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'ppaj-f1-02',
    name: 'Level 1 – Area 02',
    caption: 'PPAJ – Level 1 – Area 02',
    panorama: './images/ppaj/f1/ppaj-f1-02.jpg',
    thumbnail: './images/ppaj/f1/thumbs/ppaj-f1-02.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'ppaj-f1-01', position: { yaw: '180deg', pitch: '0deg' } },
      { nodeId: 'ppaj-f1-03', position: { yaw: '279.45deg', pitch: '-31.82deg' } },
      { nodeId: 'ppaj-f1-05', position: { yaw: '6.08deg', pitch: '-22.17deg' } },
      { nodeId: 'ppaj-f1-09', position: { yaw: '65.79deg', pitch: '-31.59deg' } },
    ],
    markers: [
      {
        id: 'ppaj-f1-02-img-1',
        position: { yaw: '30.42deg', pitch: '-13.89deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_1.jpg" alt="AEON lobby 1" /><h2>AEON lobby 1</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-02-img-2',
        position: { yaw: '75.12deg', pitch: '-11.53deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_19.jpg" alt="AEON lobby 19" /><h2>AEON lobby 19</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-02-img-3',
        position: { yaw: '328.41deg', pitch: '-7.76deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_2.jpg" alt="AEON lobby 2" /><h2>AEON lobby 2</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-02-img-4',
        position: { yaw: '48.51deg', pitch: '-19.22deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_20.jpg" alt="AEON lobby 20" /><h2>AEON lobby 20</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-02-img-5',
        position: { yaw: '262.71deg', pitch: '34.43deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_4.jpg" alt="AEON lobby 4" /><h2>AEON lobby 4</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'ppaj-f1-03',
    name: 'Level 1 – Area 03',
    caption: 'PPAJ – Level 1 – Area 03',
    panorama: './images/ppaj/f1/ppaj-f1-03.jpg',
    thumbnail: './images/ppaj/f1/thumbs/ppaj-f1-03.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'ppaj-f1-02', position: { yaw: '86.76deg', pitch: '-32.23deg' } },
      { nodeId: 'ppaj-f1-04', position: { yaw: '340.59deg', pitch: '-26.27deg' } },
    ],
    markers: [
      {
        id: 'ppaj-f1-03-img-1',
        position: { yaw: '17.65deg', pitch: '-14.10deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_15.jpg" alt="AEON lobby 15" /><h2>AEON lobby 15</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-03-img-2',
        position: { yaw: '358.83deg', pitch: '-22.97deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_17.jpg" alt="AEON lobby 17" /><h2>AEON lobby 17</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-03-img-3',
        position: { yaw: '34.91deg', pitch: '-21.41deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/OUTSIDE/AEON_outside_2.jpg" alt="AEON outside 2" /><h2>AEON outside 2</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'ppaj-f1-04',
    name: 'Level 1 – Area 04',
    caption: 'PPAJ – Level 1 – Area 04',
    panorama: './images/ppaj/f1/ppaj-f1-04.jpg',
    thumbnail: './images/ppaj/f1/thumbs/ppaj-f1-04.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'ppaj-f1-03', position: { yaw: '180deg', pitch: '0deg' } },
      { nodeId: 'ppaj-f1-05', position: { yaw: '83.31deg', pitch: '-24.16deg' } },
    ],
    markers: [
      {
        id: 'ppaj-f1-04-img-1',
        position: { yaw: '22.92deg', pitch: '-14.06deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_21.jpg" alt="AEON lobby 21" /><h2>AEON lobby 21</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-04-img-2',
        position: { yaw: '301.02deg', pitch: '-4.44deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_7.jpg" alt="AEON lobby 7" /><h2>AEON lobby 7</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'ppaj-f1-05',
    name: 'Level 1 – Area 05',
    caption: 'PPAJ – Level 1 – Area 05',
    panorama: './images/ppaj/f1/ppaj-f1-05.jpg',
    thumbnail: './images/ppaj/f1/thumbs/ppaj-f1-05.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'ppaj-f1-04', position: { yaw: '267.32deg', pitch: '-25.05deg' } },
      { nodeId: 'ppaj-f1-06', position: { yaw: '0deg', pitch: '0deg' } },
      { nodeId: 'ppaj-f1-02', position: { yaw: '184.96deg', pitch: '-27.51deg' } },
    ],
    markers: [
      {
        id: 'ppaj-f1-05-img-1',
        position: { yaw: '331.44deg', pitch: '-25.30deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_10.jpg" alt="AEON lobby 10" /><h2>AEON lobby 10</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-05-img-2',
        position: { yaw: '19.26deg', pitch: '-1.71deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_12.jpg" alt="AEON lobby 12" /><h2>AEON lobby 12</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'ppaj-f1-06',
    name: 'Level 1 – Area 06',
    caption: 'PPAJ – Level 1 – Area 06',
    panorama: './images/ppaj/f1/ppaj-f1-06.jpg',
    thumbnail: './images/ppaj/f1/thumbs/ppaj-f1-06.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'ppaj-f1-05', position: { yaw: '180deg', pitch: '0deg' } },
      { nodeId: 'ppaj-f1-07', position: { yaw: '295.73deg', pitch: '-25.68deg' } },
    ],
    markers: [
      {
        id: 'ppaj-f1-06-img-1',
        position: { yaw: '3.16deg', pitch: '-15.63deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_11.jpg" alt="AEON lobby 11" /><h2>AEON lobby 11</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-06-img-2',
        position: { yaw: '1.71deg', pitch: '-45.29deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_13.jpg" alt="AEON lobby 13" /><h2>AEON lobby 13</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-06-img-3',
        position: { yaw: '2.80deg', pitch: '-63.79deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_16.jpg" alt="AEON lobby 16" /><h2>AEON lobby 16</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-06-img-4',
        position: { yaw: '53.71deg', pitch: '-14.67deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_9.jpg" alt="AEON lobby 9" /><h2>AEON lobby 9</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'ppaj-f1-07',
    name: 'Level 1 – Area 07',
    caption: 'PPAJ – Level 1 – Area 07',
    panorama: './images/ppaj/f1/ppaj-f1-07.jpg',
    thumbnail: './images/ppaj/f1/thumbs/ppaj-f1-07.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'ppaj-f1-06', position: { yaw: '107.76deg', pitch: '-41.43deg' } },
      { nodeId: 'ppaj-f1-08', position: { yaw: '294.51deg', pitch: '-48.55deg' } },
    ],
    markers: [
      {
        id: 'ppaj-f1-07-img-1',
        position: { yaw: '0.79deg', pitch: '-32.98deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_8.jpg" alt="AEON lobby 8" /><h2>AEON lobby 8</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'ppaj-f1-08',
    name: 'Level 1 – Area 08',
    caption: 'PPAJ – Level 1 – Area 08',
    panorama: './images/ppaj/f1/ppaj-f1-08.jpg',
    thumbnail: './images/ppaj/f1/thumbs/ppaj-f1-08.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'ppaj-f1-07', position: { yaw: '105.46deg', pitch: '-49.08deg' } },
    ],
    markers: [],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'ppaj-f1-09',
    name: 'Level 1 – Area 09',
    caption: 'PPAJ – Level 1 – Area 09',
    panorama: './images/ppaj/f1/ppaj-f1-09.jpg',
    thumbnail: './images/ppaj/f1/thumbs/ppaj-f1-09.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'ppaj-f1-02', position: { yaw: '253.77deg', pitch: '-34.63deg' } },
      { nodeId: 'ppaj-f1-10', position: { yaw: '23.58deg', pitch: '-30.19deg' } },
    ],
    markers: [
      {
        id: 'ppaj-f1-09-img-1',
        position: { yaw: '82.94deg', pitch: '-13.75deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_14.jpg" alt="AEON lobby 14" /><h2>AEON lobby 14</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
  {
    id: 'ppaj-f1-10',
    name: 'Level 1 – Area 10',
    caption: 'PPAJ – Level 1 – Area 10',
    panorama: './images/ppaj/f1/ppaj-f1-10.jpg',
    thumbnail: './images/ppaj/f1/thumbs/ppaj-f1-10.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      { nodeId: 'ppaj-f1-09', position: { yaw: '180deg', pitch: '0deg' } },
    ],
    markers: [
      {
        id: 'ppaj-f1-10-img-1',
        position: { yaw: '330.82deg', pitch: '-31.57deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_18.jpg" alt="AEON lobby 18" /><h2>AEON lobby 18</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
      {
        id: 'ppaj-f1-10-img-2',
        position: { yaw: '352.30deg', pitch: '-40.06deg' },
        html: `<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="./images/ppaj/markers/LOBBY/AEON_lobby_3.jpg" alt="AEON lobby 3" /><h2>AEON lobby 3</h2></custom-marker>`,
        size: { width: 44, height: 44 },
        anchor: 'center center'
      },
    ],
    data: {
      floor: 'f1',
      tags: ['main'],
    },
  },
];