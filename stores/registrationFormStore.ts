import { create } from 'zustand';
import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

interface RegisterFormStore {
	formData: RegisterFormValues;
	setFormData: (data: Partial<RegisterFormValues>) => void;
	resetFormData: () => void;
}

const INITIAL_DATA: RegisterFormValues = {
	firstName: '',
	lastName: '',
	emailAddress: '',
	password: '',
	confirmPassword: '',

	company: '',
	phoneNumber: '',
	country: '',
	source: '',

	isServiceProvider: null,
	numbersOfSpaces: '',
	numbersOfEmployees: '',
	industry: '',
	jobDescription: '',
	website: '',
	digital: null,

	subscription: true,
	privacyPolicy: false,
};

const useRegisterFormStore = create<RegisterFormStore>((set) => ({
	formData: INITIAL_DATA,

	setFormData: (newFormData: Partial<RegisterFormValues>) =>
		set((state) => ({
			formData: { ...state.formData, ...newFormData },
		})),

	resetFormData: () => set({ formData: INITIAL_DATA }),
}));

export default useRegisterFormStore;
