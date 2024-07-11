// funciones a utilizar de manera que cada operacion tenga su funcionamiento
function add (x,y) {
    return x + y
}

function subtract (x, y ) {
    return x - y
}

function multiply  (x, y ) {
    return x * y
}

function divide (x, y ) {
    return x / y
}

// forma de exportar solo una funcion que queremos utilizar
// export function divide (x, y ) {
//     return x / y
// }

add (10,20)
subtract(10,20)
multiply(5,6)
divide(20,2)

// console.log(
//     add (10,20),
//     subtract(10,20),
//     multiply(5,6),
//     divide(20,2)
// )

// formas de exportar en un grupo las funciones ya vistas 
// module.exports = {
//     add, 
//     subtract,
//     multiply,
//     divide
// }

// forma de exportar todo un grupo 
export default {
    add, 
    subtract,
    multiply,
    divide
}


// forma de exportar solo una funcion 
// export default add

