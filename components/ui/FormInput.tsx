/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { TextField } from '@mui/material';

interface InputProps {
	required?: boolean;
	register: any;
	helperText?: string;
	errorMessage?: string;
	name: string;
	type: string;
	label: string;
	autoComplete?: string;
	sx?: any;
}

const FormInput: FC<InputProps> = ({ register, helperText, errorMessage, name, type, label, autoComplete, sx }) => {
	return (
		<TextField
			fullWidth
			size='medium'
			variant='outlined'
			{...register(name)}
			autoComplete={autoComplete}
			name={name}
			type={type}
			label={label}
			error={errorMessage}
			helperText={errorMessage || helperText}
			sx={sx}
		/>
	);
};

export default FormInput;
