const http = require ('http') 

//request peticiones
//responde respuestas 

// Foma 1 de utilizar la funcion ((Function))
http.createServer(function(request, response){
    console.log(request.url)

    // esta funcion entra en funcionamiento, en cuanto compara que el usuario quiera entrar a ala seccion /about --- posteriormente manda el mensaje en caso de ser afirmativo para despues mandar un retorno y asi poder salir de la funcion 
    if (request.url === '/about'){
        response.write('acerca de ')
        return response.end()
    }

    if (request.url === '/'){
        response.write(' Welcom to the server ')
        return response.end()
    }
    response.write(
        `<h1> Not Found </h1>
        esta pagina no se ha encontrado
        <a href="/"> Volver a la página Principal </a>
        `
    ) 
        // respuesta que se le enviara al cliente despues de visitar nuestra página 
    response.end() // mensaje para decirle que ya acabo el mensaje 

}).listen(3000) // el puerto de conexion en el cual se va a conectar nuestro programa 

console.log('Servidor escuchando en el puerto 3000') 

// Foma 2 en ves de utilizar function utilizamos flecha 

// http.createServer((request, response) => {
//     response.write('Hello Word') // respuesta que se le enviara al cliente despues de visitar nuestra página 
//     response.end() // mensaje para decirle que ya acabo el mensaje 
// }).listen(3000) // el puerto de conexion en el cual se va a conectar nuestro programa 

// console.log('Servidor escuchando en el puerto 3000') 
