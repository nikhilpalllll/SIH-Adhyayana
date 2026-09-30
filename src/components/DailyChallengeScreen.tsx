import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Trophy, 
  Star,
  CheckCircle,
  XCircle,
  Timer,
  Coins,
  Volume2
} from 'lucide-react';
import { LanguageContent } from '../utils/languages';
import { GameBackground } from './GameBackground';

interface DailyChallengeScreenProps {
  onNavigate: (screen: string) => void;
  t: LanguageContent;
}

interface MathProblem {
  id: number;
  question: string;
  questionHi: string;
  questionOd: string;
  options: string[];
  optionsHi: string[];
  optionsOd: string[];
  correctAnswer: number;
  points: number;
  context: string;
  contextHi: string;
  contextOd: string;
}

const mathProblems: MathProblem[] = [
  {
    id: 1,
    question: "Ravi's family needs to buy rice for the month. If 1 kg rice costs ₹45 and they eat 1.5 kg per week, how much will they spend on rice in a month (4 weeks)?",
    questionHi: "रवि के परिवार को महीने के लिए चावल खरीदना है। अगर 1 किलो चावल की कीमत ₹45 है और वे हर हफ्ते 1.5 किलो खाते हैं, तो एक महीने (4 हफ्ते) में चावल पर कितना खर्च होगा?",
    questionOd: "ରବିଙ୍କ ପରିବାର ମାସିକ ଚାଉଳ କିଣିବା ଆବଶ୍ୟକ। ଯଦି 1 କିଲୋ ଚାଉଳର ମୂଲ୍ୟ ₹45 ଏବଂ ସେମାନେ ସପ୍ତାହକୁ 1.5 କିଲୋ ଖାଆନ୍ତି, ତେବେ ଏକ ମାସରେ (4 ସପ୍ତାହ) ଚାଉଳ ପାଇଁ କେତେ ଖର୍ଚ୍ଚ ହେବ?",
    options: ["₹180", "₹270", "₹360", "₹225"],
    optionsHi: ["₹180", "₹270", "₹360", "₹225"],
    optionsOd: ["₹180", "₹270", "₹360", "₹225"],
    correctAnswer: 1,
    points: 20,
    context: "Market Shopping",
    contextHi: "बाजार में खरीदारी",
    contextOd: "ବଜାର କିଣାକାଟା"
  },
  {
    id: 2,
    question: "Sunita has a small farm with 12 mango trees. Each tree gives 25 mangoes. If she sells mangoes at ₹8 per piece, how much money will she earn?",
    questionHi: "सुनीता के पास 12 आम के पेड़ों वाला एक छोटा बगीचा है। हर पेड़ से 25 आम मिलते हैं। अगर वह ₹8 प्रति आम बेचती है, तो कितना पैसा कमाएगी?",
    questionOd: "ସୁନୀତାଙ୍କର 12 ଟି ଆମ୍ବ ଗଛ ଥିବା ଏକ ଛୋଟ ଖେତ ଅଛି। ପ୍ରତି ଗଛରୁ 25 ଟି ଆମ୍ବ ମିଳେ। ଯଦି ସେ ଆମ୍ବକୁ ₹8 ପ୍ରତି ଗୋଟିଏରେ ବିକ୍ରି କରେ, ତେବେ କେତେ ଟଙ୍କା ରୋଜଗାର କରିବ?",
    options: ["₹2,000", "₹2,400", "₹2,800", "₹3,200"],
    optionsHi: ["₹2,000", "₹2,400", "₹2,800", "₹3,200"],
    optionsOd: ["₹2,000", "₹2,400", "₹2,800", "₹3,200"],
    correctAnswer: 1,
    points: 25,
    context: "Farm Management",
    contextHi: "खेती प्रबंधन",
    contextOd: "କୃଷି ପ୍ରବନ୍ଧନ"
  },
  {
    id: 3,
    question: "During Diwali, Maya's family wants to buy diyas (oil lamps). They need 8 packets, each containing 15 diyas. If 3 diyas break during transport, how many diyas do they have for decoration?",
    questionHi: "दिवाली के दौरान, माया का परिवार दीये खरीदना चाहता है। उन्हें 8 पैकेट चाहिए, हर पैकेट में 15 दीये हैं। अगर परिवहन के दौरान 3 दीये टूट जाते हैं, तो सजावट के लिए कितने दीये हैं?",
    questionOd: "ଦୀପାବଳୀ ସମୟରେ, ମାୟାର ପରିବାର ଦୀପ କିଣିବାକୁ ଚାହାଁନ୍ତି। ସେମାନଙ୍କୁ 8 ଟି ପ୍ୟାକେଟ ଦରକାର, ପ୍ରତିଟିରେ 15 ଟି ଦୀପ ଅଛି। ଯଦି ପରିବହନ ସମୟରେ 3 ଟି ଦୀପ ଭାଙ୍ଗିଯାଏ, ତେବେ ସଜାଇବା ପାଇଁ କେତେଟି ଦୀପ ଅଛି?",
    options: ["117", "120", "123", "115"],
    optionsHi: ["117", "120", "123", "115"],
    optionsOd: ["117", "120", "123", "115"],
    correctAnswer: 0,
    points: 15,
    context: "Festival Preparation",
    contextHi: "त्योहार की तैयारी",
    contextOd: "ପର୍ବର ପ୍ରସ୍ତୁତି"
  },
  {
    id: 4,
    question: "Ramesh takes the village bus to town every day. The round trip costs ₹24. If he travels 6 days a week for 4 weeks, how much does he spend on bus fare?",
    questionHi: "रमेश हर दिन गांव की बस से शहर जाता है। आने-जाने का किराया ₹24 है। अगर वह 4 सप्ताह तक सप्ताह में 6 दिन यात्रा करता है, तो बस के किराए पर कितना खर्च करता है?",
    questionOd: "ରମେଶ ପ୍ରତିଦିନ ଗାଁ ବସ୍‌ରେ ସହରକୁ ଯାଆନ୍ତି। ଆସିବା-ଯିବାର ଖର୍ଚ୍ଚ ₹24। ଯଦି ସେ 4 ସପ୍ତାହ ପାଇଁ ସପ୍ତାହକୁ 6 ଦିନ ଯାତ୍ରା କରନ୍ତି, ତେବେ ବସ୍ ଭଡାରେ କେତେ ଖର୍ଚ୍ଚ କରନ୍ତି?",
    options: ["₹576", "₹600", "₹540", "₹612"],
    optionsHi: ["₹576", "₹600", "₹540", "₹612"],
    optionsOd: ["₹576", "₹600", "₹540", "₹612"],
    correctAnswer: 0,
    points: 20,
    context: "Transportation",
    contextHi: "परिवहन",
    contextOd: "ପରିବହନ"
  },
  {
    id: 5,
    question: "Priya helps her mother prepare food for a village function. They need to cook rice for 150 people. If each person eats 200 grams of rice, how many kilograms of rice do they need in total?",
    questionHi: "प्रिया अपनी मां की गांव के समारोह के लिए खाना बनाने में मदद करती है। उन्हें 150 लोगों के लिए चावल पकाना है। अगर हर व्यक्ति 200 ग्राम चावल खाता है, तो कुल कितने किलोग्राम चावल की जरूरत है?",
    questionOd: "ପ୍ରିୟା ତାଙ୍କ ମାଙ୍କୁ ଗାଁ ସମାରୋହ ପାଇଁ ଖାଦ୍ୟ ପ୍ରସ୍ତୁତିରେ ସାହାଯ୍ୟ କରନ୍ତି। ସେମାନଙ୍କୁ 150 ଲୋକଙ୍କ ପାଇଁ ଚାଉଳ ରାନ୍ଧିବାକୁ ହେବ। ଯଦି ପ୍ରତ୍ୟେକ ବ୍ୟକ୍ତି 200 ଗ୍ରାମ ଚାଉଳ ଖାଆନ୍ତି, ତେବେ ମୋଟ କେତେ କିଲୋଗ୍ରାମ ଚାଉଳ ଦରକାର?",
    options: ["25 kg", "30 kg", "35 kg", "40 kg"],
    optionsHi: ["25 किलो", "30 किलो", "35 किलो", "40 किलो"],
    optionsOd: ["25 କିଲୋ", "30 କିଲୋ", "35 କିଲୋ", "40 କିଲୋ"],
    correctAnswer: 1,
    points: 25,
    context: "Community Events",
    contextHi: "सामुदायिक कार्यक्रम",
    contextOd: "ସମ୍ପ୍ରଦାୟିକ ଅନୁଷ୍ଠାନ"
  }
];

