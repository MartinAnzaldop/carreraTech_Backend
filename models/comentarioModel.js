const mongoose = require('mongoose');

const ComentarioSchema = mongoose.Schema({
    usuario:{
        type: String,
        require:true
    },
    nombre:{
        type: String,
        require:true
    },
    asunto:{
        type: String,
        require:true
    },
    mensaje:{
        type: String,
        require:true
    },
    estatus:{
        type: String,
        default:'desactivado'
    }
    
});

module.exports = mongoose.model('Comentario', ComentarioSchema);