Task Manager API
Descripción
Task Manager API: es una aplicacion Web para el manejo de Apis para que el usuario puada gestionar tareas. 

Esta aplicacion permite crear, leer, actualizar y eliminar tareas (CRUD), además de que el usuario puede marcar tareas como completadas o pendientes.

Objetivo
Desarrollar una API  que permita a un usuario gestionar eficientemente sus tareas para ello se proporciono endpoints bien documentados y manejo de errores.

Tecnologías Utilizadas
Node.js v18.x
Express.js v4.x
MongoDB v6.x
TypeScript

Dependencias Principales

express: Framework web para Node.js
mongoose: ODM para MongoDB
cors: Middleware para habilitar CORS
dotenv: Manejo de variables de entorno
express-validator: Validación de datos de entrada
swagger-ui-express: Documentación de la API
swagger-jsdoc: Generación de documentación desde comentarios

Configuración
Requisitos Previos

Node.js instalado (v18 o superior)
MongoDB instalado localmente o cuenta en MongoDB Atlas
Git (opcional)

Instalación
Clonar el repositorio
git clone https://github.com/tu-usuario/task-manager-api.git
cd task-manager-api
npm install


Variables de Entorno
Crea un archivo .env en la raíz del proyecto:

Para el desarrollo Local
    MONGODB_URI=mongodb://localhost:27017/task-manager
    PORT=3000

Para el desarrollo en produccion
    MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/task-manager
    PORT=3000


Rutas de la API

URL Base
Local: http://localhost:3000/api
Producción: https://task-manager-api-xyz.railway.app/api

Endpoints

POST /tasks - Crear nueva tarea
GET /tasks - Obtener todas las tareas
GET /tasks/:id - Obtener tarea por ID
PUT /tasks/:id - Actualizar tarea
DELETE /tasks/:id - Eliminar tarea



Despliegue
La API está desplegada en Railway:

URL: https://task-manager-api-xyz.railway.app
Base de datos: MongoDB Atlas

Desarrollador

Nombre: Jorge Orlando Calambás Conda
Email: j.calambas@hotmail.com
GitHub: [@jorgecal123](https://github.com/jorgeCal123)
LinkedIn: [Jorge Calambás](https://www.linkedin.com/in/jorge-cal-c/)