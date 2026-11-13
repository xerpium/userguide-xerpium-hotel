# User Guide – Xerpium Hotel Management (Gran Malindo Hotel)

Panduan pengguna Xerpium Hotel Management: setup CoA, pajak & produk, master data, reservasi sampai check-out,
housekeeping, night audit, POS restoran (tagihan ke kamar), Print Direct, jurnal, dan laporan.

Website statis (HTML + CSS, tanpa JavaScript dan tanpa build). Di-hosting di Vercel: setiap push ke `main` otomatis deploy.

## Struktur

```
index.html        isi panduan (35 bab, satu halaman)
assets/style.css  tampilan (tema gelap, sidebar, kartu bab, screenshot)
img/              screenshot aplikasi & logo Xerpium
vercel.json       pengaturan Vercel (cache gambar)
```

## Edit & publish

1. Edit `index.html` (atau minta Claude mengeditnya).
2. Screenshot baru: simpan di `img/`, panggil dengan blok `<figure class="shot">` seperti yang sudah ada.
3. `git add . && git commit -m "..." && git push` → Vercel deploy otomatis dalam ±1 menit.

Lihat lokal: buka `index.html` langsung di browser.

## Deploy pertama di Vercel

Vercel → **Add New… → Project** → import repo `userguide-xerpium-hotel` → Framework Preset **Other**,
Build Command & Output Directory dibiarkan kosong → **Deploy**.
