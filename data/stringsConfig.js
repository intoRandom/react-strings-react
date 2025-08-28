import { createStrings } from 'react-strings';

import en from '@/data/messages/en.js';

const initString = createStrings({
	strings: { en: { data: en, direction: 'ltr' } },
	languages: { es: { loader: () => import('@/data/messages/es.json') } },
	browser: true,
	storage: true,
	bgColor: 'white',
	duration: 200,
});

export const { StringsProvider, useStrings } = initString;
