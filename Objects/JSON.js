let color = "Matte black"
const car = {
    name: 'Mustang',
    model: 'GT',
    price: 60000,
    "modification": false,
    [color] : "Color"
}

//Convert to json string
let strObject = JSON.stringify(car)
console.log(strObject);

//Used to STORE in LOCAL STORAGE
// localStorage.setItem("test", strObject)

//Convert back to key value obj
console.log(JSON.parse(strObject));
