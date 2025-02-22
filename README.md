# Task Manager API

## Descripción

**Task Manager API** es una aplicación web para el manejo de tareas mediante una API. Permite al usuario gestionar tareas de manera eficiente, pudiendo crear, leer, actualizar y eliminar tareas (CRUD). Además, el usuario puede marcar las tareas como **completadas** o **pendientes**.

---

## Objetivo

Desarrollar una API que permita a un usuario gestionar sus tareas de forma eficiente. La API está diseñada con **endpoints bien documentados** y un adecuado **manejo de errores**.

---

## Tecnologías Utilizadas

- **Node.js** v18.x
- **Express.js** v4.x
- **MongoDB** v6.x
- **TypeScript**

---

## Dependencias Principales

- **express**: Framework web para Node.js.
- **mongoose**: ODM para MongoDB.
- **cors**: Middleware para habilitar CORS.
- **dotenv**: Manejo de variables de entorno.
- **express-validator**: Validación de datos de entrada.
- **swagger-ui-express**: Documentación de la API.
- **swagger-jsdoc**: Generación de documentación desde comentarios.

---

## Configuración

### Requisitos Previos

- **Node.js** instalado (v18 o superior).
- **MongoDB** instalado localmente o cuenta en **MongoDB Atlas**.
- **Git** (opcional).

---
---

### Despliegue
La API está desplegada en Railway:
- URL: [https://web-production-a09fb.up.railway.app/api-docs/](https://web-production-a09fb.up.railway.app/api-docs/)
- Base de datos: MongoDB Atlas

---


### Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/task-manager-api.git
    cd task-manager-api
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

---

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes configuraciones:

#### Para desarrollo local:

```env
MONGODB_URI=mongodb://localhost:27017/task-manager
PORT=3000
```


#### Para el desarrollo en produccion:

```env
MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/task-manager
```

---
### Rutas de la API
```env
URL Base
Local: http://localhost:3000/api
Producción: https://web-production-a09fb.up.railway.app/api
```

### Endpoints

- POST /tasks - Crear nueva tarea
- GET /tasks - Obtener todas las tareas
- GET /tasks/:id - Obtener tarea por ID
- PUT /tasks/:id - Actualizar tarea
- DELETE /tasks/:id - Eliminar tarea



---

### Desarrollador

- Nombre: Jorge Orlando Calambás Conda
- Email: j.calambas@hotmail.com
- GitHub: [@jorgecal123](https://github.com/jorgeCal123)
- LinkedIn: [Jorge Calambás](https://www.linkedin.com/in/jorge-cal-c/)