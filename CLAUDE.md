# Catatan untuk Claude

- Situs statis tanpa build: `index.html` + `assets/style.css` + `img/`. Push ke `main` = deploy Vercel.
- Jangan tambahkan JavaScript yang menggulung halaman (auto TOC / scrollIntoView): di HP daftar isi ada di atas konten, sehingga halaman maju mundur. Sudah dihapus atas permintaan atasan.
- Bahasa panduan: Indonesia, singkat, tidak kaku. Satu bab = satu `<section id="..." class="sec">` dengan
  `<div class="kicker">NN · GRUP</div>`, `<h2>`, `<p class="lead">`, lalu isi.
- Komponen yang dipakai (lihat CSS): `ol.steps` (langkah bernomor), `figure.shot` (screenshot dengan bar browser +
  `figcaption`; beri `width`/`height` di `<img>`), `.note.info|warn|tip|ok`, `.tbl > table`, `.flow > .fstep`,
  `.cards > .card`, `.st` (badge status), `.jr` (tabel jurnal), `details/summary` (FAQ), `span.btn` (tombol),
  `span.path` (menu, pemisah `<i>›</i>`).
- Bab baru → tambah juga link-nya di `<nav>` (grup `.tg` + `<a href="#id"><span>N</span>Judul</a>`) dan perbarui
  nomor bab setelahnya serta jumlah "Bab" di hero.
- Screenshot diambil dari Xerpium (Odoo 18) db gran-malindo-hotel, lebar 1350 px, JPG.
- Kode akun mengikuti CoA database (mis. 500.1 Pendapatan Kamar, 300.2 Hutang PBJT, 300.4 Hutang Service).
