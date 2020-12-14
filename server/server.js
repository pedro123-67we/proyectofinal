require ('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const  bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

// Habilitar CORS
app.use(cors()) ;
app.get('/', function (req, res) {
    res.send('<h1> Bienvenido a mi servidor REST (localhost) </h1>');
});

app.use(require('./routes/usuario'));
app.use(require('./routes/categoria'));
app.use(require('./routes/login'));
app.use(require('./routes/productos'));

mongoose.connect('mongodb+srv://admin:12345@cluster0.oqsfo.mongodb.net/cafeteria', {
  useNewUrlParser: true, 
useUnifiedTopology: true,
useFindAndModify: false,
 useCreateIndex: true
 }, (err, res ) =>  {
   if (err) throw error;
 console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Servidor esta en liena en el puerto ', process.env.PORT);
});