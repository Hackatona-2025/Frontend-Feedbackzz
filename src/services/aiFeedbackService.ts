import axios from 'axios';

interface AIFeedbackResponse {
  analysis: string;
  sentiment: string;
  suggestions: string[];
  score: number;
}

export const getAIFeedback = async (feedback: string): Promise<AIFeedbackResponse> => {
  try {
    // Replace with your actual API endpoint
    const response = await axios.post('YOUR_LLAMA_API_ENDPOINT', {
      feedback,
    });
    
    return response.data as AIFeedbackResponse;
  } catch (error) {
    console.error('Error fetching AI feedback:', error);
    throw new Error('Failed to get AI feedback analysis');
  }
}; 