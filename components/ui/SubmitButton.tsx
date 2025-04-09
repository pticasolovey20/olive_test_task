import React, { FC } from 'react';
import { Button } from '@mui/material';

interface ISubmitButtonProps {
	label: string;
}

const SubmitButton: FC<ISubmitButtonProps> = ({ label }) => {
	return (
		<Button
			fullWidth
			type='submit'
			sx={{
				color: 'rgb(255,255,255)',
				fontWeight: 600,
				fontSize: '15px',
				textTransform: 'capitalize',

				height: '56px',

				padding: '8px 22px',
				borderRadius: '8px',
				background: 'rgb(32, 85, 255)',
			}}
		>
			{label}
		</Button>
	);
};

export default SubmitButton;
