import React, { FC } from 'react';
import { Button, useTheme } from '@mui/material';

interface IActionLinkButtonProps {
	href: string;
	label: string;
}

const ActionLinkButton: FC<IActionLinkButtonProps> = ({ href, label }) => {
	const theme = useTheme();

	return (
		<Button
			href={href}
			variant='text'
			sx={{
				color: theme.palette.primary.main,
				textTransform: 'capitalize',
				fontSize: '0.875rem',
				lineHeight: 1.75,
				fontWeight: 'bold',

				minWidth: '64px',
				padding: '6px 8px',
			}}
		>
			{label}
		</Button>
	);
};

export default ActionLinkButton;
