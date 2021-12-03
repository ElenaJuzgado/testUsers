
const { Router } = require('express');

const { usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
} = require('../controllers/usuarios');
const log = require('../models/logs');

const router = Router();

router.get('/', usuariosGet);
router.put('/:id', usuariosPut);
router.post('/', validateUser, usuariosPost);
router.delete('/:id', usuariosDelete);

module.exports = router;

function validateUser(req, res, next){
    const {code, name, description, date} = req.body;
    if(!code || !name || !date){
        log('Faltan campos requeridos en la petición: code, name, date', 'usuarios')
        return res.status(403).json({
            msg: 'Faltan campos requeridos en la petición: code, name, date'
        })
    }
    if(typeof name !== 'string' || typeof date !== 'string' || (typeof description !== 'string' && description)){
        log('Los campos name, date y description deben ser strings', 'usuarios')
        return res.status(403).json({
            msg: 'Los campos name, date y description deben ser strings'
        })
    }
    if(typeof code !== 'number'){
        log('El campo code debe ser un número', 'usuarios')
        return res.status(403).json({
            msg: 'El campo code debe ser un número'
        })
    }
    const createDate = new Date(date);
    if(isNaN(createDate)){
        log('El campo date debe ser un IsoString', 'usuario')
        return res.status(403).json({
            msg: 'El campo date debe ser un IsoString'
        })
    }
    log(`Usuario ${code} validado`, 'usuario')
next()
}