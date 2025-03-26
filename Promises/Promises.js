// Promises signify any task that is set for evenntual completion.
// Promise((resolve, reject) => resolve(), reject())

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


function importantAction(user, cb){
    setTimeout(() => {
        cb(`GOODLUCK ${user}`)
    }, 1000)
}

function imGettingAJob(user, cb){
    setTimeout(() => {
        cb(`Getting a salary of ${user} in April`)
    }, 1000)
}

const message = importantAction(
    "Peeyush",
    function(message){
        console.log(message)
        imGettingAJob("9Lpa", (message) => console.log(message))
    })
console.log(message);

console.log("Stop");
