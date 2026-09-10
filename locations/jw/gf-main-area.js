// Gf Main Area Section for JW

export default [
  {

      // ─── Identity ───
      id: 'jw-gf-main-area',
      name: 'Ground Floor – Main Area',
      caption: 'JW – Ground Floor – Main Area',

      // ─── Panorama ───
      panorama: './images/shared/placeholder.jpg',
      thumbnail: './images/shared/placeholder.jpg',

      // ─── Camera Defaults ───
      defaultYaw: '0deg',
      defaultPitch: '0deg',

      // ─── Navigation Links ───
      links: [
        {
          nodeId: 'jw-ext-outside-1',
          position: { yaw: '180deg', pitch: '0deg' },
          name: 'Go Outside',
        },
        {
          nodeId: 'jw-f1-lobby-1',
          position: { yaw: '0deg', pitch: '0deg' },
          name: 'Enter Floor 1 Lobby',
        },
      ],

      // ─── Info Markers ───
      markers: [],

      // ─── Metadata ───
      data: {
        floor: 'gf',
        tags: ['main', 'entrance'],
      },
    },
];
