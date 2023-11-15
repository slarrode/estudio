const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();

const port = process.env.PORT || 3000;

// Configurar una ruta básica para verificar la conexión
app.get('/', (req, res) => {
    res.send('¡Conexión exitosa a Redis!');
});

// Conexión a Redis
client.on('connect', () => {
    console.log('Conexión exitosa a Redis');

    // Iniciar el servidor web al establecer la conexión a Redis
    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
});

// Manejo de errores de conexión a Redis
client.on('error', (error) => {
    console.error('Error de conexión a Redis:', error);
});

console.log('Hola, mundo!');