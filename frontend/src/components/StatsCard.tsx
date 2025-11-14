'use client';

export const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl font-bold gradient-text mb-2">{number}</div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
);
