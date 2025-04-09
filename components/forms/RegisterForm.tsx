'use client';

import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';
import { firstStepRegisterSchema, secondStepRegisterSchema } from '@/validation/registerSchema';

import RegisterFirstStep from '@/components/forms/RegisterFirstStep';
import RegisterSecondStep from '@/components/forms/RegisterSecondStep';
import FormWrapper from '@/components/forms/FormWrapper';

const fullRegisterSchema = firstStepRegisterSchema.concat(secondStepRegisterSchema);

const INITIAL_DATA: RegisterFormValues = {
	firstName: '',
	lastName: '',
	emailAddress: '',
	password: '',
	confirmPassword: '',
	company: '',
	phoneNumber: '',
};

const RegisterForm = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const form = useForm<RegisterFormValues>({
		defaultValues: INITIAL_DATA,
		mode: 'onChange',

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		resolver: yupResolver(fullRegisterSchema) as any, //??,
	});

	const onFormSubmit = (formData: RegisterFormValues) => console.log('final data:', formData);

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
