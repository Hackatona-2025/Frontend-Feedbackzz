import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Bot, MessageSquare, Lightbulb } from 'lucide-react';

interface AnalysisResult {
  overallScore: number;
  sentiment: string;
  suggestions: string[];
  mentions: {
    user: string;
    count: number;
    sentiment: string;
  }[];
  hashtags: {
    tag: string;
    count: number;
    sentiment: string;
  }[];
}

export default function AIAnalysis() {
  const [analysis] = useState<AnalysisResult>({
    overallScore: 75,
    sentiment: 'Positivo',
    suggestions: [
      'Considere dar mais feedbacks construtivos sobre processos',
      'Tente mencionar mais colegas em seus feedbacks',
      'Use mais hashtags para categorizar seus feedbacks'
    ],
    mentions: [
      { user: '@tech-lead', count: 5, sentiment: 'Positivo' },
      { user: '@design-team', count: 3, sentiment: 'Neutro' },
      { user: '@product-manager', count: 2, sentiment: 'Positivo' }
    ],
    hashtags: [
      { tag: '#improvement', count: 8, sentiment: 'Positivo' },
      { tag: '#teamwork', count: 6, sentiment: 'Positivo' },
      { tag: '#process', count: 4, sentiment: 'Neutro' }
    ]
  });

  return (
    <div className="space-y-6 py-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            Análise de Feedback
          </CardTitle>
          <CardDescription>
            Análise detalhada dos seus feedbacks e interações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Pontuação Geral</h3>
                <span className="text-2xl font-bold text-violet-500">{analysis.overallScore}%</span>
              </div>
              <Progress value={analysis.overallScore} className="h-2" />
            </div>

            <div>
              <h3 className="font-semibold mb-2">Sentimento Geral</h3>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-violet-500" />
                <span className="text-lg">{analysis.sentiment}</span>
              </div>
            </div>

            <Tabs defaultValue="suggestions">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="suggestions">Sugestões</TabsTrigger>
                <TabsTrigger value="mentions">Menções</TabsTrigger>
                <TabsTrigger value="hashtags">Hashtags</TabsTrigger>
              </TabsList>
              <TabsContent value="suggestions" className="space-y-4">
                {analysis.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500 mt-1" />
                    <p>{suggestion}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="mentions" className="space-y-4">
                {analysis.mentions.map((mention, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-violet-400">{mention.user}</span>
                      <span className="text-sm text-gray-400">({mention.count} menções)</span>
                    </div>
                    <span className="text-sm text-gray-400">{mention.sentiment}</span>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="hashtags" className="space-y-4">
                {analysis.hashtags.map((hashtag, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">#{hashtag.tag}</span>
                      <span className="text-sm text-gray-400">({hashtag.count} usos)</span>
                    </div>
                    <span className="text-sm text-gray-400">{hashtag.sentiment}</span>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 