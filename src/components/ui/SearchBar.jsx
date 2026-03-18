import React, { useState, useEffect, memo } from 'react';
import { Search } from 'lucide-react';
import { useDebounce } from '../../utils/useDebounce';

const SearchBar = memo(({ onSearch, placeholder = 'Search...', debounceDelay = 500 }) => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, debounceDelay);

  useEffect(() => {
    if (onSearch) onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm transition-shadow"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
});

SearchBar.displayName = 'SearchBar';
export default SearchBar;
