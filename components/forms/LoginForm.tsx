'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

import { getLoginSchema } from '@/validation/authSchema';
import useLoginFormStore from '@/stores/authStore';
import { LoginFormValues } from '@/interfaces/authInterfaces';

import { Box, Typography } from '@mui/material';
import FormInput from '@/components/ui/FormInput';
import SubmitButton from '@/components/ui/SubmitButton';
import ActionLinkButton from '@/components/ui/ActionLinkButton';
import PasswordFormInput from '@/components/ui/PasswordFormInput';

const LoginForm = () => {
	const { handleLogin } = useLoginFormStore();
	const { t } = useTranslation();
	const router = useRouter();
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormValues>({
		mode: 'onChange',

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		resolver: yupResolver(getLoginSchema(t)) as any, //??,
	});

	const onFormSubmit = (formData: LoginFormValues) => {
		const userFromMockDB = localStorage.getItem('userData');

		if (!userFromMockDB) {
			// { message: 'User not found' }
			return;
		}

		const userData = JSON.parse(userFromMockDB);

		if (userData.password === formData.password) {
			console.log('formData:', formData);
			handleLogin(userData);
			router.push(`/admin/confirm-email?email=${formData.emailAddress}`);
		} else {
			// { message: 'Wrong password or email' }
		}
	};

	return (
		<Box
			sx={{
				maxWidth: '451px',
				width: '100%',

				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				zIndex: 1,
			}}
		>
			<Typography
				variant='h4'
				sx={{
					fontSize: { xs: '24px', md: '34px' },
					fontWeight: 600,

					marginBottom: '40px',
				}}
			>
				{t('form.welcome')}! <br />
				{t('form.loginToContinue')}
			</Typography>

			<form onSubmit={handleSubmit(onFormSubmit)}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<FormInput<LoginFormValues>
						type='email'
						name='emailAddress'
						label={t('label.emailAddress')}
						control={control}
						errorMessage={errors.emailAddress?.message}
						sx={{ marginTop: '16px' }}
					/>

					<PasswordFormInput<LoginFormValues>
						name='password'
						label={t('label.password')}
						control={control}
						autoComplete='current-password'
						errorMessage={errors.password?.message}
						sx={{ marginTop: '16px' }}
					/>
				</Box>

				<Box sx={{ margin: '16px 0px' }}>
					<SubmitButton label={t('form.login')} loading={isSubmitting} />
				</Box>

				<Box sx={{ margin: '8px 0px' }}>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<ActionLinkButton href='#' label={t('form.forgotPassword')} />
						<ActionLinkButton href='/admin/register' label={t('form.createAccount')} />
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default LoginForm;
