import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarNavItems = () => {
	const router = useRouter();
	const { t } = useTranslation('');

	return !router.pathname.includes('/projects') ? (
		<>
			<a href="#about" className="py-4 hover:opacity-90">
				{t('header.about')}
			</a>

			<a href="#skills" className="py-4 hover:opacity-90">
				{t('header.skills')}
			</a>

			<a href="#projects" className="py-4 hover:opacity-90">
				{t('header.projects')}
			</a>

			<a href="#contact" className="py-4 hover:opacity-90">
				{t('header.contact')}
			</a>
		</>
	) : (
		<>
			<Link href="/#about">
				<p className="cursor-pointer py-4 hover:opacity-90">
					{t('header.about')}
				</p>
			</Link>

			<Link href="/#skills">
				<p className="cursor-pointer py-4 hover:opacity-90">
					{t('header.skills')}
				</p>
			</Link>

			<Link href="?#projects">
				<p className="cursor-pointer py-4 hover:opacity-90">
					{t('header.projects')}
				</p>
			</Link>

			<Link href="/#contact">
				<p className="cursor-pointer py-4 hover:opacity-90">
					{t('header.contact')}
				</p>
			</Link>
		</>
	);
};

export default SidebarNavItems;
