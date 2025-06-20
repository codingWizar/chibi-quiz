import React from 'react';
import { Sparkles, Cloud, Snowflake, Leaf, Moon, Cookie, Heart, HelpCircle } from 'lucide-react';

// Type for Chapter
type Chapter = {
  id: number;
  title: string;
  emoji: string;
  story: string;
  questions: string[];
  background: string;
  theme: string;
  backgroundElements?: JSX.Element;
  characters?: JSX.Element;
};

const FloatingElement: React.FC<{ children: React.ReactNode; delay?: number; duration?: number; className?: string }> = ({ 
  children, 
  delay = 0, 
  duration = 3, 
  className = "" 
}) => (
  <div 
    className={`absolute animate-float ${className}`}
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  >
    {children}
  </div>
);

const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Mysterious Green Garden",
    emoji: "🥦",
    story: `One day, Chibi the Chick walked into the Green Garden where all the food was rainbow-colored. 
            There were squishy berries, crunchy carrots, and slippery noodles! But Chibi didn't like how some smelled… 
            and others felt too slimy. "What if I choke?" Chibi whispered. 
            Chibi's tummy started to grumble. But still, Chibi only pecked at the plain rice puffs. 
            The wise owl doctor noticed Chibi was growing slower than other chicks.`,
    questions: [
      "Are there foods you don't eat because they smell, look, or feel weird in your mouth?",
      "Do you ever get scared you might choke or get sick when you eat some foods?",
      "Do you eat so little that people worry you're not growing or staying healthy?",
      "Do you have to drink special shakes or use tubes to help you eat?"
    ],
    background: "from-green-300 to-emerald-400",
    theme: "emerald",
    backgroundElements: (
      <>
        {/* Static background image of the green garden */}
        <img
          src="/images/backgrounds/green-garden.png"
          alt="Green Garden Background"
          className="absolute inset-0 object-cover w-full h-full opacity-70 z-0"
        />

        {/* Animated floating food emojis */}
        <FloatingElement delay={0} className="top-10 left-10">
          <div className="text-4xl animate-pulse">🥕</div>
        </FloatingElement>
        <FloatingElement delay={1} className="top-20 right-20">
          <div className="text-3xl animate-bounce">🥦</div>
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-20 left-20">
          <div className="text-5xl animate-spin-slow">🍃</div>
        </FloatingElement>
        <FloatingElement delay={0.5} className="top-1/2 right-10">
          <div className="text-2xl animate-pulse">🌱</div>
        </FloatingElement>
        <FloatingElement delay={1.5} className="bottom-10 right-1/3">
          <div className="text-3xl animate-bounce">🥬</div>
        </FloatingElement>
      </>
    ), 
    characters: (
      <>
        <img
          src="/images/characters/chibi-chick.png"
          alt="Chibi the Chick"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-auto animate-chibi-bounce z-10"
        />
        <img
          src="/images/characters/doctor-owl.png"
          alt="Doctor Owl"
          className="absolute bottom-5 right-10 w-28 h-auto animate-float z-10"
        />
      </>
    )
  },
  {
    id: 2,
    title: "The Silly Snack Search",
    emoji: "🪨",
    story: "While playing treasure hunt, Chibi found strange \"treats\" like dirt, chalk, and paper. Chibi thought, \"Should I eat these?\" \"Chibi, those aren't food!\" the squirrel shouted. But Chibi had already tasted them a few times—even after being told not to.",
    questions: [
      "Have you ever eaten things like dirt, paper, hair, or chalk—even when you weren't playing?",
      "Have you done that more than once, even when grown-ups told you not to?",
      "Is it something you still do now?"
    ],
    background: "from-amber-300 to-orange-400",
    theme: "amber",
    backgroundElements: (
      <>
        <FloatingElement delay={0} className="top-16 left-16">
          <div className="text-4xl animate-bounce">🪨</div>
        </FloatingElement>
        <FloatingElement delay={1} className="top-32 right-16">
          <div className="text-3xl animate-pulse">📄</div>
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-24 left-24">
          <div className="text-2xl animate-spin-slow">✏️</div>
        </FloatingElement>
        <FloatingElement delay={0.5} className="top-1/3 right-1/4">
          <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
        </FloatingElement>
        <FloatingElement delay={1.5} className="bottom-16 right-20">
          <div className="text-3xl animate-bounce">🐿️</div>
        </FloatingElement>
      </>
    ), 
    characters: (
      <>
        <img
          src="/images/characters/chibi-chick.png"
          alt="Chibi the Chick"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-auto animate-chibi-bounce z-10"
        />
        <img
          src="/images/characters/doctor-owl.png"
          alt="Doctor Owl"
          className="absolute bottom-5 right-10 w-28 h-auto animate-float z-10"
        />
      </>
    )
  },
  {
    id: 3,
    title: "The Chewed-Up Mystery",
    emoji: "🌀",
    story: "Chibi had a secret. After meals, food would come back into Chibi's beak, and Chibi would chew it again. \"Why do I do that?\" Chibi asked a butterfly. \"I'm not even sick!\"",
    questions: [
      "Do you sometimes bring food back up into your mouth after you've swallowed it?",
      "Do you chew it again or spit it out, even when you're not sick?"
    ],
    background: "from-cyan-300 to-blue-400",
    theme: "cyan",
    backgroundElements: (
      <>
        <FloatingElement delay={0} className="top-12 left-12">
          <div className="text-4xl animate-spin">🌀</div>
        </FloatingElement>
        <FloatingElement delay={1} className="top-24 right-24">
          <div className="text-3xl animate-bounce">🦋</div>
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-20 left-32">
          <Cloud className="w-12 h-12 text-white animate-float" />
        </FloatingElement>
        <FloatingElement delay={0.5} className="top-1/2 right-12">
          <div className="text-2xl animate-pulse">💫</div>
        </FloatingElement>
        <FloatingElement delay={1.5} className="bottom-32 right-1/3">
          <div className="text-3xl animate-bounce">🌊</div>
        </FloatingElement>
      </>
    ), 
    characters: (
      <>
        <img
          src="/images/characters/chibi-chick.png"
          alt="Chibi the Chick"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-auto animate-chibi-bounce z-10"
        />
        <img
          src="/images/characters/doctor-owl.png"
          alt="Doctor Owl"
          className="absolute bottom-5 right-10 w-28 h-auto animate-float z-10"
        />
      </>
    )
  },
  {
    id: 4,
    title: "The Body Worry Blizzard",
    emoji: "🍃",
    story: "One winter, Chibi didn't want to eat much. \"I don't want to get fat,\" Chibi whispered, even though everyone said Chibi looked small. Chibi skipped sunflower seeds and hid meals behind the tree trunk. The other chicks were flying higher, but Chibi stayed tiny and cold.",
    questions: [
      "Do you try to eat as little as possible so you don't gain weight?",
      "Do you feel scared of getting fat, even if people say you're thin?",
      "Have you lost weight or not grown taller like your friends?",
      "Do you often feel upset about how your body looks?"
    ],
    background: "from-slate-300 to-blue-300",
    theme: "slate",
    backgroundElements: (
      <>
        <FloatingElement delay={0} className="top-8 left-8">
          <Snowflake className="w-8 h-8 text-white animate-spin-slow" />
        </FloatingElement>
        <FloatingElement delay={1} className="top-20 right-16">
          <Snowflake className="w-6 h-6 text-blue-200 animate-pulse" />
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-16 left-20">
          <div className="text-3xl animate-bounce">🌨️</div>
        </FloatingElement>
        <FloatingElement delay={0.5} className="top-1/3 right-1/4">
          <Leaf className="w-10 h-10 text-gray-300 animate-float" />
        </FloatingElement>
        <FloatingElement delay={1.5} className="bottom-24 right-24">
          <Snowflake className="w-12 h-12 text-white animate-spin" />
        </FloatingElement>
        <FloatingElement delay={2.5} className="top-1/2 left-1/4">
          <div className="text-2xl animate-pulse">❄️</div>
        </FloatingElement>
      </>
    ), 
    characters: (
      <>
        <img
          src="/images/characters/chibi-chick.png"
          alt="Chibi the Chick"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-auto animate-chibi-bounce z-10"
        />
        <img
          src="/images/characters/doctor-owl.png"
          alt="Doctor Owl"
          className="absolute bottom-5 right-10 w-28 h-auto animate-float z-10"
        />
      </>
    )
  },
  {
    id: 5,
    title: "The Midnight Munch",
    emoji: "🍩",
    story: "Chibi loved midnight snacks… sometimes eating lots of worms and seeds super fast. But afterward, Chibi felt awful. Chibi tried to \"undo\" it by skipping breakfast or flying extra laps. This happened almost every week.",
    questions: [
      "Do you ever eat a lot of food really fast and then feel bad or out of control?",
      "Have you ever made yourself throw up or skipped meals to \"undo\" eating too much?",
      "Does this happen almost every week?",
      "Do you feel like your body shape or weight makes you like or dislike yourself?"
    ],
    background: "from-purple-300 to-pink-400",
    theme: "purple",
    backgroundElements: (
      <>
        <FloatingElement delay={0} className="top-12 left-16">
          <Moon className="w-10 h-10 text-yellow-200 animate-pulse" />
        </FloatingElement>
        <FloatingElement delay={1} className="top-24 right-20">
          <div className="text-4xl animate-bounce">🍩</div>
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-20 left-24">
          <div className="text-3xl animate-spin-slow">🌙</div>
        </FloatingElement>
        <FloatingElement delay={0.5} className="top-1/2 right-16">
          <div className="text-2xl animate-pulse">⭐</div>
        </FloatingElement>
        <FloatingElement delay={1.5} className="bottom-16 right-1/3">
          <div className="text-3xl animate-bounce">🍪</div>
        </FloatingElement>
        <FloatingElement delay={2.5} className="top-1/4 left-1/3">
          <Sparkles className="w-6 h-6 text-pink-200 animate-pulse" />
        </FloatingElement>
      </>
    ), 
    characters: (
      <>
        <img
          src="/images/characters/chibi-chick.png"
          alt="Chibi the Chick"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-auto animate-chibi-bounce z-10"
        />
        <img
          src="/images/characters/doctor-owl.png"
          alt="Doctor Owl"
          className="absolute bottom-5 right-10 w-28 h-auto animate-float z-10"
        />
      </>
    )
  },
  {
    id: 6,
    title: "The Stuffed Tummy Trouble",
    emoji: "🍰",
    story: "Chibi had days where food just felt comforting—even when not hungry. One day, Chibi ate until the tummy ached and then cried behind the berry bush, hoping no one saw.",
    questions: [
      "Do you eat even when you're not hungry?",
      "Do you sometimes eat until your stomach really hurts or you feel too full?",
      "Do you eat in secret because you're embarrassed or don't want others to see?",
      "Does this happen almost every week?"
    ],
    background: "from-rose-300 to-red-400",
    theme: "rose",
    backgroundElements: (
      <>
        <FloatingElement delay={0} className="top-16 left-12">
          <Cookie className="w-10 h-10 text-orange-300 animate-bounce" />
        </FloatingElement>
        <FloatingElement delay={1} className="top-20 right-24">
          <div className="text-4xl animate-pulse">🍰</div>
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-24 left-28">
          <div className="text-3xl animate-bounce">🧁</div>
        </FloatingElement>
        <FloatingElement delay={0.5} className="top-1/3 right-20">
          <div className="text-2xl animate-spin-slow">🍓</div>
        </FloatingElement>
        <FloatingElement delay={1.5} className="bottom-20 right-16">
          <div className="text-3xl animate-pulse">🍒</div>
        </FloatingElement>
        <FloatingElement delay={2.5} className="top-1/2 left-20">
          <Heart className="w-8 h-8 text-red-300 animate-bounce" />
        </FloatingElement>
      </>
    ), 
    characters: (
      <>
        <img
          src="/images/characters/chibi-chick.png"
          alt="Chibi the Chick"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-auto animate-chibi-bounce z-10"
        />
        <img
          src="/images/characters/doctor-owl.png"
          alt="Doctor Owl"
          className="absolute bottom-5 right-10 w-28 h-auto animate-float z-10"
        />
      </>
    )
  },
  {
    id: 7,
    title: "The Curious Case of the Strange Habits",
    emoji: "❓",
    story: "Chibi didn't fit any one path. Sometimes Chibi skipped meals. Other times, Chibi just didn't feel okay around food. Doctor Owl said, \"Even if your food feelings don't match one big story, they still matter!\"",
    questions: [
      "Do you do anything with food that feels weird or hard to explain?",
      "Do your eating habits ever make you feel sad, tired, or stop you from playing/going to school?"
    ],
    background: "from-indigo-300 to-violet-400",
    theme: "indigo",
    backgroundElements: (
      <>
        <FloatingElement delay={0} className="top-12 left-20">
          <HelpCircle className="w-10 h-10 text-white animate-pulse" />
        </FloatingElement>
        <FloatingElement delay={1} className="top-28 right-16">
          <div className="text-4xl animate-bounce">🦉</div>
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-20 left-16">
          <div className="text-3xl animate-spin-slow">❓</div>
        </FloatingElement>
        <FloatingElement delay={0.5} className="top-1/2 right-24">
          <Sparkles className="w-8 h-8 text-violet-200 animate-pulse" />
        </FloatingElement>
        <FloatingElement delay={1.5} className="bottom-24 right-20">
          <div className="text-2xl animate-bounce">💭</div>
        </FloatingElement>
        <FloatingElement delay={2.5} className="top-1/4 left-1/4">
          <div className="text-3xl animate-float">🌟</div>
        </FloatingElement>
      </>
    ), 
    characters: (
      <>
        <img
          src="/images/characters/chibi-chick.png"
          alt="Chibi the Chick"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-auto animate-chibi-bounce z-10"
        />
        <img
          src="/images/characters/doctor-owl.png"
          alt="Doctor Owl"
          className="absolute bottom-5 right-10 w-28 h-auto animate-float z-10"
        />
      </>
    )
  }
];
export { chapters };