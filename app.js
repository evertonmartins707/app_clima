const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
require('dotenv').config();

// Configurações
// Public
app.use(express.static(path.join('public/')));

app.use(cors());
app.use(express.json());

// Rotas | Routers
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
	console.log('Servidor funcionando!');
	console.log(`Rota: http://localhost:${port}/`);
	console.log("\nPressione 'Ctrl + C' para parar o server!");
});
