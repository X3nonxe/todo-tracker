'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('Global error occurred:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-linear-to-br from-red-50 via-pink-50 to-rose-50 flex items-center justify-center px-4">
          <div className="text-center max-w-2xl">
            <div className="mb-8">
              <svg className="w-24 h-24 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h1 className="text-5xl font-bold text-red-600 mb-4">Critical Error</h1>

            <p className="text-lg text-gray-700 mb-8">Aplikasi mengalami kesalahan serius. Silakan muat ulang halaman atau hubungi dukungan jika masalah berlanjut.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={reset} className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg">
                Muat Ulang Aplikasi
              </button>

              <button onClick={() => (window.location.href = '/')} className="px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg border-2 border-red-200">
                Kembali ke Beranda
              </button>
            </div>

            {error.digest && <p className="text-sm text-gray-500 mt-6">Error ID: {error.digest}</p>}
          </div>
        </div>
      </body>
    </html>
  );
}
