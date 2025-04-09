import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

import FormInput from '@/components/ui/FormInput';
import FormSelect from '@/components/ui/FormSelect';
import { countryOptions, sourceOptions } from '@/constants';

const RegisterSecondStep = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<RegisterFormValues>();

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
				sx={{ marginTop: '16px' }}
				options={countryOptions}
			/>

			<FormSelect
				name='source'
				label='How did you know about us?'
				register={register}
				errorMessage={errors.source?.message}
				sx={{ marginTop: '16px' }}
				options={sourceOptions}
			/>
		</Fragment>
	);
};

export default RegisterSecondStep;
