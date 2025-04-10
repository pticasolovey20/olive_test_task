import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

import { SxProps, TextField } from '@mui/material';

interface IFormInputProps {
	type: string;
	name: keyof RegisterFormValues;
	label: string;
	register: UseFormRegister<RegisterFormValues>;
	errorMessage?: string;
	helperText?: string;
	sx?: SxProps;
}

const FormInput: FC<IFormInputProps> = ({ type, name, label, register, errorMessage, helperText, sx }) => {
	return (
		<TextField
			fullWidth
			type={type}
			label={label}
			{...register(name)}
			error={!!errorMessage}
			helperText={errorMessage || helperText}
			sx={sx}
		/>
	);
};

export default FormInput;
