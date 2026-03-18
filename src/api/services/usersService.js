import apiClient from '../apiClient';

export const usersService = {
 
  getUsers: async ({ limit = 30, skip = 0, search = '' }) => {
    if (search) {
      return apiClient.get(`/users/search`, {
        params: { q: search, limit, skip },
      });
    }
    return apiClient.get('/users', {
      params: { limit, skip },
    });
  },

  
  getUserById: async (id) => {
    return apiClient.get(`/users/${id}`);
  },
};