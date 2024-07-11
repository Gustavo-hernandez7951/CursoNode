console.log(module)

const myWebAdress = "google.com"
const myNumber = 30
const myArray = [10,20,30]

const user= {
    name: 'ryan',
    lastname: 'ray'
}


// agrupar todos los valores antes vistos para asi ser mandados en grupo 
// const group = { 
//     myWebAdress: myWebAdress, // 
//     myNumber: myNumber,
//     myArray: myArray,
//     user: user
// }

//module.exports = group // .... mandar un parametro al apartado de module y que se guarde en exports


//Formas de mandar a exportar variables independientes 
module.exports.user = user
module.exports.myNumber = myNumber
module.exports.myArray = myArray
module.exports.myWebAdress = myWebAdress

//console.log(module)
console.log(module)
