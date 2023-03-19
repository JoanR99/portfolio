import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import TypingBanner from './TypingBanner';
import { useRouter } from 'next/router';

const Hero = () => {
	const { t } = useTranslation('');
	const router = useRouter();

	const locale = router.locale;

	return (
		<main
			className="flex min-h-screen flex-col items-center justify-center md:mt-8"
			id="hero"
		>
			<h2 className="font-semi-bold text-center text-xl sm:text-3xl  md:mb-2 md:text-4xl lg:text-5xl">
				{t('hero.greet')} Joan Romero
			</h2>
			<TypingBanner />
			<p className="mt-6 mb-4 text-center text-base font-light text-gray-600 dark:text-gray-200 sm:mt-8 sm:text-lg md:text-xl">
				{t('hero.skills')}
			</p>

			<div className="mt-4 flex w-24 justify-around align-middle md:mt-1">
				<a
					href="https://www.linkedin.com/in/joanr99/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsLinkedin className="h-6 w-6 text-pink-700  hover:scale-105 hover:opacity-90 sm:h-8 sm:w-8" />
				</a>
				<a
					href="https://github.com/JoanR99"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsGithub className="h-6 w-6 text-pink-700  hover:scale-105 hover:opacity-90 sm:h-8 sm:w-8" />
				</a>
			</div>

			<div className="mt-8 flex justify-center">
				<a
					className="rounded-md border border-pink-600 bg-pink-700 px-2 py-1 font-medium text-gray-100 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-105 hover:opacity-90 dark:shadow-none"
					href={`/Joan_Romero_CV_${locale?.toUpperCase()}.pdf`}
					download
				>
					{t('hero.cv')}
				</a>
			</div>
		</main>
	);
};

export default Hero;
