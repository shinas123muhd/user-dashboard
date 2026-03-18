import React, { memo } from 'react';

const Table = memo(({ columns, data, onRowClick, isLoading }) => {
  if (isLoading) {
    return (
      <div className="border border-slate-200 rounded-t-lg shadow-sm bg-white overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-6 py-4 text-left">
                  <div className="h-4 bg-slate-200/70 rounded w-20 animate-pulse"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[...Array(8)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((_, colIndex) => (
                  <td key={colIndex} className="px-6 py-5">
                    <div className={`h-4 bg-slate-200/50 rounded animate-pulse ${colIndex === 0 ? 'w-32' : 'w-24'}`}></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="w-full text-center py-16 border border-slate-200 rounded-lg shadow-sm bg-white text-slate-500">
        No records found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-slate-200 rounded-t-lg shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              onClick={() => onRowClick && onRowClick(row)}
              className={onRowClick ? 'cursor-pointer hover:bg-blue-50/50 transition-colors' : ''}
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

Table.displayName = 'Table';
export default Table;
