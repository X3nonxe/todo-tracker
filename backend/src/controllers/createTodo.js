import { Todo } from "../models/index.js";

export const createTodo = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;

    const todo = await Todo.create({
      title,
      description: description || null,
      completed: completed || false,
    });

    res.status(201).json(todo);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.errors.map((e) => e.message),
      });
    }
    next(error);
  }
};