import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import {
	SiTypescript,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiFirebase,
} from 'react-icons/si';
import BlurImage from './BlurImage';
import ProjectCard from './ProjectCard';

const TimeKillerCard = () => {
	const { t } = useTranslation('');

	return (
		<ProjectCard>
			<BlurImage src="/images/time-killer.png" alt="Time Killer" />

			<div className="flex flex-col items-center justify-between p-4">
				<h3 className="text-lg font-bold text-teal-700">Time Killer</h3>
				<p className="mt-2 text-center text-sm md:text-left">
					{t('projects.time_killer.desc')}
				</p>
				<div className="mt-4 flex">
					<SiTypescript className='sm:w-8" mr-4 h-6 w-6 text-blue-600 sm:h-8' />
					<SiNextdotjs className='sm:w-8" mr-4 h-6 w-6 text-black sm:h-8' />
					<SiReact className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiTailwindcss className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiFirebase className='sm:w-8" mr-4 h-6 w-6 text-orange-500 sm:h-8' />
				</div>
				<Link href="/projects/time-killer">
					<p className="mt-4 cursor-pointer text-sm font-medium text-pink-700">
						{t('projects.action')}
					</p>
				</Link>
			</div>
		</ProjectCard>
	);
};

export default TimeKillerCard;
