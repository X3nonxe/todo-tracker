'use client';

export const ErrorAlert = ({ message, onDismiss }: { message: string; onDismiss: () => void }) => (
  <div className="white-card rounded-xl mb-6 p-4 border-l-4 border-red-500">
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold text-red-700">Error</p>
        <p className="text-red-600">{message}</p>
      </div>
      <button onClick={onDismiss} className="text-sm text-red-600 hover:text-red-800 underline">
        Dismiss
      </button>
    </div>
  </div>
);
