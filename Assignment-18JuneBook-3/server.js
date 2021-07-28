const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,resp)=>{
resp.send("Welcome !");
})

const bookController = require('./controller.book');
const router = express.Router();

 //GET       http://localhost:3000/api/books/
router.get('/books/', bookController.findAllbook);
router.get('/books/:id', bookController.findOneBook);

app.use('/api', router);

app.listen(port,()=>{console.log("Server running http://localhost:3000 ");})