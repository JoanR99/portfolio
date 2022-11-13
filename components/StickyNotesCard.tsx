import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import {
	SiExpress,
	SiJest,
	SiMaterialui,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiTypescript,
} from 'react-icons/si';
import BlurImage from './BlurImage';
import ProjectCard from './ProjectCard';

const StickyNotesCard = () => {
	const { t } = useTranslation('');

	return (
		<ProjectCard>
			<BlurImage src="/images/sticky-notes.png" alt="Sticky  Notes" />

			<div className="flex flex-col items-center justify-between p-4 md:items-start">
				<h3 className="text-md font-medium text-teal-700">Sticky Notes</h3>
				<p className="mt-2 text-center text-sm md:text-left">
					{t('projects.sticky_notes.desc')}
				</p>
				<div className="mt-4 flex flex-wrap">
					<SiTypescript className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiReact className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiMaterialui className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiNodedotjs className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
					<SiExpress className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
					<SiPrisma className='sm:w-8" mr-4 h-6 w-6 text-blue-900 sm:h-8' />
					<SiPostgresql className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiJest className='sm:w-8" mr-4 h-6 w-6 text-red-800 sm:h-8' />
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
