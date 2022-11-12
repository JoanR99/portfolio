import { useTranslation } from 'next-i18next';

const Footer = () => {
	const { t } = useTranslation('');
	return (
		<footer className="flex h-24 flex-col items-center justify-center bg-teal-700 text-white">
			<p>&copy; {t('footer.copy')}</p>
			<p>{t('footer.rights')}</p>
		</footer>
	);
};

export default Footer;
