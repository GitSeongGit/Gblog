
import { ThemeProvider } from 'styled-components';
import { Globalstyle } from '../styles/global';
import theme from '../styles/theme';
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Globalstyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
