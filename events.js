const EventEmitter = require('events')

const customEmitter = new EventEmitter() // creacion de objetos para poder escuchar determinados eventos

//creacion de eventos 
customEmitter.on ('response', (data, secondData) => {  // 'response corresponde al nombre'  (parametros a leer)
    console.log('received')
    console.log(data)
    console.log(secondData)

})

customEmitter.emit('response', [1,2,3,4,4,6,5,6], 'hola')