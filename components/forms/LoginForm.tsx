'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginSchema } from '@/validation/authSchema';
import useLoginFormStore from '@/stores/loginFormStore';
import { BaseFormValues, RegisterFormValues } from '@/interfaces/authInterfaces';

import { Box, Typography } from '@mui/material';
import FormInput from '@/components/ui/FormInput';
import SubmitButton from '@/components/ui/SubmitButton';
import ActionLinkButton from '@/components/ui/ActionLinkButton';
import PasswordFormInput from '@/components/ui/PasswordFormInput';

const LoginForm = () => {
	const { formData, setFormData } = useLoginFormStore();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<BaseFormValues>({
		defaultValues: formData,
		mode: 'onChange',

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		resolver: yupResolver(loginSchema) as any, //??,
	});

	const onFormSubmit = (formData: BaseFormValues) => {
		setFormData(formData);
		console.log('formData:', formData);
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
				Welcome! <br />
				Login to continue
			</Typography>

			<form onSubmit={handleSubmit(onFormSubmit)}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<FormInput<BaseFormValues | RegisterFormValues>
						type='email'
						name='emailAddress'
						label='Email Address'
						control={control}
						errorMessage={errors.emailAddress?.message}
						sx={{ marginTop: '16px' }}
					/>

					<PasswordFormInput<BaseFormValues | RegisterFormValues>
						name='password'
						label='Password'
						control={control}
						autoComplete='current-password'
						errorMessage={errors.password?.message}
						sx={{ marginTop: '16px' }}
					/>
				</Box>

				<Box sx={{ margin: '16px 0px' }}>
					<SubmitButton label='login' />
				</Box>

				<Box sx={{ margin: '8px 0px' }}>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<ActionLinkButton href='#' label='Forgot Password?' />
						<ActionLinkButton href='/admin/register' label='Create New Account' />
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default LoginForm;
