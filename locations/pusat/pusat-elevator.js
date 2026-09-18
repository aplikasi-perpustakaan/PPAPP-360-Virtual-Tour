export default [
  {
    id: 'pusat-elevator-1',
    name: 'Elevator - 1',
    caption: 'PUSAT - Elevator - 1',
    panorama: './images/pusat/elevator/pusat-elevator-1.jpg',
    thumbnail: './images/pusat/elevator/thumbs/pusat-elevator-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-elevator-2',
        position: { yaw: '0.80deg', pitch: '-10.02deg' },
        name: 'Go to Elevator - 2',
        targetYaw: '180.75deg',
        targetPitch: '-7.25deg'
      },
      
      
      {
        nodeId: 'pusat-f1-lobby-21',
        position: { yaw: '177.61deg', pitch: '-4.67deg' },
        name: 'Go to Level 1 - Lobby 21',
        targetYaw: '245.41deg',
        targetPitch: '1.68deg'
      },
    ],
    markers: [],
    data: {
      floor: 'any',
      tags: [
        'elevator'
      ]
    }
  },
  {
    id: 'pusat-elevator-2',
    name: 'Elevator - 2',
    caption: 'PUSAT - Elevator - 2',
    panorama: './images/pusat/elevator/pusat-elevator-2.jpg',
    thumbnail: './images/pusat/elevator/thumbs/pusat-elevator-2.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      {
        nodeId: 'pusat-elevator-1',
        position: { yaw: '0.00deg', pitch: '0.00deg' },
        name: 'Go to Elevator - 1',
        targetYaw: '179.35deg',
        targetPitch: '-8.20deg'
      },
      
      
      {
        nodeId: 'pusat-f2-reading-9',
        position: { yaw: '181.56deg', pitch: '-4.17deg' },
        name: 'Go to Level 2 - Reading Area 9',
        targetYaw: '30.94deg',
        targetPitch: '-0.24deg'
      },
    ],
    markers: [],
    data: {
      floor: 'any',
      tags: [
        'elevator'
      ]
    }
  }
];
