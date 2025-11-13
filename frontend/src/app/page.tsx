'use client';

import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import StatusMenu from '../components/StatusMenu';
import { Todo, CreateTodoRequest, UpdateTodoRequest } from '../types/todo';
import { api } from '../utils/api';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'completed' | 'active'>('all');

  const fetchTodos = async (): Promise<void> => {
    try {
      setError('');
      const data = await api<Todo[]>('/todos');
      setTodos(data);
      applyFilter(data, activeFilter);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load todos';
      setError(errorMessage);
      setTodos([]);
      setFilteredTodos([]);
    } finally {
      setLoading(false);
    }
  };

  const sortTodos = (todoList: Todo[]): Todo[] => {
    return [...todoList].sort((a, b) => {
      if (a.completed === b.completed) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      return a.completed ? 1 : -1;
    });
  };

  const applyFilter = (todoList: Todo[], filter: 'all' | 'completed' | 'active') => {
    let filtered = todoList;

    switch (filter) {
      case 'completed':
        filtered = todoList.filter((todo) => todo.completed);
        break;
      case 'active':
        filtered = todoList.filter((todo) => !todo.completed);
        break;
      default:
        filtered = todoList;
    }
    setFilteredTodos(sortTodos(filtered));
  };

  const handleFilterChange = (filter: 'all' | 'completed' | 'active') => {
    setActiveFilter(filter);
    applyFilter(todos, filter);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (todo: CreateTodoRequest): Promise<void> => {
    try {
      await api<Todo>('/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
      });
      await fetchTodos();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add todo');
    }
  };

  const updateTodo = async (id: number, updates: UpdateTodoRequest): Promise<void> => {
    try {
      await api<Todo>(`/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });

      setTimeout(() => {
        setTodos((prevTodos) => {
          const updatedTodos = prevTodos.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo));
          applyFilter(updatedTodos, activeFilter);
          return updatedTodos;
        });
      }, 400);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update todo');
      await fetchTodos();
    }
  };

  const deleteTodo = async (id: number): Promise<void> => {
    try {
      await api(`/todos/${id}`, {
        method: 'DELETE',
      });
      await fetchTodos();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete todo');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl">Memuat...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 gradient-text">Todo Tracker</h1>
          <p className="text-lg text-gray-600">Stay organized and productive</p>
        </div>

        {error && (
          <div className="white-card rounded-xl mb-6 p-4 border-l-4 border-red-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-red-700">Error</p>
                <p className="text-red-600">{error}</p>
              </div>
              <button onClick={() => setError('')} className="text-sm text-red-600 hover:text-red-800 underline">
                Dismiss
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Status Menu */}
          <div className="lg:col-span-1">
            <div className="white-card rounded-xl p-6">
              <StatusMenu todos={todos} activeFilter={activeFilter} onFilterChange={handleFilterChange} />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="white-card rounded-xl p-6 mb-6">
              <TodoList todos={filteredTodos} onUpdate={updateTodo} onDelete={deleteTodo} />
            </div>

            {/* Add Todo Form */}
            <div className="white-card rounded-xl p-6">
              <TodoForm onAdd={addTodo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
