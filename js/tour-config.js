export const branches = [
  {
    id: 'pusat',
    name: 'PUSAT - Seberang Jaya',
    startNode: 'pusat-outside-2',
    description: 'Ibu pejabat utama Perbadanan Perpustakaan Awam Pulau Pinang, menawarkan koleksi komprehensif, rujukan khusus, dan kemudahan moden.',
    address: 'JKR 2362, Jalan Perpustakaan, Seberang Jaya, 13700 Perai, Pulau Pinang',
    phone: '+604-397 1153',
    email: 'info@penanglib.gov.my',
    hours: 'Rabu - Ahad: 9:00 PG - 5:00 PTG (Tutup Isnin, Selasa & Cuti Umum)',
    facilities: ['Wi-Fi Percuma', 'Bahagian Rujukan', 'Zon Kanak-kanak', 'Auditorium', 'Ruang Reka', 'Kafeteria'],
    zones: [
      {
        category: 'Exterior',
        items: [
          { label: 'Outside', sceneId: 'pusat-outside-2', subzones: [{ label: 'Playground', sceneId: 'pusat-outside-12' }, { label: 'Balcony', sceneId: 'pusat-outside-33' }] }
        ]
      },
      {
        category: 'Floor 1',
        items: [
          { label: 'Lobby', sceneId: 'pusat-f1-lobby-1' },
          { 
            label: 'Kids Area', 
            sceneId: 'pusat-f1-kids-1',
            subzones: [
                  { label: 'Sensory Room', sceneId: 'pusat-f1-sensory-2' },
              { label: 'i-Play Toys Room', sceneId: 'pusat-f1-i-play-toys-3' },
              { label: 'Castle Area', sceneId: 'pusat-f1-castle-1' }
            ]
          },
          { label: 'E-Sports', sceneId: 'pusat-f1-e-sports-1' },
          { label: 'Reading Area', sceneId: 'pusat-f1-reading-1' }
        ]
      },
      {
        category: 'Floor 2',
        items: [
          { label: 'Reference Area', sceneId: 'pusat-f2-reading-1' },
          { label: 'Carrel Area', sceneId: 'pusat-f2-reading-13' },
          { label: 'PC Area', sceneId: 'pusat-f2-reading-2' },
          { label: 'Auditorium', sceneId: 'pusat-f2-auditorium-5' },
          { label: 'Meeting Room', sceneId: 'pusat-f2-meeting-room-2' },
          { label: 'Training Room', sceneId: 'pusat-f2-training-room-2' }
        ]
      }
    ],
    map: './assets/floor-plans/pusat-map.jpg'
  },
  {
    id: 'bt',
    name: 'BT - Daerah Seberang Perai Utara',
    startNode: 'bt-ext-outside-1',
    description: 'Berkhidmat untuk daerah Seberang Perai Utara, cawangan ini menyediakan sumber pembelajaran berfokuskan komuniti dan ruang membaca yang selesa.',
    address: 'Jalan Bertam 2, 13200 Kepala Batas, Pulau Pinang',
    phone: '+604-575 1153',
    email: 'bt@penanglib.gov.my',
    hours: 'Rabu - Ahad: 9:00 PG - 5:00 PTG (Tutup Isnin, Selasa & Cuti Umum)',
    facilities: ['Wi-Fi Percuma', 'Pod Pembelajaran', 'Bahagian Kanak-kanak', 'Makmal Komputer'],
    zones: [
      {
        category: 'Exterior',
        items: [
          { label: 'Outside', sceneId: 'bt-ext-outside-1' }
        ]
      },
      {
        category: 'Floor 1',
        items: [
          { label: 'Lobby', sceneId: 'bt-f1-lobby-1' },
          { label: 'Cafe', sceneId: 'bt-f1-lobby-3' },
          { label: 'TYT', sceneId: 'bt-f1-tyt-1' },
          { label: 'E-Sports', sceneId: 'bt-f1-kids-1' },
          { label: 'Newspaper', sceneId: 'bt-f1-kids-2' },
          { label: 'PC Area', sceneId: 'bt-f1-kids-3' },
          { label: 'Kids Area', sceneId: 'bt-f1-kids-4' }
        ]
      }
    ],
    map: ''
  },
  {
    id: 'jw',
    name: 'JW - Daerah Seberang Perai Selatan',
    startNode: 'jw-ext-outside-10',
    description: 'Terletak di Jawi, menawarkan persekitaran yang tenang untuk membaca dan belajar bagi komuniti Seberang Perai Selatan.',
    address: 'Jalan Bukit Panchor, 14200 Sungai Jawi, Pulau Pinang',
    phone: '+604-582 1153',
    email: 'jw@penanglib.gov.my',
    hours: 'Rabu - Ahad: 9:00 PG - 5:00 PTG (Tutup Isnin, Selasa & Cuti Umum)',
    facilities: ['Wi-Fi Percuma', 'Ruang Membaca', 'Bilik Mesyuarat'],
    zones: [
      {
        category: 'Floor 1',
        items: [
          { label: 'Pintu Masuk', sceneId: 'jw-ext-outside-10' }
        ]
      }
    ],
    map: ''
  },
  {
    id: 'bm',
    name: 'BM - Daerah Seberang Perai Tengah',
    startNode: 'bm-ext-outside-1',
    description: 'Cawangan Bukit Mertajam merupakan hab untuk aktiviti komuniti, menyediakan pelbagai pilihan buku dan sumber digital.',
    address: 'Jalan Pegawai, 14000 Bukit Mertajam, Pulau Pinang',
    phone: '+604-538 1153',
    email: 'bm@penanglib.gov.my',
    hours: 'Rabu - Ahad: 9:00 PG - 5:00 PTG (Tutup Isnin, Selasa & Cuti Umum)',
    facilities: ['Wi-Fi Percuma', 'Dewan Serbaguna', 'Sudut IT', 'Bahagian Kanak-kanak'],
    zones: [
      {
        category: 'Floor 1',
        items: [
          { label: 'Luaran', sceneId: 'bm-ext-outside-1' },
          { label: 'Lobi Aras Bawah', sceneId: 'bm-gf-lobby-1' }
        ]
      }
    ],
    map: ''
  },
  {
    id: 'ppaj',
    name: 'PPAJ - AEON Jusco Alma',
    startNode: 'ppaj-f1-01',
    description: 'Sebuah cawangan perpustakaan yang moden dan mudah diakses, terletak dengan strategik di dalam AEON Mall Bukit Mertajam.',
    address: 'Lot F38, 1st Floor, AEON Mall Bukit Mertajam, Jalan Rozhan, 14000 Bukit Mertajam, Pulau Pinang',
    phone: '+604-537 1153',
    email: 'ppaj@penanglib.gov.my',
    hours: 'Setiap Hari: 10:00 PG - 10:00 MLM',
    facilities: ['Wi-Fi Percuma', 'Kawasan Membaca', 'Koleksi Digital', 'Akses Pusat Beli-belah'],
    zones: [
      {
        category: 'Floor 1',
        items: [
          { label: 'Kawasan Utama', sceneId: 'ppaj-f1-01' }
        ]
      }
    ],
    map: ''
  },
  {
    id: 'gt',
    name: 'GT - Daerah Timur Laut',
    startNode: 'gt-ext-outside-1',
    description: 'Berkhidmat untuk komuniti George Town yang meriah dengan koleksi sastera dan rujukan sejarah yang kaya.',
    address: 'George Town, Pulau Pinang',
    phone: '+604-262 1153',
    email: 'gt@penanglib.gov.my',
    hours: 'Rabu - Ahad: 9:00 PG - 5:00 PTG (Tutup Isnin, Selasa & Cuti Umum)',
    facilities: ['Wi-Fi Percuma', 'Arkib Sejarah', 'Kawasan Pembelajaran'],
    zones: [
      {
        category: 'Floor 1',
        items: [
          { label: 'Pintu Masuk', sceneId: 'gt-ext-outside-1' }
        ]
      }
    ],
    map: ''
  },
  {
    id: 'ppk',
    name: 'PPK - Lounge@Komtar',
    startNode: 'ppk-lounge-1',
    description: 'Ruang membaca moden dan premium yang terletak di menara ikonik Komtar.',
    address: 'Level 3, Komtar, 10000 George Town, Pulau Pinang',
    phone: '+604-261 1153',
    email: 'ppk@penanglib.gov.my',
    hours: 'Isnin - Jumaat: 9:00 PG - 5:00 PTG (Tutup Hujung Minggu & Cuti Umum)',
    facilities: ['Wi-Fi Percuma', 'Ruang Rehat Premium', 'Kiosk Perpustakaan Digital'],
    zones: [
      {
        category: 'Floor 1',
        items: [
          { label: 'Kawasan Ruang Rehat', sceneId: 'ppk-lounge-1' }
        ]
      }
    ],
    map: ''
  }
];







