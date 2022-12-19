export interface Language {
  name: string;
  locale: string;
  flag: string;
}

export const Languages: Language[] = [
  { name: 'English', locale: 'en', flag: 'usa.webp'},
  { name: 'Español', locale: 'es', flag: 'spain.webp' },
];
