# Dunia Cimey

Kuis belajar untuk anak (Indonesia dan Inggris): hewan, tumbuhan, kendaraan, buah, sayur, anggota tubuh, profesi, warna, bentuk, angka, alfabet, dan huruf hijaiyah.

Dibuat dengan cinta untuk Cimey dan Coco.

## Pasang di GitHub Pages
1. Buat repository baru di GitHub (misalnya `dunia-cimey`), publik.
2. Ekstrak zip, lalu unggah **isi folder** (bukan foldernya) ke repository: `index.html`, `sw.js`, `manifest.webmanifest`, `.nojekyll`, folder `fonts`, folder `ikon`. Di web GitHub: *Add file > Upload files*, seret semuanya, lalu *Commit changes*.
   - File `.nojekyll` tersembunyi di beberapa sistem. Kalau tidak ikut terunggah, buat file kosong bernama `.nojekyll` lewat *Add file > Create new file*.
3. Buka *Settings > Pages*. Di *Build and deployment* pilih *Deploy from a branch*, branch `main`, folder `/ (root)`, lalu *Save*.
4. Tunggu 1-3 menit. Alamatnya: `https://NAMA-GITHUB-KAMU.github.io/dunia-cimey/`
5. Di HP: buka alamat itu di Chrome. Tombol **Pasang** di menu utama memasang app ke layar utama (di iPhone: Bagikan > Tambahkan ke Layar Utama).

## Fitur layar
- Tombol **layar penuh** di pojok kanan atas (tersembunyi kalau browser tidak mendukung atau app sudah terpasang). App yang dipasang ke layar utama dibuka layar penuh di Android.
- Tombol **kembali** di pojok kiri atas, dan tombol kembali bawaan HP juga bekerja: kuis > level > menu hewan > menu utama.
- Musik latar menyala otomatis setelah ketukan pertama (matikan dengan tombol musik; pilihan diingat).
- Semua layar permainan dirancang muat satu layar tanpa scroll (diuji di 320x568, 360x640, 390x844, dan tablet).
- Tombol **Zoom** (menu utama) mengganti ukuran tampilan: 85%, 100%, 115%, 130%. Pilihan tersimpan.
- Zoom dengan cubit dan ketuk dua kali dikunci supaya tidak tidak sengaja membesar.

## Offline dan pembaruan
- `sw.js` menyimpan cadangan di perangkat, jadi setelah dibuka sekali app tetap jalan tanpa internet.
- Selalu mencoba versi terbaru lebih dulu. Untuk memperbarui, ganti `index.html`, commit, tunggu Pages selesai, lalu buka ulang app (kadang perlu dibuka dua kali).
- Kalau masih versi lama: hapus data situs di pengaturan Chrome.

## Catatan
- Font Baloo 2 disimpan di folder `fonts` (lisensi OFL), tidak memuat dari Google Fonts.
- Data pemain tersimpan di browser perangkat itu (localStorage). Alamat berbeda = data terpisah. Gunakan Simpan progress di area Orang tua untuk cadangan.
- Aset gambar dan suara dibuat dengan Canva dan ElevenLabs (paket berbayar). Simpan bukti langganan dan syarat lisensi untuk keperluan Play Store.
