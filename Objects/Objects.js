let color = "Matte black"
const car = {
    name: 'Mustang',
    model: 'GT',
    price: 60000,
    "modification": false,
    [color] : "Color"
}

console.log(car);
console.log(car.name);

//Methods
//KEYS
for(key in car){
    console.log("Keys:",key);
}
//VALUES
for(key in car){
    console.log("values:",car[key]);
}

