"use client";

import { Logo } from "./Logo";

interface FooterProps {
  message?: string;
}

const Footer: React.FC<FooterProps> = ({ message }) => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-pink-100">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <Logo width={100} height={30} className="h-5 w-auto" />
        </div>

        <p className="text-gray-600 text-sm">
          {message ?? "Dibuat dengan ❤️ untuk membantu Anda menjadi lebih produktif"}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
