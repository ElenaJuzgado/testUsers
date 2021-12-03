const data = require('../validateAuth');
const log = require('../models/logs');

const { response, request } = require('express');

const usuariosGet = async (req = request, res = response) => {}
const usuariosPost = async (req, res = response) => {
    const {date} = req.body;
    const validateDate = new Date(data.date);
    const bodyDate = new Date(date);
    const dateDiff = (validateDate.getTime()-bodyDate.getTime())/(1000*3600*24);
    if(dateDiff > 0){
    res.status(200).json({
        msg: `Quedan ${dateDiff} días hasta la expiración`
    });
} else {
    res.status(401).json({
        msg: `Tu cuenta expiró hace ${dateDiff*-1} días`
    });
}
}

const usuariosPut = async (req, res = response) => {
}

const usuariosDelete = async (req, res = response) => {

}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}