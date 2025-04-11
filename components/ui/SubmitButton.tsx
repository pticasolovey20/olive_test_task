import React, { FC } from 'react';
import { Button, useTheme } from '@mui/material';

interface ISubmitButtonProps {
	label: string;
	loading: boolean;
}

const SubmitButton: FC<ISubmitButtonProps> = ({ label, loading }) => {
	const theme = useTheme();

	return (
		<Button
			fullWidth
			loading={loading}
			type='submit'
			sx={{
				color: 'rgb(255,255,255)',
				fontWeight: 600,
				fontSize: '15px',
				textTransform: 'capitalize',

				height: '56px',

				padding: '8px 22px',
				borderRadius: '8px',
				background: theme.palette.primary.main,
			}}
		>
			{label}
		</Button>
	);
};

export default SubmitButton;
