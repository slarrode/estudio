const redis = require('redis');
const client = redis.createClient();

// Conexión a Redis
client.on('connect', () => {
    console.log('Conexión exitosa a Redis');

    // Ejecutar tu lógica adicional aquí

    // Cerrar la conexión con Redis al finalizar la lógica
    client.quit();
});

// Manejo de errores de conexión a Redis
client.on('error', (error) => {
    console.error('Error de conexión a Redis:', error);
});


console.log('Hola, mundo!');
