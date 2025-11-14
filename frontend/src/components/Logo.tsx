'use client';
import Image from 'next/image';

export const Logo = ({ width = 160, height = 48, className = 'h-8 w-auto' }) => (
  <Image
    src="/logo.webp"
    alt="TodoTracker Logo"
    width={width}
    height={height}
    className={className}
    priority
  />
);