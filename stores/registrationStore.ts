import { create } from 'zustand';
import { RegisterFormValues } from '@/interfaces/authInterfaces';

interface RegisterFormStore {
	userData: RegisterFormValues;
	setUserData: (userData: Partial<RegisterFormValues>) => void;
	resetUserData: () => void;
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

const useRegisterStore = create<RegisterFormStore>((set) => ({
	userData: INITIAL_DATA,

	setUserData: (newUserData: Partial<RegisterFormValues>) =>
		set((state) => ({
			userData: { ...state.userData, ...newUserData },
		})),

	resetUserData: () => set({ userData: INITIAL_DATA }),
}));

export default useRegisterStore;
