import { Todo } from '../models/index.js';
import { sendSuccess, sendError } from '../helper/response.js';

export const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    if (title && title.trim() === '') {
      return sendError(res, 'Title cannot be empty', 400);
    }

    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    await todo.update({
      title: title !== undefined ? title : todo.title,
      description: description !== undefined ? description : todo.description,
      completed: completed !== undefined ? completed : todo.completed,
    });

    sendSuccess(res, todo, 'Todo updated successfully');
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.errors.map((e) => e.message),
      });
    }
    sendError(res, 'Failed to update todo');
  }
};
