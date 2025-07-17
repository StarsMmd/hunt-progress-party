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
          id: "defeat-team-rocket",
          title: "Defeat A Team Rocket Grunt",
          image: starTask,
          points: 5,
          completed: false
        },
        {
          id: "win-raid-battle",
          title: "Win A Raid Battle",
          image: starTask,
          points: 5,
          completed: false
        },
        {
          id: "win-max-battle",
          title: "Win A Max Battle",
          image: starTask,
          points: 5,
          completed: false
        },
        {
          id: "snapshot-with-buddy",
          title: "Take A Snapshot With Summer Hat Pikachu As Your Buddy",
          image: starTask,
          points: 5,
          completed: false
        },
        {
          id: "hatch-an-egg",
          title: "Hatch An Egg",
          image: starTask,
          points: 5,
          completed: false
        },
        {
          id: "evolve-summer-pikachu",
          title: "Evolve A Summer Hat Pikachu",
          image: starTask,
          points: 5,
          completed: false
        },
        {
          id: "evolve-alolan-graveler",
          title: "Evolve An Alolan Graveler Into An Alolan Golem",
          image: starTask,
          points: 15,
          completed: false
        },
        {
          id: "earn-buddy-hearts",
          title: "Earn 7 Buddy Hearts With Summer Hat Pikachu As Your Buddy",
          image: starTask,
          points: 15,
          completed: false
        }
      ]
    },
    {
      id: "bonus",
      name: "Bonus",
      tasks: [
        {
          id: "make-new-friend",
          title: "Make A New Friend",
          image: starTask,
          points: 25,
          completed: false
        },
        {
          id: "join-party",
          title: "Join A Party",
          image: starTask,
          points: 25,
          completed: false
        },
        {
          id: "ar-photo-tower-bridge",
          title: "AR Photo With Tower Bridge In The Background",
          image: starTask,
          points: 25,
          completed: false
        },
        {
          id: "trade-5000km",
          title: "Make A Trade With A Distance Of 5000km Or More",
          image: starTask,
          points: 25,
          completed: false
        },
        {
          id: "send-road-trip-gift",
          title: "Send A Gift With A Road Trip Postcard",
          image: starTask,
          points: 25,
          completed: false
        },
        {
          id: "campfire-checkin",
          title: "Check In To The Scavenger Hunt On Campfire",
          image: starTask,
          points: 25,
          completed: false
        }
      ]
    }
  ]
};