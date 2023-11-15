const redis = require('redis');

// Conectarse a Redis en el contenedor Docker
const client = redis.createClient({ host: '127.0.0.1', port: 6379 });

// Conexión a Redis
client.on('connect', () => {
    console.log('Conexión exitosa a Redis');

    // Resto del código de tu aplicación...
});

// Manejo de errores de conexión a Redis
client.on('error', (error) => {
    console.error('Error de conexión a Redis:', error);
});