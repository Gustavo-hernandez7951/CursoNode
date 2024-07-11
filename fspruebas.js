const fs = require ('fs') // abreviado de file system

const titletwo = ', Este es un nuevo contenido para el archivo de texto numero 5'

// Forma de Flecha

//Codigo de una funcion dentro de otra utilizando los recursos mejor y esperando a que se vallan ejecuntando de manera asincrona haciendo que se realizan multiples cosas al mismo tiempo 
fs.readFile('./data/fist.txt', (error, data) => {
    if(error){
        console.log(error)
    }
    console.log(data.toString())

    fs.readFile('./data/fist.txt', 'utf-8',  (error, data) => {
        if(error){
            console.log('no se pudo generar tu archivo ' + error)
        }
        console.log(data.toString())
        fs.writeFileSync('./data/five.txt', titletwo, {
            flag: 'a',   
        })
    })  
})