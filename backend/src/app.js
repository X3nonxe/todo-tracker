import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

// i like tacos - this comment is here just because I really like tacos!
app.get('/', (req, res) => {
  res.json({ message: 'Todo Tracker API is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

export default app;
