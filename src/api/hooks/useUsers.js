import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { usersService } from '../services/usersService';

export const useUserByIdQuery = (id) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => usersService.getUserById(id),
    enabled: !!id, 
    staleTime: 5 * 60 * 1000,
  });
};

export const useInfiniteUsersQuery = ({ limit = 30, search = '' }) => {
  return useInfiniteQuery({
    queryKey: ['users-infinite', { limit, search }],
    queryFn: ({ pageParam = 1 }) => {
      const skip = (pageParam - 1) * limit;
      return usersService.getUsers({ limit, skip, search });
    },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage?.users || lastPage.users.length < limit) return undefined;
      return allPages.length + 1;
    },
    staleTime: 5 * 60 * 1000,
  });
};