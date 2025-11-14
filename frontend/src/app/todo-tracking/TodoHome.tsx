'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingScreen } from '@/src/components/Loading';
import { PageHeader } from './components/PageHeader';
import StatusMenu from '@/src/components/StatusMenu';
import TodoForm from '@/src/components/todo/TodoForm';
import { useTodoHandlers } from '@/src/handler/useTodoHandlers';
import TodoList from '@/src/components/todo/TodoList';

export default function TodoHome() {
  const router = useRouter();
  const { todos, filteredTodos, loading, error, setError, activeFilter, handleFilterChange, handleUpdateTodo, deleteTodo, addTodo } = useTodoHandlers();

  useEffect(() => {
    if (error) {
      router.push('/error');
    }
  }, [error, router]);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-fuchsia-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="white-card rounded-xl p-6">
              <StatusMenu todos={todos} activeFilter={activeFilter} onFilterChange={handleFilterChange} />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="white-card rounded-xl p-6 mb-6">
              <TodoList todos={filteredTodos} onUpdate={handleUpdateTodo} onDelete={deleteTodo} />
            </div>

            <div className="white-card rounded-xl p-6">
              <TodoForm onAdd={addTodo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
