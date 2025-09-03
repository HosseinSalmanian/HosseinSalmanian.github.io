import { createSlice } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark';

interface ThemeState {
	previousValue: Theme;
	currentValue: Theme;
}
const initialState: ThemeState = {
	currentValue: 'light',
	previousValue: 'dark',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState: initialState,
	selectors: {
		currentTheme: (state) => state.currentValue,
		previousTheme: (state) => state.previousValue,
	},
	reducers: {
		toggle: (state) => {
			const currentTheme = state.currentValue;
			state.currentValue = state.previousValue;
			state.previousValue = currentTheme;
		},
	},
});

export const { toggle } = themeSlice.actions;
export const { currentTheme, previousTheme } = themeSlice.selectors;

export default themeSlice.reducer;
