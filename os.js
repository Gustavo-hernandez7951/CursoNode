const os = require ('os') //

console.log(os.userInfo()) // información de la maquina del usuario 

console.log(os.uptime()) // tiempo en que se encendio la maquina hasta el tiempo en que se esta utilizando
console.log(os.platform())  // ver el sistema operativo en que se esta ejecutando node js

console.log(os.totalmem()) // total de mi memoria
console.log(os.freemem()) // ver la memoria disponible o memoria libre  


// Mostrar una tabla 
console.table ({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
}) 

