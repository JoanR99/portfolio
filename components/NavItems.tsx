import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItems = () => {
	const router = useRouter();
	const { t } = useTranslation('');

	return !router.pathname.includes('/projects') ? (
		<>
			<a
				href="#about"
				className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
			>
				{t('header.about')}
			</a>

			<a
				href="#skills"
				className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
			>
				{t('header.skills')}
			</a>

			<a
				href="#projects"
				className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
			>
				{t('header.projects')}
			</a>

			<a
				href="#contact"
				className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
			>
				{t('header.contact')}
			</a>
		</>
	) : (
		<>
			<Link
				href="/#about"
				className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
			>
				{t('header.about')}
			</Link>

			<Link
				href="/#skills"
				className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
			>
				{t('header.skills')}
			</Link>

			<Link
				href="/#projects"
				className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
			>
				{t('header.projects')}
			</Link>

			<Link
				href="/#contact"
				className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
			>
				{t('header.contact')}
			</Link>
		</>
	);
};

export default NavItems;
