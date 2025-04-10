import React, { ChangeEvent, FC, Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

import FormInput from '@/components/ui/FormInput';
import PasswordFormInput from '../ui/PasswordFormInput';

interface IRegisterFirstStepProps {
	formData: RegisterFormValues;
	handleInputChange: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: keyof RegisterFormValues
	) => void;
}

const RegisterFirstStep: FC<IRegisterFirstStepProps> = ({ formData, handleInputChange }) => {
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
				value={formData.firstName}
				onChange={(event) => handleInputChange(event, 'firstName')}
				errorMessage={errors.firstName?.message}
			/>

			<FormInput
				type='text'
				name='lastName'
				label='Last Name'
				register={register}
				value={formData.lastName}
				onChange={(event) => handleInputChange(event, 'lastName')}
				errorMessage={errors.lastName?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput
				type='email'
				name='emailAddress'
				label='Email Address'
				register={register}
				value={formData.emailAddress}
				onChange={(event) => handleInputChange(event, 'emailAddress')}
				errorMessage={errors.emailAddress?.message}
				sx={{ marginTop: '16px' }}
			/>

			<PasswordFormInput
				name='password'
				label='Password'
				register={register}
				value={formData.password}
				onChange={(event) => handleInputChange(event, 'password')}
				errorMessage={errors.password?.message}
				autoComplete='current-password'
				helperText='Must be at least 8 english characters, and contain 1 uppercase, 1 lowercase and 1 digit'
				sx={{ marginTop: '16px' }}
			/>

			<PasswordFormInput
				name='confirmPassword'
				label='Confirm Password'
				register={register}
				value={formData.confirmPassword}
				onChange={(event) => handleInputChange(event, 'confirmPassword')}
				errorMessage={errors.confirmPassword?.message}
				sx={{ marginTop: '16px' }}
			/>
		</Fragment>
	);
};

export default RegisterFirstStep;
