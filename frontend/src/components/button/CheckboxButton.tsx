import { CheckIcon } from '../icons/CheckIcon';

export const CheckboxButton = ({ completed, isUnchecking, onClick }: { completed: boolean; isUnchecking: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`mt-1 shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all duration-150 ${completed ? 'bg-gray-500 border-gray-500 text-white' : 'border-gray-400 hover:border-pink-500'} ${
      isUnchecking ? 'uncheck-checkbox' : ''
    }`}
  >
    {completed && <CheckIcon />}
  </button>
);
