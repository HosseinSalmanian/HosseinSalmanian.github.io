import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
	reducer: {
		theme: themeReducer,
	},
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();

export default store;
