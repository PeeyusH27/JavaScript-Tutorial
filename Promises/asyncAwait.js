// Beeter, Modern Way of handling Promise

let a = Promise.resolve("A is resolved")
let c = Promise.resolve("C is resolved")
let b = Promise.resolve("B is resolved")
let d = Promise.reject("D is rejecteDaa..").catch((e) => console.log(e))

console.log("Start");

async function result(){
    const msg = await a;
    const msg2 = await b;
    const msg3 = await c;
    const msg4 = await d;
    console.log({msg, msg2, msg3, msg4});
}
result()

console.log("Stop");
