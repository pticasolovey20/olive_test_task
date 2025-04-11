import * as yup from 'yup';
import { TFunction } from 'i18next';

export const getRegisterSchema = (t: TFunction) =>
	yup.object({
		firstName: yup
			.string()
			.required(t('validation.required'))
			.min(2, t('validation.minLength', { count: 2 }))
			.max(30, t('validation.maxLength', { count: 30 })),
		lastName: yup
			.string()
			.required(t('validation.required'))
			.min(2, t('validation.minLength', { count: 2 })),
		emailAddress: yup.string().required(t('validation.required')).email(t('validation.email')),

		password: yup
			.string()
			.required(t('validation.required'))
			.matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/, t('validation.passwordFormat')),

		confirmPassword: yup
			.string()
			.required(t('validation.required'))
			.oneOf([yup.ref('password')], t('validation.passwordsMustMatch')),

		company: yup.string(),
		phoneNumber: yup.string(),
		country: yup.string().required(t('validation.required')),
		source: yup.string().required(t('validation.required')),

		isServiceProvider: yup.string().required(t('validation.required')),

		numbersOfSpaces: yup.string().when('isServiceProvider', {
			is: (v: string) => v === 'yes',
			then: (schema) => schema.required(t('validation.required')),
			otherwise: (schema) => schema.nullable(),
		}),

		numbersOfEmployees: yup.string().required(t('validation.required')),

		industry: yup.string().when('isServiceProvider', {
			is: (v: string) => v === 'no',
			then: (schema) => schema.required(t('validation.required')),
			otherwise: (schema) => schema.nullable(),
		}),

		jobDescription: yup.string().required(t('validation.required')),
		website: yup.string().required(t('validation.required')),
		digital: yup.string().required(t('validation.required')),

		subscription: yup.boolean().default(true),
		privacyPolicy: yup.boolean().oneOf([true], t('validation.mustAccept')).required(t('validation.mustAccept')),
	});

export const getLoginSchema = (t: TFunction) =>
	yup.object({
		emailAddress: yup.string().required(t('validation.required')).email(t('validation.email')),

		password: yup
			.string()
			.required(t('validation.required'))
			.matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/, t('validation.passwordFormat')),
	});
