import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Category } from '@/types/scavenger-hunt';

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  className?: string;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  className
}) => {
  const [startX, setStartX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const activeIndex = categories.findIndex(cat => cat.id === activeCategory);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!startX) return;
    
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    
    // Swipe threshold
    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && activeIndex < categories.length - 1) {
        // Swipe left - next category
        onCategoryChange(categories[activeIndex + 1].id);
      } else if (diffX < 0 && activeIndex > 0) {
        // Swipe right - previous category
        onCategoryChange(categories[activeIndex - 1].id);
      }
    }
    
    setStartX(null);
  };

  return (
    <div 
      ref={containerRef}
      className={cn("relative", className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Tab buttons */}
      <div className="flex justify-evenly mb-4 pb-2">
        {categories.map((category) => {
          const completedTasks = category.tasks.filter(task => task.completed).length;
          const totalTasks = category.tasks.length;
          
          return (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "flex-1 mx-1 relative transition-all duration-300 text-xs",
                activeCategory === category.id 
                  ? "bg-gradient-primary text-primary-foreground shadow-elevated" 
                  : "hover:border-primary/50"
              )}
            >
              <div className="text-center">
                <div className="font-semibold">{category.name}</div>
                <div className={cn(
                  "text-xs opacity-80",
                  activeCategory === category.id ? "text-primary-foreground" : "text-muted-foreground"
                )}>
                  {completedTasks}/{totalTasks}
                </div>
              </div>
            </Button>
          );
        })}
      </div>
      
      {/* Swipe indicator */}
      <div className="flex justify-center gap-1 mb-2">
        {categories.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === activeIndex 
                ? "bg-primary scale-125" 
                : "bg-muted-foreground/30"
            )}
          />
        ))}
      </div>
    </div>
  );
};