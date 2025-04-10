import React, { FC, ChangeEvent, Fragment } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useFormContext, useWatch } from 'react-hook-form';

import { countryOptions, sourceOptions } from '@/constants';
import { RegisterFormValues } from '@/interfaces/authInterfaces';

import FormInput from '@/components/ui/FormInput';
import FormSelect from '@/components/ui/FormSelect';
import ServiceProvider from '@/components/ServiceProvider';
import ServiceProviderRadioGroup from '../ServiceProviderRadioGroup';
import PolicyAgreementSection from '../PolicyAgreementSection';

interface IRegisterSecondStepProps {
	formData: RegisterFormValues;
	handleInputChange: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: keyof RegisterFormValues
	) => void;
	handleSelectChange: (event: SelectChangeEvent<string | boolean | null>, name: keyof RegisterFormValues) => void;
	handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, name: keyof RegisterFormValues) => void;
	handleRadioChange: (event: ChangeEvent<HTMLInputElement>, name: keyof RegisterFormValues) => void;
}

const RegisterSecondStep: FC<IRegisterSecondStepProps> = ({
	formData,
	handleInputChange,
	handleSelectChange,
	handleCheckboxChange,
	handleRadioChange,
}) => {
	const {
		control,
		register,
		formState: { errors },
	} = useFormContext<RegisterFormValues>();

	const serviceProviderValue = useWatch({
		control,
		name: 'isServiceProvider',
	});

	const isServiceProvider = serviceProviderValue === 'yes';
	const showServiceProvider = !!serviceProviderValue;

	return (
		<Fragment>
			<FormInput
				type='text'
				name='company'
				label='Company'
				register={register}
				value={formData.company || ''}
				onChange={(event) => handleInputChange(event, 'company')}
				errorMessage={errors.company?.message}
			/>

			<FormInput
				type='text'
				name='phoneNumber'
				label='Phone'
				register={register}
				value={formData.phoneNumber || ''}
				onChange={(event) => handleInputChange(event, 'phoneNumber')}
				errorMessage={errors.phoneNumber?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormSelect
				name='country'
				label='Country/Region'
				register={register}
				errorMessage={errors.country?.message}
				options={countryOptions}
				value={formData.country}
				onChange={(event) => handleSelectChange(event, 'country')}
				sx={{ marginTop: '16px' }}
			/>

			<FormSelect
				name='source'
				label='How did you know about us?'
				register={register}
				errorMessage={errors.source?.message}
				options={sourceOptions}
				value={formData.source}
				onChange={(event) => handleSelectChange(event, 'source')}
				sx={{ marginTop: '16px' }}
			/>

			<ServiceProviderRadioGroup
				formData={formData}
				control={control}
				errors={errors}
				handleRadioChange={handleRadioChange}
			/>

			{showServiceProvider && (
				<ServiceProvider
					isServiceProvider={isServiceProvider}
					formData={formData}
					handleSelectChange={handleSelectChange}
					handleInputChange={handleInputChange}
					handleRadioChange={handleRadioChange}
				/>
			)}

			<PolicyAgreementSection register={register} errors={errors} handleCheckboxChange={handleCheckboxChange} />
		</Fragment>
	);
};

export default RegisterSecondStep;
