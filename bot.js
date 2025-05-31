// bot.js
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import dotenv from "dotenv";
dotenv.config();

const mnemonic = process.env.MNEMONIC;
const rpc = "https://rpc.testnet.xion.network:443";
const prefix = "xion";
const denom = "uxion";
const recipient = "xion1..."; // Ganti dengan alamat tujuan kamu

export async function sendTransactions(count = 15) {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix });
  const [account] = await wallet.getAccounts();
  const client = await SigningStargateClient.connectWithSigner(rpc, wallet);

  for (let i = 0; i < count; i++) {
    try {
      const result = await client.sendTokens(
        account.address,
        recipient,
        [{ denom, amount: "100" }],
        { amount: [{ denom, amount: "50" }], gas: "200000" }
      );
      const log = `[${new Date().toISOString()}] TX ${i + 1}: ${result.transactionHash}`;
      console.log(log);
      appendLog(log);
      await new Promise(r => setTimeout(r, 3000)); // delay 3 detik
    } catch (err) {
      const errorLog = `[${new Date().toISOString()}] ERROR TX ${i + 1}: ${err.message}`;
      console.error(errorLog);
      appendLog(errorLog);
    }
  }
}

function appendLog(message) {
  import('fs').then(fs =>
    fs.appendFileSync('./logs/transactions.log', message + '\n')
  );
}
