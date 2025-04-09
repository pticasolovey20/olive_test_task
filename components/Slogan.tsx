import React from 'react';
import { Typography } from '@mui/material';

const Slogan = () => {
	return (
		<Typography
			sx={{
				fontWeight: 500,
				fontSize: { xs: '50px', md: '62px' },
				lineHeight: { xs: '70px', md: '84px' },

				margin: '40px 0px',
			}}
		>
			Take&nbsp;
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
					backgroundColor: 'rgb(32, 85, 255)',
				}}
			>
				reality
			</Typography>
			<br />
			to the next
			<br />
			level
		</Typography>
	);
};

export default Slogan;
