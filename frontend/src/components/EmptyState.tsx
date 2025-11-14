import { EMPTY_STATE_MESSAGES } from "../constants/list";
import { EmptyStateIcon } from "./EmptyStateIcon";

export const EmptyState = ({ hasOriginalTodos }: { hasOriginalTodos: boolean }) => (
  <div className="text-center py-8">
    <div className="text-gray-500 mb-2">
      <EmptyStateIcon />
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada tugas</h3>
    <p className="text-sm text-gray-500">{hasOriginalTodos ? EMPTY_STATE_MESSAGES.FILTERED : EMPTY_STATE_MESSAGES.NO_TODOS}</p>
  </div>
);
