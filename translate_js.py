import re

translations = {
    # Descriptions
    r"The main headquarters of the Penang Public Library Corporation, offering extensive collections, specialized references, and modern facilities.": r"Ibu pejabat utama Perbadanan Perpustakaan Awam Pulau Pinang, menawarkan koleksi komprehensif, rujukan khusus, dan kemudahan moden.",
    r"Serving the Northern Seberang Perai district, this branch provides community-focused learning resources and comfortable reading spaces.": r"Berkhidmat untuk daerah Seberang Perai Utara, cawangan ini menyediakan sumber pembelajaran berfokuskan komuniti dan ruang membaca yang selesa.",
    r"Located in Jawi, offering a tranquil environment for reading and studying for the Southern Seberang Perai community.": r"Terletak di Jawi, menawarkan persekitaran yang tenang untuk membaca dan belajar bagi komuniti Seberang Perai Selatan.",
    r"The Bukit Mertajam branch is a hub for community activities, featuring a wide range of books and digital resources.": r"Cawangan Bukit Mertajam merupakan hab untuk aktiviti komuniti, menyediakan pelbagai pilihan buku dan sumber digital.",
    r"A modern, accessible library branch conveniently located inside AEON Mall Bukit Mertajam.": r"Sebuah cawangan perpustakaan yang moden dan mudah diakses, terletak dengan strategik di dalam AEON Mall Bukit Mertajam.",
    r"Serving the vibrant George Town community with a rich collection of literature and historical references.": r"Berkhidmat untuk komuniti George Town yang meriah dengan koleksi sastera dan rujukan sejarah yang kaya.",
    r"A premium, modern reading lounge located in the iconic Komtar tower.": r"Ruang membaca moden dan premium yang terletak di menara ikonik Komtar.",

    # Hours
    r"Wed - Sun: 9:00 AM - 5:00 PM \(Closed Mon, Tue & Public Holidays\)": r"Rabu - Ahad: 9:00 PG - 5:00 PTG (Tutup Isnin, Selasa & Cuti Umum)",
    r"Daily: 10:00 AM - 10:00 PM": r"Setiap Hari: 10:00 PG - 10:00 MLM",
    r"Mon - Fri: 9:00 AM - 5:00 PM \(Closed Weekends & Public Holidays\)": r"Isnin - Jumaat: 9:00 PG - 5:00 PTG (Tutup Hujung Minggu & Cuti Umum)",

    # Facilities
    r"'Free Wi-Fi'": r"'Wi-Fi Percuma'",
    r"'Reference Section'": r"'Bahagian Rujukan'",
    r"'Kids Zone'": r"'Zon Kanak-kanak'",
    r"'Auditorium'": r"'Auditorium'",
    r"'Maker Space'": r"'Ruang Reka'",
    r"'Cafeteria'": r"'Kafeteria'",
    r"'Study Pods'": r"'Pod Pembelajaran'",
    r"'Children\\'s Section'": r"'Bahagian Kanak-kanak'",
    r"'Computer Lab'": r"'Makmal Komputer'",
    r"'Reading Lounge'": r"'Ruang Membaca'",
    r"'Meeting Rooms'": r"'Bilik Mesyuarat'",
    r"'Multi-purpose Hall'": r"'Dewan Serbaguna'",
    r"'IT Corner'": r"'Sudut IT'",
    r"'Kids Section'": r"'Bahagian Kanak-kanak'",
    r"'Reading Area'": r"'Kawasan Membaca'",
    r"'Digital Collection'": r"'Koleksi Digital'",
    r"'Shopping Mall Access'": r"'Akses Pusat Beli-belah'",
    r"'Historical Archives'": r"'Arkib Sejarah'",
    r"'Study Area'": r"'Kawasan Pembelajaran'",
    r"'Premium Lounge'": r"'Ruang Rehat Premium'",
    r"'Digital Library Kiosks'": r"'Kiosk Perpustakaan Digital'",

    # Quick Links Labels
    r"label: 'Kids Zone'": r"label: 'Zon Kanak-kanak'",
    r"label: 'Reference Section'": r"label: 'Bahagian Rujukan'",
    r"label: 'Maker Space'": r"label: 'Ruang Reka'",
    r"label: 'Lobby'": r"label: 'Lobi'",
    r"label: 'Kids Area'": r"label: 'Kawasan Kanak-kanak'",
    r"label: 'Entrance'": r"label: 'Pintu Masuk'",
    r"label: 'Exterior'": r"label: 'Luaran'",
    r"label: 'GF Lobby'": r"label: 'Lobi Aras Bawah'",
    r"label: 'Main Area'": r"label: 'Kawasan Utama'",
    r"label: 'Lounge Area'": r"label: 'Kawasan Ruang Rehat'"
}

file_path = 'js/tour-config.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

for en, ms in translations.items():
    content = re.sub(en, ms, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done translating tour-config.js")
