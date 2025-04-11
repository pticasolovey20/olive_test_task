import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '@/translations/enTranslation.json';
import heTranslation from '@/translations/heTranslation.json';

i18next.use(initReactI18next).init({
	resources: {
		en: { translation: enTranslation },
		he: { translation: heTranslation },
	},

	lng: 'en',
	fallbackLng: 'en',

	interpolation: {
		escapeValue: false,
	},
});

export default i18next;
