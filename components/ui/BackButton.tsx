import React, { FC } from 'react';
import { Button, Box, useTheme } from '@mui/material';

interface IBackButtonProps {
	handlePrev: () => void;
}

const BackButton: FC<IBackButtonProps> = ({ handlePrev }) => {
	const theme = useTheme();

	return (
		<Button
			variant='text'
			aria-label='back'
			onClick={handlePrev}
			sx={{
				color: theme.palette.primary.main,

				minWidth: '64px',

				padding: '6px 8px',
				borderRadius: '8px',
			}}
		>
			<Box
				sx={{
					width: '22px',
					height: '25px',
				}}
			>
				<svg
					aria-hidden='true'
					focusable='false'
					data-prefix='far'
					data-icon='arrow-left'
					role='img'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 448 512'
					fontSize='25px'
				>
					<path
						fill='currentColor'
						d='M447.1 256c0 13.25-10.76 24.01-24.01 24.01H83.9l132.7 126.6c9.625 9.156 9.969 24.41 .8125 33.94c-9.156 9.594-24.34 9.938-33.94 .8125l-176-168C2.695 268.9 .0078 262.6 .0078 256S2.695 243.2 7.445 238.6l176-168C193 61.51 208.2 61.85 217.4 71.45c9.156 9.5 8.812 24.75-.8125 33.94l-132.7 126.6h340.1C437.2 232 447.1 242.8 447.1 256z'
					></path>
				</svg>
			</Box>
		</Button>
	);
};

export default BackButton;
