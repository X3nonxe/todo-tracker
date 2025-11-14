export const FilterBadge = ({ count, isActive }: { count: number; isActive: boolean }) => (
  <span className={`px-2 py-1 text-xs rounded-full border transition-all duration-300 ${isActive ? 'border-pink-500 text-pink-500 scale-105' : 'border-gray-300 text-gray-500 group-hover:scale-105'}`}>{count}</span>
);
