import { useTranslation } from 'next-i18next';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
const TypingBanner = () => {
	const { t } = useTranslation('');
	const [text, count] = useTypewriter({
		words: [t('hero.banner.developer'), t('hero.banner.engineer')],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<h2 className="text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
			<span className="text-teal-600">{text}</span>
			<Cursor cursorColor="#0D9488" />
		</h2>
	);
};

export default TypingBanner;
