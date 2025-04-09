import React from 'react';
import { Box } from '@mui/material';
import Slogan from '@/components/Slogan';
import RegisterForm from '@/components/forms/RegisterForm';

const RegisterPage = () => {
	return (
		<Box
			component='main'
			sx={{
				display: 'flex',
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '100vh',

					display: 'flex',
					justifyContent: 'center',

					overflow: 'hidden',
					position: 'relative',

					padding: '0px 40px',
				}}
			>
				<Slogan />
				<RegisterForm />
			</Box>
		</Box>
	);
};

export default RegisterPage;
