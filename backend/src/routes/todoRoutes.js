import express from 'express';
import { getAllTodos } from '../controllers/getAllTodos.js';
import { createTodo } from '../controllers/createTodo.js';
import { updateTodo } from '../controllers/updateTodo.js';
import { deleteTodo } from '../controllers/deleteTodo.js';

const router = express.Router();

router.get('/', getAllTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
