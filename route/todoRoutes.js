const express = require('express');
const {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
} = require('../controllers/todocontroller')
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authenticate);
router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodoById); 
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
