const scene1 = {
  id: 'pusat_scene1',
  panorama: './images/f1_01.jpg',
  name: 'Scene 1 – Living Room',
  caption: 'PUSAT - Scene 1 – Living Room',
  defaultYaw: 0,
  defaultPitch: 0,
  thumbnail: './images/f1_01.jpg',
  links: [
    {
      nodeId: 'pusat_scene2',
      position: { yaw: '80deg', pitch: '0deg' },
      name: 'Go to Kitchen',
    },
  ],
  markers: [
    {
      id: 'info-marker-1',
      position: { yaw: '-45deg', pitch: '5deg' },
      tooltip: {
        content: 'Beautiful painting on the wall',
        position: 'right',
      },
      html: '<div style="width:24px;height:24px;background:rgba(45,108,223,0.85);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:14px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.4);">i</div>',
      anchor: 'center center',
      data: { type: 'info' },
    },
  ],
};

const scene2 = {
  id: 'pusat_scene2',
  panorama: './images/tester.jpeg',
  name: 'Scene 2 – Kitchen',
  caption: 'PUSAT - Scene 2 – Kitchen',
  defaultYaw: '180deg',
  defaultPitch: '0deg',
  thumbnail: './images/tester.jpeg',
  links: [
    {
      nodeId: 'pusat_scene1',
      position: { yaw: '-100deg', pitch: '0deg' },
      name: 'Go to Living Room',
    },
  ],
  markers: [],
};

export default [scene1, scene2];
