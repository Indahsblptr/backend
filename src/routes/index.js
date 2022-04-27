// instantiate express module here
const express = require('express');

// init express router here
const router = express.Router()

// get controller here
const { 
    getTodos, 
    getTodo, 
    addTodo, 
    updateTodo, 
    deleteTodo, 
} = require('../controllers/todo')

// create route here
router.get('/todos', getTodos);
router.get('/todo/:id', getTodo);
router.post('/todo', addTodo);
router.patch('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

// export module router here
module.exports = router;