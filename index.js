if(process.env.NODE_ENV!=='production'){
    require('dotenv').config();    
}
const express = require('express');
const morgan= require('morgan');
const multer=require('multer')
const path= require('path');

//Initializations
const app=express();
//database
require('./database');


//set port

app.set('port',3000);

//middleware
//todos los middleware son funciones
// analizan las peticiones
app.use(morgan('dev'));

const storage=multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req,file,cb){
        cb(null,new Date().getTime()+path.extname(file.originalname));
    }

});
app.use(multer(storage).single('image'));
//poder interpretar datos de formulario , entender peticiones json
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
//Rest api
app.use('/api/books',require('./routes/books'));

//static files
app.use(express.static(path.join(__dirname,'public')));


//routes REST envia y recibir datos



//start server

app.listen(app.get('port'),()=> {
console.log('server on port '+app.get('port'));
})

// 

