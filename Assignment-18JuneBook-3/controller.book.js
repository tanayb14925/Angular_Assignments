const book = require('./models').book;

//select * from books;
exports.findAllbook=(req,resp) => {
    console.log("findAll "+book);
    // resp.send("Reached in findall")
    if(book!==undefined){
        console.log("in findall")
        book.findAll()
       
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({ message: "No records found" }));
    }else{
        resp.send("book is undefined");
    }
    
}

//select * from books where id=?;
exports.findOneBook=(req, resp)=>{
    //const id=req.params.id;
    //console.log("id="+id);
    book.findByPk(req.params.id)
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({ message: "No records found" }));

}
