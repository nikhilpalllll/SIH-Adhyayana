import { LanguageCode } from './languages';

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'drag-drop' | 'text-input';
  subject: 'math' | 'science' | 'language' | 'social';
  difficulty: 'easy' | 'medium' | 'hard';
  question: {
    hi: string;
    en: string;
    od: string;
  };
  options?: {
    hi: string[];
    en: string[];
    od: string[];
  };
  correctAnswer: number | string;
  explanation: {
    hi: string;
    en: string;
    od: string;
  };
  visual?: string; // Emoji or icon
  audioHint: {
    hi: string;
    en: string;
    od: string;
  };
  points: number;
}

export const questionBank: Record<string, Question[]> = {
  // Grade 1 Questions
  'grade1': [
    {
      id: 'g1_m1',
      type: 'multiple-choice',
      subject: 'math',
      difficulty: 'easy',
      question: {
        hi: '2 + 3 = ?',
        en: '2 + 3 = ?',
        od: '2 + 3 = ?'
      },
      options: {
        hi: ['5', '4', '6', '3'],
        en: ['5', '4', '6', '3'],
        od: ['5', '4', '6', '3']
      },
      correctAnswer: 0,
      explanation: {
        hi: '2 और 3 मिलाकर 5 होता है!',
        en: '2 plus 3 equals 5!',
        od: '2 ଏବଂ 3 ମିଶାଇଲେ 5 ହୁଏ!'
      },
      visual: '🔢',
      audioHint: {
        hi: '🔊 संख्याओं को गिनिए',
        en: '🔊 Count the numbers',
        od: '🔊 ସଂଖ୍ୟାଗୁଡ଼ିକୁ ଗଣନା କର'
      },
      points: 10
    },
    {
      id: 'g1_m2',
      type: 'multiple-choice',
      subject: 'math',
      difficulty: 'easy',
      question: {
        hi: 'कौन सा सबसे बड़ा है?',
        en: 'Which is the largest?',
        od: 'କେଉଁଟି ସବୁଠାରୁ ବଡ଼?'
      },
      options: {
        hi: ['5', '2', '8', '4'],
        en: ['5', '2', '8', '4'],
        od: ['5', '2', '8', '4']
      },
      correctAnswer: 2,
      explanation: {
        hi: '8 सबसे बड़ी संख्या है!',
        en: '8 is the largest number!',
        od: '8 ସବୁଠାରୁ ବଡ଼ ସଂଖ୍ୟା!'
      },
      visual: '📏',
      audioHint: {
        hi: '🔊 सबसे बड़ी संख्या खोजिए',
        en: '🔊 Find the biggest number',
        od: '🔊 ସବୁଠାରୁ ବଡ଼ ସଂଖ୍ୟା ଖୋଜ'
      },
      points: 10
    }
  ],

  // Grade 2 Questions
  'grade2': [
    {
      id: 'g2_m1',
      type: 'multiple-choice',
      subject: 'math',
      difficulty: 'easy',
      question: {
        hi: '10 - 4 = ?',
        en: '10 - 4 = ?',
        od: '10 - 4 = ?'
      },
      options: {
        hi: ['6', '5', '7', '4'],
        en: ['6', '5', '7', '4'],
        od: ['6', '5', '7', '4']
      },
      correctAnswer: 0,
      explanation: {
        hi: '10 में से 4 घटाने पर 6 आता है!',
        en: '10 minus 4 equals 6!',
        od: '10 ରୁ 4 ବାଦ୍ ଦେଲେ 6 ଆସେ!'
      },
      visual: '➖',
      audioHint: {
        hi: '🔊 बड़ी संख्या से छोटी संख्या घटाइए',
        en: '🔊 Subtract the smaller number from the bigger number',
        od: '🔊 ବଡ଼ ସଂଖ୍ୟାରୁ ଛୋଟ ସଂଖ୍ୟା ବାଦ୍ ଦିଅ'
      },
      points: 15
    }
  ],

  // Grade 3 Questions
  'grade3': [
    {
      id: 'g3_m1',
      type: 'multiple-choice',
      subject: 'math',
      difficulty: 'medium',
      question: {
        hi: '7 × 3 = ?',
        en: '7 × 3 = ?',
        od: '7 × 3 = ?'
      },
      options: {
        hi: ['21', '24', '18', '20'],
        en: ['21', '24', '18', '20'],
        od: ['21', '24', '18', '20']
      },
      correctAnswer: 0,
      explanation: {
        hi: '7 को 3 से गुणा करने पर 21 आता है!',
        en: '7 multiplied by 3 equals 21!',
        od: '7 କୁ 3 ରେ ଗୁଣନ କଲେ 21 ଆସେ!'
      },
      visual: '✖️',
      audioHint: {
        hi: '🔊 गुणा तालिका का उपयोग करिए',
        en: '🔊 Use multiplication tables',
        od: '🔊 ଗୁଣନ ସାରଣୀ ବ୍ୟବହାର କର'
      },
      points: 20
    }
  ],

  // Grade 4 Questions
  'grade4': [
    {
      id: 'g4_m1',
      type: 'multiple-choice',
      subject: 'math',
      difficulty: 'medium',
      question: {
        hi: '36 ÷ 6 = ?',
        en: '36 ÷ 6 = ?',
        od: '36 ÷ 6 = ?'
      },
      options: {
        hi: ['6', '5', '7', '8'],
        en: ['6', '5', '7', '8'],
        od: ['6', '5', '7', '8']
      },
      correctAnswer: 0,
      explanation: {
        hi: '36 को 6 से भाग देने पर 6 आता है!',
        en: '36 divided by 6 equals 6!',
        od: '36 କୁ 6 ରେ ଭାଗ କଲେ 6 ଆସେ!'
      },
      visual: '➗',
      audioHint: {
        hi: '🔊 भाग देने का अभ्यास करिए',
        en: '🔊 Practice division',
        od: '🔊 ଭାଗ କରିବାର ଅଭ୍ୟାସ କର'
      },
      points: 25
    }
  ],

  // Grade 5 Questions
  'grade5': [
    {
      id: 'g5_m1',
      type: 'multiple-choice',
      subject: 'math',
      difficulty: 'medium',
      question: {
        hi: '125 ÷ 5 = ?',
        en: '125 ÷ 5 = ?',
        od: '125 ÷ 5 = ?'
      },
      options: {
        hi: ['25', '20', '30', '15'],
        en: ['25', '20', '30', '15'],
        od: ['25', '20', '30', '15']
      },
      correctAnswer: 0,
      explanation: {
        hi: '125 को 5 से भाग देने पर 25 आता है!',
        en: '125 divided by 5 equals 25!',
        od: '125 କୁ 5 ରେ ଭାଗ କଲେ 25 ଆସେ!'
      },
      visual: '🧮',
      audioHint: {
        hi: '🔊 बड़ी संख्या को छोटी संख्या से भाग दिजिए',
        en: '🔊 Divide the large number by the small number',
        od: '🔊 ବଡ଼ ସଂଖ୍ୟାକୁ ଛୋଟ ସଂଖ୍ୟାରେ ଭାଗ କର'
      },
      points: 30
    },
    {
      id: 'g5_s1',
      type: 'multiple-choice',
      subject: 'science',
      difficulty: 'hard',
      question: {
        hi: 'पृथ्वी के चारों ओर घूमने वाला क्या है?',
        en: 'What revolves around the Earth?',
        od: 'ପୃଥିବୀ ଚାରିପାଖରେ କଣ ଘୂରେ?'
      },
      options: {
        hi: ['सूर्य', 'चांद', 'मंगल', 'शुक्र'],
        en: ['Sun', 'Moon', 'Mars', 'Venus'],
        od: ['ସୂର୍ଯ୍ୟ', 'ଚନ୍ଦ୍ର', 'ମଙ୍ଗଳ', 'ଶୁକ୍ର']
      },
      correctAnswer: 1,
      explanation: {
        hi: 'चांद पृथ्वी के चारों ओर घूमता है!',
        en: 'The Moon revolves around the Earth!',
        od: 'ଚନ୍ଦ୍ର ପୃଥିବୀ ଚାରିପାଖରେ ଘୂରେ!'
      },
      visual: '🌙',
      audioHint: {
        hi: '🔊 रात में दिखने वाला क्या है?',
        en: '🔊 What do we see at night?',
        od: '🔊 ରାତିରେ କଣ ଦେଖାଯାଏ?'
      },
      points: 30
    },
    {
      id: 'g5_l1', 
      type: 'true-false',
      subject: 'language',
      difficulty: 'medium',
      question: {
        hi: 'क्या "राम" एक संज्ञा है?',
        en: 'Is "Ram" a noun?',
        od: 'ରାମ ଏକ ନାମପଦ କି?'
      },
      correctAnswer: 0, // True
      explanation: {
        hi: 'हाँ! राम एक व्यक्ति का नाम है, इसलिए यह संज्ञा है।',
        en: 'Yes! Ram is a person\'s name, so it is a noun.',
        od: 'ହଁ! ରାମ ଜଣେ ବ୍ୟକ୍ତିଙ୍କ ନାମ, ତେଣୁ ଏହା ନାମପଦ।'
      },
      visual: '📖',
      audioHint: {
        hi: '🔊 संज्ञा किसी व्यक्ति, वस्तु या स्थान का नाम होता है',
        en: '🔊 A noun is the name of a person, place or thing',
        od: '🔊 ନାମପଦ ହେଉଛି କୌଣସି ବ୍ୟକ୍ତି, ବସ୍ତୁ କିମ୍ବା ସ୍ଥାନର ନାମ'
      },
      points: 25
    }
  ],

  // Grade 6 Questions
  'grade6': [
    {
      id: 'g6_m1',
      type: 'multiple-choice',
      subject: 'math',
      difficulty: 'hard',
      question: {
        hi: '0.5 + 0.25 = ?',
        en: '0.5 + 0.25 = ?',
        od: '0.5 + 0.25 = ?'
      },
      options: {
        hi: ['0.75', '0.65', '0.85', '0.55'],
        en: ['0.75', '0.65', '0.85', '0.55'],
        od: ['0.75', '0.65', '0.85', '0.55']
      },
      correctAnswer: 0,
      explanation: {
        hi: '0.5 और 0.25 मिलाकर 0.75 होता है!',
        en: '0.5 plus 0.25 equals 0.75!',
        od: '0.5 ଏବଂ 0.25 ମିଶାଇଲେ 0.75 ହୁଏ!'
      },
      visual: '🔢',
      audioHint: {
        hi: '🔊 दशमलव संख्याओं को जोड़िए',
        en: '🔊 Add the decimal numbers',
        od: '🔊 ଦଶମିକ ସଂଖ୍ୟାଗୁଡ଼ିକୁ ଯୋଗ କର'
      },
      points: 35
    },
    {
      id: 'g6_s1',
      type: 'multiple-choice',
      subject: 'science',
      difficulty: 'hard',
      question: {
        hi: 'फोटोसिंथेसिस की प्रक्रिया में क्या बनता है?',
        en: 'What is produced during photosynthesis?',
        od: 'ଫଟୋସିନ୍ଥେସିସ୍ ପ୍ରକ୍ରିୟାରେ କଣ ତିଆରି ହୁଏ?'
      },
      options: {
        hi: ['ऑक्सीजन', 'कार्बन डाइऑक्साइड', 'नाइट्रोजन', 'हाइड्रोजन'],
        en: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        od: ['ଅମ୍ଳଜାନ', 'କାର୍ବନ ଡାଇଅକ୍ସାଇଡ', 'ନାଇଟ୍ରୋଜେନ', 'ହାଇଡ୍ରୋଜେନ']
      },
      correctAnswer: 0,
      explanation: {
        hi: 'फोटोसिंथेसिस में पौधे ऑक्सीजन बनाते हैं!',
        en: 'Plants produce oxygen during photosynthesis!',
        od: 'ଫଟୋସିନ୍ଥେସିସ୍‌ରେ ଗଛ ଅମ୍ଳଜାନ ତିଆରି କରେ!'
      },
      visual: '🌱',
      audioHint: {
        hi: '🔊 पौधे सूर्य की रोशनी में क्या बनाते हैं?',
        en: '🔊 What do plants make in sunlight?',
        od: '🔊 ସୂର୍ଯ୍ୟ କିରଣରେ ଗଛ କଣ ତିଆରି କରେ?'
      },
      points: 35
    }
  ]
};

