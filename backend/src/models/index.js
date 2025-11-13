import { Sequelize } from 'sequelize';
import TodoModel from './todo.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, '../../dev-database.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: console.log,
});

const Todo = TodoModel(sequelize);

await sequelize.authenticate();

export { sequelize, Todo };
