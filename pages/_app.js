import { Globalstyle } from '../styles/global';
import { ThemeProviders } from '../lib/ThemeContext';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProviders>
				<Component {...pageProps} />
			</ThemeProviders>
			<Globalstyle />
		</>
	);
}

export default MyApp;
