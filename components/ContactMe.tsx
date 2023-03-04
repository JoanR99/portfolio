import { useTranslation } from 'next-i18next';
import EarthCanvas from './EarthCanvas';
import FormContact from './FormContact';
import StarsCanvas from './StarsCanvas';

const ContactMe = () => {
	const { t } = useTranslation('');

	return (
		<div id="contact" className="relative z-0 my-24 min-h-fit scroll-mt-24">
			<StarsCanvas />
			<h3 className="mb-8 text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
				{t('contact.title')}
			</h3>

			<div className="flex flex-col align-middle md:flex-row md:items-center md:justify-between">
				<div className="h-[200px] sm:h-[250px] md:w-1/2 lg:h-[400px] lg:w-2/5">
					<EarthCanvas />
				</div>
				<FormContact />
			</div>
		</div>
	);
};

export default ContactMe;
