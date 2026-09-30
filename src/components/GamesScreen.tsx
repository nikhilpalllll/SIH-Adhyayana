import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Star, 
  Trophy, 
  Timer, 
  MapPin,
  Lock,
  Rocket,
  Target,
  Zap,
  CheckCircle,
  XCircle,
  Play,
  Map,
  Key,
  Lightbulb,
  Compass,
  Gem,
  Crown
} from 'lucide-react';
import { LanguageContent } from '../utils/languages';
import { InteractiveStudentBackground } from './InteractiveStudentBackground';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GamesScreenProps {
  onNavigate: (screen: string) => void;
  t: LanguageContent;
}

type GameType = 'treasure-hunt' | 'escape-room' | 'mission-mode';

interface GameState {
  currentGame: GameType | null;
  score: number;
  timeLeft: number;
  isPlaying: boolean;
  level: number;
  streak: number;
  progress: number;
  treasuresFound: number;
  locksOpened: number;
  missionsCompleted: number;
}

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

// Sample questions for different subjects
const treasureHuntQuestions: Question[] = [
  {
    id: 'th1',
    question: 'What is the capital of Odisha?',
    options: ['Bhubaneswar', 'Cuttack', 'Puri', 'Rourkela'],
    correctAnswer: 0,
    subject: 'Geography',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'th2',
    question: 'Which gas do plants absorb during photosynthesis?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 2,
    subject: 'Science',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'th3',
    question: 'What is 15 × 4?',
    options: ['45', '60', '55', '65'],
    correctAnswer: 1,
    subject: 'Math',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'th4',
    question: 'Who wrote the Odia novel "Chha Mana Atha Guntha"?',
    options: ['Fakir Mohan Senapati', 'Gopinath Mohanty', 'Kalindi Charan Panigrahi', 'Manoj Das'],
    correctAnswer: 0,
    subject: 'Literature',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'th5',
    question: 'What is the chemical symbol for Gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    subject: 'Science',
    difficulty: 'medium',
    points: 15
  }
];

const escapeRoomQuestions: Question[] = [
  {
    id: 'er1',
    question: 'What is 125 ÷ 5?',
    options: ['20', '25', '30', '35'],
    correctAnswer: 1,
    subject: 'Math',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'er2',
    question: 'If a triangle has angles 60°, 60°, and X°, what is X?',
    options: ['45°', '60°', '90°', '120°'],
    correctAnswer: 1,
    subject: 'Math',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'er3',
    question: 'What comes next in the pattern: 2, 4, 8, 16, ?',
    options: ['24', '32', '28', '20'],
    correctAnswer: 1,
    subject: 'Logic',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'er4',
    question: 'If 3x + 7 = 22, what is x?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    subject: 'Math',
    difficulty: 'hard',
    points: 20
  },
  {
    id: 'er5',
    question: 'A clock shows 3:15. What is the angle between the hour and minute hands?',
    options: ['7.5°', '15°', '22.5°', '30°'],
    correctAnswer: 0,
    subject: 'Logic',
    difficulty: 'hard',
    points: 20
  }
];

const missionModeQuestions: Question[] = [
  {
    id: 'mm1',
    question: 'What force pulls objects toward Earth?',
    options: ['Magnetic Force', 'Gravity', 'Friction', 'Centrifugal Force'],
    correctAnswer: 1,
    subject: 'Physics',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'mm2',
    question: 'What is the formula for calculating speed?',
    options: ['Distance × Time', 'Distance ÷ Time', 'Time ÷ Distance', 'Distance + Time'],
    correctAnswer: 1,
    subject: 'Physics',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'mm3',
    question: 'Which gas makes up most of Earth\'s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 2,
    subject: 'Science',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'mm4',
    question: 'What is the escape velocity from Earth (approximately)?',
    options: ['11.2 km/s', '7.9 km/s', '15.6 km/s', '9.8 km/s'],
    correctAnswer: 0,
    subject: 'Physics',
    difficulty: 'hard',
    points: 20
  },
  {
    id: 'mm5',
    question: 'Which rocket fuel combination is most commonly used?',
    options: ['Hydrogen + Nitrogen', 'Kerosene + Oxygen', 'Methane + Carbon Dioxide', 'Alcohol + Water'],
    correctAnswer: 1,
    subject: 'Science',
    difficulty: 'hard',
    points: 20
  }
];

