const express = require('express');
const cors = require('cors');
const log = require('./logs');

class Server {

    constructor() {
        this.app = express();
        this.port = 8080 || process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        // Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            log(`Servidor corriendo en puerto, ${this.port}`, 'server');
        });
    }
}


module.exports = Server;
