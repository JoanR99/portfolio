import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';

import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
	return (
		<div>
			<div className="mx-auto max-w-sm  px-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
				<Head>
					<title>Joan Romero</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Hero />

				<About />
				<Skills />
				<Projects />
			</div>
		</div>
	);
};

export default Home;
