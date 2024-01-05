const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const router = require('./routers/router.js');

// Configurações

app.use(cors());
app.use(express.json());

// Rotas | Routers
app.use(router);

app.listen(port, () => {
	console.log('Servidor rodando!');
});
