const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bd = require('./db')
const port = 3000;
const cors = require('cors'); // Importa el middleware cors 

// Configura cors para permitir solicitudes desde http://localhost:4200 (tu aplicación Angular)
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/register', require('./routes/register'));

app.listen(port, () => {
    console.log(`Servidor Node.js en ejecución en el puerto:  ${port}`);
});

