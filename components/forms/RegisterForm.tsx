'use client';

import React, { ChangeEvent, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/navigation';

import { RegisterFormValues } from '@/interfaces/authInterfaces';
import { firstStepRegisterSchema, secondStepRegisterSchema } from '@/validation/authSchema';

import RegisterFirstStep from '@/components/forms/RegisterFirstStep';
import RegisterSecondStep from '@/components/forms/RegisterSecondStep';
import FormWrapper from '@/components/forms/FormWrapper';
import useRegisterFormStore from '@/stores/registrationFormStore';

const fullRegisterSchema = firstStepRegisterSchema.concat(secondStepRegisterSchema);

const RegisterForm = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const { formData, setFormData } = useRegisterFormStore();
	const router = useRouter();

	const form = useForm<RegisterFormValues>({
		defaultValues: formData,
		mode: 'onChange',

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		resolver: yupResolver(fullRegisterSchema) as any, //??,
	});

	const handleInputChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: keyof RegisterFormValues
	) => {
		setFormData({ [name]: event.target.value });
		form.setValue(name, event.target.value);
	};

	const handleSelectChange = (event: SelectChangeEvent<string | boolean | null>, name: keyof RegisterFormValues) => {
		setFormData({ [name]: event.target.value });
		form.setValue(name, event.target.value);
	};

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, name: keyof RegisterFormValues) => {
		setFormData({ [name]: event.target.checked });
		form.setValue(name, event.target.checked);
	};

	const handleRadioChange = (event: ChangeEvent<HTMLInputElement>, name: keyof RegisterFormValues) => {
		setFormData({ [name]: event.target.value });
		form.setValue(name, event.target.value);
	};

	const onFormSubmit = (formData: RegisterFormValues) => {
		console.log('final formData:', formData);
		router.push(`/admin/confirm-email?email=${formData.emailAddress}`);
	};

	return (
		<FormProvider {...form}>
			<FormWrapper currentStep={currentStep} setCurrentStep={setCurrentStep} onFormSubmit={onFormSubmit}>
				{currentStep === 1 && <RegisterFirstStep formData={formData} handleInputChange={handleInputChange} />}
				{currentStep === 2 && (
					<RegisterSecondStep
						formData={formData}
						handleInputChange={handleInputChange}
						handleSelectChange={handleSelectChange}
						handleRadioChange={handleRadioChange}
						handleCheckboxChange={handleCheckboxChange}
					/>
				)}
			</FormWrapper>
		</FormProvider>
	);
};

export default RegisterForm;
