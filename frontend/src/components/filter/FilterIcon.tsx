export const FilterIcon = ({ icon, isActive }: { icon: React.ReactNode; isActive: boolean }) => (
  <span className={`transition-all duration-300 group-hover:translate-x-1 ${isActive ? 'text-pink-500 scale-110' : 'text-gray-400 group-hover:text-gray-600'}`}>{icon}</span>
);
