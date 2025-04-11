import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, useTheme } from '@mui/material';

const Slogan = () => {
	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<Typography
			sx={{
				fontWeight: 500,
				fontSize: { xs: '50px', md: '62px' },
				lineHeight: { xs: '70px', md: '84px' },
				margin: '40px 0px',
			}}
		>
			{t('slogan.take')}&nbsp;
			<Typography
				component='span'
				sx={{
					display: 'inline-block',
					color: 'rgb(255, 255, 255)',
					fontSize: { xs: '50px', md: '62px' },
					lineHeight: { xs: '70px', md: '84px' },
					borderRadius: '10px',
					paddingLeft: '4px',
					paddingRight: '4px',
					backgroundColor: theme.palette.primary.main,
				}}
			>
				{t('slogan.reality')}
			</Typography>
			<br />
			{t('slogan.toTheNext')}
			<br />
			{t('slogan.level')}
		</Typography>
	);
};

export default Slogan;
