import { StrikeThroughAnimations } from "../StrikeThroughAnimations";

export const TodoTitle = ({ title, completed, isUnchecking, strikeAnimationId, uncheckAnimationId }: { title: string; completed: boolean; isUnchecking: boolean; strikeAnimationId: boolean; uncheckAnimationId: boolean }) => (
  <div className="relative">
    <h3 className={`font-semibold truncate relative z-20 ${completed ? 'text-gray-500' : 'text-gray-900'} ${isUnchecking ? 'uncheck-text' : ''}`}>{title}</h3>
    <StrikeThroughAnimations strikeAnimationId={strikeAnimationId} uncheckAnimationId={uncheckAnimationId} completed={completed} />
  </div>
);
