export default [
  {
    id: 'pusat-f2-stairs-1',
    name: 'Floor 2 - Stairs 1',
    caption: 'PUSAT - Floor 2 - Stairs 1',
    panorama: './images/pusat/f2-stairs/pusat-f2-stairs-1.jpg',
    thumbnail: './images/pusat/f2-stairs/thumbs/pusat-f2-stairs-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-stairs-2',
        position: { yaw: '50.14deg', pitch: '-29.41deg' },
        name: 'Go to Floor 2 - Stairs 2',
        targetYaw: '7.36deg',
        targetPitch: '-9.72deg'
      },
      {
        nodeId: 'pusat-f2-reading-1',
        position: { yaw: '308.39deg', pitch: '-2.46deg' },
        name: 'Go to Floor 2 - Reference Area 1',
        targetYaw: '326.74deg',
        targetPitch: '1.24deg'
      },
      {
        nodeId: 'pusat-f2-reading-2',
        position: { yaw: '231.22deg', pitch: '-1.78deg' },
        name: 'Go to Floor 2 - Reference Area 2',
        targetYaw: '230.59deg',
        targetPitch: '-1.11deg'
      },
      {
        nodeId: 'pusat-f2-reading-3',
        position: { yaw: '170.38deg', pitch: '-6.13deg' },
        name: 'Go to Floor 2 - Reference Area 3',
        targetYaw: '234.02deg',
        targetPitch: '5.62deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'stairs'
      ]
    }
  },
  {
    id: 'pusat-f2-stairs-2',
    name: 'Floor 2 - Stairs 2',
    caption: 'PUSAT - Floor 2 - Stairs 2',
    panorama: './images/pusat/f2-stairs/pusat-f2-stairs-2.jpg',
    thumbnail: './images/pusat/f2-stairs/thumbs/pusat-f2-stairs-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-f2-stairs-1',
        position: { yaw: '355.63deg', pitch: '9.17deg' },
        name: 'Go to Floor 2 - Stairs 1',
        targetYaw: '233.65deg',
        targetPitch: '-2.56deg'
      },
      
      
      {
        nodeId: 'pusat-f1-lobby-26',
        position: { yaw: '21.11deg', pitch: '-24.94deg' },
        name: 'Go to Floor 1 - Lobby 26',
        targetYaw: '77.11deg',
        targetPitch: '-8.07deg'
      },
    ],
    markers: [],
    data: {
      floor: 'f2',
      tags: [
        'stairs'
      ]
    }
  }
];
