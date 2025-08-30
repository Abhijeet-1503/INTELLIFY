import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, Camera, Volume2, Eye, Users, AlertCircle } from 'lucide-react';

const Level4Page: React.FC = () => {
  const [mode, setMode] = useState<'focused' | 'multipurpose'>('focused');

  return (
    <div className="min-h-screen bg-gradient-subtle px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Level 4 - Audio-Visual Analysis</Badge>
          <h1 className="text-3xl font-bold mb-2">Advanced Media Monitoring</h1>
          <p className="text-muted-foreground">Real-time audio analysis, facial recognition, and behavioral pattern detection</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className={`cursor-pointer transition-all ${mode === 'focused' ? 'ring-2 ring-primary' : ''}`} onClick={() => setMode('focused')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Focused Mode
              </CardTitle>
              <CardDescription>Individual audio-visual monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Personal voice analysis</li>
                <li>• Individual facial tracking</li>
                <li>• Single-user behavior patterns</li>
                <li>• Targeted audio alerts</li>
              </ul>
            </CardContent>
          </Card>

          <Card className={`cursor-pointer transition-all ${mode === 'multipurpose' ? 'ring-2 ring-primary' : ''}`} onClick={() => setMode('multipurpose')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Multipurpose Mode
              </CardTitle>
              <CardDescription>Group audio-visual monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Multi-voice analysis</li>
                <li>• Group facial recognition</li>
                <li>• Collective behavior patterns</li>
                <li>• Comprehensive audio monitoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mic className="w-5 h-5" />
                Audio Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Audio waveform will appear here</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Voice detected:</span>
                  <span className="font-medium">Active</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Background noise:</span>
                  <span className="font-medium">Low</span>
                </div>
                <Button className="w-full">Analyze Audio</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Facial Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-muted rounded">
                  <p className="text-sm">Face detected: 1</p>
                  <p className="text-xs text-muted-foreground">Identity verified</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Eye contact:</span>
                    <span className="font-medium">Maintained</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Head position:</span>
                    <span className="font-medium">Centered</span>
                  </div>
                </div>
                <Button className="w-full">Scan Face</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Behavior Patterns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <span className="text-sm">Focus level</span>
                  <Badge variant="secondary">High</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                  <span className="text-sm">Movement</span>
                  <Badge variant="outline">Normal</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                  <span className="text-sm">Distraction risk</span>
                  <Badge variant="destructive">Low</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Start Level 4 Proctoring Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Level4Page;
