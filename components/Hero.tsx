import Image from 'next/image';
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
			className="flex min-h-screen flex-col items-center justify-center"
			id="hero"
		>
			<h2 className="text-center text-2xl font-bold sm:text-3xl md:mb-2 md:text-4xl lg:text-5xl">
				{t('hero.greet')} <span className="text-teal-600">Joan Romero</span>
			</h2>
			<TypingBanner />
			<p className="text-md mt-6 text-center sm:mt-8 sm:text-lg md:text-xl">
				{t('hero.skills')}
			</p>
			<div className="mt-16 flex justify-center align-middle">
				<motion.a
					initial={{
						x: -200,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					href="https://www.linkedin.com/in/joanr99/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsLinkedin className="mr-4 h-6 w-6 text-pink-700  hover:scale-105 hover:opacity-90 sm:h-8 sm:w-8" />
				</motion.a>
				<motion.a
					initial={{
						x: 200,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					href="https://github.com/JoanR99"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsGithub className="mr-4 h-6 w-6 text-pink-700  hover:scale-105 hover:opacity-90 sm:h-8 sm:w-8" />
				</motion.a>
			</div>

			<div className="mt-16 flex justify-center">
				<motion.a
					initial={{
						y: 100,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						y: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					whileHover={{
						scale: 1.05,
						opacity: 0.9,
						transition: { duration: 0.1 },
					}}
					className="rounded-xl border border-solid border-pink-600 bg-pink-700 p-2 font-medium text-white shadow-lg shadow-gray-400 dark:shadow-teal-700"
					href={`/Joan_Romero_CV_${locale?.toUpperCase()}.pdf`}
					download
				>
					{t('hero.cv')}
				</motion.a>
			</div>
		</main>
	);
};

export default Hero;
