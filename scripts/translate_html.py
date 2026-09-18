import glob
import re

translations = {
    r'&larr; Back to Branches': r'&larr; Kembali ke Senarai Cawangan',
    r'Select a branch below to begin exploring': r'Pilih cawangan di bawah untuk mula meneroka',
    r'Start 360° Tour': r'Mula Lawatan 360°',
    r'<h3>About</h3>': r'<h3>Mengenai Kami</h3>',
    r'<strong>Address:</strong>': r'<strong>Alamat:</strong>',
    r'<strong>Phone:</strong>': r'<strong>Telefon:</strong>',
    r'<strong>Email:</strong>': r'<strong>E-mel:</strong>',
    r'<strong>Operating Hours:</strong>': r'<strong>Waktu Operasi:</strong>',
    r'Wed - Sun:': r'Rabu - Ahad:',
    r'\(Closed Mon, Tue & Public Holidays\)': r'(Tutup Isnin, Selasa & Cuti Umum)',
    r'\(Closed Mon, Tue &amp; Public Holidays\)': r'(Tutup Isnin, Selasa &amp; Cuti Umum)',
    r'<h3>Facilities</h3>': r'<h3>Kemudahan</h3>',
    r'Free Wi-Fi': r'Wi-Fi Percuma',
    r'Reference Section': r'Bahagian Rujukan',
    r'Kids Zone': r'Zon Kanak-kanak',
    r'Auditorium': r'Auditorium',
    r'Maker Space': r'Ruang Reka',
    r'Cafeteria': r'Kafeteria',
    r'<h3>Quick Jump</h3>': r'<h3>Pautan Pantas</h3>',
    r'<p>Start the tour directly from these popular areas:</p>': r'<p>Mulakan lawatan terus dari kawasan popular ini:</p>',
    r'<h3>Rules &amp; Regulations</h3>': r'<h3>Peraturan &amp; Syarat</h3>',
    r'<h3>Rules & Regulations</h3>': r'<h3>Peraturan & Syarat</h3>',
    r'Welcome to PPAPP! To ensure a comfortable and conducive environment for all our visitors, we kindly request that you observe our library rules and regulations.': r'Selamat datang ke PPAPP! Bagi memastikan persekitaran yang selesa dan kondusif untuk semua pengunjung, kami memohon agar anda mematuhi peraturan dan syarat perpustakaan.',
    r'Please keep your voice down to maintain a quiet reading environment.': r'Sila perlahankan suara anda untuk mengekalkan persekitaran membaca yang tenang.',
    r'Food and drinks are strictly prohibited inside the reading areas.': r'Makanan dan minuman adalah dilarang sama sekali di dalam kawasan membaca.',
    r'Please handle all library materials, books, and equipment with care.': r'Sila kendalikan semua bahan perpustakaan, buku dan peralatan dengan berhati-hati.',
    r'Ensure your personal belongings are kept secure at all times.': r'Pastikan barangan peribadi anda sentiasa disimpan dengan selamat.',
    r'Thank you for your cooperation in making the library a pleasant place for everyone!': r'Terima kasih atas kerjasama anda dalam menjadikan perpustakaan sebuah tempat yang menyenangkan untuk semua!',
    
    # Branch descriptions
    r'The main headquarters of the Penang Public Library Corporation, offering extensive collections, specialized references, and modern facilities.': r'Ibu pejabat utama Perbadanan Perpustakaan Awam Pulau Pinang, menawarkan koleksi komprehensif, rujukan khusus dan kemudahan moden.',
    r'The Bukit Mertajam branch is a hub for community activities, featuring a wide range of books and digital resources.': r'Cawangan Bukit Mertajam merupakan hab untuk aktiviti komuniti, menyediakan pelbagai pilihan buku dan sumber digital.',
    r'Loading description...': r'Memuatkan penerangan...',
    r'Loading title...': r'Memuatkan tajuk...',
}

for html_file in glob.glob('*.html'):
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for en, ms in translations.items():
        content = re.sub(en, ms, content)
    
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done translating HTML files.")
