import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import FormContact from './FormContact';
import Envelope from './Envelope';

const ContactMe = () => {
	const { t } = useTranslation('');

	return (
		<div id="contact" className="relative z-0 my-24 min-h-fit scroll-mt-24">
			<h3 className="mb-8 text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
				{t('contact.title')}
			</h3>

			<div className="flex flex-col align-middle md:flex-row md:items-center md:gap-24">
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
					className="mx-auto w-full md:w-2/5"
				>
					<Envelope />
				</motion.div>
				<FormContact />
			</div>
		</div>
	);
};

export default ContactMe;
