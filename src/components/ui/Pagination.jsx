import React, { memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = memo(({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages || totalPages === 0;

  return (
    <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3 sm:px-6 rounded-b-lg shadow-sm">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <p className="text-sm text-slate-700">
            Page <span className="font-semibold text-slate-900">{totalPages > 0 ? currentPage : 0}</span> of{' '}
            <span className="font-semibold text-slate-900">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              type="button"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={isFirstPage}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={isLastPage}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
});

Pagination.displayName = 'Pagination';
export default Pagination;
