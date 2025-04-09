import React, { FC } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

interface ILogoProps {
	height: number;
}

const Logo: FC<ILogoProps> = ({ height }) => {
	return (
		<Box
			sx={{
				width: '100%',
				height: height,
				minHeight: height,
				maxHeight: height,

				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Image priority src='https://cdn.treedis.com/users/1/favicon.png' alt='logo' width={35} height={height} />
		</Box>
	);
};

export default Logo;
