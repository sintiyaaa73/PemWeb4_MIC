# PemWeb4_MIC
PENJELASAN KODINGAN HTML

1.	`<!DOCTYPE html>`: berfungsi untuk memberi tahu komputer bahwa halaman ini adalah halaman web dalam bahasa HTML.

2.	`<html lang="en">`: tempat utama di mana seluruh halaman web akan diletakkan. Sedangkan `lang="en"` menunjukkan bahwa halaman ini menggunakan bahasa Inggris.

3.	//`<head>`: bagian yang digunakan tempat untuk informasi penting tentang halaman web, seperti apa yang akan ditampilkan di tab browser. Berisi informasi tentang halaman web, seperti karakter set, judul, tautan ke berkas eksternal, dan lainnya.

•	`<meta charset="UTF-8">`: Ini mengatur karakter set dokumen sebagai UTF-8, yang mendukung banyak karakter dan simbol.

•	`<meta name="viewport" content="width=device-width, initial-scale=1.0">`: berguna untuk memberi tahu browser bagaimana cara menampilkan halaman web secara optimal pada perangkat berbeda. Ini mengatur tampilan halaman agar sesuai dengan lebar perangkat dan tingkat zoom awalnya adalah 1.0.

•	`<title>KopiKita.</title>`: untuk menampilkan judul halaman yang akan muncul di tab browser.

•	`link rel="preconnect"` dan `link href`: untuk menampilkan tautan ke font eksternal dari Google Fonts.

•	`<script src="https://unpkg.com/feather-icons"></script>`: kodingan tersebut merupakan tautan ke library Feather Icons yang digunakan untuk menampilkan ikon pada halaman web.

•	`<link rel="stylesheet" href="css/style.css" />`: merupakan tautan ke berkas CSS eksternal yang akan mengatur tampilan halaman.

4.	`<body>`: bagian ini berisi konten aktual yang akan ditampilkan pada halaman web. Mencakup navigasi dengan tautan ke berbagai bagian halaman, bagian hero (bagian atas) dengan judul, deskripsi, dan tombol "Beli Sekarang", bagian "Tentang Kami" dengan gambar dan teks yang menjelaskan tentang kedai kopi, bagian "Menu" dengan daftar menu kopi yang ditampilkan dengan gambar, bagian "Kontak" dengan peta Google Maps dan formulir kontak, footer (bagian bawah) dengan tautan sosial media, tautan navigasi, dan kredit pembuat halaman web.

5.	`<script> feather.replace(); </script>`: berguna untuk mengaktifkan ikon Feather Icons pada halaman.

6.	`<script src="js/script.js"></script>`: digunakan untuk menghubungkan halaman web dengan berkas JavaScript eksternal `script.js`, yang mungkin digunakan untuk menambahkan interaktivitas tambahan atau fungsi lainnya ke halaman web.

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
