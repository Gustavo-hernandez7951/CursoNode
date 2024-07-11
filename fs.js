const fs = require ('fs') // abreviado de file system

//crear archivos, verlos, eliminarlos 

const first = fs.readFileSync('./data/fist.txt', 'utf-8') //leer un archivo ,  'utf-8' la codificacion de caracteres  
const second = fs.readFileSync('./data/second.txt') 

console.log(first) // forma uno de leer el documento txt 
console.log(second.toString()) // forma dos de leer un documento txt

fs.writeFileSync('./data/third.txt', 'este es un tercer archivo generado por este nuevo metodo') // metodo para poder crear un archivo 

const title = ', Este es un nuevo contenido'

fs.writeFileSync('./data/four.txt', title, {
    flag: 'a' 
}) 

// Sync entorno de ejecucion de forma asincrona 

// forma de leer archivos sin la sintaxis Sync (asincrono)

// Forma de Funcion 
fs.readFile('./data/fist.txt', function (error, data){
    console.log(error)
    console.log(data.toString())
})



// Forma de Flecha
fs.readFile('./data/fist.txt', (error, data) => {
    if(error){
        console.log(error)
    }
    console.log(data.toString())
})

// Forma de leer un acrhvio con utf-8
fs.readFile('./data/fist.txt', 'utf-8',  (error, data) => {
    if(error){
        console.log(error)
    }
    console.log(data.toString())
})

// formato sin conversion con tipo de datos 