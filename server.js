const express = require('express');
const hbs = require('hbs');
const app = express()
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// HBS Engine
hbs.registerPartials(__dirname + '/views/partials/');
app.set('view engine', 'hbs');

const anio = {
    anio: new Date().getFullYear()
}


app.get('/', (req, res) => {
    let salida = {
        nombre: 'Miguel',
        edad: 31,
        url: req.url
    };
    res.render('home.hbs', {
        nombre: 'mabv mex',
        anio: new Date().getFullYear()
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        anio: new Date().getFullYear()
        // res.render('Aquí va mi PersonalData');
    });
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});