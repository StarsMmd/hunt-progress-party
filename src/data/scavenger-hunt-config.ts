import { ScavengerHuntConfig } from '@/types/scavenger-hunt';
import treasureChest from '@/assets/treasure-chest.png';
import searchTask from '@/assets/search-task.png';
import starTask from '@/assets/star-task.png';
import pikachuSummerHat from '@/assets/pikachu-summer-hat.png';
import alolanGeodude from '@/assets/alolan-geodude.png';
import wooloo from '@/assets/wooloo.png';
import sandshrew from '@/assets/sandshrew.png';
import phanpy from '@/assets/phanpy.png';
import venipede from '@/assets/venipede.png';
import golett from '@/assets/golett.png';
import varoom from '@/assets/varoom.png';
import voltorb from '@/assets/voltorb.png';
import foongus from '@/assets/foongus.png';
import galarianStunfisk from '@/assets/galarian-stunfisk.png';
import unown from '@/assets/unown.png';
import electrode from '@/assets/electrode.png';
import terrakion from '@/assets/terrakion.png';
import xxlLetters from '@/assets/xxl-letters.png';
import shinySparkles from '@/assets/shiny-sparkles.png';

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
          id: "summer-hat-pikachu",
          title: "Catch A Summer Hat Pikachu",
          image: pikachuSummerHat,
          points: 5,
          completed: false
        },
        {
          id: "alolan-geodude",
          title: "Catch An Alolan Geodude",
          image: alolanGeodude,
          points: 5,
          completed: false
        },
        {
          id: "wooloo",
          title: "Catch A Wooloo",
          image: wooloo,
          points: 5,
          completed: false
        },
        {
          id: "sandshrew",
          title: "Catch A Sandshrew",
          image: sandshrew,
          points: 5,
          completed: false
        },
        {
          id: "phanpy",
          title: "Catch A Phanpy",
          image: phanpy,
          points: 5,
          completed: false
        },
        {
          id: "venipede",
          title: "Catch A Venipede",
          image: venipede,
          points: 5,
          completed: false
        },
        {
          id: "golett",
          title: "Catch A Golett",
          image: golett,
          points: 5,
          completed: false
        },
        {
          id: "varoom",
          title: "Catch A Varoom",
          image: varoom,
          points: 5,
          completed: false
        },
        {
          id: "voltorb",
          title: "Catch A Voltorb",
          image: voltorb,
          points: 5,
          completed: false
        },
        {
          id: "foongus",
          title: "Catch A Foongus",
          image: foongus,
          points: 5,
          completed: false
        },
        {
          id: "galarian-stunfisk",
          title: "Catch A Galarian Stunfisk",
          image: galarianStunfisk,
          points: 5,
          completed: false
        },
        {
          id: "unown",
          title: "Catch An Unown",
          image: unown,
          points: 5,
          completed: false
        },
        {
          id: "wild-electrode",
          title: "Catch A Wild Electrode",
          image: electrode,
          points: 15,
          completed: false
        },
        {
          id: "terrakion",
          title: "Catch A Terrakion",
          image: terrakion,
          points: 15,
          completed: false
        },
        {
          id: "xxl-pokemon",
          title: "Catch An XXL Pokemon",
          image: xxlLetters,
          points: 15,
          completed: false
        },
        {
          id: "shiny-pokemon",
          title: "Catch A Shiny Pokemon",
          image: shinySparkles,
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
          id: "road-trip-pokestop",
          title: "Spin The Photodisc On A Road Trip Pokestop",
          image: searchTask,
          points: 5,
          completed: false
        },
        {
          id: "road-trip-gym",
          title: "Spin The Photodisc On A Road Trip Gym",
          image: searchTask,
          points: 5,
          completed: false
        },
        {
          id: "shard-gym",
          title: "Spin The Photodisc On \"The Shard\" Gym",
          image: searchTask,
          points: 15,
          completed: false
        },
        {
          id: "tower-bridge-gym",
          title: "Spin The Photodisc On The \"Tower Bridge\" Gym",
          image: searchTask,
          points: 15,
          completed: false
        },
        {
          id: "london-monument-gym",
          title: "Spin The Photodisc On \"The London Monument\" Gym",
          image: searchTask,
          points: 15,
          completed: false
        },
        {
          id: "tower-of-london-gym",
          title: "Spin The Photodisc On One Of The \"Tower Of London\" Gyms",
          image: searchTask,
          points: 15,
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