export function DailyChallengeScreen({ onNavigate, t }: DailyChallengeScreenProps) {
  const [currentProblem, setCurrentProblem] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);
  const [showResult, setShowResult] = React.useState(false);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [totalPoints, setTotalPoints] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(300); // 5 minutes in seconds
  const [isCompleted, setIsCompleted] = React.useState(false);
  
  // Timer countdown
  React.useEffect(() => {
    if (timeLeft > 0 && !isCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isCompleted) {
      handleComplete();
    }
  }, [timeLeft, isCompleted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === mathProblems[currentProblem].correctAnswer;
    setShowResult(true);
    
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      setTotalPoints(prev => prev + mathProblems[currentProblem].points);
    }
  };

  const handleNextProblem = () => {
    if (currentProblem < mathProblems.length - 1) {
      setCurrentProblem(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    setIsCompleted(true);
  };

  const getCurrentLanguageText = (problem: MathProblem, field: 'question' | 'context' | 'options') => {
    // For now, defaulting to English - can be extended for Hindi/Odia based on current language
    switch (field) {
      case 'question':
        return problem.question;
      case 'context':
        return problem.context;
      case 'options':
        return problem.options;
      default:
        return problem.question;
    }
  };

  if (isCompleted) {
    const percentage = Math.round((correctAnswers / mathProblems.length) * 100);
    return (
      <GameBackground variant="default">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('student-home')}
              className="text-gray-600"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="flex-1 text-center text-gray-800">{t.dailyChallenge.complete}</h1>
          </div>

          {/* Results Card */}
          <Card className="p-6 mb-6 bg-gradient-to-r from-green-100 to-emerald-200 border-0 text-center">
            <div className="w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl text-gray-800 mb-2">{t.dailyChallenge.excellentWork}</h2>
            <p className="text-gray-600 mb-4">{t.dailyChallenge.solvedProblems} {correctAnswers} {t.dailyChallenge.outOf} {mathProblems.length} {t.dailyChallenge.correctly}</p>
            
            <div className="flex justify-center gap-6 mb-4">
              <div className="text-center">
                <div className="text-2xl text-green-600">{percentage}%</div>
                <div className="text-sm text-gray-600">{t.dailyChallenge.score}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-yellow-600">{totalPoints}</div>
                <div className="text-sm text-gray-600">{t.dailyChallenge.points}</div>
              </div>
            </div>
            
            <Badge className="bg-yellow-500 text-white px-4 py-2">
              <Star className="w-4 h-4 mr-1" />
              {t.dailyChallenge.challengeComplete}
            </Badge>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => onNavigate('student-home')}
              className="w-full h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white rounded-xl"
            >
              {t.dailyChallenge.backToHome}
            </Button>
            <Button
              onClick={() => onNavigate('leaderboard')}
              variant="outline"
              className="w-full h-12 border-purple-300 text-purple-600 hover:bg-purple-50 rounded-xl"
            >
              {t.dailyChallenge.viewLeaderboard}
            </Button>
          </div>
        </div>
      </GameBackground>
    );
  }

  const problem = mathProblems[currentProblem];
  const progress = ((currentProblem + 1) / mathProblems.length) * 100;

  return (
    <GameBackground variant="default">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('student-home')}
            className="text-gray-600"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="flex-1 text-center text-gray-800">{t.dailyChallenge.title}</h1>
          <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full">
            <Timer className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-600">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{t.dailyChallenge.problem} {currentProblem + 1} {t.dailyChallenge.of} {mathProblems.length}</span>
            <span>{Math.round(progress)}{t.dailyChallenge.percentComplete}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Problem Card */}
        <Card className="p-6 mb-4 bg-white/95 border-0 shadow-lg">
          {/* Context Badge */}
          <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
            {getCurrentLanguageText(problem, 'context')}
          </Badge>
          
          {/* Question */}
          <div className="mb-4">
            <Button variant="ghost" size="sm" className="mb-2 text-cyan-600">
              <Volume2 className="w-4 h-4 mr-1" />
              {t.dailyChallenge.listenToQuestion}
            </Button>
            <p className="text-gray-800 leading-relaxed">
              {getCurrentLanguageText(problem, 'question')}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {getCurrentLanguageText(problem, 'options').map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  selectedAnswer === index
                    ? showResult
                      ? index === problem.correctAnswer
                        ? 'border-green-400 bg-green-50'
                        : 'border-red-400 bg-red-50'
                      : 'border-cyan-400 bg-cyan-50'
                    : showResult && index === problem.correctAnswer
                    ? 'border-green-400 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">{option}</span>
                  {showResult && (
                    <div>
                      {index === problem.correctAnswer ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : selectedAnswer === index ? (
                        <XCircle className="w-5 h-5 text-red-500" />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Result */}
          {showResult && (
            <div className={`p-4 rounded-xl mb-4 ${
              selectedAnswer === problem.correctAnswer 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {selectedAnswer === problem.correctAnswer ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-700">{t.dailyChallenge.correct} {t.dailyChallenge.wellDone}</span>
                    <div className="flex items-center gap-1 ml-auto">
                      <Coins className="w-4 h-4 text-yellow-500" />
                      <span className="text-yellow-600">+{problem.points} {t.dailyChallenge.points}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-700">{t.dailyChallenge.tryAgainNextTime}</span>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {!showResult ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="flex-1 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white rounded-xl disabled:opacity-50"
              >
                {t.dailyChallenge.submitAnswer}
              </Button>
            ) : (
              <Button
                onClick={handleNextProblem}
                className="flex-1 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white rounded-xl"
              >
                {currentProblem < mathProblems.length - 1 ? t.dailyChallenge.nextProblem : t.dailyChallenge.completeChallenge}
              </Button>
            )}
          </div>
        </Card>

        {/* Score Display */}
        <Card className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 border-0">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-600">{t.dailyChallenge.currentScore}</div>
              <div className="text-lg text-gray-800">{correctAnswers}/{currentProblem + (showResult ? 1 : 0)} correct</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">{t.dailyChallenge.pointsEarned}</div>
              <div className="text-lg text-yellow-600 flex items-center gap-1">
                <Coins className="w-4 h-4" />
                {totalPoints}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </GameBackground>
  );
}