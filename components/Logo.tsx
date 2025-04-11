import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

import logo from '@/public/assets/logo.svg';

const Logo = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '50px',

				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Image loading='lazy' src={logo} alt='logo' height={50} />
		</Box>
	);
};

export default Logo;
