import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

import FormInput from '@/components/ui/FormInput';

const RegisterSecondStep = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<RegisterFormValues>();

	return (
		<Fragment>
			<FormInput
				type='text'
				register={register}
				name='company'
				label='Company'
				errorMessage={errors.company?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput
				type='text'
				register={register}
				name='phoneNumber'
				label='Phone'
				errorMessage={errors.phoneNumber?.message}
				sx={{ marginTop: '16px' }}
			/>
		</Fragment>
	);
};

export default RegisterSecondStep;
