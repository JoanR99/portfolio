import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import {
	SiFastify,
	SiTailwindcss,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiTypescript,
	SiVitest,
	SiHeadlessui,
	SiReactquery,
} from 'react-icons/si';
import { RiVuejsFill } from 'react-icons/ri';
import BlurImage from './BlurImage';
import ProjectCard from './ProjectCard';

const StickyNotesCard = () => {
	const { t } = useTranslation('');

	return (
		<ProjectCard>
			<BlurImage src="/images/sticky-notes.png" alt="Sticky  Notes" />

			<div className="flex flex-col items-center justify-between p-4">
				<h3 className="text-lg font-bold text-teal-700">Sticky Notes</h3>
				<p className="mt-2 text-center text-sm md:text-left">
					{t('projects.sticky_notes.desc')}
				</p>
				<div className="mt-4 flex flex-wrap">
					<SiTypescript className='sm:w-8" mr-4 h-6 w-6 text-blue-600 sm:h-8' />
					<RiVuejsFill className='sm:w-8" mr-4 h-6 w-6 text-green-700 sm:h-8' />
					<SiReactquery className='sm:w-8" mr-4 h-6 w-6 text-red-600 sm:h-8' />
					<SiTailwindcss className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiHeadlessui className='sm:w-8" mr-4 h-6 w-6 text-indigo-700 sm:h-8' />
					<SiNodedotjs className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
					<SiFastify className='sm:w-8" mr-4 h-6 w-6 text-black sm:h-8' />
					<SiPrisma className='sm:w-8" mr-4 h-6 w-6 text-blue-900 sm:h-8' />
					<SiPostgresql className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiVitest className='sm:w-8" mr-4 h-6 w-6 text-yellow-600 sm:h-8' />
				</div>
				<Link href="/projects/sticky-notes">
					<p className="mt-4 cursor-pointer text-sm font-medium text-pink-700">
						{t('projects.action')}
					</p>
				</Link>
			</div>
		</ProjectCard>
	);
};

export default StickyNotesCard;
