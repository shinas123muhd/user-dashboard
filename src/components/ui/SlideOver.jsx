import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const SlideOver = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform transition-all ease-in-out duration-300">
          <div className="flex h-full flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between px-4 py-6 border-b border-slate-200 sm:px-6">
              <h2 className="text-lg font-semibold leading-6 text-slate-900">{title}</h2>
              <button
                type="button"
                className="rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                onClick={onClose}
              >
                <span className="sr-only">Close panel</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="relative flex-1 px-4 py-6 sm:px-6 overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOver;
