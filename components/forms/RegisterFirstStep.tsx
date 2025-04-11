import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/authInterfaces';

import FormInput from '@/components/ui/FormInput';
import PasswordFormInput from '@/components/ui/PasswordFormInput';

const RegisterFirstStep = () => {
	const { t } = useTranslation();
	const {
		control,
		formState: { errors },
	} = useFormContext<RegisterFormValues>();

	return (
		<Fragment>
			<FormInput<RegisterFormValues>
				type='text'
				name='firstName'
				label={t('label.firstName')}
				control={control}
				errorMessage={errors.firstName?.message}
			/>

			<FormInput<RegisterFormValues>
				type='text'
				name='lastName'
				label={t('label.lastName')}
				control={control}
				errorMessage={errors.lastName?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormInput<RegisterFormValues>
				type='email'
				name='emailAddress'
				label={t('label.emailAddress')}
				control={control}
				errorMessage={errors.emailAddress?.message}
				sx={{ marginTop: '16px' }}
			/>

			<PasswordFormInput<RegisterFormValues>
				name='password'
				label={t('label.password')}
				control={control}
				errorMessage={errors.password?.message}
				autoComplete='current-password'
				helperText={t('validation.passwordFormat')}
				sx={{ marginTop: '16px' }}
			/>

			<PasswordFormInput<RegisterFormValues>
				name='confirmPassword'
				label={t('label.confirmPassword')}
				control={control}
				errorMessage={errors.confirmPassword?.message}
				sx={{ marginTop: '16px' }}
			/>
		</Fragment>
	);
};

export default RegisterFirstStep;
