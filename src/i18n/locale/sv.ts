import { Locale } from './Locale';

const sv: Locale = {
  errors: {
    reloadNewsError: "Couldn't reload the news",
    loadMoreNewsError: "Couldn't load more news",
    network: {
      description: 'description',
      suggestion: 'suggestion',
      title: 'title',
    },
  },
  tabs: {
    discover: 'Upptäck',
    news: 'Nyheter',
    people: 'Människor',
    quiz: 'Frågesport',
  },
  time: {
    year: '{{ value }}år ago',
    year_plural: '{{ value }}år ago',
    month: '{{ value }}mån ago',
    month_plural: '{{ value }}mån ago',
    day: '{{ value }}d ago',
    day_plural: '{{ value }}d ago',
    hour: '{{ value }}tim ago',
    hour_plural: '{{ value }}tim ago',
    minute: '{{ value }}min ago',
    minute_plural: '{{ value }}min ago',
    second: '{{ value }}sek ago',
    second_plural: '{{ value }}sek ago',
  },
  news: {
    emptyList: {
      description: 'description',
      suggestion: 'suggestion',
      title: 'title',
    },
    languages: {
      english: 'English',
      arabic: 'Arabic',
      mandarim: 'Mandarim',
      dutch: 'Dutch',
      french: 'French',
      german: 'German',
      hebrew: 'Hebrew',
      italian: 'Italian',
      norwegian: 'Norwegian',
      portuguese: 'Portuguese',
      russian: 'Russian',
      sami: 'Sami',
      spanish: 'Spanish',
    },
    filterMessage: 'Choose a language to filter the News',
  },
  quiz: {
    welcome: 'welcome',
    decription: 'decription',
    challenge: 'challenge',
    startButton: 'startButtonText',
    chooseQuestions: 'CHOOSE QUESTIONS',
    difficulty: 'Difficulty',
    category: 'Category',
    type: 'Type',
    numberOfQuestions: 'Number of Questions',
    setDifficulty: 'Set the difficulty of the questions',
    setCategory: 'Set the category of the questions',
    setType: 'Set the type of questions',
    modalSelectText: 'selectionar',
    categoryMixed: 'categoryMixed',
    categoryMovie: 'categoryMovie',
    categoryTv: 'categoryTv',
    difficultyEasy: 'difficultyEasy',
    difficultyMedium: 'difficultyMedium',
    difficultyHard: 'difficultyHard',
    difficultyMixed: 'difficultyMixed',
    typeMultiple: 'typeMultiple',
    typeBoolean: 'typeBoolean',
    typeMixed: 'typeMixed',
    playAgain: 'Play Again',
    playAgainDescription: 'Do you want to play the Trivia Challenge again?',
    answer: 'Answer',
    yourAnswer: 'Your Answer',
    scores: 'You scored',
    no: 'No',
    yes: 'Yes',
    noQuestionsAdviseTitle: 'Wow!',
    noQuestionsAdviseDescription:
      "Seems like we don't have enough questions for your taste today.",
    noQuestionsAdviseSuggestion: 'Try to change the search parameters.',
  },
};

export default sv;
