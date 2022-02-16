const express = require('express');
const router = express.Router();
const todo = require('../controllers/index');

router.get('/todo', todo.getAll);

router.post('/todo', todo.create);

router.patch('/update', (req, res) => {
  res.send('');
});

router.delete('/delete', (req, res) => {
  res.send('');
});

module.exports = router;
