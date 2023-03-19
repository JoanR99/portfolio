import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import Coding from './Coding';
import Programmer from './Programmer';

const About = () => {
	const { t } = useTranslation('');
	return (
		<div className="dm:my-24 my-8 min-h-fit scroll-mt-24" id="about">
			<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
				{t('about.title')}
			</h3>
			<div className="mt-4 flex flex-col align-middle sm:mt-2 sm:gap-8 md:mb-12 md:flex-row md:items-center md:justify-between">
				<p className="mb-6 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:w-1/2 md:text-base">
					{t('about.first_p')}
				</p>
				<motion.div
					initial={{
						opacity: 0,
						scale: 0.8,
					}}
					whileInView={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 0.5,
					}}
					className="mx-auto mb-6 w-full md:w-2/5"
				>
					<Coding />
				</motion.div>
			</div>
			<div className="flex flex-col-reverse items-center align-middle sm:mt-2 md:flex-row md:items-center md:justify-between md:gap-8">
				<motion.div
					initial={{
						opacity: 0,
						scale: 0.8,
					}}
					whileInView={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 0.5,
					}}
					className="mx-auto mb-6 w-full md:w-2/5"
				>
					<Programmer />
				</motion.div>

				<p className="mb-6 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:w-1/2 md:text-base">
					{t('about.second_p')}
				</p>
			</div>
		</div>
	);
};

export default About;
