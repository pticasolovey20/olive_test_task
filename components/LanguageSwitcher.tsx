import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const handleLanguageChange = (newLanguage: string) => i18n.changeLanguage(newLanguage);

	return (
		<Button
			size='small'
			variant='outlined'
			onClick={() => handleLanguageChange(i18n.language === 'en' ? 'he' : 'en')}
			sx={{
				position: 'absolute',
				top: '20px',
				right: '20px',
				padding: '10px',

				zIndex: 100,
			}}
		>
			{i18n.language === 'en' ? 'עברית' : 'English'}
		</Button>
	);
};

export default LanguageSwitcher;
