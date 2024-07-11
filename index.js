//Impresiones de Constantes
let username = 'fazt'
let age = '30'
let hasHobbies = false 
let point = [10,20,30]
let user = {
    name: 'Ryan',
    lastname: 'Ray'
}
const PI = 3.1415

//Impresiones de pantalla 
//console.log('Hello Word')

const edad = 19
if (edad >= 18){
    console.log('Tu eres un adulto')
} else if (edad >= 13 ){
    console.log('Tu eres un adolescente')
}else{
    console.log('Tu eres un niño')
}


const names2 = ['joel', 'marco', 'antonio']
for (let i = 0; i < names2.length; i++) {
    console.log('tu nombre es: ' + names2[i])
}

function showUserInfo (userName, userAge3) {
    return 'El nombre del usuario es: ' + userName + ' y tiene la edad de: ' + userAge3
}

console.log(showUserInfo('Joel', 30))
console.log(showUserInfo('martin', 50))
