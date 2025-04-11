import React from 'react';
import { SxProps, TextField } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface IFormInputProps<T extends FieldValues> {
	type: string;
	name: Path<T>;
	label: string;
	control: Control<T>;
	errorMessage?: string;
	helperText?: string;
	sx?: SxProps;
}

const FormInput = <T extends FieldValues>({
	type,
	name,
	label,
	control,
	errorMessage,
	helperText,
	sx,
}: IFormInputProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, onChange } }) => (
				<TextField
					fullWidth
					type={type}
					label={label}
					value={value}
					onChange={onChange}
					error={!!errorMessage}
					helperText={errorMessage || helperText}
					sx={sx}
				/>
			)}
		/>
	);
};

export default FormInput;
