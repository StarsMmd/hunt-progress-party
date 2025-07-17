import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  currentScore: number;
  maxScore: number;
  milestones: number[];
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentScore,
  maxScore,
  milestones,
  className
}) => {
  const [lastMilestone, setLastMilestone] = useState(-1);
  const [celebratingMilestone, setCelebratingMilestone] = useState<number | null>(null);
  
  const progress = Math.min((currentScore / maxScore) * 100, 100);
  
  useEffect(() => {
    const reachedMilestone = milestones
      .filter(milestone => currentScore >= milestone)
      .sort((a, b) => b - a)[0];
      
    if (reachedMilestone && reachedMilestone > lastMilestone) {
      setLastMilestone(reachedMilestone);
      setCelebratingMilestone(reachedMilestone);
      
      // Stop celebration after animation
      setTimeout(() => {
        setCelebratingMilestone(null);
      }, 600);
    }
  }, [currentScore, milestones, lastMilestone]);

  return (
    <div className={cn("relative w-full", className)}>
      <div className="w-full h-3 bg-secondary rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-glow"></div>
        </div>
      </div>
      
      {/* Milestone markers */}
      <div className="absolute top-0 w-full h-3">
        {milestones.map((milestone) => {
          const position = (milestone / maxScore) * 100;
          const isReached = currentScore >= milestone;
          const isCelebrating = celebratingMilestone === milestone;
          
          return (
            <div
              key={milestone}
              className={cn(
                "absolute top-0 w-1 h-3 transform -translate-x-0.5 transition-all duration-300",
                isReached 
                  ? "bg-success shadow-glow" 
                  : "bg-muted-foreground/50",
                isCelebrating && "animate-milestone-celebration"
              )}
              style={{ left: `${position}%` }}
            >
              <div className={cn(
                "absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium transition-all duration-300",
                isReached ? "text-success" : "text-muted-foreground"
              )}>
                {milestone}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};