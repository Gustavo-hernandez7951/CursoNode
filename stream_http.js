// servidor que envia porciones de datos en formato stream 
const http = require('http')
const {createReadStream} = require('fs')

const server= http.createServer((req,res) => {
    const fileStream= createReadStream('./data/bigfile.txt', {
        encoding: 'utf-8'
    })

    //pasar un dato a una funcion 
    fileStream.on('data',(chuck)=>{
        fileStream.pipe(res) 
    })

    // recibir ese error y mostrarlo mediante una funcion 
    fileStream.on('error', error => {
        console.log(error)
    })

})

server.listen(5000)
console.log(`server on port ${5000}`)