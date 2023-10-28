const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://miguelmoville:rmcqxADsAq2c8GrS@easymedia.f43ggjb.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Conexión exitosa a MongoDB Atlas');
    })
    .catch(err => {
        console.error('Error de conexión a MongoDB Atlas: ' + err);
    });
