import api from './api';

export interface Feedback {
  id: string;
  content: string;
  file?: string;
  createdAt: string;
  reportCount: number;
  authorId: string;
  groupId?: string;
  isAnonymous: boolean;
}

export interface CreateFeedbackData {
  content: string;
  file?: string;
  groupId?: string;
  isAnonymous?: boolean;
}

export interface Reaction {
  id: number;
  feedbackId: string;
  userId: string;
  type: 'THUMBS_UP' | 'THUMBS_DOWN' | 'LIGHT_BULB' | 'SAD_FACE' | 'THUNDER';
  createdAt: string;
}

const feedbackService = {
  async getFeedbacks(groupId?: string): Promise<Feedback[]> {
    const url = groupId ? `/feedbacks?groupId=${groupId}` : '/feedbacks';
    const { data } = await api.get<Feedback[]>(url);
    return data;
  },

  async getFeedbackById(id: string): Promise<Feedback> {
    const { data } = await api.get<Feedback>(`/feedbacks/${id}`);
    return data;
  },

  async createFeedback(data: CreateFeedbackData): Promise<Feedback> {
    const { data: responseData } = await api.post<Feedback>('/feedbacks', data);
    return responseData;
  },

  async updateFeedback(id: string, data: Partial<CreateFeedbackData>): Promise<Feedback> {
    const { data: responseData } = await api.patch<Feedback>(`/feedbacks/${id}`, data);
    return responseData;
  },

  async deleteFeedback(id: string): Promise<void> {
    await api.delete(`/feedbacks/${id}`);
  },

  async addReaction(feedbackId: string, type: Reaction['type']): Promise<Reaction> {
    const { data } = await api.post<Reaction>(`/feedbacks/${feedbackId}/reactions`, { type });
    return data;
  },

  async removeReaction(feedbackId: string, reactionId: number): Promise<void> {
    await api.delete(`/feedbacks/${feedbackId}/reactions/${reactionId}`);
  },

  async reportFeedback(id: string): Promise<void> {
    await api.post(`/feedbacks/${id}/report`);
  },
};

export default feedbackService; 