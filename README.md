# Simple Notes API

Tugas Back End IL

Simple Notes API adalah API untuk membuat, menampilkan, mengubah, dan menghapus catatan, dibangun dengan Node.js, Express.js, dan menggunakan MySQL sebagai database.

## Fitur
- **POST** `/notes` - Membuat catatan baru
- **GET** `/notes` - Menampilkan semua catatan
- **GET** `/notes/:idNote` - Menampilkan catatan berdasarkan ID
- **PATCH** `/notes/:idNote` - Mengubah catatan berdasarkan ID (judul, tanggal, dan isi)
- **DELETE** `/notes/:idNote` - Menghapus catatan berdasarkan ID

## Persyaratan

- **Node.js** (versi 14 atau lebih baru)
- **MySQL** atau **MariaDB** sebagai database

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan Simple Notes API di sistem lokal Anda:

1. Clone repository ini:
   ```bash
   git clone https://github.com/username/simple-notes-api.git
   
2. Masuk ke direktori proyek:
   ```bash
   cd simple-notes-api

3. Install dependencies:
   ```bash
   npm install

4. Jalankan aplikasi:
   ```bash
   npm start
