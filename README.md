# Onchain auto tx bot (union)

Bot sederhana untuk mengirim transaksi ke Xion testnet secara otomatis dan terjadwal.  
gua pake ini buat tx di Union
** Ini sekedar untuk edukasi, pastiin jalanin sendiri di lokal dan jangan pernah bagiin menmonic kalian.

---

## Fitur

- Kirim transaksi berulang & terjadwal (default 15 kali per hari)
- Menjadwalkan pengiriman transaksi setiap hari pada jam tertentu
- Logging hasil transaksi ke file `logs/transactions.log`
- Menggunakan mnemonic wallet secara aman lewat `.env`

---

# Proses dan langkah

Ini proses dan langkah untuk konfigurasi bot nya
```
mkdir nama-project
cd nama-project
npm init -y
npm install @cosmjs/proto-signing @cosmjs/stargate node-cron dotenv
mkdir logs
touch .env bot.js scheduler.js logs/transactions.log
```

Kemudian jalankan botnya di terminal dengan perintah kaya gini 
```
node scheduler.js
```
