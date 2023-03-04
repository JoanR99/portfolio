import Developer from './Developer';
import HackerSVG from './hacker';
import SvgContainer from './SvgContainer';
import { useTranslation } from 'next-i18next';

const About = () => {
	const { t } = useTranslation('');
	return (
		<div className="dm:my-24 my-8 min-h-fit scroll-mt-24" id="about">
			<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
				{t('about.title')}
			</h3>
			<div className="mt-4 mb-4 flex flex-col align-middle sm:mt-6 sm:gap-8 md:flex-row md:justify-between">
				<p className="mb-4 md:w-3/6">{t('about.first_p')}</p>
				<SvgContainer>
					<HackerSVG />
				</SvgContainer>
			</div>
			<div className="mt-4 mb-4 flex flex-col-reverse align-middle sm:mt-16 md:flex-row md:justify-between md:gap-8">
				<SvgContainer>
					<Developer />
				</SvgContainer>
				<p className="mb-4 md:w-3/6">{t('about.second_p')}</p>
			</div>
		</div>
	);
};

export default About;
