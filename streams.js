// lectura de un archivo parte por parte 
const {createReadStream}= require('fs')

const stream = createReadStream('./data/bigfile.txt',{
    encoding: 'utf-8'
})

// estructura para poder ir leyendo archivos pesados e irlos mostrando de poco en poco
stream.on('data', (chunk) => {
    console.log(chunk)
})

//estructura de cuando termine de leer un documento 
stream.on('end', () => {
    console.log('ya termine de leer el archivo')
})

// estructira de cuando salga un error 
stream.on('error', (error) => {
    console.log(error)
})

