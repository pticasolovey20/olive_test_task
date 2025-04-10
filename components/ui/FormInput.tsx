import React, { ChangeEvent, FC } from 'react';
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
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormInput: FC<IFormInputProps> = ({
	type,
	name,
	label,
	register,
	errorMessage,
	helperText,
	sx,
	value,
	onChange,
}) => {
	return (
		<TextField
			fullWidth
			type={type}
			label={label}
			{...register(name)}
			value={value}
			onChange={onChange}
			error={!!errorMessage}
			helperText={errorMessage || helperText}
			sx={sx}
		/>
	);
};

export default FormInput;
