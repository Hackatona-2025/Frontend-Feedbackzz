import api from './api';

export interface Group {
  id: string;
  name: string;
  level: number;
  parentId?: string;
}

export interface CreateGroupData {
  name: string;
  parentId?: string;
}

const groupService = {
  async getGroups(): Promise<Group[]> {
    const { data } = await api.get<Group[]>('/groups');
    return data;
  },

  async getGroupById(id: string): Promise<Group> {
    const { data } = await api.get<Group>(`/groups/${id}`);
    return data;
  },

  async createGroup(data: CreateGroupData): Promise<Group> {
    const { data: responseData } = await api.post<Group>('/groups', data);
    return responseData;
  },

  async updateGroup(id: string, data: Partial<CreateGroupData>): Promise<Group> {
    const { data: responseData } = await api.patch<Group>(`/groups/${id}`, data);
    return responseData;
  },

  async deleteGroup(id: string): Promise<void> {
    await api.delete(`/groups/${id}`);
  },

  async getSubgroups(id: string): Promise<Group[]> {
    const { data } = await api.get<Group[]>(`/groups/${id}/subgroups`);
    return data;
  },

  async getParentGroup(id: string): Promise<Group | null> {
    const { data } = await api.get<Group | null>(`/groups/${id}/parent`);
    return data;
  },
};

export default groupService; 