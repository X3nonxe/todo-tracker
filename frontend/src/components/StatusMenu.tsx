'use client';

import { Todo } from '../types/todo';

interface StatusMenuProps {
  todos: Todo[];
  activeFilter: 'all' | 'completed' | 'active';
  onFilterChange: (filter: 'all' | 'completed' | 'active') => void;
}

export default function StatusMenu({ todos, activeFilter, onFilterChange }: StatusMenuProps) {
  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const totalCount = todos.length;

  const filterOptions = [
    {
      key: 'all' as const,
      label: 'Semua Task',
      count: totalCount,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      key: 'completed' as const,
      label: 'Selesai',
      count: completedCount,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      key: 'active' as const,
      label: 'Aktif',
      count: activeCount,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {filterOptions.map((option) => (
        <button
          key={option.key}
          onClick={() => onFilterChange(option.key)}
          className={`w-full text-left transition-all duration-200 font-medium group ${activeFilter === option.key ? 'text-pink-500 font-semibold' : 'text-black hover:text-gray-700'}`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span className={`transition-all duration-300 group-hover:translate-x-1 ${activeFilter === option.key ? 'text-pink-500 scale-110' : 'text-gray-400 group-hover:text-gray-600'}`}>{option.icon}</span>
              <span className={`transition-all duration-300 ${activeFilter === option.key ? 'translate-x-1 scale-105' : 'group-hover:translate-x-1'}`}>{option.label}</span>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full border transition-all duration-300 ${activeFilter === option.key ? 'border-pink-500 text-pink-500 scale-105' : 'border-gray-300 text-gray-500 group-hover:scale-105'}`}>
              {option.count}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
