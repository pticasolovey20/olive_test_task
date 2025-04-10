import React, { ReactNode, FC, Dispatch, SetStateAction, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/authInterfaces';

import { Box, Typography } from '@mui/material';
import BackButton from '@/components/ui/BackButton';
import SubmitButton from '@/components/ui/SubmitButton';

interface IFormWrapperProps {
	currentStep: number;
	setCurrentStep: Dispatch<SetStateAction<number>>;
	children: ReactNode;
	onFormSubmit: (formData: RegisterFormValues) => void;
}

const FormWrapper: FC<IFormWrapperProps> = ({ currentStep, setCurrentStep, onFormSubmit, children }) => {
	const router = useRouter();
	const { trigger, handleSubmit } = useFormContext<RegisterFormValues>();

	const handlePrev = () => {
		if (currentStep === 1) {
			router.push('login');
		} else {
			setCurrentStep((prev) => prev - 1);
		}
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const isValid = await trigger(
			currentStep === 1
				? ['firstName', 'lastName', 'emailAddress', 'password', 'confirmPassword']
				: [
						'company',
						'phoneNumber',
						'country',
						'source',

						'isServiceProvider',
						'numbersOfSpaces',
						'numbersOfEmployees',
						'industry',
						'jobDescription',
						'website',
						'digital',

						'subscription',
						'privacyPolicy',
				  ]
		);

		if (!isValid) return;

		if (currentStep === 1) {
			setCurrentStep((prev) => prev + 1);
		} else {
			handleSubmit(onFormSubmit)();
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
					fontSize: '34px',
					fontWeight: 600,

					marginBottom: '40px',
				}}
			>
				{currentStep === 1 ? 'Register' : 'Almost there...'}
			</Typography>

			<form onSubmit={onSubmit}>
				<Box>
					<Box sx={{ maxWidth: '150px' }}>
						<BackButton handlePrev={handlePrev} />
					</Box>

					<Box
						sx={{
							maxHeight: '60vh',
							overflow: 'auto',

							display: 'flex',
							flexDirection: 'column',

							padding: '5px 10px',
							marginTop: '16px',
						}}
					>
						{children}
					</Box>

					<Box sx={{ padding: '0px 10px', marginTop: '16px' }}>
						<SubmitButton label={currentStep === 1 ? 'Next' : 'Register'} />
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default FormWrapper;
