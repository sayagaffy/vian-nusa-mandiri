# Konfigurasi Email untuk Form Kontak

## Pengaturan Gmail SMTP untuk viannusacustomer@gmail.com

### Langkah-langkah Konfigurasi:

1. Buka [Pengaturan Akun Google](https://myaccount.google.com/)
2. Aktifkan **2-Step Verification**

   - Masuk ke Keamanan > 2-Langkah Verifikasi
   - Ikuti petunjuk untuk mengaktifkan

3. Buat App Password

   - Masuk ke Keamanan > App Passwords
   - Pilih "Other (Custom name)"
   - Beri nama "Vian Nusa Mandiri Web App"
   - Salin App Password yang dihasilkan

4. Konfigurasi `.env.local`
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=viannusacustomer@gmail.com
   SMTP_PASS=app_password_yang_dihasilkan
   SMTP_FROM=viannusacustomer@gmail.com
   CONTACT_EMAIL=viannusacustomer@gmail.com
   ```

### Catatan Penting:

- Gunakan App Password, BUKAN password utama
- Simpan App Password dengan aman
- Jangan share `.env.local` atau App Password
- Ganti App Password jika diduga bocor

### Troubleshooting

- Periksa folder SPAM jika email tidak masuk
- Pastikan koneksi internet stabil
- Periksa kembali App Password
