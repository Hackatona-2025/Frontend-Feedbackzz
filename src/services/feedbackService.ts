import api from './api';

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

interface ApiResponse<T> {
  statusCode: number;
  data?: T;
  message?: string;
}

const feedbackService = {
  async createFeedback(feedback: CreateFeedbackDto) {
    try {
      const response = await api.post<ApiResponse<Feedback>>('/feedbacks', feedback);
      return response.data?.data;
    } catch (error) {
      console.error('Error creating feedback:', error);
      throw error;
    }
  },

  async getFeedbackById(id: string) {
    try {
      const response = await api.get<ApiResponse<Feedback>>(`/feedbacks/${id}`);
      return response.data?.data;
    } catch (error) {
      console.error(`Error getting feedback ${id}:`, error);
      throw error;
    }
  },

  async getAllFeedbacks() {
    try {
      const response = await api.post<ApiResponse<Feedback[]>>('/feedbacks/all');
      console.log('Feedbacks response:', response.data); // Debug log
      if (response.data?.statusCode === 200 && response.data?.data) {
        return response.data.data;
      }
      return [];
    } catch (error) {
      console.error('Error getting all feedbacks:', error);
      return [];
    }
  },

  async updateFeedback(feedback: Feedback) {
    try {
      const response = await api.patch<ApiResponse<Feedback>>('/feedbacks', feedback);
      return response.data?.data;
    } catch (error) {
      console.error('Error updating feedback:', error);
      throw error;
    }
  },

  async deleteFeedback(id: string) {
    try {
      await api.delete(`/feedbacks/${id}`);
    } catch (error) {
      console.error(`Error deleting feedback ${id}:`, error);
      throw error;
    }
  },

  async getFeedbacksByGroupId(groupId: string) {
    try {
      const response = await api.get<ApiResponse<Feedback[]>>(`/feedbacks/group/${groupId}`);
      return response.data?.data || [];
    } catch (error) {
      console.error(`Error getting feedbacks for group ${groupId}:`, error);
      return [];
    }
  },

  async getFeedbacksByAuthorId(authorId: string) {
    try {
      const response = await api.get<ApiResponse<Feedback[]>>(`/feedbacks/author/${authorId}`);
      return response.data?.data || [];
    } catch (error) {
      console.error(`Error getting feedbacks for author ${authorId}:`, error);
      return [];
    }
  },

  async addReaction(feedbackId: string, type: Reaction['type']): Promise<Reaction | undefined> {
    try {
      const response = await api.post<ApiResponse<Reaction>>(`/feedbacks/${feedbackId}/reactions`, { type });
      return response.data?.data;
    } catch (error) {
      console.error(`Error adding reaction to feedback ${feedbackId}:`, error);
      throw error;
    }
  },

  async removeReaction(feedbackId: string, reactionId: number): Promise<void> {
    try {
      await api.delete(`/feedbacks/${feedbackId}/reactions/${reactionId}`);
    } catch (error) {
      console.error(`Error removing reaction ${reactionId} from feedback ${feedbackId}:`, error);
      throw error;
    }
  },

  async reportFeedback(id: string): Promise<void> {
    try {
      await api.post(`/feedbacks/${id}/report`);
    } catch (error) {
      console.error(`Error reporting feedback ${id}:`, error);
      throw error;
    }
  },
};

export default feedbackService; 