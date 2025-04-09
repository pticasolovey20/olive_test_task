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
	subscription?: boolean;
	privacyPolicy: boolean;
}
