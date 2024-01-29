const inputArr = require("./input.json");
const crypto = require("crypto");
const hashes = require("./output.js").hashes;

/**
 * @param {string} str
 * @returns {Promise<string>}
 * @description Computes the sha256 hash of a string
 * @example
 * const hash = await computeHash("hello world");
 * console.log(hash); // 2c74fd17edafd80e8447b0d46741ee243b7eb74dd2149a0ab1b9246fb30382f5
 */
async function computeHash(str) {
  const hash = crypto.createHash("sha256");
  hash.update(str);
  return hash.digest("hex");
}

/**
 * @param {string} S
 * @param {number} N
 * @returns {Promise<string>}
 * @description Computes the valid hash of a string
 * @example
 * const hash = await computeValidHash("2748730827110x3dc1d85dffc6fea2fbce4703bf03428f1be11409634913674699", 1);
 * console.log(hash); // 0c0e7d904a065ef9e62d9ef8a44205b6ff9bbc8aa7f5ca79dd714697df43d6d0
 */
async function computeValidHash(S, N) {
  // Complete the function
  return "";
}

/**
 * @description Main function
 */
async function main() {
  for (let i = 0; i < inputArr.length; i++) {
    const transaction = inputArr[i];
    const hash = await computeX(transaction.S, transaction.N);
    if (hashes[i] === hash) {
      console.log(`Transaction ${i + 1} is valid`);
    } else {
      throw new Error(`Transaction ${i + 1} is invalid`);
    }
  }
}

main();
