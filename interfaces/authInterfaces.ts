export interface BaseFormValues {
	emailAddress: string;
	password: string;
}

export interface RegisterFormValues extends BaseFormValues {
	firstName: string;
	lastName: string;
	confirmPassword: string;

	company?: string;
	phoneNumber?: string;
	country: string;
	source: string;

	isServiceProvider: 'yes' | 'no' | null;
	numbersOfSpaces?: string;
	numbersOfEmployees: string;
	industry?: string;
	jobDescription: string;
	website: string;
	digital: 'yes' | 'no' | null;

	subscription?: boolean;
	privacyPolicy: boolean;
}
