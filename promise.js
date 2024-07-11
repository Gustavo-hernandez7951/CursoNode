//CODIGO ASINCRONO A TRAVES DE PROMESAS

const {readFile} = require('fs')


function getText (pathFile){
    return new Promise(function(resolve, reject){
        readFile(pathFile, 'utf-8', (err,data)=> {
            if(err){
                reject(err)
            }
            resolve(data)  
        })
    })
}

// getText('./data/five.txt')
//     .then((result) => console.log(result))
//     .then (()=> getText('./data/four.txt'))
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

//codigo asincrono
async function read(){
    try {
        // throw new Error ('Esto es un error que no se esperaba') // acaba con la ejecucion de todas las lineas de codigo anteriores y ya no se ejecuta
        const result = await getText('./data/fist.txt') // codigo asincrono
        const result2 = await getText('./data/five.txt') // codigo asincrono
        const result3 = await getText('./data/four.txt') // codigo asincrono
        const result4 = await getText('./data/third.txt') // codigo asincrono

        console.log(result)
        console.log(result2)
        console.log(result3)
        console.log(result4)
    }catch (error){
        console.log(error)
    }
}

read()

//Ejemplo de Promesa 
// new Promise(function(resolve, reject){

//     readFile('./data/fist.txt', 'utf-8', (err,data)=> {
//         if(err){
//             reject(err)
//         }
//         resolve(data)  
//     })
// }) // nueva promesa espera una funcion como parametro y se ejecuta despues de cierto tiempo 




// Sintaxis de respuesta a una peticion de documento a leer en formato TXT
// readFile('./data/fist.txt', 'utf-8', (err,data)=> {
//     console.log('Hola Mundo')
//     if(err){
//         console.log(err)
//     }
//     console.log(data)    
// })