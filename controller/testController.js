const Test = require('../models/testModel.js');

//peticion GET
exports.getTest = async(req, res) => {
    try {
        const test = await Test.find();
        res.status(200).json(test);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los datos' });
    }
}

//peticion POST
exports.createTest = async(req, res) => {
    try {
        const test = new Test(req.body);
        await test.save();
        res.status(200).json({ message: 'Test creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el test' });
    }
}

//peticion GET por ID
exports.getTestById = async(req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        res.status(200).json(test);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener el test' });
    }
}

    //peticion DELETE por ID
    exports.deleteTest = async(req, res) => {
        try {
            await Test.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Test eliminado correctamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al eliminar el test' });
        }
    }
