import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Volume2, 
  CheckCircle, 
  Circle,
  ArrowRight,
  Star,
  RotateCcw,
  BookOpen,
  Target
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LanguageContent, LanguageCode } from '../utils/languages';
import { GameBackground } from './GameBackground';
import { getQuestionsForGrade, Question } from '../utils/questionBank';

interface LessonScreenProps {
  onNavigate: (screen: string) => void;
  t: LanguageContent;
  selectedGrade: string;
}

export function LessonScreen({ onNavigate, t, selectedGrade }: LessonScreenProps) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);
  const [showResult, setShowResult] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [selectedSubject, setSelectedSubject] = React.useState<string>('math');
  const [showSubjectSelection, setShowSubjectSelection] = React.useState(true);

  // Get current language safely
  const currentLanguage = React.useMemo(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return (localStorage.getItem('selectedLanguage') as LanguageCode) || 'en';
      }
      return 'en';
    } catch {
      return 'en';
    }
  }, []);
  
  // Get questions based on grade and language
  const allQuestions = React.useMemo(() => {
    try {
      return getQuestionsForGrade(selectedGrade || 'grade1', currentLanguage);
    } catch (error) {
      console.error('Error loading questions:', error);
      return [];
    }
  }, [selectedGrade, currentLanguage]);

  // Filter questions by selected subject
  const questions = React.useMemo(() => {
    try {
      return allQuestions.filter(q => q && q.subject === selectedSubject);
    } catch (error) {
      console.error('Error filtering questions:', error);
      return [];
    }
  }, [allQuestions, selectedSubject]);

  const subjects = [
    { 
      id: 'math', 
      name: { hi: 'गणित', en: 'Math', od: 'ଗଣିତ' }, 
      icon: '🔢', 
      color: 'bg-blue-500',
      description: { hi: 'संख्याएं और गणना', en: 'Numbers and calculations', od: 'ସଂଖ୍ୟା ଏବଂ ଗଣନା' }
    },
    { 
      id: 'science', 
      name: { hi: 'विज्ञान', en: 'Science', od: 'ବିଜ୍ଞାନ' }, 
      icon: '🔬', 
      color: 'bg-green-500',
      description: { hi: 'प्रकृति और खोज', en: 'Nature and discovery', od: 'ପ୍ରକୃତି ଏବଂ ଆବିଷ୍କାର' }
    },
    { 
      id: 'language', 
      name: { hi: 'भाषा', en: 'Language', od: 'ଭାଷା' }, 
      icon: '📚', 
      color: 'bg-purple-500',
      description: { hi: 'शब्द और व्याकरण', en: 'Words and grammar', od: 'ଶବ୍ଦ ଏବଂ ବ୍ୟାକରଣ' }
    },
    { 
      id: 'social', 
      name: { hi: 'सामाजिक अध्ययन', en: 'Social Studies', od: 'ସାମାଜିକ ଅଧ୍ୟୟନ' }, 
      icon: '🌍', 
      color: 'bg-orange-500',
      description: { hi: 'समाज और इतिहास', en: 'Society and history', od: 'ସମାଜ ଏବଂ ଇତିହାସ' }
    }
  ];

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setShowSubjectSelection(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    const currentQ = questions[currentQuestion];
    if (currentQ && selectedAnswer === currentQ.correctAnswer) {
      setScore(score + (currentQ.points || 10));
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Lesson complete
      onNavigate('rewards');
    }
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleBackToSubjects = () => {
    setShowSubjectSelection(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const currentQ = questions[currentQuestion];
  const selectedSubjectData = subjects.find(s => s.id === selectedSubject);

  // Safety check for current question
  if (!showSubjectSelection && (!currentQ || questions.length === 0)) {
    return (
      <GameBackground variant="decorative">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleBackToSubjects}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t.back}
            </Button>
          </div>
          
          <Card className="p-6 text-center bg-white/95 border-0 shadow-lg">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-xl mb-4 text-gray-800">
              {currentLanguage === 'hi' ? 'इस विषय के लिए प्रश्न जल्द आएंगे!' : 
               currentLanguage === 'od' ? 'ଏହି ବିଷୟ ପାଇଁ ପ୍ରଶ୍ନ ଶୀଘ୍ର ଆସିବ!' : 
               'Questions for this subject coming soon!'}
            </h2>
            <Button 
              onClick={handleBackToSubjects}
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
            >
              {currentLanguage === 'hi' ? 'अन्य विषय चुनें' : 
               currentLanguage === 'od' ? 'ଅନ୍ୟ ବିଷୟ ବାଛ' : 
               'Choose Another Subject'}
            </Button>
          </Card>
        </div>
      </GameBackground>
    );
  }

  // Show subject selection screen
  if (showSubjectSelection) {
    return (
      <GameBackground variant="decorative">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('home')}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t.back}
            </Button>
            
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-600" />
              <span className="text-cyan-600 font-medium text-sm">
                {selectedGrade ? `${currentLanguage === 'hi' ? 'कक्षा' : currentLanguage === 'od' ? 'କକ୍ଷା' : 'Grade'} ${selectedGrade.replace('grade', '')}` : 'Grade 1'}
              </span>
            </div>
          </div>

          {/* Title */}
          <Card className="p-6 mb-6 bg-white/95 border-0 shadow-lg">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🎯</div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {currentLanguage === 'hi' ? 'विषय चुनें' : 
                 currentLanguage === 'od' ? 'ବିଷୟ ବାଛ' : 
                 'Choose Subject'}
              </h1>
              <p className="text-gray-600">
                {currentLanguage === 'hi' ? 'आज आप क्या सीखना चाहते हैं?' : 
                 currentLanguage === 'od' ? 'ଆଜି ତୁମେ କଣ ଶିଖିବାକ�� ଚାହୁଁଛ?' : 
                 'What would you like to learn today?'}
              </p>
            </div>
          </Card>

          {/* Subject Grid */}
          <div className="grid grid-cols-2 gap-4">
            {subjects.map((subject) => (
              <Card 
                key={subject.id}
                className="p-4 bg-white/95 border-0 shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleSubjectSelect(subject.id)}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{subject.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {subject.name[currentLanguage]}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {subject.description[currentLanguage]}
                  </p>
                  <Badge className={`${subject.color} text-white text-xs px-2 py-1`}>
                    {allQuestions.filter(q => q && q.subject === subject.id).length} 
                    {currentLanguage === 'hi' ? ' प्रश्न' : 
                     currentLanguage === 'od' ? ' ପ୍ରଶ୍ନ' : 
                     ' Questions'}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </GameBackground>
    );
  }

  return (
    <GameBackground variant="decorative">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleBackToSubjects}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.back}
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-purple-600" />
              <Badge className={`${selectedSubjectData?.color} text-white text-xs`}>
                {selectedSubjectData?.name[currentLanguage]}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-yellow-600 font-medium">{score}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              {t.lesson.progress}: {currentQuestion + 1}/{questions.length}
            </span>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                currentQ?.difficulty === 'easy' ? 'bg-green-500' :
                currentQ?.difficulty === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
              }`}></div>
              <span className="text-sm text-gray-600 capitalize">
                {currentQ?.difficulty === 'easy' ? 
                  (currentLanguage === 'hi' ? 'आसान' : currentLanguage === 'od' ? 'ସହଜ' : 'Easy') :
                 currentQ?.difficulty === 'medium' ? 
                  (currentLanguage === 'hi' ? 'मध्यम' : currentLanguage === 'od' ? 'ମଧ୍ୟମ' : 'Medium') :
                  (currentLanguage === 'hi' ? 'कठिन' : currentLanguage === 'od' ? 'କଠିନ' : 'Hard')
                }
              </span>
            </div>
          </div>
          <Progress value={(currentQuestion + 1) / questions.length * 100} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="p-6 mb-6 bg-white/95 border-0 shadow-lg">
          {/* Audio Hint */}
          <div className="flex items-center gap-2 mb-4 p-3 bg-cyan-50 rounded-lg">
            <Volume2 className="w-5 h-5 text-cyan-600" />
            <span className="text-sm text-cyan-700">
              {(currentQ as any)?.audioHintText || (currentQ?.audioHint && currentQ.audioHint[currentLanguage]) || 'Audio hint available'}
            </span>
          </div>

          {/* Question */}
          <h2 className="text-xl mb-4 text-center text-gray-800">
            {(currentQ as any)?.questionText || (currentQ?.question && currentQ.question[currentLanguage]) || 'Question loading...'}
          </h2>

          {/* Visual Content */}
          {currentQ?.visual && (
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{currentQ.visual}</div>
            </div>
          )}

          {/* Multiple Choice Options */}
          {currentQ?.type === 'multiple-choice' && !showResult && (
            <div className="space-y-3">
              {((currentQ as any)?.optionsText || currentQ?.options?.[currentLanguage] || []).map((option: string, index: number) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className={`w-full p-4 h-auto text-left justify-start ${
                    selectedAnswer === index 
                      ? 'bg-cyan-500 text-white border-cyan-500' 
                      : 'bg-white hover:bg-cyan-50 border-cyan-200'
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <div className="flex items-center gap-3">
                    {selectedAnswer === index ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                    <span>{option}</span>
                  </div>
                </Button>
              ))}
            </div>
          )}

          {/* True/False Options */}
          {currentQ?.type === 'true-false' && !showResult && (
            <div className="flex gap-4 justify-center">
              <Button
                variant={selectedAnswer === 0 ? "default" : "outline"}
                className={`px-8 py-4 ${
                  selectedAnswer === 0 
                    ? 'bg-green-500 text-white border-green-500' 
                    : 'bg-white hover:bg-green-50 border-green-200'
                }`}
                onClick={() => handleAnswerSelect(0)}
              >
                <div className="flex items-center gap-2">
                  {selectedAnswer === 0 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                  <span>{currentLanguage === 'hi' ? 'सच' : currentLanguage === 'od' ? 'ସତ' : 'True'}</span>
                </div>
              </Button>
              <Button
                variant={selectedAnswer === 1 ? "default" : "outline"}
                className={`px-8 py-4 ${
                  selectedAnswer === 1 
                    ? 'bg-red-500 text-white border-red-500' 
                    : 'bg-white hover:bg-red-50 border-red-200'
                }`}
                onClick={() => handleAnswerSelect(1)}
              >
                <div className="flex items-center gap-2">
                  {selectedAnswer === 1 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                  <span>{currentLanguage === 'hi' ? 'झूठ' : currentLanguage === 'od' ? 'ମିଥ୍ୟା' : 'False'}</span>
                </div>
              </Button>
            </div>
          )}

          {/* Result */}
          {showResult && (
            <div className="text-center">
              <div className={`text-6xl mb-4 ${
                selectedAnswer === currentQ.correctAnswer ? 'text-emerald-500' : 'text-red-500'
              }`}>
                {selectedAnswer === currentQ.correctAnswer ? '✅' : '❌'}
              </div>
              <h3 className={`text-xl mb-2 ${
                selectedAnswer === currentQ.correctAnswer ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {selectedAnswer === currentQ.correctAnswer ? 
                  t.lesson.excellent : 
                  t.lesson.tryAgain
                }
              </h3>
              <p className="text-gray-600 mb-4">
                {(currentQ as any)?.explanationText || (currentQ?.explanation && currentQ.explanation[currentLanguage]) || 'Explanation available'}
              </p>
              {selectedAnswer === currentQ.correctAnswer && (
                <div className="flex items-center justify-center gap-2 text-yellow-600">
                  <Star className="w-5 h-5 fill-current" />
                  <span>+{currentQ.points || 10} {currentLanguage === 'hi' ? 'अंक' : currentLanguage === 'od' ? 'ପଏଣ୍ଟ' : 'points'}</span>
                </div>
              )}
            </div>
          )}
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {!showResult && (currentQ?.type === 'multiple-choice' || currentQ?.type === 'true-false') && (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl"
            >
              {t.submit}
            </Button>
          )}

          {showResult && (
            <>
              {selectedAnswer !== currentQ.correctAnswer && (
                <Button
                  onClick={handleRetry}
                  variant="outline"
                  className="flex-1 py-3 rounded-xl border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  <RotateCcw className="mr-2 w-5 h-5" />
                  {t.retry}
                </Button>
              )}
              <Button
                onClick={handleNext}
                className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl"
              >
                {currentQuestion < questions.length - 1 ? (
                  <>{t.next} <ArrowRight className="ml-2 w-5 h-5" /></>
                ) : (
                  t.complete
                )}
              </Button>
            </>
          )}
        </div>
      </div>
    </GameBackground>
  );
}