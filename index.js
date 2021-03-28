const express = require('express');
const hbs  = require('hbs');

require('dotenv').config();

const app = express();
const port = process.env.PORT;


// handle bars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


// middleware
// servir contenido estatico
app.use( express.static('public') );
// esto reemplaza el / de get comentado abajo
// app.get('/', function(req, res){
//     res.send('Home Page');
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Sebastian Acuña',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Sebastian Acuña',
        titulo: 'Curso de Node'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Sebastian Acuña',
        titulo: 'Curso de Node'
    });
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });

app.get('*', (req, res) => {
    // res.send('404 | Page Not Found');
    res.sendFile(__dirname+'/public/404.html');
});

app.listen(port, () => {
    console.log(`example app listening port ${ port }`);
});