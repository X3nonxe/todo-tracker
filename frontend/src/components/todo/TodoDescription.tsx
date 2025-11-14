export const TodoDescription = ({ description, completed }: { description: string | null; completed: boolean }) => {
  if (!description) return null;

  return <p className={`text-sm mt-1 text-gray-600 ${completed ? 'opacity-75' : ''}`}>{description}</p>;
};
