import { Platform, NativeModules } from 'react-native';

import {
  getItemFromStorage,
  persistItemInStorage,
} from 'utils/async-storage-adapter/AsyncStorageAdapter';
import CONSTANTS from 'utils/constants';

// Android format: x_Y
// iOS format: x-Y
const normalizeLanguage = (language: string): string => {
  const languagesMapping = {
    // Portuguese (Brazil)
    'pt-BR': 'ptBR',
    pt_BR: 'ptBR',

    // Portuguese (Portugal)
    'pt-PT': 'ptPT',
    pt_PT: 'ptPT',

    // English (USA)
    'en-US': 'en',
    en_US: 'en',

    // Spanish (Spain)
    'es-US': 'es',
    es_ES: 'es',

    // Swedish (Sweden)
    'sv-US': 'sv',
    sv_SE: 'sv',
  };

  const normalizedLanguage = languagesMapping[language] || CONSTANTS.VALUES.FALLBACK_LANGUAGE;

  return normalizedLanguage;
};

const detectDeviceLanguage = (): string => {
  const deviceLanguage = Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
        || NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;

  return deviceLanguage;
};

const handleLanguageDetection = async (): Promise<string> => {
  const hasLanguageSet = await getItemFromStorage<string, string>(
    CONSTANTS.KEYS.LANGUAGE,
    '',
  );

  if (hasLanguageSet) {
    return hasLanguageSet;
  }

  const deviceLanguage = detectDeviceLanguage();

  const languageToUse = normalizeLanguage(deviceLanguage);

  await persistItemInStorage(CONSTANTS.KEYS.LANGUAGE, languageToUse);

  return languageToUse;
};

export default handleLanguageDetection;
