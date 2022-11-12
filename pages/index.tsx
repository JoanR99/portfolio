import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import ContactMe from '../components/ContactMe';

import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}

const Home: NextPage = () => {
	const { t } = useTranslation('');
	return (
		<div>
			<div className="mx-auto max-w-sm  px-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
				<Head>
					<title>Joan Romero</title>
					<meta name="description" content="Joan Romero Portfolio" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Hero />

				<About />
				<Skills />
				<Projects />
				<ContactMe />
			</div>
		</div>
	);
};

export default Home;
