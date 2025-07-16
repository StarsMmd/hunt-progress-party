import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Task } from '@/types/scavenger-hunt';

interface TaskCardProps {
  task: Task;
  onToggleComplete: (taskId: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onToggleComplete }) => {
  const handleClick = () => {
    onToggleComplete(task.id);
  };

  return (
    <Card 
      className={cn(
        "relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-elevated",
        "bg-gradient-card border-2 active:scale-95",
        task.completed 
          ? "border-success shadow-elevated bg-gradient-success" 
          : "border-border hover:border-primary/50",
        task.completed && "animate-task-complete"
      )}
      onClick={handleClick}
    >
      <div className="aspect-square relative">
        <img 
          src={task.image} 
          alt={task.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-300",
            task.completed && "opacity-80"
          )}
        />
        
        {/* Overlay for completed tasks */}
        {task.completed && (
          <div className="absolute inset-0 bg-success/20 flex items-center justify-center">
            <div className="bg-success rounded-full p-2 shadow-elevated">
              <Check className="w-6 h-6 text-success-foreground" />
            </div>
          </div>
        )}
        
        {/* Points badge */}
        <Badge 
          className={cn(
            "absolute top-2 right-2 font-bold shadow-card",
            task.completed 
              ? "bg-success text-success-foreground" 
              : "bg-gradient-primary text-primary-foreground"
          )}
        >
          {task.points}pt
        </Badge>
      </div>
      
      <div className="p-3">
        <h3 className={cn(
          "font-semibold text-sm leading-tight transition-colors duration-300",
          task.completed ? "text-success-foreground" : "text-card-foreground"
        )}>
          {task.title}
        </h3>
      </div>
    </Card>
  );
};