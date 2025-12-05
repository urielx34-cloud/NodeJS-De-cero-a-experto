# Proyecto NOC

El objetivo es crear una serie de tareas usando Arquitectura Limpia con TypeScript

# dev
1. Clonar el archivo .env.template a .env
2. Configurar las variables de entorno
3. Ejecutar el comando ``npm install``
4. ejecutar  ``npm run dev``
5. Ejectuar ```
    docker compose up -d
``

```
PORT=3000

MAILER_SERVICE =gmail(poner tu proveedor)
MAILER_EMAIL=poner tu correo
MAILER_SECRET_KEY=poner tu key

PROD=false
--- DB MONGO
MONGO_URL=mongodb://uriel:123456@localhost:27017/
MONGO_DB_NAME=NOC
MONGO_USER=uriel
MONGO_PASS=123456

```

