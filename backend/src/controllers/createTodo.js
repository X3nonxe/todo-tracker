import { Todo } from '../models/index.js';
import { sendSuccess, sendError } from '../helper/response.js';

export const createTodo = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;

    if (!title || title.trim() === '') {
      return sendError(res, 'Title is required', 400);
    }

    const todo = await Todo.create({
      title: title.trim(),
      description: description || null,
      completed: completed || false,
    });

    sendSuccess(res, todo, 'Todo created successfully', 201);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.errors.map((e) => e.message),
      });
    }
    sendError(res, 'Failed to create todo');
  }
};