// Generate additional questions for higher grades
export const generateAdvancedQuestions = (grade: string): Question[] => {
  const gradeNumber = parseInt(grade.replace('grade', ''));
  const baseQuestions: Question[] = [];

  if (gradeNumber >= 6) {
    // Add more complex math questions
    const num1 = Math.floor(Math.random() * 50) + 50;
    const num2 = Math.floor(Math.random() * 9) + 2;
    const correctAnswer = num1 * num2;
    
    const wrongAnswers = [
      correctAnswer + Math.floor(Math.random() * 20) + 1,
      correctAnswer - Math.floor(Math.random() * 20) - 1,
      correctAnswer + Math.floor(Math.random() * 30) + 10
    ];
    
    const allOptions = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    const correctIndex = allOptions.indexOf(correctAnswer);

    baseQuestions.push({
      id: `g${gradeNumber}_m_advanced`,
      type: 'multiple-choice',
      subject: 'math',
      difficulty: 'hard',
      question: {
        hi: `${num1} × ${num2} = ?`,
        en: `${num1} × ${num2} = ?`,
        od: `${num1} × ${num2} = ?`
      },
      options: {
        hi: allOptions.map(n => n.toString()),
        en: allOptions.map(n => n.toString()),
        od: allOptions.map(n => n.toString())
      },
      correctAnswer: correctIndex,
      explanation: {
        hi: `${num1} को ${num2} से गुणा करने पर ${correctAnswer} आता है!`,
        en: `${num1} multiplied by ${num2} equals ${correctAnswer}!`,
        od: `${num1} କୁ ${num2} ରେ ଗୁଣନ କଲେ ${correctAnswer} ଆସେ!`
      },
      visual: '🧮',
      audioHint: {
        hi: '🔊 गुणा की तालिका का उपयोग करिए',
        en: '🔊 Use multiplication tables',
        od: '🔊 ଗୁଣନ ସାରଣୀ ବ୍ୟବହାର କର'
      },
      points: 40
    });

    // Add science question for higher grades
    baseQuestions.push({
      id: `g${gradeNumber}_s_advanced`,
      type: 'true-false',
      subject: 'science',
      difficulty: 'hard',
      question: {
        hi: 'क्या प्रकाश ध्वनि से तेज़ यात्रा करता है?',
        en: 'Does light travel faster than sound?',
        od: 'ଆଲୋକ ଶବ୍ଦଠାରୁ ଦ୍ରୁତ ଗତିରେ ଯାତ୍ରା କରେ କି?'
      },
      correctAnswer: 0, // True
      explanation: {
        hi: 'हाँ! प्रकाश की गति ध्वनि की गति से बहुत तेज़ होती है।',
        en: 'Yes! Light travels much faster than sound.',
        od: 'ହଁ! ଆଲୋକର ଗତି ଶବ୍ଦର ଗତିଠାରୁ ବହୁତ ଦ୍ରୁତ।'
      },
      visual: '⚡',
      audioHint: {
        hi: '🔊 बिजली चमकने के बाद गर्जना क्यों सुनाई देती है?',
        en: '🔊 Why do we hear thunder after seeing lightning?',
        od: '🔊 ବିଜୁଳି ଦେଖିବା ପରେ ଗର୍ଜନ କାହିଁକି ଶୁଣାଯାଏ?'
      },
      points: 40
    });
  }

  return baseQuestions;
};

