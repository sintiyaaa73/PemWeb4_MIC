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

1.	`<!DOCTYPE html>`: berfungsi untuk memberi tahu komputer bahwa halaman ini adalah halaman web dalam bahasa HTML.

2.	`<html lang="en">`: tempat utama di mana seluruh halaman web akan diletakkan. Sedangkan `lang="en"` menunjukkan bahwa halaman ini menggunakan bahasa Inggris.

3.	`<head>`: bagian yang digunakan tempat untuk informasi penting tentang halaman web, seperti apa yang akan ditampilkan di tab browser. Berisi informasi tentang halaman web, seperti karakter set, judul, tautan ke berkas eksternal, dan lainnya.
   
4.	`<meta charset="UTF-8">`: Ini mengatur karakter set dokumen sebagai UTF-8, yang mendukung banyak karakter dan simbol.
   
5.	`<meta name="viewport" content="width=device-width, initial-scale=1.0">`: berguna untuk memberi tahu browser bagaimana cara menampilkan halaman web secara optimal pada perangkat berbeda. Ini mengatur tampilan halaman agar sesuai dengan lebar perangkat dan tingkat zoom awalnya adalah 1.0.

6.	`<title>KopiKita.</title>`: untuk menampilkan judul halaman yang akan muncul di tab browser.

7.	`link rel="preconnect"` dan `link href`: untuk menampilkan tautan ke font eksternal dari Google Fonts.

8.	`<script src="https://unpkg.com/feather-icons"></script>`: kodingan tersebut merupakan tautan ke library Feather Icons yang digunakan untuk menampilkan ikon pada halaman web.

9.	`<link rel="stylesheet" href="css/style.css" />`: merupakan tautan ke berkas CSS eksternal yang akan mengatur tampilan halaman.

10.	`<body>`: bagian ini berisi konten aktual yang akan ditampilkan pada halaman web. Mencakup navigasi dengan tautan ke berbagai bagian halaman, bagian hero (bagian atas) dengan judul, deskripsi, dan tombol "Beli Sekarang", bagian "Tentang Kami" dengan gambar dan teks yang menjelaskan tentang kedai kopi, bagian "Menu" dengan daftar menu kopi yang ditampilkan dengan gambar, bagian "Kontak" dengan peta Google Maps dan formulir kontak, footer (bagian bawah) dengan tautan sosial media, tautan navigasi, dan kredit pembuat halaman web.


11.	`<script> feather.replace(); </script>`: berguna untuk mengaktifkan ikon Feather Icons pada halaman.

12.	`<script src="js/script.js"></script>`: digunakan untuk menghubungkan halaman web dengan berkas JavaScript eksternal `script.js`, yang mungkin digunakan untuk menambahkan interaktivitas tambahan atau fungsi lainnya ke halaman web.

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
