export type LanguageCode = 'hi' | 'en' | 'od';

export interface LanguageContent {
  // Common
  back: string;
  next: string;
  start: string;
  continue: string;
  complete: string;
  retry: string;
  submit: string;
  skip: string;
  
  // Navigation
  learn: string;
  play: string;
  ranking: string;
  reportNav: string;
  rewards: string;

  // Auth - Add this new section
  auth: {
    // Login
    welcomeBack: string;
    loginSubtitle: string;
    email: string;
    password: string;
    login: string;
    loggingIn: string;
    forgotPassword: string;
    noAccount: string;
    signUp: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    
    // Sign Up
    createAccount: string;
    signUpSubtitle: string;
    fullName: string;
    namePlaceholder: string;
    confirmPassword: string;
    confirmPasswordPlaceholder: string;
    role: string;
    selectRole: string;
    grade: string;
    selectGrade: string;
    schoolName: string;
    schoolPlaceholder: string;
    agreeToTerms: string;
    creatingAccount: string;
    alreadyHaveAccount: string;
    securityNotice: string;
    
    // Separate Auth Screens
    studentLogin: string;
    teacherLogin: string;
    studentLoginSubtitle: string;
    teacherLoginSubtitle: string;
    createStudentAccount: string;
    createTeacherAccount: string;
    studentSignUpSubtitle: string;
    teacherSignUpSubtitle: string;
    noStudentAccount: string;
    noTeacherAccount: string;
    alreadyHaveStudentAccount: string;
    alreadyHaveTeacherAccount: string;
    areYouTeacher: string;
    areYouStudent: string;
    schoolOptional: string;
    
    // Validation
    emailRequired: string;
    emailInvalid: string;
    passwordRequired: string;
    passwordMinLength: string;
    nameRequired: string;
    confirmPasswordRequired: string;
    passwordsNoMatch: string;
    roleRequired: string;
    gradeRequired: string;
    termsRequired: string;
    
    // Features
    features: {
      interactive: string;
      offline: string;
      audio: string;
    };
  };

  // Role Types
  student: string;
  teacher: string;
  
  // Grades
  grades: {
    grade1: string;
    grade2: string;
    grade3: string;
    grade4: string;
    grade5: string;
    grade6: string;
    grade7: string;
    grade8: string;
    grade9: string;
    grade10: string;
    grade11: string;
    grade12: string;
  };
  
  // Home Screen
  home: {
    greeting: string;
    todayProgress: string;
    lessonsComplete: string;
    dayStreak: string;
    dailyChallenge: string;
    mathProblems: string;
    recentAchievements: string;
    math: string;
    hindi: string;
    week: string;
    new: string;
  };

  // Daily Challenge
  dailyChallenge: {
    title: string;
    complete: string;
    timeLeft: string;
    problem: string;
    of: string;
    percentComplete: string;
    listenToQuestion: string;
    submitAnswer: string;
    nextProblem: string;
    completeChallenge: string;
    correct: string;
    wellDone: string;
    tryAgainNextTime: string;
    points: string;
    currentScore: string;
    pointsEarned: string;
    excellentWork: string;
    solvedProblems: string;
    outOf: string;
    correctly: string;
    score: string;
    challengeComplete: string;
    backToHome: string;
    viewLeaderboard: string;
    contexts: {
      marketShopping: string;
      farmManagement: string;
      festivalPreparation: string;
      transportation: string;
      communityEvents: string;
    };
  };
  
  // Lesson Screen
  lesson: {
    progress: string;
    mathematics: string;
    voiceHint: string;
    whichLargest: string;
    excellent: string;
    tryAgain: string;
    points: string;
    placeOrder: string;
    smallToLarge: string;
    dragInstructions: string;
  };
  
  // Rewards Screen
  rewards: {
    congratulations: string;
    starsEarned: string;
    stars: string;
    coins: string;
    days: string;
    level: string;
    recentAchievements: string;
    badgeCollection: string;
    earned: string;
    earnMorePoints: string;
  };
  
  // Leaderboard
  leaderboard: {
    title: string;
    yourPosition: string;
    inVillage: string;
    village: string;
    school: string;
    friends: string;
    you: string;
    points: string;
    dayStreak: string;
    weeklyChallenge: string;
    earnMostPoints: string;
    daysLeft: string;
  };
  
  // Report Screen
  report: {
    progressReport: string;
    class: string;
    age: string;
    inClass: string;
    lessons: string;
    time: string;
    average: string;
    weeklyProgress: string;
    subjectProgress: string;
    timeDistribution: string;
    recommendations: string;
    mathPerformance: string;
    hindiPractice: string;
    keepStreak: string;
  };
  
  // Offline Screen
  offline: {
    offlineMode: string;
    noInternet: string;
    lessonsAvailable: string;
    downloadedLessons: string;
    availableDownloads: string;
    downloadWhenOnline: string;
    download: string;
    waitingInternet: string;
    autoSync: string;
    progressSync: string;
  };

  // Language Selection
  languageSelection: {
    title: string;
    subtitle: string;
    selectLanguage: string;
    hindi: string;
    english: string;
    odia: string;
  };

  // Grade Selection
  gradeSelection: {
    title: string;
    subtitle: string;
    selectGrade: string;
    grade: string;
    class: string;
    preSchool: string;
    kindergarten: string;
    elementary: string;
    middle: string;
    high: string;
  };

  // Role Selection
  roleSelection: {
    title: string;
    subtitle: string;
    selectRole: string;
    student: string;
    teacher: string;
    studentDescription: string;
    teacherDescription: string;
    studentIcon: string;
    teacherIcon: string;
    accessRules: {
      student: string;
      teacher: string;
      explanation: string;
    };
  };

  // Teacher Dashboard
  teacherDashboard: {
    welcome: string;
    myClasses: string;
    totalStudents: string;
    activeAssignments: string;
    avgProgress: string;
    recentActivity: string;
    createLesson: string;
    viewReports: string;
    manageStudents: string;
    classPerformance: string;
    studentProgress: string;
    assignments: string;
    analytics: string;
  };

  // Onboarding
  onboarding: {
    step1: {
      title: string;
      description: string;
    };
    step2: {
      title: string;
      description: string;
    };
    step3: {
      title: string;
      description: string;
    };
  };
}

