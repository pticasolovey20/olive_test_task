import React, { FC, Fragment } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/authInterfaces';
import { numbersOfEmployeesOptions, industryOptions, numbersOfSpacesOptions } from '@/constants';

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

	return (
		<Fragment>
			<FormSelect<RegisterFormValues>
				control={control}
				name={isServiceProvider ? 'numbersOfSpaces' : 'numbersOfEmployees'}
				label={isServiceProvider ? 'Numbers of Spaces' : 'Numbers of Employees'}
				options={isServiceProvider ? numbersOfSpacesOptions : numbersOfEmployeesOptions}
				errorMessage={isServiceProvider ? errors.numbersOfSpaces?.message : errors.numbersOfEmployees?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormSelect<RegisterFormValues>
				control={control}
				name={isServiceProvider ? 'numbersOfEmployees' : 'industry'}
				label={isServiceProvider ? 'Numbers of Employees' : 'Industry'}
				options={isServiceProvider ? numbersOfEmployeesOptions : industryOptions}
				errorMessage={isServiceProvider ? errors.numbersOfEmployees?.message : errors.industry?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput<RegisterFormValues>
				type='text'
				name='jobDescription'
				label='Job Description'
				control={control}
				errorMessage={errors.jobDescription?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput<RegisterFormValues>
				type='text'
				name='website'
				label='Website'
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
					<Typography id='digital '>Do you have an existing 3D digital twin?</Typography>
				</Box>

				<Controller
					name='digital'
					control={control}
					render={({ field: { value, onChange } }) => (
						<RadioGroup row value={value} onChange={onChange}>
							<FormControlLabel value='yes' control={<Radio />} label='Yes' />
							<FormControlLabel value='no' control={<Radio />} label='No' />
						</RadioGroup>
					)}
				/>

				{!!errors.digital?.message && <FormHelperText sx={{ margin: 0 }}>{errors.digital?.message}</FormHelperText>}
			</FormControl>
		</Fragment>
	);
};

export default ServiceProvider;
