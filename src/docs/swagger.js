const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'API REST para la gestión de tareas'
    },
    servers: [
      {
        url: 'https://web-production-a09fb.up.railway.app',  // Usamos la variable de entorno o la URL proporcionada por Railway
        description: 'Servidor de producción'

      }
    ]
  },
  apis: ['./src/routes/*.js']
};

module.exports = swaggerJsdoc(options);