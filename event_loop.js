// console.log('first')

// setTimeout(() => {
//     console.log('third')
// }, 3000)
// console.log('second')


const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('Welcom to the server')
    }

    if(req.url === '/about'){
        //codigo bloqueante 
        //Codigo para poder realizar una tipo peticion de un número random multiplicado por un numero aleatorio
        // for(let i=0; i<1000000; i++){   
        //     console.log(Math.random() * i )
        // }
        // return res.end("About page")
    }

    res.end('not found')
})

server.listen(4000)
console.log(`Server on port 4000`)