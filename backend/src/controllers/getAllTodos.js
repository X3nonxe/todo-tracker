import { Todo } from '../models/index.js';
import { sendSuccess, sendError } from '../helper/response.js';

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      order: [['createdAt', 'DESC']],
    });
    sendSuccess(res, todos, 'Todos fetched successfully');
  } catch (error) {
    sendError(res, 'Failed to fetch todos');
  }
};
