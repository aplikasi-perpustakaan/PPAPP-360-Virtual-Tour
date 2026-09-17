export const branches = [
  {
    id: 'pusat',
    name: 'PUSAT - Seberang Jaya',
    startNode: 'pusat-outside-1',
    description: 'The main headquarters of the Penang Public Library Corporation, offering extensive collections, specialized references, and modern facilities.',
    address: 'JKR 2362, Jalan Perpustakaan, Seberang Jaya, 13700 Perai, Pulau Pinang',
    phone: '+604-397 1153',
    email: 'info@penanglib.gov.my',
    hours: 'Wed - Sun: 9:00 AM - 5:00 PM (Closed Mon, Tue & Public Holidays)',
    facilities: ['Free Wi-Fi', 'Reference Section', 'Kids Zone', 'Auditorium', 'Maker Space', 'Cafeteria'],
    quickLinks: [
      { label: 'Kids Zone', sceneId: 'pusat-f1-kids-1' },
      { label: 'Reference Section', sceneId: 'pusat-f2-reference-1' },
      { label: 'Maker Space', sceneId: 'pusat-f3-maker-1' }
    ],
    map: './assets/floor-plans/pusat-map.jpg'
  },
  {
    id: 'bt',
    name: 'BT - Daerah Seberang Perai Utara',
    startNode: 'bt-ext-outside-1',
    description: 'Serving the Northern Seberang Perai district, this branch provides community-focused learning resources and comfortable reading spaces.',
    address: 'Jalan Bertam 2, 13200 Kepala Batas, Pulau Pinang',
    phone: '+604-575 1153',
    email: 'bt@penanglib.gov.my',
    hours: 'Wed - Sun: 9:00 AM - 5:00 PM (Closed Mon, Tue & Public Holidays)',
    facilities: ['Free Wi-Fi', 'Study Pods', 'Children\'s Section', 'Computer Lab'],
    quickLinks: [
      { label: 'Lobby', sceneId: 'bt-f1-lobby-1' },
      { label: 'Kids Area', sceneId: 'bt-f1-kids-1' }
    ],
    map: ''
  },
  {
    id: 'jw',
    name: 'JW - Daerah Seberang Perai Selatan',
    startNode: 'jw-ext-outside-10',
    description: 'Located in Jawi, offering a tranquil environment for reading and studying for the Southern Seberang Perai community.',
    address: 'Jalan Bukit Panchor, 14200 Sungai Jawi, Pulau Pinang',
    phone: '+604-582 1153',
    email: 'jw@penanglib.gov.my',
    hours: 'Wed - Sun: 9:00 AM - 5:00 PM (Closed Mon, Tue & Public Holidays)',
    facilities: ['Free Wi-Fi', 'Reading Lounge', 'Meeting Rooms'],
    quickLinks: [
      { label: 'Entrance', sceneId: 'jw-ext-outside-10' }
    ],
    map: ''
  },
  {
    id: 'bm',
    name: 'BM - Daerah Seberang Perai Tengah',
    startNode: 'bm-ext-outside-1',
    description: 'The Bukit Mertajam branch is a hub for community activities, featuring a wide range of books and digital resources.',
    address: 'Jalan Pegawai, 14000 Bukit Mertajam, Pulau Pinang',
    phone: '+604-538 1153',
    email: 'bm@penanglib.gov.my',
    hours: 'Wed - Sun: 9:00 AM - 5:00 PM (Closed Mon, Tue & Public Holidays)',
    facilities: ['Free Wi-Fi', 'Multi-purpose Hall', 'IT Corner', 'Kids Section'],
    quickLinks: [
      { label: 'Exterior', sceneId: 'bm-ext-outside-1' },
      { label: 'GF Lobby', sceneId: 'bm-gf-lobby-1' }
    ],
    map: ''
  },
  {
    id: 'ppaj',
    name: 'PPAJ - AEON Jusco Alma',
    startNode: 'ppaj-f1-01',
    description: 'A modern, accessible library branch conveniently located inside AEON Mall Bukit Mertajam.',
    address: 'Lot F38, 1st Floor, AEON Mall Bukit Mertajam, Jalan Rozhan, 14000 Bukit Mertajam, Pulau Pinang',
    phone: '+604-537 1153',
    email: 'ppaj@penanglib.gov.my',
    hours: 'Daily: 10:00 AM - 10:00 PM',
    facilities: ['Free Wi-Fi', 'Reading Area', 'Digital Collection', 'Shopping Mall Access'],
    quickLinks: [
      { label: 'Main Area', sceneId: 'ppaj-f1-01' }
    ],
    map: ''
  },
  {
    id: 'gt',
    name: 'GT - Daerah Timur Laut',
    startNode: 'gt-ext-outside-1',
    description: 'Serving the vibrant George Town community with a rich collection of literature and historical references.',
    address: 'George Town, Pulau Pinang',
    phone: '+604-262 1153',
    email: 'gt@penanglib.gov.my',
    hours: 'Wed - Sun: 9:00 AM - 5:00 PM (Closed Mon, Tue & Public Holidays)',
    facilities: ['Free Wi-Fi', 'Historical Archives', 'Study Area'],
    quickLinks: [
      { label: 'Entrance', sceneId: 'gt-ext-outside-1' }
    ],
    map: ''
  },
  {
    id: 'ppk',
    name: 'PPK - Lounge@Komtar',
    startNode: 'ppk-lounge-1',
    description: 'A premium, modern reading lounge located in the iconic Komtar tower.',
    address: 'Level 3, Komtar, 10000 George Town, Pulau Pinang',
    phone: '+604-261 1153',
    email: 'ppk@penanglib.gov.my',
    hours: 'Mon - Fri: 9:00 AM - 5:00 PM (Closed Weekends & Public Holidays)',
    facilities: ['Free Wi-Fi', 'Premium Lounge', 'Digital Library Kiosks'],
    quickLinks: [
      { label: 'Lounge Area', sceneId: 'ppk-lounge-1' }
    ],
    map: ''
  }
];
