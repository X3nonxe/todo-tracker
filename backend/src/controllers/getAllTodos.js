import { Todo } from '../models/index.js';

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching todos',
      error: error.message,
    });
  }
};