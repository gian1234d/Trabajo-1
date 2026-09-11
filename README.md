# Sistema de Gestion de Solicitudes de Soporte TI

Backend en NestJS y MySQL para registrar, consultar, actualizar, eliminar y buscar solicitudes de soporte tecnico.

## Requisitos para correr el proyecto

- Node.js (version 18 o superior)
- MySQL o MariaDB
- npm

## Configuracion de variables de entorno

Crear un archivo `.env` dentro de la carpeta `backend-solicitudes` con los siguientes datos:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=soporte_db
DB_SYNCHRONIZE=true
```

## Como instalar y correr la aplicacion

1. Entrar a la carpeta del backend:
```bash
cd backend-solicitudes
```

2. Instalar las dependencias:
```bash
npm install
```

3. Iniciar el servidor:
```bash
npm run start:dev
```

- API escuchando en: `http://localhost:3000`
- Documentacion interactiva Swagger disponible en: `http://localhost:3000/api`

## Endpoints disponibles

| Metodo | Endpoint | Descripcion |
| --- | --- | --- |
| GET | /solicitudes | Listar todas las solicitudes |
| GET | /solicitudes/buscar | Buscar por estado, prioridad y/o categoria |
| GET | /solicitudes/:id | Consultar una solicitud por ID |
| POST | /solicitudes | Registrar una nueva solicitud (inicia en Pendiente) |
| PUT | /solicitudes/:id | Actualizar una solicitud |
| DELETE | /solicitudes/:id | Eliminar una solicitud (solo si esta Finalizada) |

## Ejemplos de busquedas

- `GET /solicitudes/buscar?estado=Pendiente`
- `GET /solicitudes/buscar?prioridad=Alta`
- `GET /solicitudes/buscar?categoria=Redes&estado=Pendiente`

## Reglas de negocio implementadas

- RN01: Titulo minimo de 5 caracteres.
- RN02: Cliente obligatorio y no vacio.
- RN03: Categorias permitidas: Hardware, Software, Redes, Seguridad, Soporte Usuario.
- RN04: Prioridades permitidas: Baja, Media, Alta, Critica.
- RN05: Estado inicial automatico: Pendiente.
- RN06: Descripcion minima de 15 caracteres.
- RN07: Fecha obligatoria y no posterior al dia de hoy.
- RN08: No se puede borrar una solicitud En Proceso; solo se puede borrar si esta Finalizada.
- RN09: Una solicitud Finalizada no puede volver a Pendiente.
- RN10: Retorno de error 404 cuando el id no existe.

## Registro de etapas y commits

### Etapa 1: Arquitectura inicial (Commit 1)
- Creacion del proyecto con NestJS, definicion de modulos, controlador y servicio inicial.

### Etapa 2: Persistencia y validacion (Commit 2)
- Conexion a MySQL con TypeORM y variables de entorno.
- Creacion de la entidad Solicitud y DTOs con class-validator.
- Configuracion del ValidationPipe global.

### Etapa 3: Funcionalidad y reglas (Commit 3)
- Implementacion completa del CRUD y filtros de busqueda en base de datos.
- Aplicacion de todas las reglas de negocio (RN01 a RN10).

### Etapa 4: Pruebas y version final (Commit 4)
- Documentacion completa de la API con Swagger en la ruta `/api`.
- Revision tecnica de endpoints, validaciones y preparacion de la entrega final.
