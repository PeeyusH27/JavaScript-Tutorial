// CALLBACKS
// Callback functions are those which runs or invoked by first fn after the first fn has completed its task
// function greet(name, cb){
//     console.log(`Hello ${name}`);
//     cb()
// }
// function something(){
//     console.log("Bye!");
// }
// greet("Peeyush", something) //Greet function takes fn as arg, we passed Something as CALLBACK fn as Argument

console.log("start");

function importantAction(user, cb) {
    setTimeout(() => {
        cb(`GOODLUCK ${user}`)
    }, 500)
}

function imGettingAJob(msg, cb) {
    setTimeout(() => {
        cb(`Wow what a beautiful ${msg}`)
    }, 1000)
}

function everything(something, cb) {
    setTimeout(() => {
        cb(`Everything is in your ${something}`)
    }, 1000)
}
// importantAction("Peeyush", function (message){console.log(message)})
// imGettingAJob("Wow", (message) => {console.log(message)})
// everything("Favour", (message) => console.log(message))

//CALLBACKS In ACTION
// CALLBACK HELL
const message = importantAction(
    "Peeyush", function (message) {
        console.log(message)
        imGettingAJob("Meme", (message) => { 
            console.log(message) 
            everything("Favour", (message) => console.log(message))
        })
    }
)

console.log("Stop");
