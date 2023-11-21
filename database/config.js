const mongoose = require('mongoose');
const URI = 'mongodb+srv://devmean29:Talisman100@cluster0.0hqk7nc.mongodb.net/';

const dbConnection = async() => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos ver logs');
    }
}
module.exports = {
    dbConnection
};
