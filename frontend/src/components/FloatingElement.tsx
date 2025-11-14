'use client';

export const FloatingElement = ({ top, right, bottom, left, size, color, opacity, delay }: any) => (
  <div
    className={`absolute ${size} ${color} rounded-full ${opacity} animate-float`}
    style={{
      top,
      right,
      bottom,
      left,
      animationDelay: delay,
    }}
  />
);
