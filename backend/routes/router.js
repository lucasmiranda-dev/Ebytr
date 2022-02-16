const express = require('express');
const router = express.Router();
const todo = require('../controllers/Todo/index');

//todo
router.get('/todo', todo.read);
router.post('/todo', todo.create);
router.delete('/todo/:id', todo.deleted);

//priority

module.exports = router;
