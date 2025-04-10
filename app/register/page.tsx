'use client';

import React from 'react';
import { Box, ThemeProvider } from '@mui/material';

import theme from '@/styles/theme';

import AuthPageDecoration from '@/components/AuthPageDecoration';
import RegisterForm from '@/components/forms/RegisterForm';

const RegisterPage = () => {
	return (
		<ThemeProvider theme={theme}>
			<Box
				component='main'
				sx={{
					display: 'flex',
				}}
			>
				<Box
					sx={{
						width: '100%',
						height: '100dvh',

						display: 'flex',
						justifyContent: 'center',

						overflow: 'hidden',
						position: 'relative',

						padding: '0px 40px',
						zIndex: 1,

						'&::before': {
							content: '""',
							position: 'absolute',
							top: 0,
							right: 0,

							width: '70%',
							height: '100%',

							transformOrigin: 'center bottom',
							transform: 'skew(-13.9deg, 0deg)',
							backgroundColor: 'rgb(247, 247, 247)',
							zIndex: 0,
						},
					}}
				>
					<AuthPageDecoration />
					<RegisterForm />
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default RegisterPage;
