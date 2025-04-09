import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const Slogan = () => {
	return (
		<Box
			sx={{
				maxWidth: '479px',
				width: '100%',

				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',

				marginRight: '52px',
			}}
		>
			<Box>
				<Image src='https://cdn.treedis.com/users/1/favicon.png' alt='logo' width={35} height={50} />
			</Box>

			<Typography
				sx={{
					fontSize: '62px',
					lineHeight: '84px',

					margin: '40px 0px',
				}}
			>
				Take reality to the next level
			</Typography>
		</Box>
	);
};

export default Slogan;
