import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import {
	SiTailwindcss,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiTypescript,
	SiReactquery,
	SiExpress,
	SiJest,
} from 'react-icons/si';
import { RiVuejsFill } from 'react-icons/ri';
import BlurImage from './BlurImage';
import ProjectCard from './ProjectCard';
import { BsGithub } from 'react-icons/bs';
import { IoOpen } from 'react-icons/io5';

const StickyNotesCard = () => {
	const { t } = useTranslation('');

	return (
		<ProjectCard>
			<BlurImage src="/images/sticky-notes.png" alt="Sticky  Notes" />

			<div className="flex flex-col items-center justify-between p-4">
				<h3 className="text-xl font-bold text-teal-700 lg:text-2xl">
					Sticky Notes
				</h3>
				<p className="mt-2 text-center text-sm md:text-left">
					{t('projects.sticky_notes.desc')}
				</p>
				<div className="mt-4 flex flex-wrap justify-center gap-y-2">
					<SiTypescript className='sm:w-8" mr-2 h-6 w-6 text-blue-600 sm:h-8' />
					<RiVuejsFill className='sm:w-8" mr-2 h-6 w-6 text-green-700 sm:h-8' />
					<SiReactquery className='sm:w-8" mr-2 h-6 w-6 text-red-600 sm:h-8' />
					<SiTailwindcss className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
					<SiNodedotjs className='sm:w-8" mr-2 h-6 w-6 text-lime-700 sm:h-8' />
					<SiExpress className='sm:w-8" mr-2 h-6 w-6 text-lime-700 sm:h-8' />
					<SiPrisma className='sm:w-8" mr-2 h-6 w-6 text-blue-900 sm:h-8' />
					<SiPostgresql className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
					<SiJest className='sm:w-8" mr-2 h-6 w-6 text-red-700 sm:h-8' />
				</div>
				<div className="mt-6 flex w-full justify-center">
					<a
						href="https://github.com/JoanR99/sticky-notes-server"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4 flex flex-col items-center justify-center"
					>
						<BsGithub className="h-6 w-6 text-pink-700 hover:scale-105 hover:opacity-90 sm:h-7 sm:w-7" />
					</a>

					<a
						href="https://github.com/JoanR99/sticky-notes-client-vue"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4 flex flex-col items-center justify-center"
					>
						<BsGithub className="h-6 w-6 text-pink-700 hover:scale-105 hover:opacity-90 sm:h-7 sm:w-7" />
					</a>

					<a
						href="https://sticky-notes-client-vue.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4 flex flex-col items-center justify-center"
					>
						<IoOpen className="h-6 w-6 text-pink-700  hover:scale-105 hover:opacity-90 sm:h-7 sm:w-7" />
					</a>
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
