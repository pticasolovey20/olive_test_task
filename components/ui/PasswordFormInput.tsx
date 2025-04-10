import React, { ChangeEvent, useState } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { SxProps, TextField } from '@mui/material';
import TogglePasswordButton from '@/components/ui/TogglePasswordButton';

interface IPasswordFormInputProps<T extends FieldValues> {
	name: Path<T>;
	label: string;
	register: UseFormRegister<T>;
	errorMessage?: string;
	autoComplete?: string;
	helperText?: string;
	sx?: SxProps;

	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PasswordFormInput = <T extends FieldValues>({
	name,
	label,
	register,
	errorMessage,
	autoComplete,
	helperText,
	sx,
	value,
	onChange,
}: IPasswordFormInputProps<T>) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleToggle = () => setShowPassword((show) => !show);

	return (
		<TextField
			fullWidth
			label={label}
			{...register(name)}
			value={value}
			onChange={onChange}
			error={!!errorMessage}
			autoComplete={autoComplete}
			helperText={errorMessage || helperText}
			type={showPassword ? 'text' : 'password'}
			slotProps={{
				input: {
					endAdornment: <TogglePasswordButton showPassword={showPassword} handleToggle={handleToggle} />,
				},
			}}
			sx={sx}
		/>
	);
};

export default PasswordFormInput;
