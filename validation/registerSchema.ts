import * as yup from 'yup';

export const firstStepRegisterSchema = yup.object({
	firstName: yup.string().required('Required field').min(2, 'Minimum length is 2').max(30, 'Maximum length is 30'),
	lastName: yup.string().required('Required field').min(2, 'Minimum length is 2'),
	emailAddress: yup.string().required('Required field').email('Not a valid email address'),
	password: yup
		.string()
		.required('Required field')
		.matches(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
			'Password must be at least 8 english characters, and contain 1 uppercase, 1 lowercase and 1 digit'
		),

	confirmPassword: yup
		.string()
		.required('Required field')
		.oneOf([yup.ref('password')], 'Passwords must match'),
});

export const secondStepRegisterSchema = yup.object({
	company: yup.string(),
	phoneNumber: yup.string(),
	country: yup.string().required('Required field'),
	source: yup.string().required('Required field'),
	subscription: yup.boolean().default(true),
	privacyPolicy: yup
		.boolean()
		.oneOf([true], 'You must accept the terms and conditions')
		.required('You must accept the terms and conditions'),
});
