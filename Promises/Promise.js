// Promises signify any task that is set for evenntual completion.
// Upcoming completion or faliure of a async task
// Promise((resolve, reject) => resolve(), reject())

console.log("Start");
// THIS is how we create a promise
// const a = new Promise((resolve, reject) => resolve/reject())
const greet = new Promise((resolve, reject) => {
    setTimeout(() => {
        const res = true;
        res ? resolve("Waaah, Kya baat hai") : reject(new Error("Helll Nawww"))
    }, 1000)
})
console.log(greet);

greet.then((message) => console.log(message)).catch((e) => console.log(e))
console.log("Stop");


// Another way of a Promise is let x = Promise.resolve/reject, Directly calling a promise with its state
let x = true
let b = x ? Promise.resolve("Waaaahhhh") : Promise.reject("Error hogya ye toh")
b.then((s) => console.log(s)).catch((e) => console.log(e))