import { useQuery } from '@tanstack/react-query';
import { usersService } from '../services/usersService';

/**
 * Hook to fetch paginated and filtered users
 */
export const useUsersQuery = ({ limit = 30, skip = 0, search = '' }) => {
  return useQuery({
    queryKey: ['users', { limit, skip, search }],
    queryFn: () => usersService.getUsers({ limit, skip, search }),
    keepPreviousData: true, // Keep previous data while fetching new page
    staleTime: 5 * 60 * 1000, 
  });
};

/**
 * Hook to fetch a user by ID
 */
export const useUserByIdQuery = (id) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => usersService.getUserById(id),
    enabled: !!id, // Only run if ID is truthy
    staleTime: 5 * 60 * 1000,
  });
};