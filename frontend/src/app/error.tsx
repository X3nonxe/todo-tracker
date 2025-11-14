'use client';

import { useEffect, useState } from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// Components for Error Page
const ErrorIcon = () => (
  <svg className="w-24 h-24 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const ErrorDetails = ({ error }: { error: Error & { digest?: string } }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="mt-6 max-w-2xl mx-auto">
      <button onClick={() => setShowDetails(!showDetails)} className="text-sm text-gray-500 hover:text-gray-700 underline">
        {showDetails ? 'Sembunyikan Detail' : 'Lihat Detail Error'}
      </button>

      {showDetails && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200 text-left">
          <p className="text-sm font-mono text-red-800 break-all">{error.message}</p>
          {error.digest && <p className="text-xs text-red-600 mt-2">Error ID: {error.digest}</p>}
        </div>
      )}
    </div>
  );
};

const ActionButtons = ({ reset }: { reset: () => void }) => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button onClick={reset} className="px-8 py-3 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
      Coba Lagi
    </button>

    <button onClick={() => (window.location.href = '/')} className="px-8 py-3 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-pink-200">
      Kembali ke Beranda
    </button>
  </div>
);

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.error('Error occurred:', error);
    setMounted(true);
  }, [error]);

  const floatingElements = [
    { delay: '0s', size: 'w-20 h-20', color: 'bg-red-100', position: { top: '10%', left: '10%' } },
    { delay: '1s', size: 'w-16 h-16', color: 'bg-red-200', position: { top: '20%', right: '15%' } },
    { delay: '2s', size: 'w-24 h-24', color: 'bg-red-100', position: { bottom: '15%', left: '15%' } },
    { delay: '1.5s', size: 'w-12 h-12', color: 'bg-red-200', position: { bottom: '20%', right: '10%' } },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-pink-50 to-rose-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating Elements */}
      {mounted &&
        floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.size} ${element.color} rounded-full opacity-20 animate-float`}
            style={{
              animationDelay: element.delay,
              ...element.position,
            }}
          />
        ))}

      {/* Content */}
      <div className="text-center relative z-10 max-w-3xl">
        <div className="mb-8 flex justify-center">
          <ErrorIcon />
        </div>

        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Terjadi Kesalahan</h2>

        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">Maaf, terjadi kesalahan yang tidak terduga. Tim kami telah diberitahu dan sedang menangani masalah ini.</p>

        <ActionButtons reset={reset} />

        <ErrorDetails error={error} />
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
