import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50">
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="relative z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed inset-0 flex">
            {/* Sidebar Slide-over */}
            <div className="relative flex w-full max-w-xs flex-1 bg-slate-900">
              <div className="absolute right-0 top-0 -mr-12 pt-4">
                <button
                  type="button"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <X className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
              
              <div className="w-full flex-1">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 md:pl-64 w-full h-full overflow-hidden">
        {/* Mobile header with hamburger menu */}
        <div className="sticky top-0 z-10 md:hidden flex h-16 flex-shrink-0 items-center gap-x-4 border-b border-slate-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-slate-700 hover:text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="font-bold text-slate-900 text-lg">AdminDash</div>
        </div>

        {/* Scrollable page content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none w-full h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
