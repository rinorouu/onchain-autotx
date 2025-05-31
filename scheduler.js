import cron from "node-cron";
import { sendTransactions } from "./bot.js";

console.log("⏳ Scheduler aktif. Menunggu waktu eksekusi...");

// Jadwal daily jam 10 pagi
cron.schedule("0 10 * * *", () => {
  console.log("🚀 Mulai kirim 15 transaksi...");
  sendTransactions(15);
});
