const express = require('express');
const router = express.Router();
const testController = require('../controller/testController.js');


//API/TEST
router.post('/', testController.createTest);
router.get('/', testController.getTest);
router.get('/:id', testController.getTestById);
router.delete('/:id', testController.deleteTest);



module.exports = router;
