import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IOption } from '@/interfaces/interfaces';
import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps } from '@mui/material';

interface IFormSelectProps {
	name: keyof RegisterFormValues;
	label: string;
	register: UseFormRegister<RegisterFormValues>;
	errorMessage?: string;
	sx?: SxProps;
	options: IOption[];
	value: string | boolean | null;
	onChange: (event: SelectChangeEvent<string | boolean | null>) => void;
}

const FormSelect: FC<IFormSelectProps> = ({ name, label, register, errorMessage, sx, options, value, onChange }) => {
	return (
		<FormControl fullWidth sx={sx} error={!!errorMessage}>
			<InputLabel id={`${name}-label`}>{label}</InputLabel>

			<Select labelId={`${name}-label`} id={name} label={label} {...register(name)} value={value} onChange={onChange}>
				{options.map(({ label, value }) => (
					<MenuItem key={`${label}-${value}`} value={value}>
						{label}
					</MenuItem>
				))}
			</Select>

			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
};

export default FormSelect;
