import React, { useState, useCallback, useEffect } from 'react';
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
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('scavenger-hunt-progress');
    if (saved) {
      try {
        const savedCategories = JSON.parse(saved);
        // Merge saved completion state with current config
        return config.categories.map(category => {
          const savedCategory = savedCategories.find((saved: any) => saved.id === category.id);
          if (savedCategory) {
            return {
              ...category,
              tasks: category.tasks.map(task => {
                const savedTask = savedCategory.tasks.find((saved: any) => saved.id === task.id);
                return savedTask ? { ...task, completed: savedTask.completed } : task;
              })
            };
          }
          return category;
        });
      } catch (error) {
        console.error('Failed to parse saved progress:', error);
      }
    }
    return config.categories;
  });
  const [activeCategory, setActiveCategory] = useState(config.categories[0]?.id || '');

  // Save progress to localStorage whenever categories change
  useEffect(() => {
    localStorage.setItem('scavenger-hunt-progress', JSON.stringify(categories));
  }, [categories]);

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
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
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