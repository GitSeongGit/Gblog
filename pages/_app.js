import { Globalstyle } from '../styles/global';
import { ThemeProviders } from '../lib/ThemeContext';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Globalstyle />
			<ThemeProviders>
				<Component {...pageProps} />
			</ThemeProviders>
		</>
	);
}

export default MyApp;