export const languages: Record<LanguageCode, LanguageContent> = {
  hi: {
    // Common
    back: 'वापस',
    next: 'आगे',
    start: 'शुरू करें',
    continue: 'जारी रखें',
    complete: 'पूरा',
    retry: 'फिर से',
    submit: 'जवाब दें',
    skip: 'छोड़ें',
    
    // Navigation
    learn: 'सीखें',
    play: 'खेलें',
    ranking: 'रैंकिंग',
    reportNav: 'रिपोर्ट',
    rewards: 'इनाम',
    
    // Auth - Add this new section
    auth: {
      // Login
      welcomeBack: 'पुनः स्वागत है!',
      loginSubtitle: 'अपने अकाउंट से लॉग इन करें',
      email: 'ईमेल',
      password: 'पासवर्ड',
      login: 'लॉग इन',
      loggingIn: 'लॉग इन हो रहा है...',
      forgotPassword: 'पासवर्ड भूल गया?',
      noAccount: 'अकाउंट नहीं है?',
      signUp: 'साइन अप करें',
      emailPlaceholder: 'ईमेल दर्ज करें',
      passwordPlaceholder: 'पासवर्ड दर्ज करें',
      
      // Sign Up
      createAccount: 'अकाउंट बनाएं',
      signUpSubtitle: 'नया अकाउंट बनाएं',
      fullName: 'पूरा नाम',
      namePlaceholder: 'नाम दर्ज करें',
      confirmPassword: 'पासवर्ड पुनः दर्ज करें',
      confirmPasswordPlaceholder: 'पासवर्ड पुनः दर्ज करें',
      role: 'भूमिका',
      selectRole: 'भूमिका चुनें',
      grade: 'कक्षा',
      selectGrade: 'कक्षा चुनें',
      schoolName: 'स्कूल का नाम',
      schoolPlaceholder: 'स्कूल का नाम दर्ज करें',
      agreeToTerms: 'नियम और शर्तों से सहमत हूं',
      creatingAccount: 'अकाउंट बनाया जा रहा है...',
      alreadyHaveAccount: 'पहले से अकाउंट है?',
      securityNotice: 'आपकी जानकारी सुरक्षित है',
      
      // Separate Auth Screens
      studentLogin: 'छात्र लॉगिन',
      teacherLogin: 'शिक्षक लॉगिन',
      studentLoginSubtitle: 'अपने छात्र अकाउंट से लॉग इन करें',
      teacherLoginSubtitle: 'अपने शिक्षक अकाउंट से लॉग इन करें',
      createStudentAccount: 'छात्र अकाउंट बनाएं',
      createTeacherAccount: 'शिक्षक अक��उंट बनाएं',
      studentSignUpSubtitle: 'नया छात्र अकाउंट बनाएं',
      teacherSignUpSubtitle: 'नया शिक्षक अकाउंट बनाएं',
      noStudentAccount: 'कोई छात्र अकाउंट नहीं है?',
      noTeacherAccount: 'कोई शिक्षक अकाउंट नहीं है?',
      alreadyHaveStudentAccount: 'पहले से छात्र अकाउंट है?',
      alreadyHaveTeacherAccount: 'पहले से शिक्षक अकाउंट है?',
      areYouTeacher: 'क्या आप शिक्षक हैं?',
      areYouStudent: 'क्या आप छात्र हैं?',
      schoolOptional: '(वैकल्पिक)',
      
      // Validation
      emailRequired: 'ईमेल आवश्यक है',
      emailInvalid: 'ईमेल सही नहीं है',
      passwordRequired: 'पासवर्ड आवश्यक है',
      passwordMinLength: 'पासवर्ड कम से कम 6 अक्षर का होना चाहिए',
      nameRequired: 'नाम आवश्यक है',
      confirmPasswordRequired: 'पासवर्ड दोबारा दर्ज करना आवश्यक है',
      passwordsNoMatch: 'पासवर्ड मेल नहीं खाते',
      roleRequired: 'भूमिका चुनना आवश्यक है',
      gradeRequired: 'कक्षा चुनना आवश्यक है',
      termsRequired: 'नियम और शर्तों से सहमति आवश्यक है',
      
      // Features
      features: {
        interactive: 'इंटरैक्टिव',
        offline: 'ऑफलाइन',
        audio: 'ऑडियो'
      }
    },
    
    // Role Types
    student: 'छात्र',
    teacher: 'शिक्षक',
    
    // Grades
    grades: {
      grade1: 'कक्षा 1',
      grade2: 'कक्षा 2',
      grade3: 'कक्षा 3',
      grade4: 'कक्षा 4',
      grade5: 'कक्षा 5',
      grade6: 'कक्षा 6',
      grade7: 'कक्षा 7',
      grade8: 'कक्षा 8',
      grade9: 'कक्षा 9',
      grade10: 'कक्षा 10',
      grade11: 'कक्षा 11',
      grade12: 'कक्षा 12'
    },
    
    // Home Screen
    home: {
      greeting: 'नमस्ते राहुल!',
      todayProgress: 'आज की प्रगति',
      lessonsComplete: '3 में से 2 पाठ पूरे',
      dayStreak: '7 दिन की streak!',
      dailyChallenge: 'आज की चुनौती',
      mathProblems: 'गणित के 5 सवाल हल करें',
      recentAchievements: 'हाल की उपलब्धियां',
      math: 'गणित',
      hindi: 'हिंदी',
      week: 'सप्ताह',
      new: 'नया'
    },

    // Daily Challenge
    dailyChallenge: {
      title: 'दैनिक चुनौती',
      complete: 'दैनिक चुनौती पूरी!',
      timeLeft: 'समय बचा',
      problem: 'प्रश्न',
      of: 'में से',
      percentComplete: '% पूरा',
      listenToQuestion: 'प्रश्न सुनें',
      submitAnswer: 'उत्तर जमा करें',
      nextProblem: 'अगला प्रश्न',
      completeChallenge: 'चुनौती पूरी करें',
      correct: 'सही!',
      wellDone: 'बहुत बढ़िया!',
      tryAgainNextTime: 'अगली बार फिर कोशिश करें!',
      points: 'अंक',
      currentScore: 'वर्तमान स्कोर',
      pointsEarned: 'अर्जित अंक',
      excellentWork: 'उत्कृष्ट कार्य!',
      solvedProblems: 'आपने हल किया',
      outOf: 'में से',
      correctly: 'सही तरीके से',
      score: 'स्कोर',
      challengeComplete: 'चुनौती पूरी!',
      backToHome: 'होम पर वापस',
      viewLeaderboard: 'लीडरबोर्ड देखें',
      contexts: {
        marketShopping: 'बाजार में खरीदारी',
        farmManagement: 'खेती प्रबंधन',
        festivalPreparation: 'त्योहार की तैयारी',
        transportation: 'परिवहन',
        communityEvents: 'सामुदायिक कार्यक्रम'
      }
    },
    
    // Lesson Screen
    lesson: {
      progress: 'प्रगति',
      mathematics: 'गणित',
      voiceHint: '🔊 Voice: Question explanation in Hindi',
      whichLargest: 'कौन सा सबसे बड़ा है?',
      excellent: 'बहुत बढ़िया!',
      tryAgain: 'फिर से कोशिश करें!',
      points: '+10 अंक',
      placeOrder: 'सही जगह पर रखें',
      smallToLarge: 'छोटे से बड़े क्रम में',
      dragInstructions: '🔊 Voice: Drag and drop instructions'
    },
    
    // Rewards Screen
    rewards: {
      congratulations: 'बधाई हो!',
      starsEarned: '+10 stars earned!',
      stars: 'तारे',
      coins: 'सिक्के',
      days: 'दिन',
      level: 'स्तर',
      recentAchievements: 'हाल की उपलब्धियां',
      badgeCollection: 'बैज संग्रह',
      earned: '✓ अर्जित',
      earnMorePoints: 'अधिक अंक कमाएं'
    },
    
    // Leaderboard
    leaderboard: {
      title: 'रैंकिंग',
      yourPosition: 'आपकी स्थिति',
      inVillage: 'गांव में',
      village: 'गांव',
      school: 'स्कूल',
      friends: 'दोस्त',
      you: '(आप)',
      points: 'अंक',
      dayStreak: 'दिन streak',
      weeklyChallenge: 'साप्ताहिक चुनौती',
      earnMostPoints: 'सबसे ज्यादा अंक कमाएं',
      daysLeft: '3 दिन बचे'
    },
    
    // Report Screen
    report: {
      progressReport: 'प्रगति रिपोर्ट',
      class: 'कक्षा 5',
      age: 'आयु: 11',
      inClass: 'कक्षा में',
      lessons: 'पाठ पूरे',
      time: 'समय',
      average: 'औसत',
      weeklyProgress: 'साप्ताहिक प्रगति',
      subjectProgress: 'विषयवार प्रगति',
      timeDistribution: 'समय वितरण',
      recommendations: 'सुझाव',
      mathPerformance: 'बहुत अच्छी प्रगति! गणित में और भी अच्छा प्रदर्शन।',
      hindiPractice: 'हिंदी में थोड़ा और अभ्यास करने की सलाह।',
      keepStreak: 'Daily streak बनाए रखें, बहुत बढ़िया!'
    },
    
    // Offline Screen
    offline: {
      offlineMode: 'ऑफलाइन मोड',
      noInternet: 'इंटरनेट उपलब्ध नहीं',
      lessonsAvailable: 'ऑफलाइन पाठ उपलब्ध हैं',
      downloadedLessons: 'डाउनलोड किए गए पाठ',
      availableDownloads: 'डाउनलोड के लिए उपलब्ध',
      downloadWhenOnline: 'इंटरनेट कनेक्शन वापस आने पर डाउनलोड करें',
      download: 'डा���नलोड',
      waitingInternet: 'इंटरनेट का इंतज़ार',
      autoSync: 'कनेक्शन वापस आने पर स्वतः sync हो जाएगा',
      progressSync: 'Your progress will sync automatically when connected'
    },

    // Language Selection
    languageSelection: {
      title: 'भाषा चुनें',
      subtitle: 'अपनी पसंदीदा भाषा चुनें',
      selectLanguage: 'भाषा चुनें',
      hindi: 'हिंदी',
      english: 'अंग्रेजी',
      odia: 'ओड़िया'
    },

    // Grade Selection
    gradeSelection: {
      title: 'कक्षा चुनें',
      subtitle: 'अपनी पसंदीदा कक्षा चुनें',
      selectGrade: 'कक्षा चुनें',
      grade: 'कक्षा',
      class: 'कक्षा',
      preSchool: 'प्री-स्कूल',
      kindergarten: 'बालवाड़ी',
      elementary: 'प्राथमिक',
      middle: 'माध्यमिक',
      high: 'उच्च'
    },

    // Role Selection
    roleSelection: {
      title: 'भूमिका चुनें',
      subtitle: 'अपनी पसंदीदा भूमिका चुनें',
      selectRole: 'भूमिका चुनें',
      student: 'छात्र',
      teacher: 'शिक्षक',
      studentDescription: 'छात्र के लिए',
      teacherDescription: 'शिक्षक के लिए',
      studentIcon: 'छात्र आइकन',
      teacherIcon: 'शिक्षक आइकन',
      accessRules: {
        student: 'छात्र पाठ सीख सकते हैं और अभ्यास कर सकते हैं',
        teacher: 'शिक्षक पाठ बना सकते हैं और छात्रों की प्रगति देख सकते हैं',
        explanation: 'आपकी भूमिका के अनुसार आपको अलग सुविधाएं मिलेंगी'
      }
    },

    // Teacher Dashboard
    teacherDashboard: {
      welcome: 'स्वागत है!',
      myClasses: 'मेरी कक्षाएं',
      totalStudents: 'कुल छात्र',
      activeAssignments: 'सक्रिय असाइनमेंट',
      avgProgress: 'औसत प्रगति',
      recentActivity: 'हाल की गतिविधियां',
      createLesson: 'पाठ बनाएं',
      viewReports: 'रिपोर्ट देखें',
      manageStudents: 'छात्रों का प्रबंधन',
      classPerformance: 'कक्षा का प्रदर्शन',
      studentProgress: 'छात्र की प्रगति',
      assignments: 'असाइनमेंट',
      analytics: 'आनालिटिक',
      createNewLesson: {
        title: 'नया पाठ बनाएं',
        basicInfo: 'बुनियादी जानकारी',
        content: 'सामग्री',
        activities: 'गतिविधियां',
        review: 'समीक्षा',
        lessonTitle: 'पाठ का शीर्षक',
        subject: 'विषय',
        grade: 'कक्षा',
        duration: 'अवधि (मिनट)',
        scheduledDate: 'निर्धारित तारीख',
        description: 'विवरण',
        objectives: 'सीखने के उद्देश्य',
        template: 'टेम्प्लेट चुनें',
        materials: 'सामग्री और संसाधन',
        assessment: 'मूल्यांकन विकल्प',
        previous: 'पिछला',
        next: 'अगला',
        saveAsDraft: 'मसौदे के रूप में सहेजें',
        publishLesson: 'पाठ प्रकाशित करें',
        addObjective: 'उद्देश्य जोड़ें',
        lessonSummary: 'पाठ सारांश',
        checklist: 'प्रकाशन से पहले जांच सूची'
      }
    },

    // Onboarding
    onboarding: {
      step1: {
        title: 'स्वागत है!',
        description: 'आइए शुरू करते हैं और सीखने की यात्रा शुरू करते हैं'
      },
      step2: {
        title: 'अपनी भाषा चुनें',
        description: 'अपनी पसंदीदा भाषा में सीखें'
      },
      step3: {
        title: 'तैयार हैं?',
        description: 'अब आप सीखना शुरू करने के लिए तैयार हैं!'
      }
    }
  },
  
  en: {
    // Common
    back: 'Back',
    next: 'Next',
    start: 'Start',
    continue: 'Continue',
    complete: 'Complete',
    retry: 'Retry',
    submit: 'Submit',
    skip: 'Skip',
    
    // Navigation
    learn: 'Learn',
    play: 'Play',
    ranking: 'Ranking',
    reportNav: 'Report',
    rewards: 'Rewards',
    
    // Auth - Add this new section
    auth: {
      // Login
      welcomeBack: 'Welcome back!',
      loginSubtitle: 'Log in to your account',
      email: 'Email',
      password: 'Password',
      login: 'Log in',
      loggingIn: 'Logging in...',
      forgotPassword: 'Forgot password?',
      noAccount: 'Don\'t have an account?',
      signUp: 'Sign up',
      emailPlaceholder: 'Enter email',
      passwordPlaceholder: 'Enter password',
      
      // Sign Up
      createAccount: 'Create Account',
      signUpSubtitle: 'Create a new account',
      fullName: 'Full Name',
      namePlaceholder: 'Enter name',
      confirmPassword: 'Confirm Password',
      confirmPasswordPlaceholder: 'Confirm Password',
      role: 'Role',
      selectRole: 'Select Role',
      grade: 'Grade',
      selectGrade: 'Select Grade',
      schoolName: 'School Name',
      schoolPlaceholder: 'Enter school name',
      agreeToTerms: 'Agree to terms',
      creatingAccount: 'Creating account...',
      alreadyHaveAccount: 'Log in here',
      securityNotice: 'Security Notice',
      
      // Separate Auth Screens
      studentLogin: 'Student Login',
      teacherLogin: 'Teacher Login',
      studentLoginSubtitle: 'Log in to your student account',
      teacherLoginSubtitle: 'Log in to your teacher account',
      createStudentAccount: 'Create Student Account',
      createTeacherAccount: 'Create Teacher Account',
      studentSignUpSubtitle: 'Create a new student account',
      teacherSignUpSubtitle: 'Create a new teacher account',
      noStudentAccount: 'No student account?',
      noTeacherAccount: 'No teacher account?',
      alreadyHaveStudentAccount: 'Already have a student account?',
      alreadyHaveTeacherAccount: 'Already have a teacher account?',
      areYouTeacher: 'Are you a teacher?',
      areYouStudent: 'Are you a student?',
      schoolOptional: '(Optional)',
      
      // Validation
      emailRequired: 'Email is required',
      emailInvalid: 'Email is invalid',
      passwordRequired: 'Password is required',
      passwordMinLength: 'Password must be at least 6 characters',
      nameRequired: 'Name is required',
      confirmPasswordRequired: 'Confirm password is required',
      passwordsNoMatch: 'Passwords do not match',
      roleRequired: 'Role is required',
      gradeRequired: 'Grade is required',
      termsRequired: 'Terms are required',
      
      // Features
      features: {
        interactive: 'Interactive',
        offline: 'Offline',
        audio: 'Audio'
      }
    },
    
    // Role Types
    student: 'Student',
    teacher: 'Teacher',
    
    // Grades
    grades: {
      grade1: 'Grade 1',
      grade2: 'Grade 2',
      grade3: 'Grade 3',
      grade4: 'Grade 4',
      grade5: 'Grade 5',
      grade6: 'Grade 6',
      grade7: 'Grade 7',
      grade8: 'Grade 8',
      grade9: 'Grade 9',
      grade10: 'Grade 10',
      grade11: 'Grade 11',
      grade12: 'Grade 12'
    },
    
    // Home Screen
    home: {
      greeting: 'Hello Rahul!',
      todayProgress: "Today's Progress",
      lessonsComplete: '2 of 3 lessons complete',
      dayStreak: '7 day streak!',
      dailyChallenge: 'Daily Challenge',
      mathProblems: 'Solve 5 math problems',
      recentAchievements: 'Recent Achievements',
      math: 'Math',
      hindi: 'Hindi',
      week: 'Week',
      new: 'New'
    },

    // Daily Challenge
    dailyChallenge: {
      title: 'Daily Challenge',
      complete: 'Daily Challenge Complete!',
      timeLeft: 'Time Left',
      problem: 'Problem',
      of: 'of',
      percentComplete: '% Complete',
      listenToQuestion: 'Listen to question',
      submitAnswer: 'Submit Answer',
      nextProblem: 'Next Problem',
      completeChallenge: 'Complete Challenge',
      correct: 'Correct!',
      wellDone: 'Well done!',
      tryAgainNextTime: 'Try again next time!',
      points: 'points',
      currentScore: 'Current Score',
      pointsEarned: 'Points Earned',
      excellentWork: 'Excellent Work!',
      solvedProblems: 'You solved',
      outOf: 'out of',
      correctly: 'problems correctly',
      score: 'Score',
      challengeComplete: 'Challenge Complete!',
      backToHome: 'Back to Home',
      viewLeaderboard: 'View Leaderboard',
      contexts: {
        marketShopping: 'Market Shopping',
        farmManagement: 'Farm Management',
        festivalPreparation: 'Festival Preparation',
        transportation: 'Transportation',
        communityEvents: 'Community Events'
      }
    },
    
    // Lesson Screen
    lesson: {
      progress: 'Progress',
      mathematics: 'Mathematics',
      voiceHint: '🔊 Voice: Question explanation in English',
      whichLargest: 'Which is the largest?',
      excellent: 'Excellent!',
      tryAgain: 'Try Again!',
      points: '+10 points',
      placeOrder: 'Place in correct order',
      smallToLarge: 'From small to large',
      dragInstructions: '🔊 Voice: Drag and drop instructions'
    },
    
    // Rewards Screen
    rewards: {
      congratulations: 'Congratulations!',
      starsEarned: '+10 stars earned!',
      stars: 'Stars',
      coins: 'Coins',
      days: 'Days',
      level: 'Level',
      recentAchievements: 'Recent Achievements',
      badgeCollection: 'Badge Collection',
      earned: '✓ Earned',
      earnMorePoints: 'Earn More Points'
    },
    
    // Leaderboard
    leaderboard: {
      title: 'Leaderboard',
      yourPosition: 'Your Position',
      inVillage: 'In Village',
      village: 'Village',
      school: 'School',
      friends: 'Friends',
      you: '(You)',
      points: 'Points',
      dayStreak: 'day streak',
      weeklyChallenge: 'Weekly Challenge',
      earnMostPoints: 'Earn the most points',
      daysLeft: '3 days left'
    },
    
    // Report Screen
    report: {
      progressReport: 'Progress Report',
      class: 'Class 5',
      age: 'Age: 11',
      inClass: 'In Class',
      lessons: 'Lessons',
      time: 'Time',
      average: 'Average',
      weeklyProgress: 'Weekly Progress',
      subjectProgress: 'Subject Progress',
      timeDistribution: 'Time Distribution',
      recommendations: 'Recommendations',
      mathPerformance: 'Great progress! Excellent performance in Math.',
      hindiPractice: 'Suggest more practice in Hindi.',
      keepStreak: 'Keep the daily streak, excellent work!'
    },
    
    // Offline Screen
    offline: {
      offlineMode: 'Offline Mode',
      noInternet: 'No Internet Connection',
      lessonsAvailable: 'Offline lessons available',
      downloadedLessons: 'Downloaded Lessons',
      availableDownloads: 'Available Downloads',
      downloadWhenOnline: 'Download when internet returns',
      download: 'Download',
      waitingInternet: 'Waiting for Internet',
      autoSync: 'Will sync automatically when connected',
      progressSync: 'Your progress will sync automatically when connected'
    },

    // Language Selection
    languageSelection: {
      title: 'Choose Language',
      subtitle: 'Select your preferred language',
      selectLanguage: 'Select Language',
      hindi: 'Hindi',
      english: 'English',
      odia: 'Odia'
    },

    // Grade Selection
    gradeSelection: {
      title: 'Select Grade',
      subtitle: 'Choose your preferred grade',
      selectGrade: 'Select Grade',
      grade: 'Grade',
      class: 'Class',
      preSchool: 'Pre-School',
      kindergarten: 'Kindergarten',
      elementary: 'Elementary',
      middle: 'Middle',
      high: 'High'
    },

    // Role Selection
    roleSelection: {
      title: 'Choose Role',
      subtitle: 'Select your preferred role',
      selectRole: 'Select Role',
      student: 'Student',
      teacher: 'Teacher',
      studentDescription: 'For students',
      teacherDescription: 'For teachers',
      studentIcon: 'Student Icon',
      teacherIcon: 'Teacher Icon',
      accessRules: {
        student: 'Students can learn lessons and practice exercises',
        teacher: 'Teachers can create lessons and track student progress',
        explanation: 'You will get different features based on your role'
      }
    },

    // Teacher Dashboard
    teacherDashboard: {
      welcome: 'Welcome!',
      myClasses: 'My Classes',
      totalStudents: 'Total Students',
      activeAssignments: 'Active Assignments',
      avgProgress: 'Average Progress',
      recentActivity: 'Recent Activity',
      createLesson: 'Create Lesson',
      viewReports: 'View Reports',
      manageStudents: 'Manage Students',
      classPerformance: 'Class Performance',
      studentProgress: 'Student Progress',
      assignments: 'Assignments',
      analytics: 'Analytics',
      createNewLesson: {
        title: 'Create New Lesson',
        basicInfo: 'Basic Information',
        content: 'Content',
        activities: 'Activities',
        review: 'Review',
        lessonTitle: 'Lesson Title',
        subject: 'Subject',
        grade: 'Grade',
        duration: 'Duration (minutes)',
        scheduledDate: 'Scheduled Date',
        description: 'Description',
        objectives: 'Learning Objectives',
        template: 'Choose Template',
        materials: 'Materials & Resources',
        assessment: 'Assessment Options',
        previous: 'Previous',
        next: 'Next',
        saveAsDraft: 'Save as Draft',
        publishLesson: 'Publish Lesson',
        addObjective: 'Add Objective',
        lessonSummary: 'Lesson Summary',
        checklist: 'Pre-Publishing Checklist'
      }
    },

    // Onboarding
    onboarding: {
      step1: {
        title: 'Welcome!',
        description: 'Let\'s get started and begin your learning journey'
      },
      step2: {
        title: 'Choose Your Language',
        description: 'Learn in your preferred language'
      },
      step3: {
        title: 'Ready to Go?',
        description: 'You\'re all set to start learning!'
      }
    }
  },
  
  od: {
    // Common
    back: 'ପଛକୁ',
    next: 'ଆଗକୁ',
    start: 'ଆରମ୍ଭ କର',
    continue: 'ଚାଲୁ ରଖ',
    complete: 'ସମ୍ପୂର୍ଣ୍ଣ',
    retry: 'ପୁନଃ ଚେଷ୍ଟା',
    submit: 'ଉତ୍ତର ଦିଅ',
    skip: 'ଛାଡ଼',
    
    // Navigation
    learn: 'ଶିଖ',
    play: 'ଖେଳ',
    ranking: 'ମାନ୍ୟତା',
    reportNav: 'ରିପୋର୍ଟ',
    rewards: 'ପୁରସ୍କାର',
    
    // Auth - Add this new section
    auth: {
      // Login
      welcomeBack: 'ପୁଣି ସ୍ୱାଗତ!',
      loginSubtitle: 'ଆପଣଙ୍କ ଆକାଉଣ୍ଟରେ ଲଗଇନ କରନ୍ତୁ',
      email: 'ଇମେଲ',
      password: 'ପାସୱର୍ଡ',
      login: 'ଲଗଇନ',
      loggingIn: 'ଲଗଇନ ହେଉଛି...',
      forgotPassword: 'ପାସୱର୍ଡ ଭୁଲିଗଲେ?',
      noAccount: 'ଆକାଉଣ୍ଟ ନାହିଁ?',
      signUp: 'ସାଇନ ଅପ କରନ୍ତୁ',
      emailPlaceholder: 'ଇମେଲ ଦିଅନ୍ତୁ',
      passwordPlaceholder: 'ପାସୱର୍ଡ ଦିଅନ୍ତୁ',
      
      // Sign Up
      createAccount: 'ଆକାଉଣ୍ଟ ତିଆରି କରନ୍ତୁ',
      signUpSubtitle: 'ନୂଆ ଆକାଉଣ୍ଟ ତିଆରି କରନ୍ତୁ',
      fullName: 'ପୂରା ନାମ',
      namePlaceholder: 'ନାମ ଦିଅନ୍ତୁ',
      confirmPassword: 'ପାସୱର୍ଡ ନିଶ୍ଚିତ କରନ୍ତୁ',
      confirmPasswordPlaceholder: 'ପାସୱର୍ଡ ପୁଣି ଦିଅନ୍ତୁ',
      role: 'ଭୂମିକା',
      selectRole: 'ଭୂମିକା ବାନ୍ତୁ',
      grade: 'କକ୍ଷା',
      selectGrade: 'କକ୍ଷା ବାନ୍ତୁ',
      schoolName: 'ସ୍କୁଲର ନାମ',
      schoolPlaceholder: 'ସ୍କୁଲର ନାମ ଦିଅନ୍ତୁ',
      agreeToTerms: 'ନିୟମାବଳୀ ସହିତ ସହମତ',
      creatingAccount: 'ଆକାଉଣ୍ଟ ତିଆରି ହେଉଛି...',
      alreadyHaveAccount: 'ଆକାଉଣ୍ଟ ଅଛି?',
      securityNotice: 'ସୁରକ୍ଷା ବିଜ୍ଞପ୍ତି',
      
      // Separate Auth Screens
      studentLogin: 'ଛାତ୍ର ଲୋଗଇନ',
      teacherLogin: 'ଶିକ୍ଷକ ଲୋଗଇନ',
      studentLoginSubtitle: 'ଛାତ୍ର ଅକାଉଣ୍ଟରେ ଲଗଇନ କରନ୍ତୁ',
      teacherLoginSubtitle: 'ଶିକ୍ଷକ ଅକାଉଣ୍ଟରେ ଲଗଇନ କରନ୍ତୁ',
      createStudentAccount: 'ଛାତ୍ର ଅକାଉଣ୍ଟ ତିଆରି କରନ୍ତୁ',
      createTeacherAccount: 'ଶିକ୍ଷକ ଅକାଉଣ୍ଟ ତିଆରି କରନ୍ତୁ',
      studentSignUpSubtitle: 'ନୂଆ ଛାତ୍ର ଅକାଉଣ୍ଟ ତିଆରି କରନ୍ତୁ',
      teacherSignUpSubtitle: 'ନୂଆ ଶିକ୍ଷକ ଅକାଉଣ୍ଟ ତିଆରି କରନ୍ତୁ',
      noStudentAccount: 'କେହି ଛାତ୍ର ଅକାଉଣ୍ଟ ନାହିଁ?',
      noTeacherAccount: 'କେହି ଶିକ୍ଷକ ଅକାଉଣ୍ଟ ନାହିଁ?',
      alreadyHaveStudentAccount: 'ଛାତ୍ର ଅକାଉଣ୍ଟ ଅଛି?',
      alreadyHaveTeacherAccount: 'ଶିକ୍ଷକ ଅକାଉଣ୍ଟ ଅଛି?',
      areYouTeacher: 'ତୁମେ ଶିକ୍ଷକ ହେବ?',
      areYouStudent: 'ତୁମେ ଛାତ୍ର ହେବ?',
      schoolOptional: '(ଅନ୍ତର୍ଗତ)',
      
      // Validation
      emailRequired: 'ଇମେଲ ଆବଶ୍ୟକ',
      emailInvalid: 'ଇମେଲ ସଠିକ ନୁହେଁ',
      passwordRequired: 'ପାସୱର୍ଡ ଆବଶ୍ୟକ',
      passwordMinLength: 'ପାସୱର୍ଡ ଅତିକମରେ 6 ଅକ୍ଷରର ହେବା ଉଚିତ',
      nameRequired: 'ନାମ ଆବଶ୍ୟକ',
      confirmPasswordRequired: 'ପାସୱର୍ଡ ନିଶ୍ଚିତ କରିବା ଆବଶ୍ୟକ',
      passwordsNoMatch: 'ପାସୱର୍ଡ ମେଳ ଖାଉନାହିଁ',
      roleRequired: 'ଭୂମିକା ବାଛିବା ଆବଶ୍ୟକ',
      gradeRequired: 'କକ୍ଷା ବାଛିବା ଆବଶ୍ୟକ',
      termsRequired: 'ନିୟମାବଳୀ ସ୍ଵୀକାର କରିବା ଆବଶ୍ୟକ',
      
      // Features
      features: {
        interactive: 'ଇଣ୍ଟରାକ୍ଟିଭ',
        offline: 'ଅଫଲାଇନ',
        audio: 'ଅଡିଓ'
      }
    },
    
    // Role Types
    student: 'ଛାତ୍ର',
    teacher: 'ଶିକ୍ଷକ',
    
    // Grades
    grades: {
      grade1: 'କକ୍ଷା 1',
      grade2: 'କକ୍ଷା 2',
      grade3: 'କକ୍ଷା 3',
      grade4: 'କକ୍ଷା 4',
      grade5: 'କକ୍ଷା 5',
      grade6: 'କକ୍ଷା 6',
      grade7: 'କକ୍ଷା 7',
      grade8: 'କକ୍ଷା 8',
      grade9: 'କକ୍ଷା 9',
      grade10: 'କକ୍ଷା 10',
      grade11: 'କକ୍ଷା 11',
      grade12: 'କକ୍ଷା 12'
    },
    
    // Home Screen
    home: {
      greeting: 'ନମସ୍କାର ରାହୁଲ!',
      todayProgress: 'ଆଜିର ପ୍ରଗତି',
      lessonsComplete: '3 ରୁ 2 ଟି ପାଠ ସମ୍ପୂର୍ଣ୍ଣ',
      dayStreak: '7 ଦିନର streak!',
      dailyChallenge: 'ଆଜିର ଚ୍ୟାଲେଞ୍ଜ',
      mathProblems: '5 ଟି ଗଣିତ ସମସ୍ୟା ସମାଧାନ କର',
      recentAchievements: 'ସାମ୍ପ୍ରତିକ ସଫଳତା',
      math: 'ଗଣିତ',
      hindi: 'ହିନ୍ଦୀ',
      week: 'ସପ୍ତାହ',
      new: 'ନୂଆ'
    },

    // Daily Challenge
    dailyChallenge: {
      title: 'ଦୈନିକ ଚ୍ୟାଲେଞ୍ଜ',
      complete: 'ଦୈନିକ ଚ୍ୟାଲେଞ୍ଜ ସମ୍ପୂର୍ଣ୍ଣ!',
      timeLeft: 'ସମୟ ବାକି',
      problem: 'ସମସ୍ୟା',
      of: 'ର',
      percentComplete: '% ସମ୍ପୂର୍ଣ୍ଣ',
      listenToQuestion: 'ପ୍ରଶ୍ନ ଶୁଣ',
      submitAnswer: 'ଉତ୍ତର ଦିଅ',
      nextProblem: 'ପରବର୍ତ୍ତୀ ସମସ୍ୟା',
      completeChallenge: 'ଚ୍ୟାଲେଞ୍ଜ ସମ୍ପୂର୍ଣ୍ଣ କର',
      correct: 'ସଠିକ!',
      wellDone: 'ବହୁତ ଭଲ!',
      tryAgainNextTime: 'ପରବର୍ତ୍ତୀ ଥର ପୁଣି ଚେଷ୍ଟା କର!',
      points: 'ପଏଣ୍ଟ',
      currentScore: 'ବର୍ତ୍ତମାନ ସ୍କୋର',
      pointsEarned: 'ଅର୍ଜିତ ପଏଣ୍ଟ',
      excellentWork: 'ଉତ୍କୃଷ୍ଟ କାମ!',
      solvedProblems: 'ତୁମେ ସମାଧାନ କରିଛ',
      outOf: 'ରୁ',
      correctly: 'ସଠିକ ଭାବରେ',
      score: 'ସ୍କୋର',
      challengeComplete: 'ଚ୍ୟାଲେଞ୍ଜ ସମ୍ପୂର୍ଣ୍ଣ!',
      backToHome: 'ହୋମକୁ ଫେରିଯାଅ',
      viewLeaderboard: 'ଲିଡରବୋର୍ଡ ଦେଖ',
      contexts: {
        marketShopping: 'ବଜାର କିଣାକାଟା',
        farmManagement: 'କୃଷି ପ୍ରବନ୍ଧନ',
        festivalPreparation: 'ପର୍ବର ପ୍ରସ୍ତୁତି',
        transportation: 'ପରିବହନ',
        communityEvents: 'ସମ୍ପ୍ରଦାୟିକ ଅନୁଷ୍ଠାନ'
      }
    },
    
    // Lesson Screen
    lesson: {
      progress: 'ପ୍ରଗତି',
      mathematics: 'ଗଣିତ',
      voiceHint: '🔊 Voice: Question explanation in Odia',
      whichLargest: 'କେଉଁଟା ସବୁଠୁ ବଡ଼?',
      excellent: 'ବହୁତ ଭଲ!',
      tryAgain: 'ପୁନଃ ଚେଷ୍ଟା କର!',
      points: '+10 ଅଙ୍କ',
      placeOrder: 'ସଠିକ୍ ସ୍ଥାନରେ ରଖ',
      smallToLarge: 'ଛୋଟରୁ ବଡ଼ କ୍ରମରେ',
      dragInstructions: '🔊 Voice: Drag and drop instructions'
    },
    
    // Rewards Screen
    rewards: {
      congratulations: 'ଅଭିନନ୍ଦନ!',
      starsEarned: '+10 stars earned!',
      stars: 'ତାରକା',
      coins: 'ମୁଦ୍ରା',
      days: 'ଦିନ',
      level: 'ସ୍ତର',
      recentAchievements: 'ସାମ୍ପ୍ରତିକ ସଫଳତା',
      badgeCollection: 'ବ୍ୟାଜ ସଂଗ୍ରହ',
      earned: '✓ ଅର୍ଜିତ',
      earnMorePoints: 'ଅଧିକ ଅଙ୍କ ଅର୍ଜନ କର'
    },
    
    // Leaderboard
    leaderboard: {
      title: 'ମାନ୍ୟତା ତାଲିକା',
      yourPosition: 'ତୁମର ସ୍ଥାନ',
      inVillage: 'ଗାଁରେ',
      village: 'ଗାଁ',
      school: 'ବିଦ୍ୟାଳୟ',
      friends: 'ବନ୍ଧୁ',
      you: '(ତୁମେ)',
      points: 'ଅଙ୍କ',
      dayStreak: 'ଦିନ streak',
      weeklyChallenge: 'ସାପ୍ତାହିକ ଚ୍ୟାଲେଞ୍ଜ',
      earnMostPoints: 'ସର୍ବାଧିକ ଅଙ୍କ ଅର୍ଜନ କର',
      daysLeft: '3 ଦିନ ବାକି'
    },
    
    // Report Screen
    report: {
      progressReport: 'ପ୍ରଗତି ରିପୋର୍ଟ',
      class: 'କକ୍ଷା 5',
      age: 'ବୟସ: 11',
      inClass: 'କକ୍ଷାରେ',
      lessons: 'ପାଠ ସମାପ୍ତ',
      time: 'ସମୟ',
      average: 'ହାରାହାରି',
      weeklyProgress: 'ସାପ୍ତାହିକ ପ୍ରଗତି',
      subjectProgress: 'ବିଷୟ ଅନୁସାରେ ପ୍ରଗତି',
      timeDistribution: 'ସମୟ ବଣ୍ଟନ',
      recommendations: 'ପରାମର୍ଶ',
      mathPerformance: 'ବହୁତ ଭଲ ପ୍ରଗତି! ଗଣିତରେ ଉତ୍କୃଷ୍ଟ ପ୍ରଦର୍ଶନ।',
      hindiPractice: 'ହିନ୍ଦୀରେ ଅଧିକ ଅଭ୍ୟାସ କରିବାର ପରାମର୍ଶ।',
      keepStreak: 'ଦୈନିକ streak ବଜା୯ ରଖ, ବହୁତ ଭଲ!'
    },
    
    // Offline Screen
    offline: {
      offlineMode: 'ଅଫଲାଇନ ମୋଡ',
      noInternet: 'ଇଣ୍ଟରନେଟ ଉପଲବ୍ଧ ନାହିଁ',
      lessonsAvailable: 'ଅଫଲାଇନ ପାଠ ଉପଲବ୍ଧ',
      downloadedLessons: 'ଡାଉନଲୋଡ ହୋଇଥିବା ପାଠ',
      availableDownloads: 'ଡାଉନଲୋଡ ପାଇଁ ଉପଲବ୍ଧ',
      downloadWhenOnline: 'ଇଣ୍ଟରନେଟ ଫେରିଲେ ଡାଉନଲୋଡ କର',
      download: 'ଡାଉନଲୋଡ',
      waitingInternet: 'ଇଣ୍ଟରନେଟର ଅପେକ୍ଷା',
      autoSync: 'ସଂଯୋଗ ଫେରିଲେ ସ୍ୱୟଂଚାଳିତ sync ହେବ',
      progressSync: 'Your progress will sync automatically when connected'
    },

    // Language Selection
    languageSelection: {
      title: 'ଭାଷା ବା',
      subtitle: 'ତୁମର ପସନ୍ଦର ଭାଷା ବା',
      selectLanguage: 'ଭାଷା ବା',
      hindi: 'ହିନ୍ଦୀ',
      english: 'ଇଂରାଜୀ',
      odia: 'ଓଡ଼ିଆ'
    },

    // Grade Selection
    gradeSelection: {
      title: 'କକ୍ଷା ବା',
      subtitle: 'ତୁମର ପସନ୍ଦର କକ୍ଷା ବା',
      selectGrade: 'କକ୍ଷା ବା',
      grade: 'କକ୍ଷା',
      class: 'କକ୍ଷା',
      preSchool: 'ପ୍ରୀ-ସ୍କୂଲ',
      kindergarten: 'ଶିଶୁ ଶିକ୍ଷା',
      elementary: 'ପ୍ରାଥମିକ',
      middle: 'ମାଧ୍ୟମିକ',
      high: 'ଉଚ୍ଚ'
    },

    // Role Selection
    roleSelection: {
      title: 'ଭୂମିକା ବା',
      subtitle: 'ତୁମର ପସନ୍ଦର ଭୂମିକା ବା',
      selectRole: 'ଭୂମିକା ବା',
      student: 'ଛାତ୍ର',
      teacher: 'ଶିକ୍ଷକ',
      studentDescription: 'ଛାତ୍ର କେତେ',
      teacherDescription: 'ଶିକ୍ଷକ କେତେ',
      studentIcon: 'ଛାତ୍ର ଆଇକନ',
      teacherIcon: 'ଶିକ୍ଷକ ଆଇକନ',
      accessRules: {
        student: 'ଛାତ୍ରମାନେ ପାଠ ଶିଖି ପାରିବେ ଏବଂ ଅଭ୍ୟାସ କରି ପାରିବେ',
        teacher: 'ଶିକ୍ଷକମାନେ ପାଠ ତିଆରି କରି ପାରିବେ ଏବଂ ଛାତ୍ରଙ୍କ ପ୍ରଗତି ଦେଖି ପାରିବେ',
        explanation: 'ତୁମର ଭୂମିକା ଅନୁସାରେ ତୁମକୁ ଅଲଗା ସୁବିଧା ମିଳିବ'
      }
    },

    // Teacher Dashboard
    teacherDashboard: {
      welcome: 'ସ୍ୱାଗତ!',
      myClasses: 'ମୋର କକ୍ଷାଗୁଡ଼ିକ',
      totalStudents: 'କୁଲ ଛାତ୍ରଗୁଡ଼ିକ',
      activeAssignments: 'କ୍ରିୟାମାନ ଅସାଇନମେନ୍ଟ',
      avgProgress: 'ମାନାବିକ ପ୍ରଗତି',
      recentActivity: 'ହାଲିକ ଗତିବିଧି',
      createLesson: 'ପାଠ ତିଆରି କର',
      viewReports: 'ରିପୋର୍ଟ ଦେଖ',
      manageStudents: 'ଛାତ୍ରଗୁଡ଼ିକ ପ୍ରବନ୍ଧନ କର',
      classPerformance: 'କକ୍ଷା ପ୍ରଦର୍ଶନ',
      studentProgress: 'ଛାତ୍ର ପ୍ରଗତି',
      assignments: 'ଅସାଇନମେନ୍ଟ',
      analytics: 'ଆନାଲିଟିକ'
    },

    // Onboarding
    onboarding: {
      step1: {
        title: 'ସ୍ୱାଗତ!',
        description: 'ଆସ ଆରମ୍ଭ କରିବା ଏବଂ ଶିକ୍ଷା ଯାତ୍ରା ଆରମ୍ଭ କରିବା'
      },
      step2: {
        title: 'ତୁମର ଭାଷା ବା',
        description: 'ତୁମର ପସନ୍ଦର ଭାଷାରେ ଶିଖ'
      },
      step3: {
        title: 'ପ୍ରସ୍ତୁତ?',
        description: 'ତୁମେ ଶିଖିବା ଆରମ୍ଭ କରିବାକୁ ପ୍ରସ୍ତୁତ!'
      }
    }
  }
};