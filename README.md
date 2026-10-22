# Manhal Studio Website

Website portofolio jasa desain grafis menggunakan HTML, CSS, dan JavaScript.

## Struktur folder

- `index.html` — struktur website dan galeri 22 portofolio
- `style.css` — tampilan responsif
- `script.js` — menu mobile, preview gambar, dan tautan WhatsApp
- `assets/` — simpan 22 gambar portofolio di sini

## Menambahkan 22 gambar

Masukkan gambar ke folder `assets/` dengan nama file berikut:

- `portofolio1.png`
- `portofolio2.png`
- `portofolio3.png`
- ... lanjutkan sampai ...
- `portofolio22.png`

Nama harus sama persis, termasuk huruf kecil/besar. Website saat ini menggunakan ekstensi `.png`. Kalau gambar kamu berekstensi `.png`, `.jpg`, atau `.jpeg`, ubah ekstensi pada atribut `src` dan `data-image` di `index.html` supaya cocok dengan nama file sebenarnya.

## Upload ke GitHub

Upload `index.html`, `style.css`, `script.js`, dan seluruh folder `assets/` ke root repository GitHub. Struktur akhirnya harus seperti ini:

```text
repository/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── portofolio1.png
    ├── portofolio2.png
    ├── ...
    └── portofolio22.png
```

## WhatsApp

Buka `script.js`, lalu ganti `62XXXXXXXXXX` pada `WHATSAPP_NUMBER` dengan nomor WhatsApp kamu, menggunakan kode negara tanpa tanda `+`, spasi, atau tanda hubung.

## GitHub Pages

1. Buka **Settings → Pages** di repository.
2. Pada **Build and deployment**, pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
4. Tunggu proses deploy selesai.