// Create fallback questions for any grade
const createFallbackQuestions = (gradeNumber: number): Question[] => {
  const difficulty = gradeNumber <= 2 ? 'easy' : gradeNumber <= 4 ? 'medium' : 'hard';
  const points = gradeNumber <= 2 ? 10 : gradeNumber <= 4 ? 20 : 30;
  
  return [
    {
      id: `g${gradeNumber}_fallback_m1`,
      type: 'multiple-choice',
      subject: 'math',
      difficulty,
      question: {
        hi: `${gradeNumber} + ${gradeNumber} = ?`,
        en: `${gradeNumber} + ${gradeNumber} = ?`,
        od: `${gradeNumber} + ${gradeNumber} = ?`
      },
      options: {
        hi: [`${gradeNumber * 2}`, `${gradeNumber * 2 + 1}`, `${gradeNumber * 2 - 1}`, `${gradeNumber * 2 + 2}`],
        en: [`${gradeNumber * 2}`, `${gradeNumber * 2 + 1}`, `${gradeNumber * 2 - 1}`, `${gradeNumber * 2 + 2}`],
        od: [`${gradeNumber * 2}`, `${gradeNumber * 2 + 1}`, `${gradeNumber * 2 - 1}`, `${gradeNumber * 2 + 2}`]
      },
      correctAnswer: 0,
      explanation: {
        hi: `${gradeNumber} और ${gradeNumber} मिलाकर ${gradeNumber * 2} होता है!`,
        en: `${gradeNumber} plus ${gradeNumber} equals ${gradeNumber * 2}!`,
        od: `${gradeNumber} ଏବଂ ${gradeNumber} ମିଶାଇଲେ ${gradeNumber * 2} ହୁଏ!`
      },
      visual: '🔢',
      audioHint: {
        hi: '🔊 संख्याओं को जोड़िए',
        en: '🔊 Add the numbers',
        od: '🔊 ସଂଖ୍ୟାଗୁଡ଼ିକୁ ଯୋଗ କର'
      },
      points
    },
    {
      id: `g${gradeNumber}_fallback_s1`,
      type: 'true-false',
      subject: 'science',
      difficulty,
      question: {
        hi: 'क्या सूर्य एक तारा है?',
        en: 'Is the Sun a star?',
        od: 'ସୂର୍ଯ୍ୟ ଏକ ତାରା କି?'
      },
      correctAnswer: 0, // True
      explanation: {
        hi: 'हाँ! सूर्य हमारे सौर मंडल का सबसे निकटतम तारा है।',
        en: 'Yes! The Sun is the nearest star to our solar system.',
        od: 'ହଁ! ସୂର୍ଯ୍ୟ ଆମର ସୌର ମଣ୍ଡଳର ସବୁଠାରୁ ନିକଟ ତାରା।'
      },
      visual: '☀️',
      audioHint: {
        hi: '🔊 सूर्य क्या है?',
        en: '🔊 What is the Sun?',
        od: '🔊 ସୂର୍ଯ୍ୟ କଣ?'
      },
      points
    }
  ];
};

