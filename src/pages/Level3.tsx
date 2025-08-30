import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Users, Camera, Mic, Shield, AlertTriangle } from 'lucide-react';

const Level3Page: React.FC = () => {
  const [mode, setMode] = useState<'focused' | 'multipurpose'>('focused');

  return (
    <div className="min-h-screen bg-gradient-subtle px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Level 3 - Environment Awareness</Badge>
          <h1 className="text-3xl font-bold mb-2">Environmental Monitoring</h1>
          <p className="text-muted-foreground">Multi-person detection, background analysis, and suspicious object recognition</p>
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
                <li>• Personal environment scanning</li>
                <li>• Individual background analysis</li>
                <li>• Single-user object detection</li>
                <li>• Targeted security alerts</li>
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
                <li>• Room-wide person detection</li>
                <li>• Group environment analysis</li>
                <li>• Classroom object recognition</li>
                <li>• Comprehensive security monitoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Person Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Environment scan will appear here</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Persons detected:</span>
                  <span className="font-medium">1</span>
                </div>
                <Button className="w-full">Scan Environment</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Background Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-muted rounded">
                  <p className="text-sm">Background: Clean study environment</p>
                  <p className="text-xs text-muted-foreground">No suspicious objects detected</p>
                </div>
                <Button className="w-full">Analyze Background</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Object Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <span className="text-sm">Notebook detected</span>
                  <Badge variant="secondary">Allowed</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                  <span className="text-sm">Phone detected</span>
                  <Badge variant="destructive">Suspicious</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Start Level 3 Proctoring Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Level3Page;
