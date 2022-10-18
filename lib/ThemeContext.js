import React, { useState, useContext } from 'react';
import theme, { thema1, thema2, thema3, thema4 } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { createContext } from 'react';
const defaultState = {
	themes: thema1,
	setThema: (data) => {},
};

const ThemeContext = createContext({ defaultState });

export const ThemeProviders = ({ children }) => {
	const [state, setState] = useState(defaultState);

	const setThema = (data) => {
		setState((el) => ({
			...el,
			themes: data,
		}));
	};
	const notice = {
		themes: state.themes,
		setThema,
	};
	return (
		<ThemeContext.Provider value={notice}>
			<ThemeProvider theme={{ theme, notice }}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};
export const useNotice = () => {
	return useContext(ThemeContext);
};
