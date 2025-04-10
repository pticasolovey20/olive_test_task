import React, { ChangeEvent, FC, Fragment } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';
import { numbersOfEmployeesOptions, industryOptions, numbersOfSpacesOptions } from '@/constants';

import {
	Box,
	FormControl,
	FormControlLabel,
	FormHelperText,
	Radio,
	RadioGroup,
	SelectChangeEvent,
	Typography,
} from '@mui/material';
import FormSelect from '@/components/ui/FormSelect';
import FormInput from '@/components/ui/FormInput';

interface IServiceProviderProps {
	isServiceProvider: boolean;
	formData: RegisterFormValues;
	handleSelectChange: (event: SelectChangeEvent<string | boolean | null>, name: keyof RegisterFormValues) => void;
	handleInputChange: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: keyof RegisterFormValues
	) => void;
	handleRadioChange: (event: ChangeEvent<HTMLInputElement>, name: keyof RegisterFormValues) => void;
}

const ServiceProvider: FC<IServiceProviderProps> = ({
	isServiceProvider,
	formData,
	handleSelectChange,
	handleInputChange,
	handleRadioChange,
}) => {
	const {
		control,
		register,
		formState: { errors },
	} = useFormContext<RegisterFormValues>();

	return (
		<Fragment>
			<FormSelect
				name={isServiceProvider ? 'numbersOfSpaces' : 'numbersOfEmployees'}
				label={isServiceProvider ? 'Numbers of Spaces' : 'Numbers of Employees'}
				register={register}
				value={formData[isServiceProvider ? 'numbersOfSpaces' : 'numbersOfEmployees']!}
				onChange={(event) => handleSelectChange(event, isServiceProvider ? 'numbersOfSpaces' : 'numbersOfEmployees')}
				errorMessage={isServiceProvider ? errors.numbersOfSpaces?.message : errors.numbersOfEmployees?.message}
				options={isServiceProvider ? numbersOfSpacesOptions : numbersOfEmployeesOptions}
				sx={{ marginTop: '16px' }}
			/>

			<FormSelect
				name={isServiceProvider ? 'numbersOfEmployees' : 'industry'}
				label={isServiceProvider ? 'Numbers of Employees' : 'Industry'}
				register={register}
				value={formData[isServiceProvider ? 'numbersOfEmployees' : 'industry']!}
				onChange={(event) => handleSelectChange(event, isServiceProvider ? 'numbersOfEmployees' : 'industry')}
				errorMessage={isServiceProvider ? errors.numbersOfEmployees?.message : errors.industry?.message}
				options={isServiceProvider ? numbersOfEmployeesOptions : industryOptions}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput
				type='text'
				name='jobDescription'
				label='Job Description'
				register={register}
				value={formData.jobDescription}
				onChange={(event) => handleInputChange(event, 'jobDescription')}
				errorMessage={errors.jobDescription?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput
				type='text'
				name='website'
				label='Website'
				register={register}
				value={formData.website}
				onChange={(event) => handleInputChange(event, 'website')}
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
					render={({ field }) => (
						<RadioGroup
							row
							{...field}
							value={formData.digital || field.value || null}
							onChange={(event) => handleRadioChange(event, 'digital')}
						>
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
