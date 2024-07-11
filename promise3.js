const { readFile } = require('fs/promises')
const {promisify} = require('util')

const readFilePromise = promisify (readFile)

async function read() {
    try {
        const result = await readFile ('./data/fist.txt', 'utf-8')
        console.log(result)

    }catch (error) {
        console.log(error)
    }
}

read();