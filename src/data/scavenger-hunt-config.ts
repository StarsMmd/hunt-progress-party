import { ScavengerHuntConfig } from '@/types/scavenger-hunt';
import treasureChest from '@/assets/treasure-chest.png';
import cameraTask from '@/assets/camera-task.png';
import searchTask from '@/assets/search-task.png';
import starTask from '@/assets/star-task.png';

export const scavengerHuntConfig: ScavengerHuntConfig = {
  title: "Epic Scavenger Hunt",
  maxPoints: 400,
  milestones: [250, 300, 350],
  categories: [
    {
      id: "photo",
      name: "Catch",
      tasks: [
        {
          id: "selfie-landmark",
          title: "Take a selfie at a local landmark",
          image: cameraTask,
          points: 25,
          completed: false
        },
        {
          id: "team-photo",
          title: "Group photo with all team members",
          image: cameraTask,
          points: 30,
          completed: false
        },
        {
          id: "sunset-photo",
          title: "Capture a beautiful sunset",
          image: cameraTask,
          points: 20,
          completed: false
        },
        {
          id: "street-art",
          title: "Find and photograph street art",
          image: cameraTask,
          points: 15,
          completed: false
        },
        {
          id: "funny-sign",
          title: "Photo with a funny sign",
          image: cameraTask,
          points: 10,
          completed: false
        },
        {
          id: "pet-encounter",
          title: "Picture with a friendly pet",
          image: cameraTask,
          points: 15,
          completed: false
        }
      ]
    },
    {
      id: "exploration",
      name: "Explore",
      tasks: [
        {
          id: "hidden-treasure",
          title: "Find the hidden treasure box",
          image: treasureChest,
          points: 50,
          completed: false
        },
        {
          id: "secret-location",
          title: "Discover the secret location",
          image: searchTask,
          points: 40,
          completed: false
        },
        {
          id: "oldest-building",
          title: "Find the oldest building",
          image: searchTask,
          points: 30,
          completed: false
        },
        {
          id: "water-feature",
          title: "Locate a natural water feature",
          image: searchTask,
          points: 25,
          completed: false
        },
        {
          id: "highest-point",
          title: "Reach the highest accessible point",
          image: searchTask,
          points: 35,
          completed: false
        },
        {
          id: "local-shop",
          title: "Visit the oldest local shop",
          image: searchTask,
          points: 20,
          completed: false
        }
      ]
    },
    {
      id: "challenges",
      name: "Play",
      tasks: [
        {
          id: "local-trivia",
          title: "Answer 5 local trivia questions",
          image: starTask,
          points: 30,
          completed: false
        },
        {
          id: "skill-demo",
          title: "Demonstrate a special skill",
          image: starTask,
          points: 25,
          completed: false
        },
        {
          id: "riddle-solve",
          title: "Solve the mystery riddle",
          image: starTask,
          points: 40,
          completed: false
        },
        {
          id: "creative-task",
          title: "Complete the creative challenge",
          image: starTask,
          points: 35,
          completed: false
        },
        {
          id: "time-challenge",
          title: "Beat the 5-minute time challenge",
          image: starTask,
          points: 20,
          completed: false
        },
        {
          id: "team-puzzle",
          title: "Solve the team puzzle together",
          image: starTask,
          points: 30,
          completed: false
        }
      ]
    },
    {
      id: "bonus",
      name: "Bonus",
      tasks: [
        {
          id: "early-bird",
          title: "Complete before 12 PM",
          image: starTask,
          points: 15,
          completed: false
        },
        {
          id: "help-stranger",
          title: "Help a stranger with something",
          image: starTask,
          points: 25,
          completed: false
        },
        {
          id: "eco-friendly",
          title: "Pick up 10 pieces of litter",
          image: starTask,
          points: 20,
          completed: false
        },
        {
          id: "local-food",
          title: "Try a local food specialty",
          image: starTask,
          points: 15,
          completed: false
        },
        {
          id: "new-friend",
          title: "Make a new friend",
          image: starTask,
          points: 30,
          completed: false
        },
        {
          id: "perfect-score",
          title: "Complete all tasks in a category",
          image: treasureChest,
          points: 50,
          completed: false
        }
      ]
    }
  ]
};