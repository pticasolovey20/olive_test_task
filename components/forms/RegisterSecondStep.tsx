import React, { Fragment } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';
import { countryOptions, sourceOptions } from '@/constants';

import FormInput from '@/components/ui/FormInput';
import FormSelect from '@/components/ui/FormSelect';
import ServiceProvider from '@/components/ServiceProvider';
import ServiceProviderRadioGroup from '../ServiceProviderRadioGroup';
import PolicyAgreementSection from '../PolicyAgreementSection';

const RegisterSecondStep = () => {
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
				errorMessage={errors.company?.message}
			/>

			<FormInput
				type='text'
				name='phoneNumber'
				label='Phone'
				register={register}
				errorMessage={errors.phoneNumber?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormSelect
				name='country'
				label='Country/Region'
				register={register}
				errorMessage={errors.country?.message}
				options={countryOptions}
				sx={{ marginTop: '16px' }}
			/>

			<FormSelect
				name='source'
				label='How did you know about us?'
				register={register}
				errorMessage={errors.source?.message}
				options={sourceOptions}
				sx={{ marginTop: '16px' }}
			/>

			<ServiceProviderRadioGroup control={control} errors={errors} />
			{showServiceProvider && <ServiceProvider isServiceProvider={isServiceProvider} />}

			<PolicyAgreementSection register={register} errors={errors} />
		</Fragment>
	);
};

export default RegisterSecondStep;
