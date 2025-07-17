import React, { useState, useCallback } from 'react';
import { ScoreHeader } from './ScoreHeader';
import { CategoryTabs } from './CategoryTabs';
import { TaskCard } from './TaskCard';
import { ScavengerHuntConfig, Task } from '@/types/scavenger-hunt';
import { cn } from '@/lib/utils';

interface ScavengerHuntProps {
  config: ScavengerHuntConfig;
  className?: string;
}

export const ScavengerHunt: React.FC<ScavengerHuntProps> = ({ config, className }) => {
  const [categories, setCategories] = useState(config.categories);
  const [activeCategory, setActiveCategory] = useState(config.categories[0]?.id || '');

  const currentScore = categories.reduce((total, category) => 
    total + category.tasks.reduce((catTotal, task) => 
      catTotal + (task.completed ? task.points : 0), 0
    ), 0
  );

  const handleToggleTask = useCallback((taskId: string) => {
    setCategories(prevCategories => 
      prevCategories.map(category => ({
        ...category,
        tasks: category.tasks.map(task => 
          task.id === taskId 
            ? { ...task, completed: !task.completed }
            : task
        )
      }))
    );
  }, []);

  const activeCategories = categories.find(cat => cat.id === activeCategory);
  
  if (!activeCategories) {
    return <div>No categories found</div>;
  }

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <ScoreHeader 
        title={config.title}
        currentScore={currentScore}
        maxScore={config.maxPoints}
        milestones={config.milestones}
      />
      
      {/* Sticky Category Tabs */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="p-4 pb-2">
          <CategoryTabs 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </div>
      
      <div className="p-4 pb-8">
        
        {/* Task Grid */}
        <div className="grid grid-cols-2 gap-4 animate-slide-in">
          {activeCategories.tasks.map((task) => (
            <TaskCard 
              key={task.id}
              task={task}
              onToggleComplete={handleToggleTask}
            />
          ))}
        </div>
        
        {/* Category Summary */}
        <div className="mt-8 text-center">
          <div className="text-sm text-muted-foreground">
            {activeCategories.name}: {' '}
            {activeCategories.tasks.filter(task => task.completed).length} of {activeCategories.tasks.length} completed
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {activeCategories.tasks.reduce((total, task) => total + (task.completed ? task.points : 0), 0)} points earned
          </div>
        </div>
      </div>
    </div>
  );
};