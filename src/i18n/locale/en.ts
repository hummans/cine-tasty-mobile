import { Locale } from './Locale';

const en: Locale = {
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
    discover: 'Discover',
    news: 'News',
    people: 'People',
    quiz: 'Quiz',
  },
  time: {
    year: '{{ value }}yr ago',
    year_plural: '{{ value }}yr ago',
    month: '{{ value }}mth ago',
    month_plural: '{{ value }}mth ago',
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
    welcome: 'Welcome to the Cine-Tasty Quiz!',
    decription:
      'Want to test your knowledge about the world of cinema?\n\nYou can choose the type (true/false or multi-choice) and how many questions you want to answer.',
    challenge: 'Can you score 100%?',
    startButtonText: 'CHOOSE QUESTIONS',
  },
};

export default en;
