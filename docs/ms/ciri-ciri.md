# Ciri-ciri Utama

Wabot mempunyai tujuh ciri utama yang berfungsi bersama dalam satu papan pemuka.

## 1. Chatbot AI

Chatbot berkuasa AI yang menjawab soalan pelanggan, mencadangkan produk, dan menutup jualan 24/7.

**Cara guna:**

1. Pergi ke **Chatbots** di bar sisi.
2. Pilih akaun WhatsApp.
3. Klik **Create Chatbot**.
4. Latih bot dengan memuat naik dokumen FAQ, katalog produk, dan senarai harga.
5. Tetapkan persona (nama, nada, bahasa).
6. Uji dalam **Test Chat** sebelum aktifkan.

**Ciri penting:**

- Balas konteks (teks, imej, video, suara)
- Penyerahan AI-ke-manusia yang lancar
- Dilatih dengan kandungan anda sendiri, bukan skrip generik
- Kredit AI mengikut pelan (Plus: 3,000/bulan, Premier: 10,000, Platinum: 50,000)

---

## 2. Broadcast (Siaran)

Hantar mesej yang sama kepada senarai kenalan — sesuai untuk promosi, pelancaran produk, dan peringatan.

**Cara guna:**

1. Pergi ke **Broadcast → Create**.
2. **Langkah 1:** Pilih akaun dan kumpulan kenalan.
3. **Langkah 2:** Tulis mesej, tambah media, masukkan placeholder `{name}`.
4. **Langkah 3:** Hantar sekarang atau jadualkan.

**Amalan terbaik:**

- Dapatkan kebenaran opt-in sebelum menghantar
- Mula dengan kumpulan kecil (50–100) sebelum skala besar
- Hantar dalam waktu perniagaan (9pg–9mlm)
- Sediakan pilihan berhenti melanggan ("balas STOP")

---

## 3. Automasi

Bina aliran kerja tanpa kod menggunakan pembina visual. Dicetuskan oleh **webhook** atau **perubahan label WhatsApp**.

**Cara guna:**

1. Pergi ke **Automation → Create**.
2. Isi maklumat asas (nama, akaun, status).
3. Pilih jenis pencetus:
    - **Webhook** — dicetuskan oleh panggilan luaran (borang, CRM, e-dagang)
    - **Label** — dicetuskan apabila label ditambah/dibuang pada kenalan
4. Tetapkan tetapan lanjutan (jalankan sekali per kenalan, pengendalian ralat).
5. Klik **Create & Add Actions**.
6. Tambah tindakan: hantar mesej, tunggu, tambah label, kemas kini Google Sheet, dll.

---

## 4. Autoresponder (Balasan Automatik)

Balasan automatik berdasarkan kata kunci — percuma, tanpa kredit AI.

**Cara guna:**

1. Pergi ke **Autoresponder**.
2. Pilih akaun WhatsApp.
3. Klik **Add Rule**.
4. Masukkan kata kunci (cth. `harga, price, berapa`).
5. Pilih jenis padanan (Exact / Contains / Starts with).
6. Tulis mesej balasan.
7. Simpan dan aktifkan.

**Contoh peraturan:**

| Kata kunci | Balasan |
|------------|---------|
| `hi, hello, hai` | "Selamat datang! Taip 'harga' untuk senarai harga." |
| `harga, price` | Lampirkan PDF senarai harga |
| `lokasi, alamat` | "Alamat kami: No 1-2, Jalan Puteri 2A/8, Bangi" |
| `stop, berhenti` | "Anda telah berhenti melanggan." |

---

## 5. Live Chat (Sembang Langsung)

Inbox pasukan yang dikongsi untuk semua perbualan WhatsApp.

**Penapis:**

- **All** — semua perbualan
- **Unread** — mesej belum dibaca
- **Widget** — dari widget WebChat
- **Chatbot Active** — AI sedang membalas
- **Chatbot Inactive** — diserahkan kepada manusia
- **Archived** — perbualan lama

**Tindakan:**

- Balas mesej (teks, media, balasan pantas)
- Ambil alih dari bot (**Take Over**)
- Tugaskan kepada rakan sepasukan
- Tambah tag/label
- Tandakan sebagai selesai

---

## 6. Templates (Templat)

Komponen mesej yang boleh diguna semula. Enam jenis:

| Jenis | Kegunaan |
|-------|----------|
| **Pre-Approved** | Templat WABA yang diluluskan Meta (Official API sahaja) |
| **Lists** | Mesej senarai interaktif |
| **Buttons** | Mesej dengan butang balasan pantas |
| **Polls** | Undian pelbagai pilihan |
| **Sequences** | Urutan mesej bertingkat (drip campaign) |
| **Quick Replies** | Balasan tersimpan untuk ejen Live Chat |

---

## 7. Link Generator

Cipta pautan klik-untuk-sembang WhatsApp dan kod QR tersuai.

**Ciri:**

- **Custom QR** — kod QR berjenama (logo, warna)
- **Pre-filled Message** — mesej yang diisi automatik
- **Style Options** — sesuaikan rupa kod QR

**Kegunaan:** Laman web, kad perniagaan, media sosial, poster, iklan.

---

## Bagaimana Ciri-ciri Bersambung

```
Pencetus (Webhook / Label / Kata Kunci / Jadual)
    ↓
Autoresponder → jika kata kunci sepadan, balas terus
    ↓ (jika tiada padanan)
Chatbot AI → jika diaktifkan, AI membalas
    ↓ (jika perlu manusia)
Live Chat → ejen manusia mengambil alih
```

Automasi boleh dicetuskan secara berasingan dan menjalankan tindakan seperti menghantar mesej, menunggu, menambah label, dan mengemas kini Google Sheets.
