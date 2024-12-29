const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongouri = "mongodb+srv://databasejc:erRooPddZZad1tPM@cluster0.h3pdr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    //const mongouri = process.env.MONGODB_URI || 'mongodb://localhost:27017/task-manager';
    console.log('Iniciando conexión a MongoDB...');

    if (!mongouri) {
      throw new Error('No se puede hacer la conexion a la Url ');
    }
    
    await mongoose.connect(mongouri);
    console.log('Conexión a MongoDB establecida');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;