// components/SharedLayout.tsx
import React from 'react';
import Link from 'next/link';
import { GiSelfLove } from 'react-icons/gi';

interface SharedLayoutProps {
  children: React.ReactNode;
}

const SharedLayout: React.FC<SharedLayoutProps> = ({ children }) => {
  return (
    <>
      <nav className="w-full bg-gradient-to-r from-pink-400 via-red-400 to-pink-600 p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <GiSelfLove size={40} className="text-gray-200" />
            <div className="font-bold text-3xl flex ml-2">
              <span className="text-gray-200">MatchMe</span>
            </div>
          </Link>
        </div>
      </nav>
      <main className="container mx-auto py-8">{children}</main>
    </>
  );
};

export default SharedLayout;
