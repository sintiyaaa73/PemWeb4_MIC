# PemWeb4_MIC
Pengembangan Website

Untuk

Kedai Kopi "Kopikita"

Version 1.0 Disetujui



Disusun Oleh :
SINTIYA 22091397079 MIC

ZAHROH SALSABILA 22091397094 MIC

ROSYIDA AULIYA SALSABILA 22091397104 MIC









D4 Manajemen Informatika

Fakultas Vokasi

Universitas Negeri Surabaya

2023



Copyright © 1999 by Karl E. Wiegers. Permission is granted to use, modify, and distribute this document.


Daftar Isi
Daftar Isi	ii
Riwayat Perubahan	ii
1.	Pengantar	1
1.1	Tujuan  	1
1.2	Konvensi	1
1.3	Audiensi Yang Dituju	1
1.4	Lingkup Produk	1
3.	Deskripsi Keseluruhan	2
2.1	Perspektif produk 	2
2.2	Fungsi Produk	2
2.3	Lingkungan Pengembangan	3
2.4	Kendala Desain dan Implementasi	3
2.5	Dokumentasi Pengguna	3
4.	Persyaratan Antarmuka	4
3.1	Antarmuka Pengguna	4
3.2	Antarmuka Perangkat Keras	4
3.3	Antarmuka Perangkat Lunak	5
3.4	Antarmuka Komunikasi	6
5.	Fitur	7
4.1	Fitur Sistem	7
6.	Persyaratan Fungsional Lainnya	8
5.1	Persyaratan Performa	8
5.2	Persyaratan Keamanan Pengguna	8
5.3	Persyaratan Keamanan Aplikasi	8
5.4	Proses Bisnis	9
7.	Persyaratan Lainnya	11
Appendix A: Glossary	11
Appendix B: Model Analisis	12




Riwayat Perubahan
Name
Date
Reason For Changes
Version




















1. Pengantar
1.1 Tujuan
Pembuatan website kedai kopikita ini memiliki beberapa tujuan, antara lain :

1. Meningkatkan akses layanan kedai kopi bagi pelanggan.
2. Meningkatkan efisiensi layanan kedai kopi dengan mempermudah pelanggan untuk melihat katalog dan memesan kopi.
3. Meningkatkan promosi.

1.2 Konvensi
    Website Kopikita merupakan sebuah website yang dikembangkan sebagai sarana pelayanan yang praktis kepada pelanggan, juga sebagai bentuk promosi dari kedai Kopikita kepada khalayak dengan memanfaatkan teknologi.
Dengan website Kopikita maka pengguna bisa melakukan hal-hal berikut ini, seperti:

1. Melihat katalog menu Kopikita.
2. Membeli kopi secara delivery dengan menghubungi admin.
3. Mengajukan permintaan booking tempat.
4. Admin dapat mengelola pemesanan delivery dan permintaan booking pelanggan dengan mudah.
   
1.3 Audiensi yang Dituju
    Dokumen ini ditujukan untuk semua orang, Pengguna Mobile, Pengguna internet umum, serta audiens yang penggemar kopi.
    
1.4 Lingkup Produk
    Lingkup website Kopikita dapat dikatakan cukup luas. Dengan jangkauan teknologi, website dapat diakses oleh siapa saja dengan mudah. Baik oleh kalangan remaja hingga dewasa dapat menikmati website ini melalui smartphone masing-masing. Mereka dapat melakukan pemesanan, pem-booking-an, hingga menyalurkan saran dan kritik mereka melalui website.

2. Deskripsi Keseluruhan
2.1 Perspektif Produk
    Website Kopikita merupakan website sebuah kedai kopi yang menyediakan profil dan apa saja menu yang tersedia dalam kedai tersebut. Website ini mempermudah para pelanggan untuk melihat katalog dan menghubungi admin untuk melakukan pemesanan, permintaan booking tempat, atau sekadar memberi kritik dan saran.

2.2 Fungsi Web Kopi Kita
    Web Kopi kita memiliki tujuan untuk mempermudah ditemukan oleh calon pelanggan dengan mencari informasi tentang kedai kopi secara online, serta dapat berkomunikasi secara efektif dengan pelanggan dan dapat memungkinkan pelanggan untuk memesan minuman atau makanan sebelum mereka sampai ke kedai kopi. 
    
