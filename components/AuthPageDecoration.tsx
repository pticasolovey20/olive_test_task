import React from 'react';

import { Box } from '@mui/material';
import Logo from '@/components/Logo';
import Slogan from '@/components/Slogan';

const AuthPageDecoration = () => {
	return (
		<Box
			sx={{
				maxWidth: '479px',
				width: '100%',

				display: { xs: 'none', sm: 'flex' },
				flexDirection: 'column',
				justifyContent: 'center',

				marginRight: '52px',
				zIndex: 1,
			}}
		>
			<Logo />
			<Slogan />
		</Box>
	);
};

export default AuthPageDecoration;
