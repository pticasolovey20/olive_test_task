import { create } from 'zustand';
import { RegisterValues } from '@/interfaces/authInterfaces';

interface RegisterFormStore {
	userData: RegisterValues;
	setUserData: (userData: Partial<RegisterValues>) => void;
	resetUserData: () => void;
}

const INITIAL_DATA: RegisterValues = {
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

	setUserData: (newUserData: Partial<RegisterValues>) =>
		set((state) => ({
			userData: { ...state.userData, ...newUserData },
		})),

	resetUserData: () => set({ userData: INITIAL_DATA }),
}));

export default useRegisterStore;