2.3 Lingkungan Pengembangan
    Website Kopikita memiliki beberapa teknologi yamg dipakai untuk mengembangkan aplikasi, antara lain:

Bahasa pemrogaman:
 - HTML
Software pengembangan:
 - VSCode: software pengembangan
 - Chrome

2.4 Kendala Desain dan Implementasi
    Belum ada kendala yang dialami dalam pengembangan website Kopikita. Web sudah dapat berkembang dengan baik. Sedangkan implementasinya, penggunaan web ini cukup mudah.
    
2.5 Dokumentasi Pengguna
SRS ini dibagi menjadi beberapa bagian, yaitu:

1. Pendahuluan atau pengantar yang berisi gambaran umum dari keseluruhan dokumen SRS, antara lain:
a. Tujuan
b. Konvensi
c. Audiensi yang dituju
d. Lingkup produk
e. Referensi
2. Deskripsi keseluruhan ini membahas mengenai website yang sengaja dirancang dengan fungsi tersendiri. Website  ini dibuat dengan html menggunakan vscode sebagai software pengembangannya.
3. Kebutuhan fungsional
- Calon pelanggan dapat membuka website untuk sekadar melihat menu atau melakukan pemesanan.
- Website dapat menjadi media promosi Kopikita yang memiliki pasar cukup luas dengan jangkauan teknologi.
4. Fungsi website ini secara garis besar untuk memudahkan calon pelanggan untuk mencari tahu segala hal mengenai kedai Kopikita.
3. Persyaratan Antarmuka
3.1 Antarmuka Pengguna
Web Kopikita mengusung konsep desain yang ramah agar pengguna nyaman saat menggunakan aplikasi. Memiliki navigasi yang cukup jelas dan mudah agar pengguna tidak kesulitan saat mengakses halaman, menemukan konten yang ingin dicari.
3.2 Antarmuka Perangkat Keras
Adapun antarmuka perangkat keras yang digunakan untuk mengakses website antara lain:

	1. Smartphone : Hardware untuk mengakses website..
	2. Monitor : Menampilkan halaman website.
3.3 Antarmuka Perangkat Lunak
A. Tampilan Awal

Pada halaman pembuka akan menampilkan halaman beranda, yang pada beranda tersebut terdapat beberapa link untuk pergi ke halaman lain seperti halaman menu, profil, dan lain sebagainya.

B. Tampilan Menu

Pada tampilan menu, akan muncul beberapa hidangan yang tersedia. Terdapat kopi, camilan, yang keseluruhannya dilengkapi dengan harga.

3.4 Antarmuka Komunikasi
    Website Kopikita ini belum menyediakan fitur order dalam aplikasi. Calon pelanggan hanya dapat melihat menu yang tersedia. Sehingga web ini tidak mengharuskan calon pelanggan untuk login.
    
4 Fitur
4.1 Fitur Sistem
4.1.1 Fitur Menu Home
  Fitur menu home atau beranda merupakan fitur utama pada website Kopikita. Dengan fitur ini, user dapat melihat profil singkat Kedaikita.
4.1.2 Fitur Menu
  Fitur menu merupakan fitur yang memungkinkan user untuk melihat berbagai menu yang tersedia secara lengkap melalui website. Bahkan harga juga tertera untuk menjadi referensi.
  
5. Persyaratan Fungsional Lainnya
5.1 Persyaratan Performa
  1. Adanya tampilan katalog dan profil Kopikita.
  2. Membutuhkan koneksi internet yang stabil.
5.2 Persyaratan Keamanan Pengguna
  1. Sistem pemesanan melalui kontak admin. Sehingga tidak terlalu dibutuhkan data-data penting dalam website.
  2. Pemantauan aktivitas pengguna untuk mendeteksi perilaku yang mencurigakan atau potensi ancaman keamanan.
     
5.3 Persyaratan Keamanan Website
  1. Website tidak membutuhkan login ketika user hanya melihat katalog.
  2. Selalu melakukan pembaruan dan pemeliharaan  juga memperbaharui dengan rilis keamanan terbaru.
     
