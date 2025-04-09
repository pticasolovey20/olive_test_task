/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

interface IFormSelectProps {
	name: string;
	label: string;
	register: any;
	errorMessage?: string;
	helperText?: string;
	sx?: any;
	options: any[];
}

const FormSelect: FC<IFormSelectProps> = ({ name, label, register, errorMessage, helperText, sx, options }) => {
	return (
		<FormControl fullWidth sx={sx} error={!!errorMessage}>
			<InputLabel id={`${name}-label`}>{label}</InputLabel>

			<Select labelId={`${name}-label`} id={name} label={label} {...register(name)}>
				{options.map(({ label, value }) => (
					<MenuItem key={`${label}-${value}`} value={value}>
						{label}
					</MenuItem>
				))}
			</Select>

			<FormHelperText>{errorMessage || helperText}</FormHelperText>
		</FormControl>
	);
};

export default FormSelect;
