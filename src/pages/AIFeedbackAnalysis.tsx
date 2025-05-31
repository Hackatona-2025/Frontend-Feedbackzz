import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Loader2, MessageSquare } from "lucide-react";
import { getAIFeedback } from '../services/aiFeedbackService';

interface AIAnalysis {
  analysis: string;
  sentiment: string;
  suggestions: string[];
  score: number;
}

export default function AIAnalysis() {
  const [feedback, setFeedback] = useState('');
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!feedback.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const result = await getAIFeedback(feedback);
      setAnalysis(result);
    } catch (error) {
      setError('Failed to analyze feedback. Please try again.');
      console.error('Analysis error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedbackChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            AI Feedback Analysis
          </CardTitle>
          <CardDescription>
            Enter your feedback below to get an AI-powered analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Type your feedback here..."
            value={feedback}
            onChange={handleFeedbackChange}
            className="mb-4 min-h-[150px]"
          />
          <Button 
            onClick={handleAnalyze} 
            disabled={loading || !feedback.trim()}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Analyze Feedback'
            )}
          </Button>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {analysis && (
        <Card>
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Overall Analysis</h3>
              <p className="text-muted-foreground">{analysis.analysis}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Sentiment</h3>
              <p className="text-muted-foreground">{analysis.sentiment}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Suggestions</h3>
              <ul className="list-disc pl-4 space-y-1">
                {analysis.suggestions.map((suggestion: string, index: number) => (
                  <li key={index} className="text-muted-foreground">{suggestion}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Score</h3>
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${analysis.score}%` }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{analysis.score}/100</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 