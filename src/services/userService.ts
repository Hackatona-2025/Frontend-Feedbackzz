import api from './api';

export interface User {
  id: string;
  name: string;
  email: string;
  description: string;
  groupId?: string;
  coins: number;
  role: 'USER' | 'ADMIN';
}

export interface CreateUserData {
  name: string;
  email: string;
  password: string;
  description: string;
  groupId?: string;
}

export interface UpdateUserData {
  name?: string;
  email?: string;
  description?: string;
  groupId?: string;
}

const userService = {
  async getCurrentUser(): Promise<User> {
    const { data } = await api.get<User>('/users/me');
    return data;
  },

  async getUserById(id: string): Promise<User> {
    const { data } = await api.get<User>(`/users/${id}`);
    return data;
  },

  async createUser(data: CreateUserData): Promise<User> {
    const { data: responseData } = await api.post<User>('/users', data);
    return responseData;
  },

  async updateUser(id: string, data: UpdateUserData): Promise<User> {
    const { data: responseData } = await api.patch<User>(`/users/${id}`, data);
    return responseData;
  },

  async deleteUser(id: string): Promise<void> {
    await api.delete(`/users/${id}`);
  },

  async getUsersByGroup(groupId: string): Promise<User[]> {
    const { data } = await api.get<User[]>(`/groups/${groupId}/users`);
    return data;
  },
};

export default userService; 