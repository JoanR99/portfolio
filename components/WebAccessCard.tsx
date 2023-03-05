import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import {
	SiFastapi,
	SiTypescript,
	SiPython,
	SiSvelte,
	SiSass,
	SiPytest,
} from 'react-icons/si';
import BlurImage from './BlurImage';
import ProjectCard from './ProjectCard';

const WebAccessCard = () => {
	const { t } = useTranslation('');

	return (
		<ProjectCard>
			<BlurImage src="/images/web-access.png" alt="WebAcess" />

			<div className="flex flex-col items-center justify-between p-4">
				<h3 className="text-lg font-bold text-teal-700">WebAccess</h3>
				<p className="mt-2 text-center text-sm md:text-left">
					{t('projects.web_access.desc')}
				</p>
				<div className="mt-4 flex">
					<SiTypescript className='sm:w-8" mr-4 h-6 w-6 text-blue-600 sm:h-8' />
					<SiSvelte className='sm:w-8" mr-4 h-6 w-6 text-orange-600 sm:h-8' />
					<SiSass className='sm:w-8" mr-4 h-6 w-6 text-pink-700 sm:h-8' />
					<SiPython className='sm:w-8" mr-4 h-6 w-6 text-yellow-600 sm:h-8' />
					<SiFastapi className='sm:w-8" mr-4 h-6 w-6 text-green-700 sm:h-8' />
					<SiPytest className='sm:w-8" mr-4 h-6 w-6 text-blue-600 sm:h-8' />
				</div>
				<Link href="/projects/web-access">
					<p className="mt-4 cursor-pointer text-sm font-medium text-pink-700">
						{t('projects.action')}
					</p>
				</Link>
			</div>
		</ProjectCard>
	);
};

export default WebAccessCard;
