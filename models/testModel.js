const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    nombre:{
        type: String,
        require:true
    },
    edad:{
        type: Number,
        require:true
    },
    carrera:{
        type: String,
        require:true
    },
    genero:{
        type: String,
        require:true
    },
    experiencia:{
        type: String,
        require:true
    },
    titulo:{
        type: String,
        require:true
    },
    pregunta1:{
        type: String,
        require:true
    },
    respuesta1:{
        type: Number,
        require:true
    },
    pregunta2:{
        type: String,
        require:true
    },
    respuesta2:{
        type: Number,
        require:true
    },
    pregunta3:{
        type: String,
        require:true
    },
    respuesta3:{
        type: Number,
        require:true
    },
    pregunta4:{
        type: String,
        require:true
    },
    respuesta4:{
        type: Number,
        require:true
    },
    pregunta5:{
        type: String,
        require:true
    },
    respuesta5:{
        type: Number,
        require:true
    },
    pregunta6:{
        type: String,
        require:true
    },
    respuesta6:{
        type: Number,
        require:true
    },
    pregunta7:{
        type: String,
        require:true
    },
    respuesta7:{
        type: Number,
        require:true
    },
    pregunta8:{
        type: String,
        require:true
    },
    respuesta8:{
        type: Number,
        require:true
    },
    pregunta9:{
        type: String,
        require:true
    },
    respuesta9:{
        type: Number,
        require:true
    },
    pregunta10:{
        type: String,
        require:true
    },
    respuesta10:{
        type: Number,
        require:true
    },
    pregunta11:{
        type: String,
        require:true
    },
    respuesta11:{
        type: Number,
        require:true
    },
    pregunta12:{
        type: String,
        require:true
    },
    respuesta12:{
        type: Number,
        require:true
    },
    pregunta13:{
        type: String,
        require:true
    },
    respuesta13:{
        type: Number,
        require:true
    },
    pregunta14:{
        type: String,
        require:true
    },
    respuesta14:{
        type: Number,
        require:true
    },
    pregunta15:{
        type: String,
        require:true
    },
    respuesta15:{
        type: Number,
        require:true
    }
});

module.exports = mongoose.model('Test', TestSchema);