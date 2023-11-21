//IMPORTACIONES
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config.js');


//SERCIDOR DE APLICACIONES
const app = express();
//CONFIGURACION DE CORS
app.use(cors());
//RESPUESTAS EN FORMATO JSON
app.use(express.json());
//CONFIGURACION DE BASE DE DATOS
dbConnection();

//RUTAS
app.use('/api/test', require('./routes/testRoute.js'))



app.listen(3000, () => console.log('Servidor corriendo en puerto 3000')); 