import React, { useState, useCallback, useMemo } from 'react';
import { useInfiniteUsersQuery } from '../../../api/hooks/useUsers';
import Table from '../../../components/ui/Table';
import SearchBar from '../../../components/ui/SearchBar';
import SlideOver from '../../../components/ui/SlideOver';
import UserDetails from './UserDetails';
import { User } from 'lucide-react';

const LIMIT = 30;

const UsersList = () => {
  const [search, setSearch] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);

  const { 
    data, 
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteUsersQuery({ limit: LIMIT, search });

  const users = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap(page => page.users || []);
  }, [data]);

  const handleSearch = useCallback((term) => {
    setSearch(term);
  }, []);

  const handleRowClick = useCallback((row) => {
    setSelectedUserId(row.id);
  }, []);

  const handleCloseSlideOver = useCallback(() => {
    setSelectedUserId(null);
  }, []);

  const columns = useMemo(() => [
    {
      header: 'User',
      accessor: 'firstName',
      render: (row) => (
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mr-3 flex-shrink-0 text-slate-400">
            <User className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold text-slate-900">{row.firstName} {row.lastName}</div>
            <div className="text-slate-500 text-xs">{row.email}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Age / Gender',
      render: (row) => <span className="text-slate-600">{row.age} / <span className="capitalize">{row.gender}</span></span>
    },
    {
      header: 'Phone',
      accessor: 'phone',
      render: (row) => <span className="text-slate-600">{row.phone}</span>
    },
    {
      header: 'Role',
      accessor: 'role',
      render: (row) => (
         <span className={`px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${row.role === 'admin' ? 'bg-indigo-100 text-indigo-800' : 'bg-green-100 text-green-800'}`}>
           {row.role}
         </span>
      )
    }
  ], []);

  // throw new Error("This is a test error to check the boundary!");

  return (
    <div className="w-full h-full p-4 sm:p-6 lg:p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Users Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">Manage and view user accounts across the platform.</p>
          </div>
          <div className="w-full sm:w-80">
            <SearchBar onSearch={handleSearch} placeholder="Search users by name..." />
          </div>
        </div>

        <div className="bg-white shadow-sm ring-1 ring-slate-200 rounded-lg sm:rounded-xl">
          <Table 
            data={users} 
            columns={columns} 
            isLoading={isLoading} 
            onRowClick={handleRowClick} 
          />
          {hasNextPage && (
            <div className="flex justify-center p-4 border-t border-slate-200">
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 border border-transparent rounded-md hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors"
              >
                {isFetchingNextPage ? 'Loading more...' : 'Load More Users'}
              </button>
            </div>
          )}
        </div>

        <SlideOver 
          isOpen={!!selectedUserId} 
          onClose={handleCloseSlideOver} 
          title="User Profile"
        >
          <UserDetails userId={selectedUserId} />
        </SlideOver>
      </div>
    </div>
  );
};

export default UsersList;
