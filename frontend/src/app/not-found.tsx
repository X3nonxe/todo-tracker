'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NotFoundIcon = () => (
  <svg className="w-24 h-24 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FloatingElement = ({ delay, size, color, position }: { delay: string; size: string; color: string; position: { top?: string; bottom?: string; left?: string; right?: string } }) => (
  <div
    className={`absolute ${size} ${color} rounded-full opacity-20 animate-float`}
    style={{
      animationDelay: delay,
      ...position,
    }}
  />
);

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatingElements = [
    { delay: '0s', size: 'w-20 h-20', color: 'bg-pink-200', position: { top: '10%', left: '10%' } },
    { delay: '1s', size: 'w-16 h-16', color: 'bg-rose-300', position: { top: '20%', right: '15%' } },
    { delay: '2s', size: 'w-24 h-24', color: 'bg-fuchsia-200', position: { bottom: '15%', left: '15%' } },
    { delay: '1.5s', size: 'w-12 h-12', color: 'bg-pink-300', position: { bottom: '20%', right: '10%' } },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-fuchsia-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating Elements */}
      {mounted && floatingElements.map((element, index) => <FloatingElement key={index} {...element} />)}

      {/* Content */}
      <div className="text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <NotFoundIcon />
        </div>

        <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Halaman Tidak Ditemukan</h2>

        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">Oops! Halaman yang Anda cari tidak ada atau telah dipindahkan.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-8 py-3 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Kembali ke Beranda
          </Link>

          <Link href="/todo-tracking" className="px-8 py-3 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-pink-200">
            Lihat Todo List
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
