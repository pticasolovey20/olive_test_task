import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { IOption } from '@/interfaces/interfaces';

import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SxProps } from '@mui/material';

interface IFormSelectProps<T extends FieldValues> {
	name: Path<T>;
	label: string;
	control: Control<T>;
	errorMessage?: string;
	sx?: SxProps;
	options: IOption[];
}

const FormSelect = <T extends FieldValues>({
	name,
	label,
	control,
	errorMessage,
	sx,
	options,
}: IFormSelectProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, onChange } }) => (
				<FormControl fullWidth sx={sx} error={!!errorMessage}>
					<InputLabel id={`${name}-label`}>{label}</InputLabel>

					<Select labelId={`${name}-label`} id={name} label={label} value={value} onChange={onChange}>
						{options.map(({ label, value }) => (
							<MenuItem key={`${label}-${value}`} value={value}>
								{label}
							</MenuItem>
						))}
					</Select>

					{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
				</FormControl>
			)}
		/>
	);
};

export default FormSelect;
