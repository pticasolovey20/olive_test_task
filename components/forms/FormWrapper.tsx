import React, { ReactNode, FC, Dispatch, SetStateAction, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

import { Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
				: ['company', 'phoneNumber']
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
			}}
		>
			<Typography
				variant='h4'
				sx={{
					fontSize: '34px',
					fontWeight: 'bold',

					marginBottom: '40px',
				}}
			>
				{currentStep === 1 ? 'Register' : 'Almost there...'}
			</Typography>

			<form onSubmit={onSubmit}>
				<Box>
					<Box
						sx={{
							maxWidth: '150px',
						}}
					>
						<Button size='medium' color='primary' variant='text' onClick={handlePrev}>
							<ArrowBackIcon />
						</Button>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',

							padding: '5px 10px',
							margin: '16px 0px',
						}}
					>
						{children}
					</Box>

					<Box
						sx={{
							padding: '0px 10px',
							margin: '16px 0px',
						}}
					>
						<Button fullWidth type='submit' size='large' color='primary' variant='contained'>
							{currentStep === 1 ? 'Next' : 'Register'}
						</Button>
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default FormWrapper;
