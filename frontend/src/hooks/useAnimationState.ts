import { useState } from "react";
import { AnimationState } from "../types/list";

export const useAnimationState = () => {
  const [state, setState] = useState<AnimationState>({
    animatingId: null,
    strikeAnimationId: null,
    uncheckAnimationId: null,
  });

  const setAnimating = (id: number | null) => {
    setState((prev) => ({ ...prev, animatingId: id }));
  };

  const setStriking = (id: number | null) => {
    setState((prev) => ({ ...prev, strikeAnimationId: id }));
  };

  const setUnchecking = (id: number | null) => {
    setState((prev) => ({ ...prev, uncheckAnimationId: id }));
  };

  const resetAnimations = () => {
    setState({
      animatingId: null,
      strikeAnimationId: null,
      uncheckAnimationId: null,
    });
  };

  return {
    ...state,
    setAnimating,
    setStriking,
    setUnchecking,
    resetAnimations,
  };
};
