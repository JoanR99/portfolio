import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { appWithTranslation } from 'next-i18next';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider enableSystem={true} attribute="class">
				<ToastContainer />
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default appWithTranslation(MyApp);
