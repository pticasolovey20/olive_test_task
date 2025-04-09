import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

import FormInput from '@/components/ui/FormInput';
import PasswordFormInput from '../ui/PasswordFormInput';

const RegisterFirstStep = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<RegisterFormValues>();

	return (
		<Fragment>
			<FormInput
				type='text'
				name='firstName'
				label='First Name'
				register={register}
				errorMessage={errors.firstName?.message}
			/>

			<FormInput
				type='text'
				name='lastName'
				label='Last Name'
				register={register}
				errorMessage={errors.lastName?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput
				type='email'
				name='emailAddress'
				label='Email Address'
				register={register}
				errorMessage={errors.emailAddress?.message}
				sx={{ marginTop: '16px' }}
			/>

			<PasswordFormInput
				name='password'
				label='Password'
				register={register}
				errorMessage={errors.password?.message}
				autoComplete='current-password'
				helperText='Must be at least 8 english characters, and contain 1 uppercase, 1 lowercase and 1 digit'
				sx={{ marginTop: '16px' }}
			/>

			<PasswordFormInput
				name='confirmPassword'
				label='Confirm Password'
				register={register}
				errorMessage={errors.confirmPassword?.message}
				sx={{ marginTop: '16px' }}
			/>
		</Fragment>
	);
};

export default RegisterFirstStep;
