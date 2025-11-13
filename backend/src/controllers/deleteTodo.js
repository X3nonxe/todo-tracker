import { Todo } from '../models/index.js';

export const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    await todo.destroy();
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
