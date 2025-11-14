import { DeleteIcon } from "../icons/DeleteIcon";

export const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-150" title="Delete task">
    <DeleteIcon />
  </button>
);
