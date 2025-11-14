'use client';
import { useEffect } from "react";

export const useImageProtection = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if ((e.target as Element).closest('.logo-container')) {
        e.preventDefault();
      }
    };
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as Element).closest('.logo-container')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);
};