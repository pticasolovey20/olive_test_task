/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { FC, useState } from 'react';
import { TextField } from '@mui/material';
import TogglePasswordButton from '@/components/ui/TogglePasswordButton';

interface IPasswordFormInputProps {
	name: string;
	label: string;
	register: any;
	errorMessage?: string;
	autoComplete?: string;
	helperText?: string;
	sx?: any;
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
			name={name}
			label={label}
			{...register(name)}
			error={errorMessage}
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
