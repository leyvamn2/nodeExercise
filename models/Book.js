const {Schema, model,}=require('mongoose');


//definición de variables tabla
const BookSchema=new Schema({
    title:{type: String, required: true},
    author:{type: String, required: true},
    isbn: { type:String, required:true},
    // imagePath:{type: String, required:true},
    created_at:{type:Date, default:Date.now}
    //  definicion, tipo de dato y requerido
});
// exportar el modelo nombre-esquema
module.exports=model('Book',BookSchema);