//CALL method
//The object to be used as the current object.
//List of args can be passed to this method
// REFERENCE TO OBJECT as THIS and use its values
var obj = {name: "Peeyush"}

function sayHello(age){
    return "Hello " + this.name + " is " + age
}
// Call(reference of this, args)
console.log(sayHello.call(obj, 25));


//Apply takes ARRAY [] as an argument


//Bind RETURNS Funtion to use later
//Bind any funtion of any object to another object
let user = {
    name:"this name",
    age(){
        return this.name.length
    }
}
console.log(user.age());

var boundFunc = user.age.bind(obj);
console.log(boundFunc(30)); // Output: Hello Peeyush is 30
