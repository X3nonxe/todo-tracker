import { getRelativeTime } from "@/src/utils/dateUtils";

export const TodoMetadata = ({ createdAt }: { createdAt: string }) => (
  <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
    <span>Dibuat: {getRelativeTime(createdAt)}</span>
  </div>
);
