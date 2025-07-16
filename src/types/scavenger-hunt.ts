export interface Task {
  id: string;
  title: string;
  image: string;
  points: number;
  completed: boolean;
}

export interface Category {
  id: string;
  name: string;
  tasks: Task[];
}

export interface ScavengerHuntConfig {
  title: string;
  maxPoints: number;
  milestones: number[];
  categories: Category[];
}