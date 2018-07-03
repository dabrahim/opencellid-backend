let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Bts = require('../models/Bts');

mongoose.connect('mongodb://localhost:27017/opencellid');

mongoose.connection.once('open', () => {
    console.log('La connexion a été établie');

    router.get('/', (req, res) => {
        Bts.findOne({})
            .then(result => {
                console.log(result);
                res.json(result);
            })
            .catch(e => {
                res.status(500)
                    .json({
                        success: false,
                        message: e.message
                    });
            });
    });
}).on('error', (e) => {
    console.log('Erreur lors de la tentative de connexion', e);
});

module.exports = router;