const Comentario = require('../models/comentarioModel.js');

//peticion GET
exports.getComentario = async(req, res) => {
    try {
        const comentario = await Comentario.find();
        res.status(200).json(comentario);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los datos' });
    }
}

//peticion POST
exports.createComentario = async(req, res) => {
    try {
        const comentario = new Comentario(req.body);
        await comentario.save();
        res.status(200).json({ message: 'Comentario creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el comentario' });
    }
}

//peticion GET por ID
exports.getTestById = async(req, res) => {
    try {
        const test = await Comentario.findById(req.params.id);
        res.status(200).json(test);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener el test' });
    }
}

//peticion DELETE por ID
exports.deleteComentario = async(req, res) => {
    try {
        await Comentario.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Comentario eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar el comentario' });
    }

}

//peticion para cambiar el estatus de un comentario si esta desactivado a activado y de activado a desactivvado por ID
exports.updateStatus = async(req, res) => {
    try {
        const comentario = await Comentario.findById(req.params.id);
        if(comentario.estatus=="desactivado"){
            comentario.estatus="activado";
            await comentario.save();
            res.status(200).json({ message: 'Mensaje activado' });
        }else{
            comentario.estatus="desactivado";
            await comentario.save();
            res.status(200).json({ message: 'Mensaje desactivado' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al actualizar el estatus' });
    }
} 
