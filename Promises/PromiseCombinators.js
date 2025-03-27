let a = Promise.resolve("A is resolved")
let c = Promise.resolve("C is resolved")
let b = Promise.resolve("B is resolved")
let d = Promise.reject("D is rejecteDaa..")

console.log("START");

//1. ALL
// checks either ALL are RESOLVED then resolves,
// if any REJECTS all REJECTED
Promise.all([a,b,c,d])
.then((m) => console.log(m))
.catch((e) => console.error('ALL: PROMISES FAILED',e))

//2. RACE
// Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
// Returns whichever is resolved or rejected first
Promise.race([a,b,c,d])
.then((m) => console.log('RACE:',m))
.catch((e) => console.error('RACE: PROMISES FAILED',e))


// 3. Promise.allSettled
// returns state of all promises when all are settled, either Resolved or Rejected
Promise.allSettled([a, b, c, d])
  .then((m) => console.log("ALL SETTLED:", m));

// 4. Promise.any
// resolves with the first successful promise (a), ignoring rejections.
Promise.any([a, b, c, d])
  .then((m) => console.log("ANY RESOLVED:", m))
  .catch((e) => console.error("ALL PROMISES REJECTED (any):", e));

console.log("STOP");