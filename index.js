const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();
// conexion mongoDb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apiportafolio', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

// habilitar body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routing
app.use('/', routes());

const port = 5000;

app.listen(port, () => {
	console.log(`Servidor en el puerto ${port}`);
});
