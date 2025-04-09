/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { TextField } from '@mui/material';

interface IFormInputProps {
	type: string;
	name: string;
	label: string;
	register: any;
	errorMessage?: string;
	helperText?: string;
	sx?: any;
}

const FormInput: FC<IFormInputProps> = ({ type, name, label, register, errorMessage, helperText, sx }) => {
	return (
		<TextField
			fullWidth
			type={type}
			name={name}
			label={label}
			{...register(name)}
			error={errorMessage}
			helperText={errorMessage || helperText}
			sx={sx}
		/>
	);
};

export default FormInput;
