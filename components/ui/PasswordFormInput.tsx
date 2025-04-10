import React, { FC, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

import { SxProps, TextField } from '@mui/material';
import TogglePasswordButton from '@/components/ui/TogglePasswordButton';

interface IPasswordFormInputProps {
	name: keyof RegisterFormValues;
	label: string;
	register: UseFormRegister<RegisterFormValues>;
	errorMessage?: string;
	autoComplete?: string;
	helperText?: string;
	sx?: SxProps;
}

const PasswordFormInput: FC<IPasswordFormInputProps> = ({
	name,
	label,
	register,
	errorMessage,
	autoComplete,
	helperText,
	sx,
}) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleToggle = () => setShowPassword((show) => !show);

	return (
		<TextField
			fullWidth
			label={label}
			{...register(name)}
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