export const getQuestionsForGrade = (grade: string, language: LanguageCode): (Question & { questionText?: string; optionsText?: string[]; explanationText?: string; audioHintText?: string })[] => {
  try {
    let gradeQuestions = questionBank[grade];
    
    if (!gradeQuestions) {
      // If no questions exist for this grade, create fallback questions
      const gradeNumber = parseInt(grade.replace('grade', '')) || 1;
      gradeQuestions = createFallbackQuestions(gradeNumber);
    }
    
    const additionalQuestions = generateAdvancedQuestions(grade);
    
    return [...gradeQuestions, ...additionalQuestions].map(question => {
      try {
        return {
          ...question,
          questionText: question.question?.[language] || question.question?.['en'] || 'Question loading...',
          optionsText: question.options?.[language] || question.options?.['en'] || [],
          explanationText: question.explanation?.[language] || question.explanation?.['en'] || 'Explanation available',
          audioHintText: question.audioHint?.[language] || question.audioHint?.['en'] || 'Audio hint available'
        };
      } catch (error) {
        console.error('Error processing question:', error);
        return {
          ...question,
          questionText: 'Question loading...',
          optionsText: [],
          explanationText: 'Explanation available',
          audioHintText: 'Audio hint available'
        };
      }
    });
  } catch (error) {
    console.error('Error in getQuestionsForGrade:', error);
    return [];
  }
};