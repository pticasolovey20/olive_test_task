export interface RegisterFormValues {
	firstName: string;
	lastName: string;
	emailAddress: string;
	password: string;
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
