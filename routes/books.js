const {Router, request}= require('express');
const router= Router();

//tiene que tener acceso al modelo de datos
const Book=require('../models/Book');


router.get('/',async (req,res)=>{
    const books=await Book.find();
    res.json(books);

    //evento asincrono
});
router.post('/',async(req,res)=>{
    const {title,author,isbn}= req.body;
    const newBook= new Book({title,author,isbn})
    await newBook.save();
    res.json({message:'Book Saved'});
});

router.delete('/:id',async(req,res)=>{
    
    const book = await Book.findOneAndDelete(req.params.id);
    //console.log(book);
    res.json({message:'Book Deleted'});

});
module.exports=router;