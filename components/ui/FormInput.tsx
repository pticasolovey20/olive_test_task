import React, { ChangeEvent } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { SxProps, TextField } from '@mui/material';

interface IFormInputProps<T extends FieldValues> {
	type: string;
	name: Path<T>;
	label: string;
	register: UseFormRegister<T>;
	errorMessage?: string;
	helperText?: string;
	sx?: SxProps;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormInput = <T extends FieldValues>({
	type,
	name,
	label,
	register,
	errorMessage,
	helperText,
	sx,
	value,
	onChange,
}: IFormInputProps<T>) => {
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
