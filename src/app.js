const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const router = require('./routers/router.js');

// Configurações

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'https://weatherapp-evertonmartins.netlify.app/');
	res.header('Access-Control-Allow-Methods', 'GET');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// Rotas | Routers
app.use(router);

app.listen(port, () => {
	console.log('Servidor rodando!');
});
