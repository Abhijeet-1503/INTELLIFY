import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Shield, AlertTriangle, CheckCircle, Users, Eye } from 'lucide-react';

const Level5Page: React.FC = () => {
  const [mode, setMode] = useState<'focused' | 'multipurpose'>('focused');

  return (
    <div className="min-h-screen bg-gradient-subtle px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Level 5 - Adaptive AI Decision</Badge>
          <h1 className="text-3xl font-bold mb-2">Intelligent Proctoring</h1>
          <p className="text-muted-foreground">AI-powered decision making, predictive analysis, and automated intervention</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className={`cursor-pointer transition-all ${mode === 'focused' ? 'ring-2 ring-primary' : ''}`} onClick={() => setMode('focused')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Focused Mode
              </CardTitle>
              <CardDescription>AI monitoring for individual assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Personal AI analysis</li>
                <li>• Individual risk assessment</li>
                <li>• Targeted interventions</li>
                <li>• Predictive behavior modeling</li>
              </ul>
            </CardContent>
          </Card>

          <Card className={`cursor-pointer transition-all ${mode === 'multipurpose' ? 'ring-2 ring-primary' : ''}`} onClick={() => setMode('multipurpose')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Multipurpose Mode
              </CardTitle>
              <CardDescription>AI monitoring for group assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Group AI analysis</li>
                <li>• Collective risk assessment</li>
                <li>• Coordinated interventions</li>
                <li>• Predictive group dynamics</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                AI Decision Engine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-muted rounded">
                  <p className="text-sm">AI Status: Active</p>
                  <p className="text-xs text-muted-foreground">Analyzing patterns...</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Confidence level:</span>
                    <span className="font-medium">98%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Decision accuracy:</span>
                    <span className="font-medium">95%</span>
                  </div>
                </div>
                <Button className="w-full">Run AI Analysis</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <span className="text-sm">Integrity risk</span>
                  <Badge variant="secondary">Low</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                  <span className="text-sm">Technical issues</span>
                  <Badge variant="outline">None</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                  <span className="text-sm">Behavioral anomalies</span>
                  <Badge variant="destructive">Minimal</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Automated Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <span className="text-sm">Session status</span>
                  <Badge variant="secondary">Proceeding</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                  <span className="text-sm">Last intervention</span>
                  <Badge variant="outline">None</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <span className="text-sm">AI recommendations</span>
                  <Badge variant="secondary">3 pending</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                AI Insights & Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                  <p className="text-sm font-medium">Pattern Recognition</p>
                  <p className="text-xs text-muted-foreground">Consistent focus patterns detected. No intervention needed.</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                  <p className="text-sm font-medium">Predictive Analysis</p>
                  <p className="text-xs text-muted-foreground">Potential fatigue detected in 15 minutes. Recommend short break.</p>
                </div>
                <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                  <p className="text-sm font-medium">Behavioral Assessment</p>
                  <p className="text-xs text-muted-foreground">All parameters within normal range. Session integrity maintained.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Start Level 5 AI Proctoring Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Level5Page;
