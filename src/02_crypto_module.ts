// crypto module
import crypto from "crypto";
// build in module
// security related tasks
// cretaing secure token
// hashing data
// to verify the changed data
// encrypt/decrypt
console.log("crypto module");

// UUID
console.log(crypto.randomUUID());

// random bypes
console.log(crypto.randomBytes(16).toString("hex"));
// console.log()

// crypto.createHash
const text = "hello node";
console.log("text:", text);

const hash = crypto.createHash("sha256").update("text").digest("hex");
console.log("hash:", hash);

const secretKey = "my-secrt-key";
const message = "user_id=1";

const signature = crypto
  .createHmac("sha256", secretKey)
  .update(message)
  .digest("hex");
console.log("signature:", signature);
