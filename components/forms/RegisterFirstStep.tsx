import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

import FormInput from '@/components/ui/FormInput';

const RegisterFirstStep = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<RegisterFormValues>();

	return (
		<Fragment>
			<FormInput
				type='text'
				register={register}
				name='firstName'
				label='First Name'
				errorMessage={errors.firstName?.message}
			/>

			<FormInput
				type='text'
				register={register}
				name='lastName'
				label='Last Name'
				errorMessage={errors.lastName?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput
				type='email'
				register={register}
				name='emailAddress'
				label='Email Address'
				errorMessage={errors.emailAddress?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput
				register={register}
				type='password'
				name='password'
				label='Password'
				autoComplete='current-password'
				helperText='Must be at least 8 english characters, and contain 1 uppercase, 1 lowercase and 1 digit'
				errorMessage={errors.password?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput
				type='password'
				register={register}
				name='confirmPassword'
				label='Confirm Password'
				errorMessage={errors.confirmPassword?.message}
				sx={{ marginTop: '16px' }}
			/>
		</Fragment>
	);
};

export default RegisterFirstStep;
