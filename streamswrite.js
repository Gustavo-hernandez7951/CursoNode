//creacion de un archivo
const {writeFile} = require ('fs/promises')

const createBigFile = async() => {
    await writeFile ('./data/bigfile2.txt', 'Hello Word'.repeat(3000) )
}

createBigFile()