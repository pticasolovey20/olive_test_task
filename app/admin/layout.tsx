'use client';
import React, { ReactNode, FC } from 'react';

import theme from '@/styles/theme';
import { ThemeProvider, Box } from '@mui/material';
import AuthPageDecoration from '@/components/AuthPageDecoration';

interface IRegistrationLayoutProps {
	children: ReactNode;
}

const RegistrationLayout: FC<IRegistrationLayoutProps> = ({ children }) => {
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
					{children}
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default RegistrationLayout;
