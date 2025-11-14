'use client';
import Link from 'next/link';

export const CTAButton = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <Link
    href="/todo-tracking"
    className={`px-8 py-4 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold text-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2 ${className}`}
  >
    {children}
  </Link>
);