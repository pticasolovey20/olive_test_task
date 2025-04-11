import { create } from 'zustand';
import { LoginFormValues } from '@/interfaces/authInterfaces';

interface LoginFormStore {
	isAuthenticated: boolean;
	userData: LoginFormValues | null;
	handleLogin: (userData: LoginFormValues) => void;
	handleLogout: () => void;
}

const useLoginFormStore = create<LoginFormStore>((set) => ({
	isAuthenticated: false,
	userData: null,

	handleLogin: (userData) => set({ isAuthenticated: true, userData }),
	handleLogout: () => set({ isAuthenticated: false, userData: null }),
}));

export default useLoginFormStore;
