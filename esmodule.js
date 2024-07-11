
//forma 1 de importar un archivo completo 
import math from './math/index.js' // nombre, direccion y la extencion del archivo a utilizar 

// forma 2 de exportar un archivo en partes 
//import {add, divide, multiply, subtract} from './math/index.js' // nombre, direccion y la extencion del archivo a utilizar 

// forma 3 de importar una funcion de otro archivo, uniendo las partes 1 y 2 antes mencionadas 
//import math, {add, divide, multiply, subtract} from './math/index.js' // nombre, direccion y la extencion del archivo a utilizar 



// forma de importar solo una funciones que queremos utilizar 
// import {add, subtract, divide, multiply} from './math/index.js'

// ejemplo de sintaxis para llamar funciones FORMA 1 
console.log( math.add(10,30))
console.log( math.subtract(10,30))
console.log( math.multiply(10,30))
console.log( math.divide(10,30))

// ejemplo de sintaxis para llamar funciones FORMA 2
// SE PASAN LOS PARAMETROS 



// ejemplo de la sintaxis para llamar funciones FORMA 3 uniendo ambas partes de la forma 1 y 2
// console.log( math.add(10,30))
// console.log( math.subtract(10,30))
// console.log( math.multiply(10,30))
// console.log( math.divide(10,30))

// console.log( add(10,30))
// console.log( subtract(10,30))
// console.log( multiply(10,30))
// console.log( divide(10,30))