5.4 Proses Bisnis
Proses bisnis dalam website Kopikita dapat melibatkan beberapa langkah dan aktivitas yang bertujuan untuk memudahkan pengelolaan kedai kopi, promosi, dan layanan kepada pengguna. Berikut proses bisnis website Kopikita.
1. Katalog:
   - Calon pelanggan dapat melihat berbagai menu beserta harganya di dalam website.
   - Informasi kontak tersedia untuk melakukan order dan booking tempat.
2. Pemesanan:
   - Pelanggan dapat menggunakan website untuk melakukan pemesanan delivery melalui kontak.
3. Pem-booking-an
   - Pelanggan dapat menghubungi kontak yang tersedia untuk mem-booking tempat jauh-jauh hari.
4. Pengelolaan Menu:
   - Admin dapat dengan mudah mengelola menu dalam katalog melalui website.
     
6. Persyaratan Lainnya
Lampiran A : Glosarium
Istilah
User: Pengguna website Kopikita.
Admin karyawan: Orang yang mendata segala apapun tentang website.
Admin sistem: Orang yang menghandle segala urusan tentang kinerja aplikasi.

Lampiran B : Model Analisis
Flowchart
Flowchart diagram ini menunjukkan alur dalam semua proses yang terdapat di website Kopikita.

Use Case Diagram
Use case diagram adalah proses penggambaran yang dilakukan untuk menunjukkan hubungan antara pengguna dengan sistem yang dirancang.



7. Referensi
[1] https://escappuccino.com/ PinomarthinApril 8, 2023
[2] Britton, Carol (2001). Object-Oriented Systems Development. McGraw-Hill. hlm. 31, 269. ISBN 0-07-709544-8.
[3] Tryo Asnafi, Software Engineering Student, Aug 13, 2020
[4] Tdy Ok  Minggu, 17 Desember 2017, https://koleksibukukuliah.blogspot.com/
[5] Vol 6, No 3 (2018) Aditya https://journal.trunojoyo.ac.id
[6] Analisis kebutuhan perangkat lunak: studi kasus sistem informasi pusat karier UIN Syarif Hidayatullah Jakarta, Annisa Daffa Oktriyana, (2022)
[7] Vennina, Githa Ananta (2022) Analisis kebutuhan perangkat lunak sistem informasi back office (Studi kasus Hublang dan teknik Perumdam Among Tirto Kota Batu). Software Development, Digital Business Intelligence, and Computer Engineering, 1 (1): 1. pp. 1-8. ISSN 2963-9026






PENJELASAN KODINGAN HTML

