import { Keypair } from "@solana/web3.js";
import { writeFile } from "fs/promises";
import bs58 from "bs58";

let kp = Keypair.generate();

console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);

console.log(kp.secretKey);

writeFile("./dev-wallet.json", kp.secretKey);
