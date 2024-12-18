const Todo = require('../model/Todo');

// Create a new to-do item
const createTodo = async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        userId: req.user.id,
    });
    await todo.save();
    res.status(201).json(todo);
};

// Get all to-do items
const getTodos = async (req, res) => {
    const todos = await Todo.find({ userId: req.user.id });
    res.json(todos);
};

// Get a specific to-do item
const getTodoById = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
};

// Update a specific to-do item
const updateTodo = async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
};

// Delete a specific to-do item
const deleteTodo = async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted successfully' });
};


module.exports = {createTodo, getTodos, getTodoById, updateTodo, deleteTodo}