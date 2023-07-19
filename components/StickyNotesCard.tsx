import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import {
	SiTailwindcss,
	SiNodedotjs,
	SiPostgresql,
	SiTypescript,
	SiExpress,
	SiJest,
} from 'react-icons/si';
import { RiVuejsFill } from 'react-icons/ri';
import BlurImage from './BlurImage';

const StickyNotesCard = () => {
	const { t } = useTranslation('');

	return (
		<div className="grid grid-cols-1 gap-2 rounded-xl border bg-neutral-100 p-2 shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:bg-slate-900 dark:shadow-teal-700">
			<BlurImage src="/images/sticky-notes.png" alt="Sticky  Notes" />

			<div className="flex flex-col items-center justify-between p-4">
				<h3 className="text-xl font-bold text-teal-700 lg:text-2xl">
					Sticky Notes
				</h3>
				<p className="mt-2 mb-4 text-center text-base font-light leading-relaxed text-gray-600 dark:text-gray-300">
					{t('projects.sticky_notes.desc')}
				</p>
				<div className="mt-4 flex flex-wrap justify-center gap-y-2">
					<SiTypescript className='sm:w-8" mr-2 h-6 w-6 text-blue-600 sm:h-8' />
					<RiVuejsFill className='sm:w-8" mr-2 h-6 w-6 text-green-700 sm:h-8' />
					<SiTailwindcss className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
					<SiNodedotjs className='sm:w-8" mr-2 h-6 w-6 text-lime-700 sm:h-8' />
					<SiExpress className='sm:w-8" mr-2 h-6 w-6 text-lime-700 sm:h-8' />
					<SiPostgresql className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
					<SiJest className='sm:w-8" mr-2 h-6 w-6 text-red-700 sm:h-8' />
				</div>

				<Link href="/projects/sticky-notes">
					<p className="mt-4 cursor-pointer text-sm font-medium text-pink-700">
						{t('projects.action')}
					</p>
				</Link>
			</div>
		</div>
	);
};

export default StickyNotesCard;
