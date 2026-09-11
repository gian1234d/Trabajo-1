# Sistema de Gestion de Solicitudes de Soporte TI

Backend hecho con NestJS y MySQL para registrar y administrar tickets o solicitudes de soporte de clientes en una empresa tecnologica.

## Requisitos para correr el proyecto

- Node.js (version 18 o superior)
- MySQL o MariaDB corriendo en tu pc
- npm

## Configuracion de variables de entorno

Copia el archivo `.env.example` y crea un archivo llamado `.env` dentro de la carpeta `backend-solicitudes`:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=soporte_db
DB_SYNCHRONIZE=true
```

Recuerda crear la base de datos `soporte_db` en tu MySQL antes de levantar el backend.

## Como instalar y correr el proyecto

1. Entrar a la carpeta del backend:
```bash
cd backend-solicitudes
```

2. Instalar las librerias:
```bash
npm install
```

3. Iniciar el servidor en modo desarrollo:
```bash
npm run start:dev
```

La aplicacion va a quedar escuchando en:
`http://localhost:3000`

## Endpoints del sistema

| Metodo | Endpoint | Para que sirve |
| --- | --- | --- |
| GET | /solicitudes | Trae todas las solicitudes |
| GET | /solicitudes/buscar | Busca por estado, prioridad o categoria |
| GET | /solicitudes/:id | Trae una solicitud por su id |
| POST | /solicitudes | Crea una nueva solicitud |
| PUT | /solicitudes/:id | Modifica una solicitud existente |
| DELETE | /solicitudes/:id | Borra una solicitud |

## Registro de etapas de desarrollo y commits

### Etapa 1: Arquitectura inicial (Commit 1)
- Se creo la base del proyecto con NestJS.
- Se armo la estructura con AppModule y SolicitudesModule.
- Se crearon el controlador y el servicio base de solicitudes con los endpoints iniciales.

### Etapa 2: Persistencia y validacion (Commit 2)
- Se configuro la conexion a MySQL usando TypeORM y variables de entorno con dotenv.
- Se creo la entidad Solicitud con todas las columnas necesarias (id, titulo, cliente, categoria, prioridad, estado, descripcion, fechaSolicitud).
- Se crearon los DTOs (CreateSolicitudDto, UpdateSolicitudDto, BuscarSolicitudDto) usando class-validator para validar que no vengan campos vacios, cantidad minima de caracteres y categorias/prioridades permitidas.
- Se agrego validador personalizado para que la fecha no sea mayor al dia de hoy.
- Se activo ValidationPipe global en main.ts para filtrar datos basura y transformar tipos automaticamente.
- Se agrego archivo .env.example para la configuracion de base de datos.

### Etapa 3: Funcionalidad y reglas (Commit 3)
- Pendiente: implementar el guardado real, busquedas avanzadas, reglas de negocio al borrar y actualizar estados.

### Etapa 4: Pruebas y version final (Commit 4)
- Pendiente: documentacion con Swagger en /api y pruebas finales.