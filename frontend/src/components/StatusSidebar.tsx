'use client';

import { Todo } from '../types/todo';

interface StatusSidebarProps {
  todos: Todo[];
  activeFilter: 'all' | 'completed' | 'active';
  onFilterChange: (filter: 'all' | 'completed' | 'active') => void;
}

export default function StatusSidebar({ todos, activeFilter, onFilterChange }: StatusSidebarProps) {
  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const totalCount = todos.length;

  const filterOptions = [
    { key: 'all' as const, label: 'All Tasks', count: totalCount },
    { key: 'completed' as const, label: 'Completed', count: completedCount },
    { key: 'active' as const, label: 'Todo', count: activeCount },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Status</h2>

      <div className="space-y-2">
        {filterOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => onFilterChange(option.key)}
            className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 ${
              activeFilter === option.key
                ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300'
                : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{option.label}</span>
              <span className={`px-2 py-1 text-xs rounded-full ${activeFilter === option.key ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200' : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'}`}>
                {option.count}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Statistics</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Total Tasks</span>
            <span className="font-medium text-gray-900 dark:text-white">{totalCount}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Completed</span>
            <span className="font-medium text-green-600 dark:text-green-400">{completedCount}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Remaining</span>
            <span className="font-medium text-orange-600 dark:text-orange-400">{activeCount}</span>
          </div>
          {totalCount > 0 && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600 dark:text-gray-400">Progress</span>
              <span className="font-medium text-blue-600 dark:text-blue-400">{Math.round((completedCount / totalCount) * 100)}%</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {totalCount > 0 && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(completedCount / totalCount) * 100}%` }}></div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Tips */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Quick Tips</h3>
        <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
          <li>• Click checkbox to mark complete</li>
          <li>• Use status filters to view tasks</li>
          <li>• Add new tasks using the form below</li>
        </ul>
      </div>
    </div>
  );
}
