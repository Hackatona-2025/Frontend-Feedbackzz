import { api } from './api';

export interface CreateFeedbackDto {
  content: string;
  file?: string;
  authorId: string;
  groupId?: string;
  isAnonymous: boolean;
}

export interface Feedback extends CreateFeedbackDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Reaction {
  id: number;
  feedbackId: string;
  userId: string;
  type: 'THUMBS_UP' | 'THUMBS_DOWN' | 'LIGHT_BULB' | 'SAD_FACE' | 'THUNDER';
  createdAt: string;
}

export const feedbackService = {
  async createFeedback(feedback: CreateFeedbackDto) {
    const response = await api.post<{ data: Feedback }>('/feedbacks', feedback);
    return response.data?.data;
  },

  async getFeedbackById(id: string) {
    const response = await api.get<{ data: Feedback }>(`/feedbacks/${id}`);
    return response.data?.data;
  },

  async getAllFeedbacks() {
    const response = await api.post<{ data: Feedback[] }>('/feedbacks/all');
    console.log('Feedbacks response:', response.data); // Debug log
    return response.data?.data || [];
  },

  async updateFeedback(feedback: Feedback) {
    const response = await api.patch<{ data: Feedback }>('/feedbacks', feedback);
    return response.data?.data;
  },

  async deleteFeedback(id: string) {
    await api.delete(`/feedbacks/${id}`);
  },

  async getFeedbacksByGroupId(groupId: string) {
    const response = await api.get<{ data: Feedback[] }>(`/feedbacks/group/${groupId}`);
    return response.data?.data || [];
  },

  async getFeedbacksByAuthorId(authorId: string) {
    const response = await api.get<{ data: Feedback[] }>(`/feedbacks/author/${authorId}`);
    return response.data?.data || [];
  },

  async addReaction(feedbackId: string, type: Reaction['type']): Promise<Reaction | undefined> {
    const response = await api.post<{ data: Reaction }>(`/feedbacks/${feedbackId}/reactions`, { type });
    return response.data?.data;
  },

  async removeReaction(feedbackId: string, reactionId: number): Promise<void> {
    await api.delete(`/feedbacks/${feedbackId}/reactions/${reactionId}`);
  },

  async reportFeedback(id: string): Promise<void> {
    await api.post(`/feedbacks/${id}/report`);
  },
};

export default feedbackService; 