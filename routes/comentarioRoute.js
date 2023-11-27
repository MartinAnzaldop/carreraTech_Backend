const express = require('express');
const router = express.Router();
const comentarioController = require('../controller/comentarioController.js');


//API/TEST
router.post('/', comentarioController.createComentario);
router.get('/', comentarioController.getComentario);
router.get('/:id', comentarioController.getTestById);
router.delete('/:id', comentarioController.deleteComentario);



module.exports = router;