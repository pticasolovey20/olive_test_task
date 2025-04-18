'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/authInterfaces';
import useRegisterFormStore from '@/stores/registrationStore';
import { getRegisterSchema } from '@/validation/authSchema';

import FormWrapper from '@/components/forms/FormWrapper';
import RegisterFirstStep from '@/components/forms/RegisterFirstStep';
import RegisterSecondStep from '@/components/forms/RegisterSecondStep';

const RegisterForm = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const { userData, setUserData } = useRegisterFormStore();
	const { t } = useTranslation();

	const router = useRouter();

	const form = useForm<RegisterFormValues>({
		defaultValues: userData,
		mode: 'onChange',

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		resolver: yupResolver(getRegisterSchema(t)) as any, //??,
	});

	const onFormSubmit = (formData: RegisterFormValues) => {
		console.log(formData);
		setUserData(formData);
		localStorage.setItem('userData', JSON.stringify(formData));
		router.push(`/admin/confirm-email?email=${formData.emailAddress}`);
	};

	return (
		<FormProvider {...form}>
			<FormWrapper currentStep={currentStep} setCurrentStep={setCurrentStep} onFormSubmit={onFormSubmit}>
				{currentStep === 1 && <RegisterFirstStep />}
				{currentStep === 2 && <RegisterSecondStep />}
			</FormWrapper>
		</FormProvider>
	);
};

export default RegisterForm;
