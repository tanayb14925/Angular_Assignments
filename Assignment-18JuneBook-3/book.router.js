module.exports = app => {
    const bookController = require('./controller.book');
    const express = require('express');
    const router = express.Router();
    //// http://localhost:3000/api

    //GET       http://localhost:3000/api/books/
    router.get('/books/', bookController.findAllbook);

    //GET       http://localhost:3000/api/books/:id
    router.get('/books/:id', bookController.findOneBook);
}