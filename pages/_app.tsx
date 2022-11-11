import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ToastContainer />
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default appWithTranslation(MyApp);
