import { create } from "zustand";

interface StoreState {
	name: string;
	passwordList: string[];
	setName: (name: string) => void;
	setPasswordList: (newPassword: string) => void;
}

export const useStore = create<StoreState>((set) => ({
	name: "",
	passwordList: [],
	setName: (name) => set({ name }),
	setPasswordList: (newPassword) =>
		set((state) => ({
			passwordList: [...state.passwordList, newPassword],
		})),
}));
