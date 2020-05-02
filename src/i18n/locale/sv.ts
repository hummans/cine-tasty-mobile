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
  },
};

export default sv;
