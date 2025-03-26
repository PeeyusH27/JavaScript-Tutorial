//SPREAD: SPREADS an Array into individual elements
//used in PARAMS
let fname = [..."Peeyush Chandra Das"]
console.log(fname);




let color = "Matte black" //Matte Back can be passsed as key [color]
const car = {
    name: 'Mustang',
    model: 'GT',
    price: 60000,
    "modification": false,
    [color] : "Color"
}

const admin = {admin:true, ...car}
console.log(admin);
