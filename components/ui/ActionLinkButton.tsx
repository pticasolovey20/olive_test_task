import React, { FC } from 'react';
import { Button } from '@mui/material';

interface IActionLinkButtonProps {
	href: string;
	label: string;
}

const ActionLinkButton: FC<IActionLinkButtonProps> = ({ href, label }) => {
	return (
		<Button
			href={href}
			variant='text'
			sx={{
				color: 'rgb(32, 85, 255)',
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
