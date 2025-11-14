export const StrikeThroughAnimations = ({ strikeAnimationId, uncheckAnimationId, completed }: { strikeAnimationId: boolean; uncheckAnimationId: boolean; completed: boolean }) => (
  <>
    {strikeAnimationId && <div className="absolute top-1/2 left-0 w-0 h-0.5 transform -translate-y-1/2 z-30 strike-animation" style={{ animation: 'strikeThrough 0.5s ease-in-out forwards' }} />}

    {uncheckAnimationId && <div className="absolute top-1/2 right-0 w-0 h-0.5 transform -translate-y-1/2 z-30 uncheck-animation" style={{ animation: 'uncheckReverse 0.5s ease-in-out forwards' }} />}

    {completed && !strikeAnimationId && !uncheckAnimationId && <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 transform -translate-y-1/2 z-10" />}
  </>
);
