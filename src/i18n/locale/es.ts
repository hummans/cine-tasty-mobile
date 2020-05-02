import { Locale } from './Locale';

const es: Locale = {
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
    discover: 'Descubrir',
    news: 'Noticias',
    people: 'Personas',
    quiz: 'Examen',
  },
  time: {
    year: '{{ value }}y ago',
    year_plural: '{{ value }}y ago',
    month: '{{ value }}m ago',
    month_plural: '{{ value }}m ago',
    day: '{{ value }}d ago',
    day_plural: '{{ value }}d ago',
    hour: '{{ value }}h ago',
    hour_plural: '{{ value }}h ago',
    minute: '{{ value }}m ago',
    minute_plural: '{{ value }}m ago',
    second: '{{ value }}s ago',
    second_plural: '{{ value }}s ago',
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
    startButton: 'START QUIZ',
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

export default es;
