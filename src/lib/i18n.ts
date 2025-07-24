import zhMessages from '../../messages/zh.json';
import enMessages from '../../messages/en.json';

export type Locale = 'zh' | 'en';

export const messages = {
  zh: zhMessages,
  en: enMessages,
};

export function getMessages(locale: Locale) {
  return messages[locale] || messages.en;
} 