// F1 Entrance Section for PUSAT
import { createInfoMarker } from '../../js/marker-templates.js';
export default [
  {

      // ─── Identity ───
      id: 'pusat-f1-entrance',
      name: 'Level 1 – Entrance',
      caption: 'PUSAT – Level 1 – Entrance',

      // ─── Panorama ───
      panorama: './images/pusat/pusat-f1-entrance.jpg',
      thumbnail: './images/pusat/pusat-f1-entrance.jpg',

      // ─── Camera Defaults ───
      defaultYaw: '0deg',
      defaultPitch: '0deg',

      // ─── Navigation Links ───
      links: [
        {
          nodeId: 'pusat-f1-reading-area',
          position: { yaw: '80deg', pitch: '0deg' },
          name: 'Go to Reading Area',
        },
      ],

      // ─── Info Markers ───
      markers: [
        {
          id: 'pusat-f1-entrance-info-1',
          position: { yaw: '-45deg', pitch: '5deg' },
          tooltip: {
            content: 'Beautiful painting on the wall',
            position: 'right',
          },
          html: createInfoMarker(),
          anchor: 'center center',
          data: { type: 'info' },
        },
      ],

      // ─── Metadata ───
      data: {
        floor: 'f1',
        tags: ['entrance', 'lobby', 'main'],
      },
    },

    {
      // ─── Identity ───
      id: 'pusat-f1-reading-area',
      name: 'Level 1 – Reading Area',
      caption: 'PUSAT – Level 1 – Reading Area',

      // ─── Panorama ───
      panorama: './images/shared/placeholder.jpg',
      thumbnail: './images/shared/placeholder.jpg',

      // ─── Camera Defaults ───
      defaultYaw: '180deg',
      defaultPitch: '0deg',

      // ─── Navigation Links ───
      links: [
        {
          nodeId: 'pusat-f1-entrance',
          position: { yaw: '-100deg', pitch: '0deg' },
          name: 'Go to Entrance',
        },
      ],

      // ─── Info Markers ───
      markers: [],

      // ─── Metadata ───
      data: {
        floor: 'f1',
        tags: ['reading', 'books', 'study'],
      },
    },
];
