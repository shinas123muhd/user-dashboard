import apiClient from '../apiClient';

export const usersService = {
  /**
   * Fetch users with pagination and search
   */
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

  /**
   * Fetch a single user by ID
   */
  getUserById: async (id) => {
    return apiClient.get(`/users/${id}`);
  },
};