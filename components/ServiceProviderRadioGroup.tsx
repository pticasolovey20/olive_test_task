import React, { ChangeEvent, FC } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

import { FormControl, Box, Typography, RadioGroup, Radio, FormControlLabel, FormHelperText } from '@mui/material';

interface IServiceProviderRadioGroupProps {
	formData: RegisterFormValues;
	control: Control<RegisterFormValues>;
	errors: FieldErrors<RegisterFormValues>;
	handleRadioChange: (event: ChangeEvent<HTMLInputElement>, name: keyof RegisterFormValues) => void;
}

const ServiceProviderRadioGroup: FC<IServiceProviderRadioGroupProps> = ({
	formData,
	control,
	errors,
	handleRadioChange,
}) => {
	return (
		<FormControl fullWidth error={!!errors.isServiceProvider?.message} sx={{ marginTop: '16px' }}>
			<Box
				sx={{
					display: 'flex',
					flexGrow: 1,
					alignItems: 'center',
				}}
			>
				<Typography>Are you a Matterport service provider?</Typography>
			</Box>

			<Controller
				control={control}
				name='isServiceProvider'
				render={({ field }) => (
					<RadioGroup
						row
						{...field}
						value={formData.isServiceProvider || field.value || null}
						onChange={(event) => handleRadioChange(event, 'isServiceProvider')}
					>
						<FormControlLabel value='yes' control={<Radio />} label='Yes' />
						<FormControlLabel value='no' control={<Radio />} label='No' />
					</RadioGroup>
				)}
			/>

			{!!errors.isServiceProvider?.message && (
				<FormHelperText sx={{ margin: 0 }}>{errors.isServiceProvider?.message}</FormHelperText>
			)}
		</FormControl>
	);
};

export default ServiceProviderRadioGroup;
