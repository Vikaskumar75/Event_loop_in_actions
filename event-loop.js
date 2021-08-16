const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 4;

console.log(start);
setTimeout(() => console.log("Timer 1 finished"), 0);
setTimeout(() => console.log("Timer 2 finished"), 3000);

setImmediate(() => console.log("Immediate 1 is finished"));

fs.readFile("test-file.txt", () => {
  console.log("fileRead");
  console.log(
    "----------------------------------------------------------------"
  );
  setTimeout(() => console.log("Timer 3 finished"), 0);
  setTimeout(() => console.log("Timer 4 finished"), 3000);

  setImmediate(() => console.log("Immediate 2 is finished"));

  process.nextTick(() => {
    console.log("process.nextTick finished");
  });

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password is encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password is encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password is encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password is encrypted");

  //   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //     console.log(Date.now() - start, "Password is encrypted");
  //   });

  //   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //     console.log(Date.now() - start, "Password is encrypted");
  //   });
  //   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //     console.log(Date.now() - start, "Password is encrypted");
  //   });
  //   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //     console.log(Date.now() - start, "Password is encrypted");
  //   });
});

console.log("this is top level code");
