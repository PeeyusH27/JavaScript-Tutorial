function importantAction(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`GOODLUCK ${user}`)
        }, 500)
    })
}

function a(something) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`tell me ${something} in April`)
        }, 1000)
    })
}

function everything(something) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Everything is in your ${something}`)
        }, 1000)
    })
}

console.log("Start");
//PROMISE CHAINING
importantAction("peeyush").then((m) => {
    console.log(m);
    return a("Good News")
}).then((m) => {
    console.log(m);
    return everything("Favour")
}).then((m) => {
    console.log(m)
}).catch((e) => {
    console.log(e);
})

console.log("Stop");

//ANOTHER CALL BACK HELL IF YOU'RE GOOD ENOUGH
// importantAction("Peeyush")
//     .then((m) => {
//         console.log(m)
//         a("Good news").then(((m) => {
//             console.log(m)
//             everything("Favour")
//                 .then(((m) => {
//                     console.log(m)
//                 }
//                 )).catch((e) => console.log(e))
//         }
//         )).catch((e) => console.log(e))
//     }
//     ).catch((e) => console.log(e))