![image](https://github.com/sintiyaaa73/PemWeb4_MIC/assets/124516555/4586fc2b-dc67-4468-9838-674db2385f3c)

1. <!DOCTYPE html>: Ini adalah deklarasi tipe dokumen yang mengindikasikan bahwa halaman ini adalah dokumen HTML5.
2.	‘<html lang="en">’: Ini adalah elemen root yang mendefinisikan dokumen HTML dan menunjukkan bahwa bahasa yang digunakan adalah bahasa Inggris (English).
3.	<head>: Ini adalah bagian kepala dari halaman web, yang mengandung informasi-informasi meta dan referensi eksternal.
•	<meta charset="UTF-8">: Mendefinisikan karakter set yang digunakan dalam dokumen, dalam hal ini UTF-8 (Unicode).
•	<meta name="viewport" content="width=device-width, initial-scale=1.0">: Mengatur tampilan halaman agar sesuai dengan lebar perangkat dan mengatur tingkat zoom awal.
•	<title>KopiKita.</title>: Menyediakan judul halaman web yang akan ditampilkan di tab peramban.
•	Referensi font eksternal dari Google Fonts. Ini digunakan untuk mengambil jenis huruf Poppins dengan berbagai varian yang akan digunakan dalam desain halaman web.
•	<script src="https://unpkg.com/feather-icons"></script>: Mendownload skrip JavaScript untuk menggunakan ikon dari Feather Icons. Ini memungkinkan penggunaan ikon yang dapat dimasukkan ke dalam halaman web.
•	Referensi ke file CSS eksternal yang digunakan untuk mengatur gaya halaman web. File "style.css" akan mengatur tampilan dan gaya halaman.
4.	<body>: Ini adalah bagian utama yang berisi konten sebenarnya yang akan ditampilkan pada halaman web. Bagian ini masih belum lengkap dalam kode yang Anda berikan dan akan berisi elemen-elemen seperti header, konten, footer, tautan, gambar, dan lainnya yang membangun tampilan halaman web.


![image](https://github.com/sintiyaaa73/PemWeb4_MIC/assets/124516555/5eb8b00d-38c6-4b45-b4b8-a0ad92971e8c)
5. `<nav class="navbar">...</nav>`: Ini adalah bagian dari navigasi, dimulai dengan kelas "navbar". Terdiri dari beberapa elemen:
<a href="#" class="navbar-logo">Kopi<span>Kita</span>.</a>`: Ini adalah logo dengan teks "Kopi" dan "Kita" yang terpisah oleh elemen `<span>`, digunakan untuk penyesuaian gaya.`<div class="navbar-nav">...</div>`: Bagian ini berisi tautan navigasi, seperti "Home," "Tentang Kami," "Menu," dan "Kontak."

6. `<div class="navbar-extra">...</div>`: Ini adalah bagian ekstra di navbar, yang berisi dua tautan lain:
<a href="#" id="search-button"><i data-feather="search"></i></a>`: Menampilkan ikon search menggunakan Feather Icons.
<a href="#" id="shopping-cart"><i data-feather="shopping-cart"></i></a>`: Menampilkan ikon keranjang belanja menggunakan Feather Icons.

7. Kode di bawahnya adalah bagian dari pencarian (search form) yang belum sepenuhnya lengkap:
`<div class="search-form">...</div>`: Ini tampaknya adalah bagian formulir pencarian.
`<input type="search" id="search-box" placeholder="search here...">`: Ini adalah kotak input untuk memasukkan kata kunci pencarian.
`<label for="search-box"><1 data-feather="search"></i></label>`: Label yang terkait dengan kotak pencarian, yang seharusnya menampilkan ikon search.

![image](https://github.com/sintiyaaa73/PemWeb4_MIC/assets/124516555/7a7cc06d-182c-45ee-a386-c7f880e799e8)
8.	<section class="hero" id="home">: Ini adalah elemen <section> yang memiliki atribut class dengan nilai "hero" dan atribut id dengan nilai "home". Ini digunakan untuk mendefinisikan bagian halaman web yang merupakan bagian hero atau bagian yang paling menonjol di halaman tersebut. Class dan ID ini dapat digunakan untuk merujuk dan memodifikasi bagian ini melalui CSS atau JavaScript.
9.	<main class="content">: Ini adalah elemen <main> yang memiliki atribut class dengan nilai "content". Elemen <main> digunakan untuk mengelompokkan konten utama dari halaman web. Class "content" mungkin digunakan untuk memodifikasi tampilan konten dalam bagian hero menggunakan CSS.
10.	<h1>: Ini adalah elemen judul utama (heading) level 1 yang digunakan untuk menampilkan judul utama halaman. Kontennya adalah "Selamat Datang di Kedai Kopi 'Kopi Kita' Kami Menyediakan Kopi yang Berkualitas Untuk Anda Nikmati." Ini adalah pesan selamat datang yang akan ditampilkan dalam huruf besar dan menonjol di halaman.
11.	<p>: Ini adalah elemen paragraf yang digunakan untuk menampilkan teks deskripsi dalam bagian hero. Kontennya adalah "Mari nikmati minuman kami," yang mengundang pengunjung untuk menikmati minuman di kedai kopi.
12.	<a href="#menu" class="cta">Beli Sekarang</a>: Ini adalah elemen tautan (link) yang memiliki atribut href yang merujuk ke elemen dengan id "menu" di halaman yang sama. Ini akan membuat tautan ini mengarahkan pengunjung ke bagian "Menu" saat diklik. Class "cta" mungkin digunakan untuk memodifikasi tampilan tautan ini, misalnya, dengan menggunakan gaya tombol (button).

![image](https://github.com/sintiyaaa73/PemWeb4_MIC/assets/124516555/6c100a8e-8ffa-408b-a4d7-5bd4bfee2223)
13.	<section id="about" class="about">: Ini adalah elemen <section> yang memiliki atribut id dengan nilai "about" dan atribut class dengan nilai "about". Ini digunakan untuk mendefinisikan bagian halaman web yang berisi informasi tentang kedai kopi dan timnya.
14.	<h2><span>Tentang</span>Kami</h2>: Ini adalah elemen judul (heading) level 2 yang digunakan untuk menampilkan judul bagian "Tentang Kami". Bagian "Tentang" diberikan dalam elemen <span> untuk memungkinkan pemformatan khusus melalui CSS jika diperlukan.
15.	<div class="row">: Ini adalah sebuah elemen div dengan atribut class "row" yang digunakan untuk membuat baris atau row di dalam bagian "Tentang Kami". Biasanya, elemen div dengan class "row" digunakan dalam desain responsif untuk mengatur tata letak konten.
16.	<div class="about-img">: Ini adalah elemen div dengan atribut class "about-img" yang digunakan untuk menampilkan gambar yang mewakili bagian "Tentang Kami". Gambar tersebut mungkin menampilkan interior kedai kopi, logo, atau gambar yang relevan.
17.	<img src="" alt= " />: Ini adalah elemen gambar (<img>) yang menampilkan gambar yang terkait dengan bagian "Tentang Kami". Atribut src digunakan untuk menentukan sumber gambar, dan atribut alt digunakan untuk teks alternatif yang akan ditampilkan jika gambar tidak dapat dimuat.
18.	<div class="content">: Ini adalah elemen div dengan atribut class "content" yang digunakan untuk mengelompokkan konten teks yang menjelaskan "Tentang Kami".
19.	<h3>Kenapa memilih kopi kami?</h3>: Ini adalah elemen judul (heading) level 3 yang digunakan untuk menampilkan judul subbagian yang menjelaskan mengapa pengunjung harus memilih kopi dari kedai ini.
20.	p = text deskripsi

![image](https://github.com/sintiyaaa73/PemWeb4_MIC/assets/124516555/49f2a73d-24f3-4dee-857c-93975147ea0b)
21.	<section menu">: Ini adalah elemen <section> yang memiliki atribut id dengan nilai "menu" dan atribut class dengan nilai "menu". Ini digunakan untuk mendefinisikan bagian halaman web yang berisi daftar menu makanan atau minuman yang ditawarkan oleh kedai kopi.
22.	<h2><span>Menu</span>Kami</h2>: Ini adalah elemen judul (heading) level 2 yang digunakan untuk menampilkan judul bagian "Menu Kami". Bagian "Menu" diberikan dalam elemen <span> untuk memungkinkan pemformatan khusus melalui CSS jika diperlukan.
23.	<p>Menu yang kami sediakan:</p>: Ini adalah elemen paragraf yang digunakan untuk menampilkan teks deskripsi yang memberi tahu pengunjung bahwa bagian ini berisi daftar menu yang tersedia di kedai kopi.
24.	<div class="row">: Ini adalah elemen div dengan atribut class "row" yang digunakan untuk membuat baris atau row di dalam bagian "Menu". Seperti yang disebutkan sebelumnya, elemen div dengan class "row" biasanya digunakan untuk mengatur tata letak konten, terutama dalam desain responsif.
25.	<div class="menu-card">: Ini adalah elemen div dengan atribut class "menu-card" yang digunakan untuk mengelompokkan menu-menu atau item-item makanan/minuman yang akan ditampilkan.
26.	<img src="" alt="" class="" /> dan <img src="" alt="" class="": Ini adalah elemen gambar (<img>) yang menampilkan gambar masing-masing menu atau item makanan/minuman. Atribut src digunakan untuk menentukan sumber gambar, atribut alt digunakan untuk teks alternatif yang akan ditampilkan jika gambar tidak dapat dimuat, dan atribut class "menu-card-img" mungkin digunakan untuk memberikan gaya atau format khusus pada gambar.

![image](https://github.com/sintiyaaa73/PemWeb4_MIC/assets/124516555/87778148-82ba-4200-8e1d-3b75f2ae51fd)
27.	<iframe src="https://www.google.com/maps/embed?pb=... Ini adalah elemen <iframe> yang menampilkan peta dari Google Maps yang menunjukkan lokasi kedai kopi. URL dalam atribut src mengacu pada peta yang akan ditampilkan. Ini memungkinkan pengunjung untuk melihat lokasi kedai kopi pada peta.
28.	<form action="">: Ini adalah elemen <form> yang digunakan untuk membuat formulir kontak. Atribut action pada elemen form akan menentukan URL tempat data formulir akan dikirimkan untuk diproses, tetapi dalam kode ini, atribut action masih kosong, yang berarti data formulir tidak akan dikirim ke tempat tertentu.
29.	<div class="input-group">: Ini adalah elemen div dengan atribut class "input-group" yang digunakan untuk mengelompokkan ikon dan input. Setiap elemen div ini menggambarkan kotak input dengan ikon yang sesuai.
30.	<i data-feather="user"></i>: Ini adalah elemen ikon yang digunakan untuk menampilkan ikon pengguna. Ikon ini menggunakan Feather Icons, dan atribut data-feather menentukan jenis ikon yang akan ditampilkan.
31.	<input type="text" placeholder="nama">: Ini adalah elemen input yang digunakan untuk memasukkan nama pengguna. Atribut type menunjukkan jenis input, yaitu teks, dan atribut placeholder digunakan untuk memberikan petunjuk teks dalam kotak input.

![image](https://github.com/sintiyaaa73/PemWeb4_MIC/assets/124516555/728e31ec-f88d-4e7f-a66b-d8268491a44f)
32.	<footer>: Ini adalah elemen <footer> yang digunakan untuk mendefinisikan bagian kaki halaman dari halaman web. Footer biasanya berisi informasi tambahan, tautan, dan kredit kepada pembuat halaman.
33.	<div class="socials">: Ini adalah elemen div dengan atribut class "socials" yang digunakan untuk mengelompokkan tautan ke media sosial atau ikon sosial.
•	<a href="#"><i data-feather="instagram"></i></a>: Ini adalah elemen tautan (link) yang merujuk ke halaman media sosial Instagram. Ikon Instagram ditampilkan menggunakan Feather Icons. Namun, atribut href dalam tautan ini masih kosong, yang berarti belum ada URL yang ditentukan.
•	<a href="#"><i data-feather="facebook"></i></a>: Ini adalah elemen tautan (link) yang merujuk ke halaman media sosial Facebook. Ikon Facebook ditampilkan menggunakan Feather Icons. Seperti sebelumnya, atribut href dalam tautan ini masih kosong.
•	<a href="#"><i data-feather="phone"></i></a>: Ini adalah elemen tautan (link) yang mungkin merujuk ke nomor telepon kontak. Ikon telepon ditampilkan menggunakan Feather Icons. Atribut href dalam tautan ini mungkin akan diisi dengan nomor telepon jika diinginkan.
34.	<div class="links">: Ini adalah elemen div dengan atribut class "links" yang digunakan untuk mengelompokkan tautan navigasi atau menu ke berbagai bagian halaman.
•	Terdapat tautan ke "Home", "Tentang Kami", "Menu", dan "Kontak" yang merujuk ke bagian-bagian tertentu dalam halaman web. Ini memungkinkan pengunjung untuk dengan mudah mengakses berbagai bagian halaman.
35.	<div class="credit">: Ini adalah elemen div dengan atribut class "credit" yang digunakan untuk menampilkan kredit kepada pembuat halaman.
•	<p>Created by <a href="">SalsaAsaSintiya</a>. | &copy; 2023.</p>: Ini adalah teks yang mencantumkan nama pembuat halaman, dalam hal ini "SalsaAsaSintiya," dan tahun pembuatan halaman (© 2023). 


PENJELASAN KODINGAN CSS

1. `:root`: merupakan pseudo-class yang digunakan untuk mendefinisikan variabel CSS. Dalam kodingan ini, didefinisikan dua variabel utama:

•	`--primary`: variabel ini digunakan untuk menyimpan warna utama dalam kode hex.

•	`--bg`: variabel ini digunakan untuk menyimpan warna latar belakang halaman web dalam kode hex.

2. `*`: simbol tersebut merupakan selektor universal yang memengaruhi semua elemen HTML di halaman web. Simbol `*` digunakan untuk mengatur beberapa hal secara serentak untuk semua elemen HTML, seperti paragraf, header, gambar, tombol, dan lain sebagainya. Beberapa aturan yang diterapkan pada semua elemen HTML melalui selektor universal ini, yaitu:

•	Menghapus margin dan padding default yaitu ruang kosong di sekitar dan di dalam elemen yang biasanya dimiliki elemen HTML.

•	Mengatur `box-sizing` ke `border-box`, yang membuat lebar dan tinggi elemen termasuk tepi dan padding.

•	Menghapus garis luar (outline) dan border default elemen HTML.

•	Menghapus dekorasi teks default seperti garis bawah (underline) dari tautan.

3. `html`: merupakan selector untuk elemen `<html>` dan digunakan untuk mengatur perilaku halaman web.

4. `body`: merupakan selector untuk elemen `<body>`. Selector ini yang mengatur tampilan halaman secara keseluruhan. Diantaranya:

•	Menggunakan font "Poppins" atau font sans-serif jika "Poppins" tidak tersedia.

•	Mengatur latar belakang halaman menggunakan variabel `--bg`.

•	Mengatur warna teks menjadi putih (`#fff`).

5. `.navbar`: merupakan selector untuk elemen dengan kelas `.navbar`, yang mengatur tampilan navbar di bagian atas halaman. Selector ini melakukan beberapa pengaturan , yaitu:

•	Menyusun elemen-elemen dalam navbar dengan jarak yang sesuai.

•	Mengatur latar belakang dengan warna transparan hitam (RGBA) untuk efek latar belakang semi-transparan.

•	Menambahkan border bawah dan z-index agar navbar selalu terlihat di atas konten halaman lainnya.

6. `.navbar .navbar-logo`: merupakan selector untuk elemen dengan kelas `.navbar-logo` yang ada di dalam navbar, yaitu:

•	Ukuran font, bobot font, dan warna teks logo.

•	Memberi warna berbeda pada bagian kata "Kopi" menggunakan variabel `--primary`.

7. `.navbar .navbar-nav a`: merupakan selector untuk tautan dalam navbar. Selector tersebut mengatur warna teks tautan dan ukuran font, serta memberi efek hover dengan mengubah warna teks saat tautan ditemukan oleh kursor.

8. `.navbar .navbar-nav a:after`: merupakan selector untuk menambahkan garis bawah tautan setelah tautan dipilih.

PENJELASAN CODINGAN JS

Baris 2: Kode ini mencoba untuk memilih elemen HTML dengan kelas "navbar-nav" menggunakan "document.querySelector" dan menyimpannya dalam variabel "navbarnav".

2. Baris 4-6: Inilah event handler yang akan dipicu ketika elemen HTML dengan ID "menu" diklik. Ketika elemen tersebut diklik, kelas "aktif" pada elemen dengan kelas "navbar-nav" akan diaktifkan. Artinya, jika kelas "aktif" sudah ada, maka akan dihapus; jika belum ada, maka akan ditambahkan.

3. Baris 9: Pada baris ini, kode mencoba untuk memilih elemen HTML dengan ID "menu" dan menyimpannya dalam variabel "menu".

4. Baris 11-14: Ini mencoba memeriksa apakah klik terjadi di luar elemen yang ada, khususnya elemen dengan ID "menu" dan elemen dengan kelas "navbar-nav". Jika ada klik di luar elemen tersebut, maka kelas "aktif" pada elemen dengan kelas "navbar-nav" akan dihapus.

5. Baris 15-16: Ini adalah sampul blok kode yang melacak klik di luar elemen. Namun, perlu dicatat bahwa ada kebingungan mengenai variabel "e" yang digunakan di sini. Anda perlu memastikan bahwa variabel 'e' telah ditentukan sebelumnya dalam cakupan yang benar.

Kode ini tampaknya dirancang untuk mengontrol tampilan atau perilaku elemen "navbar-nav" dengan menambahkan atau menghapus kelas "aktif" ketika elemen "menu" diklik, dan ketika diklik terjadi di luar area tersebut. Namun, perlu diperbaiki beberapa potensi bug, terutama mengenai variabel 'e' yang digunakan di dalam event handler.
