const http = require('http');

// request : es la solicitud al servidor
// response : es lo que el servidor respondera al cliente
http.createServer( ( request, response ) => {

    response.write('Hola mundo');

    response.end();
} )
.listen( 8080 );


console.log('Escuchando en el puerto', 8080);


