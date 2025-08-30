import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Users, Camera, Mic, AlertTriangle } from 'lucide-react';

const Level2Page: React.FC = () => {
  const [mode, setMode] = useState<'focused' | 'multipurpose'>('focused');

  return (
    <div className="min-h-screen bg-gradient-subtle px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Level 2 - Behavior Detection</Badge>
          <h1 className="text-3xl font-bold mb-2">Advanced Behavior Monitoring</h1>
          <p className="text-muted-foreground">Gaze tracking, head movement analysis, and multi-screen detection</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className={`cursor-pointer transition-all ${mode === 'focused' ? 'ring-2 ring-primary' : ''}`} onClick={() => setMode('focused')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Focused Mode
              </CardTitle>
              <CardDescription>All capabilities directed towards 1 person</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Individual gaze tracking</li>
                <li>• Single-user head movement analysis</li>
                <li>• Personal device monitoring</li>
                <li>• Real-time alerts for suspicious behavior</li>
              </ul>
            </CardContent>
          </Card>

          <Card className={`cursor-pointer transition-all ${mode === 'multipurpose' ? 'ring-2 ring-primary' : ''}`} onClick={() => setMode('multipurpose')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Multipurpose Mode
              </CardTitle>
              <CardDescription>Classroom-type setting for multiple participants</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Multi-participant gaze tracking</li>
                <li>• Group head movement analysis</li>
                <li>• Classroom-wide screen detection</li>
                <li>• Batch alerts and analytics</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Video Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Camera feed will appear here</p>
              </div>
              <Button className="w-full mt-4">Start Camera</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mic className="w-5 h-5" />
                Audio Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Audio Level</span>
                  <span className="text-sm text-muted-foreground">45%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <Button className="w-full">Start Audio</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Security Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">Head movement detected</span>
                  <Badge variant="secondary">Low</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">Multiple screens detected</span>
                  <Badge variant="destructive">High</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Start Level 2 Proctoring Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Level2Page;
