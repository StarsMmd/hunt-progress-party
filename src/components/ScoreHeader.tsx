import React from 'react';
import { Trophy, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ProgressBar } from './ProgressBar';
import { cn } from '@/lib/utils';

interface ScoreHeaderProps {
  title: string;
  currentScore: number;
  maxScore: number;
  milestones: number[];
  className?: string;
}

export const ScoreHeader: React.FC<ScoreHeaderProps> = ({
  title,
  currentScore,
  maxScore,
  milestones,
  className
}) => {
  const completionPercentage = Math.round((currentScore / maxScore) * 100);
  
  return (
    <Card className={cn(
      "sticky top-0 z-50 bg-gradient-card border-b-2 border-primary/20 shadow-elevated",
      className
    )}>
      <div className="p-4 space-y-4">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {title}
          </h1>
        </div>
        
        {/* Score display */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary p-2 rounded-full shadow-card">
              <Trophy className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">
                {currentScore}
              </div>
              <div className="text-sm text-muted-foreground">
                Score
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-gradient-success p-2 rounded-full shadow-card">
              <Target className="w-5 h-5 text-success-foreground" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">
                {completionPercentage}%
              </div>
              <div className="text-sm text-muted-foreground">
                Complete
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="space-y-2 mt-2">
          <ProgressBar 
            currentScore={currentScore}
            maxScore={maxScore}
            milestones={milestones}
          />
        </div>
      </div>
    </Card>
  );
};