import React, { useState, useEffect } from 'react';
import { Heart, Star, ChevronRight, RotateCcw, Sparkles, Cloud, Leaf, Snowflake, Moon, Cookie, HelpCircle } from 'lucide-react';

interface Chapter {
  id: number;
  title: string;
  emoji: string;
  story: string;
  questions: string[];
  background: string;
  theme: string;
  backgroundElements: React.ReactNode;
}

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
    story: "One day, Chibi the Chick walked into the Green Garden where all the food was rainbow-colored. There were squishy berries, crunchy carrots, and slippery noodles! But Chibi didn't like how some smelled… and others felt too slimy. \"What if I choke?\" Chibi whispered. Chibi's tummy started to grumble. But still, Chibi only pecked at the plain rice puffs. The wise owl doctor noticed Chibi was growing slower than other chicks.",
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
    )
  }
];

const ChibiCharacter: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => (
  <div className={`relative ${isAnimating ? 'animate-bounce' : 'animate-float'}`}>
    <div className="w-16 h-16 bg-yellow-300 rounded-full relative shadow-lg">
      <div className="absolute top-2 left-4 w-2 h-2 bg-black rounded-full"></div>
      <div className="absolute top-2 right-4 w-2 h-2 bg-black rounded-full"></div>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-orange-400 rounded-sm"></div>
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-red-400 rounded-t-full"></div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'story' | 'questions' | 'results'>('intro');
  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(23).fill(-1));
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnswer = (answer: number) => {
    const questionIndex = chapters.slice(0, currentChapter).reduce((acc, ch) => acc + ch.questions.length, 0) + currentQuestion;
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);

    setTimeout(() => {
      if (currentQuestion < chapters[currentChapter].questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else if (currentChapter < chapters.length - 1) {
        setCurrentChapter(currentChapter + 1);
        setCurrentQuestion(0);
        setCurrentStep('story');
      } else {
        setCurrentStep('results');
      }
    }, 500);
  };

  const calculateResults = () => {
    const disorders = [
      { name: "ARFID (Avoidant/Restrictive Food Intake)", range: [0, 3], threshold: 2, description: "Difficulty eating certain foods due to texture, smell, or fear" },
      { name: "Pica", range: [4, 6], threshold: 2, description: "Eating non-food items regularly" },
      { name: "Rumination Disorder", range: [7, 8], threshold: 1, description: "Bringing food back up to chew again" },
      { name: "Anorexia Nervosa", range: [9, 12], threshold: 2, description: "Restricting food intake due to body image concerns" },
      { name: "Bulimia Nervosa", range: [13, 16], threshold: 2, description: "Cycles of overeating followed by compensatory behaviors" },
      { name: "Binge Eating Disorder", range: [17, 20], threshold: 2, description: "Regular episodes of eating large amounts of food quickly" },
      { name: "OSFED (Other Specified Feeding/Eating Disorder)", range: [21, 22], threshold: 1, description: "Eating behaviors that don't fit other categories but still cause distress" }
    ];

    const obesityRiskQuestions = [13, 14, 17, 18, 19, 20];
    const obesityRiskThreshold = 3;

    const detailedResults = disorders.map(disorder => {
      const score = answers.slice(disorder.range[0], disorder.range[1] + 1).reduce((sum, answer) => sum + (answer === 1 ? 1 : 0), 0);
      const totalQuestions = disorder.range[1] - disorder.range[0] + 1;
      const percentage = Math.round((score / totalQuestions) * 100);
      return {
        ...disorder,
        score,
        totalQuestions,
        percentage,
        flagged: score >= disorder.threshold
      };
    });

    const flaggedDisorders = detailedResults.filter(result => result.flagged);
    const obesityRiskScore = obesityRiskQuestions.reduce((sum, index) => sum + (answers[index] === 1 ? 1 : 0), 0);
    const hasObesityRisk = obesityRiskScore >= obesityRiskThreshold;

    const totalYesAnswers = answers.reduce((sum, answer) => sum + (answer === 1 ? 1 : 0), 0);
    const overallPercentage = Math.round((totalYesAnswers / 23) * 100);

    return { 
      flaggedDisorders, 
      hasObesityRisk, 
      obesityRiskScore, 
      detailedResults,
      totalYesAnswers,
      overallPercentage
    };
  };

  const resetQuiz = () => {
    setCurrentStep('intro');
    setCurrentChapter(0);
    setCurrentQuestion(0);
    setAnswers(new Array(23).fill(-1));
    setIsAnimating(false);
  };

  const { flaggedDisorders, hasObesityRisk, detailedResults, totalYesAnswers, overallPercentage } = currentStep === 'results' ? calculateResults() : { 
    flaggedDisorders: [], 
    hasObesityRisk: false, 
    detailedResults: [],
    totalYesAnswers: 0,
    overallPercentage: 0
  };

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background elements */}
        <FloatingElement delay={0} className="top-10 left-10">
          <Sparkles className="w-12 h-12 text-white animate-pulse" />
        </FloatingElement>
        <FloatingElement delay={1} className="top-20 right-20">
          <div className="text-6xl animate-bounce">🌟</div>
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-20 left-20">
          <Heart className="w-16 h-16 text-pink-200 animate-pulse" />
        </FloatingElement>
        <FloatingElement delay={0.5} className="top-1/2 right-10">
          <div className="text-4xl animate-spin-slow">✨</div>
        </FloatingElement>
        <FloatingElement delay={1.5} className="bottom-10 right-1/3">
          <Cloud className="w-20 h-20 text-white animate-float" />
        </FloatingElement>

        <div className="text-center bg-white rounded-3xl p-8 shadow-2xl max-w-2xl w-full transform hover:scale-105 transition-transform duration-300 relative z-10">
          <div className="mb-6 flex justify-center">
            <ChibiCharacter isAnimating={true} />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🌟 Chibi's Magical Food Adventures
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A Storybook to Understand Feelings About Food With Your Favorite Feathered Friend – Chibi the Chick!
          </p>
          <button
            onClick={() => setCurrentStep('story')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg border-none cursor-pointer"
            style={{ minWidth: '200px', minHeight: '60px' }}
          >
            Start Adventure! ✨
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === 'story') {
    const chapter = chapters[currentChapter];
    return (
      <div className={`min-h-screen bg-gradient-to-br ${chapter.background} flex items-center justify-center p-4 relative overflow-hidden`}>
        {/* Interactive background elements */}
        {chapter.backgroundElements}
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-4xl w-full relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <ChibiCharacter isAnimating={isAnimating} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {chapter.emoji} Chapter {chapter.id}: {chapter.title}
                </h2>
                <div className="flex space-x-1 mt-2">
                  {chapters.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index <= currentChapter ? 'bg-purple-400 scale-110' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 shadow-inner">
            <p className="text-lg text-gray-700 leading-relaxed">
              {chapter.story}
            </p>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setCurrentStep('questions')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center mx-auto space-x-2 border-none cursor-pointer"
              style={{ minWidth: '220px', minHeight: '60px' }}
            >
              <span>Answer Questions</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'questions') {
    const chapter = chapters[currentChapter];
    const questionText = chapter.questions[currentQuestion];
    
    return (
      <div className={`min-h-screen bg-gradient-to-br ${chapter.background} flex items-center justify-center p-4 relative overflow-hidden`}>
        {/* Interactive background elements */}
        {chapter.backgroundElements}
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-3xl w-full relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <ChibiCharacter isAnimating={isAnimating} />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Question {currentQuestion + 1} of {chapter.questions.length}
                </h3>
                <p className="text-gray-600">{chapter.title}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">
                Chapter {currentChapter + 1} of {chapters.length}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 shadow-inner">
            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              {questionText}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleAnswer(1)}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-3 border-none cursor-pointer w-full sm:w-auto"
              style={{ minWidth: '180px', minHeight: '80px' }}
            >
              <Heart className="w-6 h-6" />
              <span>Yes</span>
            </button>
            <button
              onClick={() => handleAnswer(0)}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:from-red-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-3 border-none cursor-pointer w-full sm:w-auto"
              style={{ minWidth: '180px', minHeight: '80px' }}
            >
              <Star className="w-6 h-6" />
              <span>No</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-red-400 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated celebration background */}
        <FloatingElement delay={0} className="top-10 left-10">
          <div className="text-6xl animate-bounce">🎉</div>
        </FloatingElement>
        <FloatingElement delay={1} className="top-20 right-20">
          <Sparkles className="w-16 h-16 text-white animate-pulse" />
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-20 left-20">
          <div className="text-5xl animate-spin-slow">⭐</div>
        </FloatingElement>
        <FloatingElement delay={0.5} className="top-1/2 right-10">
          <div className="text-4xl animate-bounce">🌈</div>
        </FloatingElement>
        <FloatingElement delay={1.5} className="bottom-10 right-1/3">
          <Heart className="w-12 h-12 text-red-300 animate-pulse" />
        </FloatingElement>

        <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-6xl w-full relative z-10 max-h-[90vh] overflow-y-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <ChibiCharacter isAnimating={true} />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-2">
              🌟 The End... Or A New Beginning!
            </h2>
            <p className="text-lg text-gray-600">
              Thank you for joining Chibi on this magical adventure! 🌈🐣
            </p>
          </div>

          {/* Overall Score Summary */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">📊 Your Adventure Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-blue-600">{totalYesAnswers}</div>
                <div className="text-sm text-gray-600">Total "Yes" Answers</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-purple-600">{overallPercentage}%</div>
                <div className="text-sm text-gray-600">Overall Score</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-green-600">{flaggedDisorders.length}</div>
                <div className="text-sm text-gray-600">Areas to Explore</div>
              </div>
            </div>
          </div>

          {/* Detailed Chapter Scores */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">📚 Chapter-by-Chapter Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detailedResults.map((result, index) => (
                <div key={index} className={`bg-white rounded-lg p-4 shadow-md border-l-4 ${result.flagged ? 'border-yellow-400' : 'border-green-400'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{chapters[index].emoji} {result.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${result.flagged ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {result.score}/{result.totalQuestions}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${result.flagged ? 'bg-yellow-400' : 'bg-green-400'}`}
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Results */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🔍 What Chibi Discovered:</h3>
            
            {flaggedDisorders.length > 0 || hasObesityRisk ? (
              <div className="space-y-4">
                <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="text-yellow-800 font-medium">
                    Chibi noticed some patterns in your answers that might be worth talking about with a caring grown-up.
                  </p>
                </div>
                
                {flaggedDisorders.length > 0 && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Areas Chibi wants to explore more:</h4>
                    <div className="space-y-2">
                      {flaggedDisorders.map((disorder, index) => (
                        <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                          <span className="text-blue-700 font-medium">{disorder.name}</span>
                          <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                            {disorder.score}/{disorder.totalQuestions} questions
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {hasObesityRisk && (
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-orange-800">
                      <strong>Chibi also noticed:</strong> Some eating patterns that might be worth discussing with a doctor or nutritionist.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-green-800 font-medium">
                  Great news! Chibi didn't notice any concerning patterns. Keep enjoying your healthy relationship with food! 🎉
                </p>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Remember:</strong> If you and Chibi said "yes" to some of these questions, it's a good idea to talk to a caring grown-up, like a parent, teacher, or doctor. Chibi did—and it made all the difference! 
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center mx-auto space-x-2 border-none cursor-pointer"
              style={{ minWidth: '250px', minHeight: '60px' }}
            >
              <RotateCcw className="w-5 h-5" />
              <span>Start New Adventure</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default App;