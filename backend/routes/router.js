const express = require('express');
const router = express.Router();
const todo = require('../controllers/Todo/index');

//todo
router.get('/', todo.read);
router.post('/', todo.create);
router.delete('/:id', todo.deleted);
router.put('/:id', todo.update);
module.exports = router;
