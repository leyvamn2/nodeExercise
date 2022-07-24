const mongoose=require('mongoose');
//nota: el archivo .env tiene que estar dentro de la carpeta de backend (cuando no se declaran las variables de entorno)
//el archivo .env tiene que estrar en la carpeta principal del proyecto cuando se declaran las variables de entorno
 console.log(process.env.MONGODB_URI);
//reemplazar variables 
 mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true
 })
    .then(db=>console.log('DB is connected'))
    .catch(err=>console.error(err));

// se crea la base de datos cuando se crean datos, si la conexion es exitosa o no va a aparecer