import { create } from 'zustand';
import { BaseFormValues } from '@/interfaces/authInterfaces';

interface LoginFormStore {
	formData: BaseFormValues;
	setFormData: (data: Partial<BaseFormValues>) => void;
	resetFormData: () => void;
}

const INITIAL_DATA: BaseFormValues = {
	emailAddress: '',
	password: '',
};

const useLoginFormStore = create<LoginFormStore>((set) => ({
	formData: INITIAL_DATA,

	setFormData: (newFormData: Partial<BaseFormValues>) =>
		set((state) => ({
			formData: { ...state.formData, ...newFormData },
		})),

	resetFormData: () => set({ formData: INITIAL_DATA }),
}));

export default useLoginFormStore;
