import React, { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/authInterfaces';
import { numbersOfEmployeesOptions, getIndustryOptions, numbersOfSpacesOptions } from '@/constants';

import { Box, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, Typography } from '@mui/material';
import FormSelect from '@/components/ui/FormSelect';
import FormInput from '@/components/ui/FormInput';

interface IServiceProviderProps {
	isServiceProvider: boolean;
}

const ServiceProvider: FC<IServiceProviderProps> = ({ isServiceProvider }) => {
	const {
		control,
		formState: { errors },
	} = useFormContext<RegisterFormValues>();

	const { t } = useTranslation();

	return (
		<Fragment>
			<FormSelect<RegisterFormValues>
				control={control}
				name={isServiceProvider ? 'numbersOfSpaces' : 'numbersOfEmployees'}
				label={t(isServiceProvider ? 'label.numbersOfSpaces' : 'label.numbersOfEmployees')}
				options={isServiceProvider ? numbersOfSpacesOptions : numbersOfEmployeesOptions}
				errorMessage={isServiceProvider ? errors.numbersOfSpaces?.message : errors.numbersOfEmployees?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormSelect<RegisterFormValues>
				control={control}
				name={isServiceProvider ? 'numbersOfEmployees' : 'industry'}
				label={t(isServiceProvider ? 'label.numbersOfEmployees' : 'label.industry')}
				options={isServiceProvider ? numbersOfEmployeesOptions : getIndustryOptions(t)}
				errorMessage={isServiceProvider ? errors.numbersOfEmployees?.message : errors.industry?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput<RegisterFormValues>
				type='text'
				name='jobDescription'
				label={t('label.jobDescription')}
				control={control}
				errorMessage={errors.jobDescription?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput<RegisterFormValues>
				type='text'
				name='website'
				label={t('label.website')}
				control={control}
				errorMessage={errors.website?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormControl fullWidth error={!!errors.digital?.message} sx={{ marginTop: '16px' }}>
				<Box
					sx={{
						display: 'flex',
						flexGrow: 1,
						alignItems: 'center',
					}}
				>
					<Typography id='digital '>{t('label.digital')}</Typography>
				</Box>

				<Controller
					name='digital'
					control={control}
					render={({ field: { value, onChange } }) => (
						<RadioGroup row value={value} onChange={onChange}>
							<FormControlLabel value='yes' control={<Radio />} label={t('radioOptions.yes')} />
							<FormControlLabel value='no' control={<Radio />} label={t('radioOptions.no')} />
						</RadioGroup>
					)}
				/>

				{!!errors.digital?.message && <FormHelperText sx={{ margin: 0 }}>{errors.digital?.message}</FormHelperText>}
			</FormControl>
		</Fragment>
	);
};

export default ServiceProvider;
