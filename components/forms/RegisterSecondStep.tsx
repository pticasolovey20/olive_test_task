import React, { Fragment } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { countryOptions, sourceOptions } from '@/constants';
import { RegisterFormValues } from '@/interfaces/authInterfaces';

import FormInput from '@/components/ui/FormInput';
import FormSelect from '@/components/ui/FormSelect';
import ServiceProvider from '@/components/ServiceProvider';
import FormPhoneInput from '@/components/ui/FormPhoneInput';
import PolicyAgreementSection from '@/components/PolicyAgreementSection';
import ServiceProviderRadioGroup from '@/components/ServiceProviderRadioGroup';

const RegisterSecondStep = () => {
	const {
		control,
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
			<FormInput<RegisterFormValues>
				type='text'
				name='company'
				label='Company'
				control={control}
				errorMessage={errors.company?.message}
			/>

			<FormPhoneInput<RegisterFormValues> name='phoneNumber' control={control} sx={{ marginTop: '16px' }} />

			<FormSelect<RegisterFormValues>
				name='country'
				label='Country/Region'
				control={control}
				options={countryOptions}
				errorMessage={errors.country?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormSelect<RegisterFormValues>
				name='source'
				label='How did you know about us?'
				control={control}
				options={sourceOptions}
				errorMessage={errors.source?.message}
				sx={{ marginTop: '16px' }}
			/>

			<ServiceProviderRadioGroup control={control} errors={errors} />
			{showServiceProvider && <ServiceProvider isServiceProvider={isServiceProvider} />}
			<PolicyAgreementSection control={control} errors={errors} />
		</Fragment>
	);
};

export default RegisterSecondStep;
