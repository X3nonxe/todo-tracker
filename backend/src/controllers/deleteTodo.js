import { Todo } from '../models/index.js';
import { sendSuccess, sendError } from '../helper/response.js';

export const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    await todo.destroy();
    sendSuccess(res, null, 'Todo deleted successfully');
  } catch (error) {
    sendError(res, 'Failed to delete todo');
  }
};
