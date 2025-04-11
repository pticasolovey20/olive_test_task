import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/authInterfaces';

import { FormControl, Box, Typography, RadioGroup, Radio, FormControlLabel, FormHelperText } from '@mui/material';

interface IServiceProviderRadioGroupProps {
	control: Control<RegisterFormValues>;
	errors: FieldErrors<RegisterFormValues>;
}

const ServiceProviderRadioGroup: FC<IServiceProviderRadioGroupProps> = ({ control, errors }) => {
	const { t } = useTranslation();

	return (
		<FormControl fullWidth error={!!errors.isServiceProvider?.message} sx={{ marginTop: '16px' }}>
			<Box
				sx={{
					display: 'flex',
					flexGrow: 1,
					alignItems: 'center',
				}}
			>
				<Typography>{t('label.isServiceProvider')}</Typography>
			</Box>

			<Controller
				control={control}
				name='isServiceProvider'
				render={({ field: { value, onChange } }) => (
					<RadioGroup row value={value} onChange={onChange}>
						<FormControlLabel value='yes' control={<Radio />} label={t('radioOptions.yes')} />
						<FormControlLabel value='no' control={<Radio />} label={t('radioOptions.no')} />
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
