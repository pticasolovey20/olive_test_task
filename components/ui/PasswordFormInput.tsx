import React, { useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { InputAdornment, SxProps, TextField } from '@mui/material';
import TogglePasswordButton from '@/components/ui/TogglePasswordButton';

interface IPasswordFormInputProps<T extends FieldValues> {
	name: Path<T>;
	label: string;
	control: Control<T>;
	errorMessage?: string;
	autoComplete?: string;
	helperText?: string;
	sx?: SxProps;
}

const PasswordFormInput = <T extends FieldValues>({
	name,
	label,
	control,
	errorMessage,
	autoComplete,
	helperText,
	sx,
}: IPasswordFormInputProps<T>) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleToggle = () => setShowPassword((show) => !show);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, onChange } }) => (
				<TextField
					fullWidth
					type={showPassword ? 'text' : 'password'}
					label={label}
					value={value}
					onChange={onChange}
					error={!!errorMessage}
					autoComplete={autoComplete}
					helperText={errorMessage || helperText}
					slotProps={{
						input: {
							endAdornment: (
								<InputAdornment position='end' sx={{ margin: 0 }}>
									<TogglePasswordButton showPassword={showPassword} handleToggle={handleToggle} />
								</InputAdornment>
							),
						},
					}}
					sx={sx}
				/>
			)}
		/>
	);
};

export default PasswordFormInput;