export function GamesScreen({ onNavigate, t }: GamesScreenProps) {
  const [gameState, setGameState] = useState<GameState>({
    currentGame: null,
    score: 0,
    timeLeft: 0,
    isPlaying: false,
    level: 1,
    streak: 0,
    progress: 0,
    treasuresFound: 0,
    locksOpened: 0,
    missionsCompleted: 0
  });

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showResult, setShowResult] = useState<'correct' | 'incorrect' | null>(null);
  const [questionsPool, setQuestionsPool] = useState<Question[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([]);

  // Timer effect
  useEffect(() => {
    if (gameState.isPlaying && gameState.timeLeft > 0) {
      const timer = setTimeout(() => {
        setGameState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
      return () => clearTimeout(timer);
    } else if (gameState.timeLeft === 0 && gameState.isPlaying) {
      handleGameEnd();
    }
  }, [gameState.isPlaying, gameState.timeLeft]);

  const getGameQuestions = (gameType: GameType): Question[] => {
    switch (gameType) {
      case 'treasure-hunt':
        return treasureHuntQuestions;
      case 'escape-room':
        return escapeRoomQuestions;
      case 'mission-mode':
        return missionModeQuestions;
      default:
        return [];
    }
  };

  const getNextQuestion = useCallback((gameType: GameType) => {
    const availableQuestions = questionsPool.filter(q => !answeredQuestions.includes(q.id));
    if (availableQuestions.length === 0) {
      // All questions answered, game complete
      handleGameEnd();
      return null;
    }
    
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    setCurrentQuestion(randomQuestion);
    return randomQuestion;
  }, [questionsPool, answeredQuestions]);

  const startGame = useCallback((gameType: GameType) => {
    const questions = getGameQuestions(gameType);
    setQuestionsPool(questions);
    setAnsweredQuestions([]);
    
    setGameState({
      currentGame: gameType,
      score: 0,
      timeLeft: gameType === 'treasure-hunt' ? 300 : gameType === 'escape-room' ? 240 : 360, // 5min, 4min, 6min
      isPlaying: true,
      level: 1,
      streak: 0,
      progress: 0,
      treasuresFound: 0,
      locksOpened: 0,
      missionsCompleted: 0
    });

    // Get first question
    const firstQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(firstQuestion);
    setShowResult(null);
  }, []);

  const handleAnswer = useCallback((answerIndex: number) => {
    if (!currentQuestion) return;

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    setShowResult(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      const points = currentQuestion.points + gameState.streak * 2;
      setGameState(prev => ({
        ...prev,
        score: prev.score + points,
        streak: prev.streak + 1,
        progress: Math.min(100, prev.progress + 20),
        treasuresFound: prev.currentGame === 'treasure-hunt' ? prev.treasuresFound + 1 : prev.treasuresFound,
        locksOpened: prev.currentGame === 'escape-room' ? prev.locksOpened + 1 : prev.locksOpened,
        missionsCompleted: prev.currentGame === 'mission-mode' ? prev.missionsCompleted + 1 : prev.missionsCompleted
      }));
      
      setAnsweredQuestions(prev => [...prev, currentQuestion.id]);
    } else {
      setGameState(prev => ({ ...prev, streak: 0 }));
    }

    // Get next question after delay
    setTimeout(() => {
      if (gameState.currentGame) {
        getNextQuestion(gameState.currentGame);
      }
      setShowResult(null);
    }, 2000);
  }, [currentQuestion, gameState, getNextQuestion]);

  const handleGameEnd = useCallback(() => {
    setGameState(prev => ({ ...prev, isPlaying: false }));
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      currentGame: null,
      score: 0,
      timeLeft: 0,
      isPlaying: false,
      level: 1,
      streak: 0,
      progress: 0,
      treasuresFound: 0,
      locksOpened: 0,
      missionsCompleted: 0
    });
    setCurrentQuestion(null);
    setShowResult(null);
    setQuestionsPool([]);
    setAnsweredQuestions([]);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Game playing screen
  if (gameState.currentGame && gameState.isPlaying && currentQuestion) {
    const gameConfig = {
      'treasure-hunt': {
        title: 'Treasure Hunt',
        subtitle: 'Solve riddles to find treasures!',
        color: 'from-yellow-400 to-orange-500',
        bgColor: 'from-yellow-50 to-orange-50',
        icon: <MapPin className="w-6 h-6" />
      },
      'escape-room': {
        title: 'Escape Room',
        subtitle: 'Unlock puzzles to escape!',
        color: 'from-purple-400 to-blue-500',
        bgColor: 'from-purple-50 to-blue-50',
        icon: <Lock className="w-6 h-6" />
      },
      'mission-mode': {
        title: 'Mission: Build Rocket',
        subtitle: 'Help the scientist launch to space!',
        color: 'from-green-400 to-cyan-500',
        bgColor: 'from-green-50 to-cyan-50',
        icon: <Rocket className="w-6 h-6" />
      }
    };

    const config = gameConfig[gameState.currentGame];

    return (
      <InteractiveStudentBackground>
        <div className="min-h-screen p-4">
          {/* Game Header */}
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              onClick={resetGame}
              className="text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Exit Game
            </Button>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full">
                <Timer className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium">{formatTime(gameState.timeLeft)}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">{gameState.score}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm text-gray-600">
                {gameState.currentGame === 'treasure-hunt' && `${gameState.treasuresFound} treasures`}
                {gameState.currentGame === 'escape-room' && `${gameState.locksOpened} locks opened`}
                {gameState.currentGame === 'mission-mode' && `${gameState.missionsCompleted} missions done`}
              </span>
            </div>
            <Progress value={gameState.progress} className="h-2" />
          </div>

          {/* Game Content */}
          <div className="max-w-md mx-auto">
            <Card className={`p-6 bg-gradient-to-br ${config.bgColor} border-0 shadow-xl rounded-2xl mb-6`}>
              <div className="text-center mb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${config.color} rounded-full text-white mb-4`}>
                  {config.icon}
                </div>
                <h2 className="text-xl text-gray-800 mb-2">{config.title}</h2>
                <p className="text-gray-600 text-sm">{config.subtitle}</p>
              </div>

              <Badge className="mb-4" variant="secondary">
                {currentQuestion.subject} • {currentQuestion.difficulty}
              </Badge>

              <div className="mb-6">
                <p className="text-gray-800 text-center mb-4">{currentQuestion.question}</p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult !== null}
                    className={`h-12 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-xl text-left justify-start ${
                      showResult && index === currentQuestion.correctAnswer ? 'border-green-500 bg-green-50' :
                      showResult && index !== currentQuestion.correctAnswer ? 'border-gray-200' : ''
                    }`}
                    variant="outline"
                  >
                    <span className="mr-3 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Result Feedback */}
            {showResult && (
              <Card className={`p-4 text-center rounded-xl ${
                showResult === 'correct' 
                  ? 'bg-green-100 text-green-800 border-green-200' 
                  : 'bg-red-100 text-red-800 border-red-200'
              }`}>
                <div className="flex items-center justify-center gap-2">
                  {showResult === 'correct' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Excellent! +{currentQuestion.points + gameState.streak * 2} points</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5" />
                      <span>Try again! The answer was {currentQuestion.options[currentQuestion.correctAnswer]}</span>
                    </>
                  )}
                </div>
              </Card>
            )}

            {/* Streak Indicator */}
            {gameState.streak > 2 && (
              <Card className="mt-4 p-3 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl text-center">
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <span className="text-yellow-800">Amazing Streak: {gameState.streak}! 🔥</span>
                </div>
              </Card>
            )}
          </div>
        </div>
      </InteractiveStudentBackground>
    );
  }

  // Game over screen
  if (gameState.currentGame && !gameState.isPlaying) {
    const gameResults = {
      'treasure-hunt': {
        title: 'Treasure Hunt Complete!',
        subtitle: `You found ${gameState.treasuresFound} treasures!`,
        icon: <Crown className="w-10 h-10 text-white" />,
        color: 'from-yellow-400 to-orange-600'
      },
      'escape-room': {
        title: 'You Escaped!',
        subtitle: `You opened ${gameState.locksOpened} locks!`,
        icon: <Key className="w-10 h-10 text-white" />,
        color: 'from-purple-400 to-blue-600'
      },
      'mission-mode': {
        title: 'Mission Accomplished!',
        subtitle: `Rocket launched successfully!`,
        icon: <Rocket className="w-10 h-10 text-white" />,
        color: 'from-green-400 to-cyan-600'
      }
    };

    const result = gameResults[gameState.currentGame!];

    return (
      <InteractiveStudentBackground>
        <div className="min-h-screen p-4 flex items-center justify-center">
          <Card className="p-8 bg-white/95 shadow-xl rounded-2xl max-w-md w-full text-center">
            <div className={`w-20 h-20 bg-gradient-to-br ${result.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
              {result.icon}
            </div>
            
            <h2 className="text-2xl text-gray-800 mb-2">{result.title}</h2>
            <p className="text-gray-600 mb-6">{result.subtitle}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-yellow-50 rounded-xl">
                <div className="text-2xl font-medium text-yellow-600">{gameState.score}</div>
                <div className="text-sm text-gray-600">Points Earned</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-medium text-blue-600">{gameState.streak}</div>
                <div className="text-sm text-gray-600">Best Streak</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button
                onClick={() => startGame(gameState.currentGame!)}
                className={`flex-1 bg-gradient-to-r ${result.color} text-white rounded-xl`}
              >
                <Play className="w-4 h-4 mr-2" />
                Play Again
              </Button>
              <Button
                onClick={resetGame}
                variant="outline"
                className="flex-1 border-2 border-gray-300 rounded-xl"
              >
                Back to Games
              </Button>
            </div>
          </Card>
        </div>
      </InteractiveStudentBackground>
    );
  }

  // Main games menu
  return (
    <InteractiveStudentBackground>
      <div className="min-h-screen p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate('student-home')}
            className="text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Home
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl text-gray-800">Adventure Games</h1>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid gap-6 max-w-md mx-auto">
          {/* Treasure Hunt */}
          <Card className="p-6 bg-gradient-to-br from-yellow-100 to-orange-200 border-0 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1652213212334-c29b535a5c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhc3VyZSUyMG1hcCUyMGFkdmVudHVyZSUyMGdhbWV8ZW58MXx8fHwxNzU4NjU0MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Treasure Hunt"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-gray-800 mb-1">🗺️ Treasure Hunt</h3>
                <p className="text-sm text-gray-600 mb-2">Solve subject-based riddles to progress through the map and discover hidden treasures!</p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">Geography</Badge>
                  <Badge variant="secondary" className="text-xs">Science</Badge>
                  <Badge variant="secondary" className="text-xs">Math</Badge>
                </div>
              </div>
            </div>
            <Button
              onClick={() => startGame('treasure-hunt')}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-xl"
            >
              <Map className="w-4 h-4 mr-2" />
              Start Adventure
            </Button>
          </Card>

          {/* Escape Room */}
          <Card className="p-6 bg-gradient-to-br from-purple-100 to-blue-200 border-0 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1742294621029-c0e617f5e7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc2NhcGUlMjByb29tJTIwcHV6emxlJTIwbG9ja3N8ZW58MXx8fHwxNzU4NjU0MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Escape Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-gray-800 mb-1">🔐 Escape Room</h3>
                <p className="text-sm text-gray-600 mb-2">Solve math puzzles and logic questions to unlock doors and escape each level!</p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">Math</Badge>
                  <Badge variant="secondary" className="text-xs">Logic</Badge>
                  <Badge variant="secondary" className="text-xs">Puzzles</Badge>
                </div>
              </div>
            </div>
            <Button
              onClick={() => startGame('escape-room')}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl"
            >
              <Key className="w-4 h-4 mr-2" />
              Enter Room
            </Button>
          </Card>

          {/* Mission Mode */}
          <Card className="p-6 bg-gradient-to-br from-green-100 to-cyan-200 border-0 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631816285969-2628b4ef3489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBzY2llbnRpc3QlMjBsYWJvcmF0b3J5JTIwbWlzc2lvbnxlbnwxfHx8fDE3NTg2NTQzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mission Mode"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-gray-800 mb-1">🚀 Mission: Build Rocket</h3>
                <p className="text-sm text-gray-600 mb-2">Help the scientist build and launch a rocket by solving physics and science problems!</p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">Physics</Badge>
                  <Badge variant="secondary" className="text-xs">Science</Badge>
                  <Badge variant="secondary" className="text-xs">Space</Badge>
                </div>
              </div>
            </div>
            <Button
              onClick={() => startGame('mission-mode')}
              className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white rounded-xl"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Start Mission
            </Button>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-6 p-4 bg-white/90 border-0 shadow-sm max-w-md mx-auto">
          <h3 className="text-gray-800 mb-2">🎯 Game Tips</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Read questions carefully before choosing answers</li>
            <li>• Build streaks for bonus points and faster progress</li>
            <li>• Each game tests different subjects and skills</li>
            <li>• Complete missions to unlock special rewards!</li>
          </ul>
        </Card>

        {/* Cultural Connection */}
        <Card className="mt-4 p-4 bg-gradient-to-br from-orange-100 to-orange-200 border-0 shadow-sm max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🏛️</span>
            <h3 className="text-gray-800">Explore Odisha Heritage</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Learn about Odisha's rich culture while playing games!
          </p>
          <Button
            onClick={() => onNavigate('odisha')}
            variant="outline"
            className="w-full border-orange-300 text-orange-700 hover:bg-orange-50"
          >
            <Compass className="w-4 h-4 mr-2" />
            Visit Odisha Section
          </Button>
        </Card>
      </div>
    </InteractiveStudentBackground>
  );
}