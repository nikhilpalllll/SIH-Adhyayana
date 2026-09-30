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
  Crown,
  Music,
  Mountain,
  TreePine,
  Waves,
  Heart,
  CheckCircle,
  XCircle,
  RotateCcw,
  Play,
  Sparkles
} from 'lucide-react';
import { LanguageContent } from '../utils/languages';
import { InteractiveStudentBackground } from './InteractiveStudentBackground';

interface OdishaScreenProps {
  onNavigate: (screen: string) => void;
  t: LanguageContent;
}

type OdishaGameType = 'culture-quiz' | 'geography-quest' | 'festival-fun' | 'heritage-hunt';

interface GameState {
  currentGame: OdishaGameType | null;
  score: number;
  timeLeft: number;
  isPlaying: boolean;
  level: number;
  streak: number;
  currentQuestion: number;
  totalQuestions: number;
}

interface OdishaQuestion {
  id: string;
  question: string;
  questionOdia?: string;
  options: string[];
  optionsOdia?: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  funFact: string;
  funFactOdia?: string;
}

export function OdishaScreen({ onNavigate, t }: OdishaScreenProps) {
  const [gameState, setGameState] = useState<GameState>({
    currentGame: null,
    score: 0,
    timeLeft: 0,
    isPlaying: false,
    level: 1,
    streak: 0,
    currentQuestion: 0,
    totalQuestions: 10
  });

  const [currentQuestion, setCurrentQuestion] = useState<OdishaQuestion | null>(null);
  const [showResult, setShowResult] = useState<'correct' | 'incorrect' | null>(null);
  const [showFunFact, setShowFunFact] = useState(false);

  // Odisha Questions Database
  const odishaQuestions: Record<OdishaGameType, OdishaQuestion[]> = {
    'culture-quiz': [
      {
        id: 'c1',
        question: 'Which classical dance form originated in Odisha?',
        questionOdia: 'କେଉଁ ଶାସ୍ତ୍ରୀୟ ନୃତ୍ୟ ଓଡ଼ିଶାରୁ ଉତ୍ପନ୍ନ ହୋଇଛି?',
        options: ['Bharatanatyam', 'Odissi', 'Kathak', 'Kuchipudi'],
        optionsOdia: ['ଭରତନାଟ୍ୟମ୍', 'ଓଡ଼ିଶୀ', 'କଥକ', 'କୁଚିପୁଡ଼ି'],
        correctAnswer: 1,
        category: 'Dance',
        difficulty: 'easy',
        funFact: 'Odissi is one of the eight classical dance forms of India and depicts stories from Hindu mythology!',
        funFactOdia: 'ଓଡ଼ିଶୀ ଭାରତର ଆଠଟି ଶାସ୍ତ୍ରୀୟ ନୃତ୍ୟ ମଧ୍ୟରୁ ଗୋଟିଏ!'
      },
      {
        id: 'c2',
        question: 'What is the famous sweet of Odisha made from cottage cheese?',
        questionOdia: 'ଛେନାରୁ ତିଆରି ଓଡ଼ିଶାର ପ୍ରସିଦ୍ଧ ମିଠା କଣ?',
        options: ['Gulab Jamun', 'Rasgulla', 'Jalebi', 'Laddu'],
        optionsOdia: ['ଗୁଲାବ ଜାମୁନ', 'ରସଗୋଲା', 'ଜିଲେବି', 'ଲଡ୍ଡୁ'],
        correctAnswer: 1,
        category: 'Food',
        difficulty: 'easy',
        funFact: 'Rasgulla was invented in Odisha and is offered to Lord Jagannath at Puri Temple!',
        funFactOdia: 'ରସଗୋଲା ଓଡ଼ିଶାରେ ଆବିଷ୍କୃତ ହୋଇଥିଲା!'
      },
      {
        id: 'c3',
        question: 'Which festival celebrates the relationship between brothers and sisters in Odisha?',
        questionOdia: 'କେଉଁ ପର୍ବ ଓଡ଼ିଶାରେ ଭାଇ-ଭଉଣୀଙ୍କ ସମ୍ପର୍କକୁ ପାଳନ କରେ?',
        options: ['Diwali', 'Holi', 'Bhai Dooj', 'Bhai Phonta'],
        optionsOdia: ['ଦୀପାବଳି', 'ହୋଳି', 'ଭାଇ ଦୁଜ', 'ଭାଇ ଫୋଣ୍ଟା'],
        correctAnswer: 3,
        category: 'Festival',
        difficulty: 'medium',
        funFact: 'Bhai Phonta is unique to Odisha where sisters put a special mark on their brothers\' foreheads!',
        funFactOdia: 'ଭାଇ ଫୋଣ୍ଟା ଓଡ଼ିଶାର ବିଶେଷ ପର୍ବ!'
      }
    ],
    'geography-quest': [
      {
        id: 'g1',
        question: 'Which river flows through Bhubaneswar?',
        questionOdia: 'କେଉଁ ନଦୀ ଭୁବନେଶ୍ୱର ଦେଇ ବହେ?',
        options: ['Ganga', 'Yamuna', 'Daya', 'Narmada'],
        optionsOdia: ['ଗଙ୍ଗା', 'ଯମୁନା', 'ଦୟା', 'ନର୍ମଦା'],
        correctAnswer: 2,
        category: 'Rivers',
        difficulty: 'medium',
        funFact: 'River Daya is mentioned in the Kalinga War where Ashoka felt remorse seeing the bloodied waters!',
        funFactOdia: 'କଳିଙ୍ଗ ଯୁଦ୍ଧରେ ଦୟା ନଦୀ ରକ୍ତରେ ରଙ୍ଗ ହୋଇଥିଲା!'
      },
      {
        id: 'g2',
        question: 'Which is the highest peak in Odisha?',
        questionOdia: 'ଓଡ଼ିଶାର ସର୍ବୋଚ୍ଚ ଶିଖର କେଉଁଟି?',
        options: ['Deomali', 'Mahendra Giri', 'Malayagiri', 'Gandhamardan'],
        optionsOdia: ['ଦେଓମାଳି', 'ମହେନ୍ଦ୍ର ଗିରି', 'ମଲୟାଗିରି', 'ଗନ୍ଧମର୍ଦନ'],
        correctAnswer: 0,
        category: 'Mountains',
        difficulty: 'hard',
        funFact: 'Deomali peak is 1672 meters high and located in Koraput district!',
        funFactOdia: 'ଦେଓମାଳି ୧୬୭୨ ମିଟର ଉଚ୍ଚ!'
      },
      {
        id: 'g3',
        question: 'Which wildlife sanctuary is famous for white tigers in Odisha?',
        questionOdia: 'କେଉଁ ଅଭୟାରଣ୍ୟ ଧଳା ବାଘ ପାଇଁ ପ୍ରସିଦ୍ଧ?',
        options: ['Bhitarkanika', 'Nandankanan', 'Simlipal', 'Chilika'],
        optionsOdia: ['ଭିତରକଣିକା', 'ନନ୍ଦନକାନନ', 'ସିମିଳିପାଳ', 'ଚିଲିକା'],
        correctAnswer: 1,
        category: 'Wildlife',
        difficulty: 'medium',
        funFact: 'Nandankanan was the first zoo in the world to breed white tigers in captivity!',
        funFactOdia: 'ନନ୍ଦନକାନନ ବିଶ୍ୱର ପ୍ରଥମ ଚିଡ଼ିଆଖାନା ଯାହା ଧଳା ବାଘ ପ୍ରଜନନ କରିଛି!'
      }
    ],
    'festival-fun': [
      {
        id: 'f1',
        question: 'During which festival do the deities take a chariot ride in Puri?',
        questionOdia: 'କେଉଁ ପର୍ବରେ ପୁରୀରେ ଦେବତାମାନେ ରଥ ଯାତ୍ରା କରନ୍ତି?',
        options: ['Diwali', 'Rath Yatra', 'Durga Puja', 'Kali Puja'],
        optionsOdia: ['ଦୀପାବଳି', 'ରଥଯାତ୍ରା', 'ଦୁର୍ଗା ପୂଜା', 'କାଳୀ ପୂଜା'],
        correctAnswer: 1,
        category: 'Religious',
        difficulty: 'easy',
        funFact: 'The Jagannath Rath Yatra chariots are rebuilt every year and the old wood is used to cook mahaprasad!',
        funFactOdia: 'ଜଗନ୍ନାଥ ରଥଯାତ୍ରାର ରଥ ପ୍ରତିବର୍ଷ ନୂଆ କରାଯାଏ!'
      },
      {
        id: 'f2',
        question: 'What is the Odia New Year called?',
        questionOdia: 'ଓଡ଼ିଆ ନୂଆବର୍ଷକୁ କଣ କୁହାଯାଏ?',
        options: ['Poila Boishakh', 'Pana Sankranti', 'Ugadi', 'Vishu'],
        optionsOdia: ['ପୋଇଲା ବୈଶାଖ', 'ପଣା ସଂକ୍ରାନ୍ତି', 'ଉଗାଦି', 'ବିଷୁ'],
        correctAnswer: 1,
        category: 'New Year',
        difficulty: 'medium',
        funFact: 'Pana Sankranti is celebrated with a special sweet drink called Pana made with jaggery and spices!',
        funFactOdia: 'ପଣା ସଂକ୍ରାନ୍ତିରେ ଗୁଡ଼ ଓ ମସଲା ସହ��ତ ପଣା ପିଆଯାଏ!'
      }
    ],
    'heritage-hunt': [
      {
        id: 'h1',
        question: 'Which temple is known as the "Sun Temple" of Odisha?',
        questionOdia: 'କେଉଁ ମନ୍ଦିରକୁ ଓଡ଼ିଶାର "ସୂର୍ଯ୍ୟ ମନ୍ଦିର" କୁହାଯାଏ?',
        options: ['Jagannath Temple', 'Konark Temple', 'Lingaraj Temple', 'Mukteshwar Temple'],
        optionsOdia: ['ଜଗନ୍ନାଥ ମନ୍ଦିର', 'କୋଣାର୍କ ମନ୍ଦିର', 'ଲିଙ୍ଗରାଜ ମନ୍ଦିର', 'ମୁକ୍ତେଶ୍ୱର ମନ୍ଦିର'],
        correctAnswer: 1,
        category: 'Architecture',
        difficulty: 'easy',
        funFact: 'Konark Temple is designed as a giant chariot with 24 carved stone wheels pulled by 7 horses!',
        funFactOdia: 'କୋଣାର୍କ ମନ୍ଦିର ଏକ ବିଶାଳ ରଥ ପରି ଡିଜାଇନ୍ କରାଯାଇଛି!'
      },
      {
        id: 'h2',
        question: 'Which ancient university was located in Odisha?',
        questionOdia: 'କେଉଁ ପ୍ରାଚୀନ ବିଶ୍ୱବିଦ୍ୟାଳୟ ଓଡ଼ିଶାରେ ଥିଲା?',
        options: ['Nalanda', 'Takshashila', 'Pushpagiri', 'Vikramshila'],
        optionsOdia: ['ନାଲନ୍ଦା', 'ତକ୍ଷଶିଳା', 'ପୁଷ୍ପଗିରି', 'ବିକ୍ରମଶିଳା'],
        correctAnswer: 2,
        category: 'History',
        difficulty: 'hard',
        funFact: 'Pushpagiri was a major Buddhist learning center from 3rd century BCE to 11th century CE!',
        funFactOdia: 'ପୁଷ୍ପଗିରି ଏକ ମୁଖ୍ୟ ବୌଦ୍ଧ ଶିକ୍ଷା କେନ୍ଦ୍ର ଥିଲା!'
      }
    ]
  };

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

  const getRandomQuestion = useCallback((gameType: OdishaGameType, usedQuestions: string[] = []): OdishaQuestion => {
    const questions = odishaQuestions[gameType];
    const availableQuestions = questions.filter(q => !usedQuestions.includes(q.id));
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex] || questions[0];
  }, []);

  const startGame = useCallback((gameType: OdishaGameType) => {
    const timeByGame = {
      'culture-quiz': 90,
      'geography-quest': 120,
      'festival-fun': 75,
      'heritage-hunt': 100
    };

    setGameState({
      currentGame: gameType,
      score: 0,
      timeLeft: timeByGame[gameType],
      isPlaying: true,
      level: 1,
      streak: 0,
      currentQuestion: 1,
      totalQuestions: 10
    });

    setCurrentQuestion(getRandomQuestion(gameType));
    setShowResult(null);
    setShowFunFact(false);
  }, [getRandomQuestion]);

  const handleAnswer = useCallback((answerIndex: number) => {
    if (!currentQuestion) return;

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    setShowResult(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      const points = 15 + gameState.streak * 3;
      setGameState(prev => ({
        ...prev,
        score: prev.score + points,
        streak: prev.streak + 1
      }));
    } else {
      setGameState(prev => ({ ...prev, streak: 0 }));
    }

    // Show fun fact
    setShowFunFact(true);

    // Move to next question after delay
    setTimeout(() => {
      if (gameState.currentQuestion >= gameState.totalQuestions) {
        handleGameEnd();
      } else {
        setGameState(prev => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1
        }));
        setCurrentQuestion(getRandomQuestion(gameState.currentGame!));
        setShowResult(null);
        setShowFunFact(false);
      }
    }, 3000);
  }, [currentQuestion, gameState, getRandomQuestion]);

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
      currentQuestion: 0,
      totalQuestions: 10
    });
    setShowResult(null);
    setShowFunFact(false);
  }, []);

  const getGameIcon = (gameType: OdishaGameType) => {
    switch (gameType) {
      case 'culture-quiz': return Music;
      case 'geography-quest': return MapPin;
      case 'festival-fun': return Heart;
      case 'heritage-hunt': return Crown;
      default: return Star;
    }
  };

  const getGameColor = (gameType: OdishaGameType) => {
    switch (gameType) {
      case 'culture-quiz': return 'from-pink-400 to-pink-600';
      case 'geography-quest': return 'from-blue-400 to-blue-600';
      case 'festival-fun': return 'from-orange-400 to-orange-600';
      case 'heritage-hunt': return 'from-indigo-400 to-indigo-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  // Game playing screen
  if (gameState.currentGame && gameState.isPlaying && currentQuestion) {
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
                <span className="text-sm font-medium">{gameState.timeLeft}s</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">{gameState.score}</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Question {gameState.currentQuestion} of {gameState.totalQuestions}</span>
              {gameState.streak > 0 && (
                <div className="flex items-center gap-1 text-orange-600">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm">Streak: {gameState.streak}</span>
                </div>
              )}
            </div>
            <Progress value={(gameState.currentQuestion / gameState.totalQuestions) * 100} className="h-2" />
          </div>

          {/* Question Card */}
          <div className="max-w-md mx-auto">
            <Card className="p-6 bg-white/95 shadow-xl rounded-2xl">
              <div className="text-center mb-6">
                <h2 className="text-lg text-gray-800 mb-4">{currentQuestion.question}</h2>
                {currentQuestion.questionOdia && (
                  <p className="text-md text-gray-600 mb-4">{currentQuestion.questionOdia}</p>
                )}
                <Badge className={`bg-gradient-to-r ${getGameColor(gameState.currentGame)} text-white`}>
                  {currentQuestion.category}
                </Badge>
              </div>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult !== null}
                    className={`w-full h-14 text-left justify-start bg-white border-2 border-gray-200 hover:border-blue-400 text-gray-800 rounded-xl ${
                      showResult === 'correct' && index === currentQuestion.correctAnswer
                        ? 'border-green-400 bg-green-50'
                        : showResult === 'incorrect' && index === currentQuestion.correctAnswer
                        ? 'border-green-400 bg-green-50'
                        : showResult !== null && index !== currentQuestion.correctAnswer
                        ? 'opacity-50'
                        : ''
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                    </span>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Result Feedback */}
            {showResult && (
              <div className={`mt-4 p-4 rounded-xl text-center ${
                showResult === 'correct' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                <div className="flex items-center justify-center gap-2">
                  {showResult === 'correct' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>ସଠିକ! Correct! +{15 + gameState.streak * 3} points</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5" />
                      <span>ଭୁଲ! Try again!</span>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Fun Fact */}
            {showFunFact && (
              <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                <h4 className="text-blue-800 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Did you know?
                </h4>
                <p className="text-blue-700 text-sm">{currentQuestion.funFact}</p>
                {currentQuestion.funFactOdia && (
                  <p className="text-blue-600 text-sm mt-1">{currentQuestion.funFactOdia}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </InteractiveStudentBackground>
    );
  }

  // Game over screen
  if (gameState.currentGame && !gameState.isPlaying) {
    return (
      <InteractiveStudentBackground>
        <div className="min-h-screen p-4 flex items-center justify-center">
          <Card className="p-8 bg-white/95 shadow-xl rounded-2xl max-w-md w-full text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-2xl text-gray-800 mb-2">ଧନ୍ୟବାଦ! Well Done!</h2>
            <p className="text-gray-600 mb-6">You're learning about beautiful Odisha!</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-orange-50 rounded-xl">
                <div className="text-2xl font-medium text-orange-600">{gameState.score}</div>
                <div className="text-sm text-gray-600">Points Earned</div>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-medium text-green-600">{gameState.streak}</div>
                <div className="text-sm text-gray-600">Best Streak</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button
                onClick={() => startGame(gameState.currentGame!)}
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
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

  // Main Odisha games menu
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
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl text-gray-800">ଓଡ଼ିଶା / Odisha</h1>
              <p className="text-sm text-gray-600">Discover Your Heritage</p>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <Card className="p-6 mb-6 bg-gradient-to-r from-orange-100 to-yellow-100 border-0 shadow-lg">
          <div className="text-center">
            <h2 className="text-lg text-gray-800 mb-2">ସ୍ୱାଗତ! Welcome to Odisha Learning!</h2>
            <p className="text-gray-600">Explore the rich culture, heritage, and beauty of our beloved state through fun games!</p>
          </div>
        </Card>

        {/* Games Grid */}
        <div className="grid gap-4 max-w-md mx-auto">
          <Card className="p-6 bg-gradient-to-br from-pink-100 to-pink-200 border-0 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg text-gray-800">Culture Quiz</h3>
                <p className="text-sm text-gray-600">ସଂସ୍କୃତି / Dance, Food & Traditions</p>
              </div>
            </div>
            <Button
              onClick={() => startGame('culture-quiz')}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-xl"
            >
              <Play className="w-4 h-4 mr-2" />
              Start Learning
            </Button>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 border-0 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg text-gray-800">Geography Quest</h3>
                <p className="text-sm text-gray-600">ଭୂଗୋଳ / Rivers, Mountains & Wildlife</p>
              </div>
            </div>
            <Button
              onClick={() => startGame('geography-quest')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
            >
              <Play className="w-4 h-4 mr-2" />
              Explore Land
            </Button>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-100 to-orange-200 border-0 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg text-gray-800">Festival Fun</h3>
                <p className="text-sm text-gray-600">ପର୍ବ / Celebrations & Traditions</p>
              </div>
            </div>
            <Button
              onClick={() => startGame('festival-fun')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl"
            >
              <Play className="w-4 h-4 mr-2" />
              Celebrate
            </Button>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-indigo-100 to-indigo-200 border-0 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg text-gray-800">Heritage Hunt</h3>
                <p className="text-sm text-gray-600">ଐତିହ୍ୟ / Temples & History</p>
              </div>
            </div>
            <Button
              onClick={() => startGame('heritage-hunt')}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl"
            >
              <Play className="w-4 h-4 mr-2" />
              Discover
            </Button>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-6 p-4 bg-white/90 border-0 shadow-sm max-w-md mx-auto">
          <h3 className="text-gray-800 mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            🌟 Learning Tips
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Learn about our beautiful state's rich heritage</li>
            <li>• Discover famous places and festivals</li>
            <li>• Build knowledge about Odia culture</li>
            <li>• Share facts with family and friends!</li>
          </ul>
        </Card>
      </div>
    </InteractiveStudentBackground>
  );
}