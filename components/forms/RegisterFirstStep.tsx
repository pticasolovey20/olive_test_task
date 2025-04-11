import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/authInterfaces';

import FormInput from '@/components/ui/FormInput';
import PasswordFormInput from '@/components/ui/PasswordFormInput';

const RegisterFirstStep = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<RegisterFormValues>();

	return (
		<Fragment>
			<FormInput<RegisterFormValues>
				type='text'
				name='firstName'
				label='First Name'
				control={control}
				errorMessage={errors.firstName?.message}
			/>

			<FormInput<RegisterFormValues>
				type='text'
				name='lastName'
				label='Last Name'
				control={control}
				errorMessage={errors.lastName?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput<RegisterFormValues>
				type='email'
				name='emailAddress'
				label='Email Address'
				control={control}
				errorMessage={errors.emailAddress?.message}
				sx={{ marginTop: '16px' }}
			/>

			<PasswordFormInput<RegisterFormValues>
				name='password'
				label='Password'
				control={control}
				errorMessage={errors.password?.message}
				autoComplete='current-password'
				helperText='Must be at least 8 english characters, and contain 1 uppercase, 1 lowercase and 1 digit'
				sx={{ marginTop: '16px' }}
			/>

			<PasswordFormInput<RegisterFormValues>
				name='confirmPassword'
				label='Confirm Password'
				control={control}
				errorMessage={errors.confirmPassword?.message}
				sx={{ marginTop: '16px' }}
			/>
		</Fragment>
	);
};

export default RegisterFirstStep;
