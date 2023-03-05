import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import {
	SiGraphql,
	SiJest,
	SiMongodb,
	SiNestjs,
	SiNodedotjs,
	SiReact,
	SiRedux,
	SiTypescript,
} from 'react-icons/si';
import BlurImage from './BlurImage';
import ProjectCard from './ProjectCard';
import { RxStitchesLogo } from 'react-icons/rx';
import { TbBrandRadixUi } from 'react-icons/tb';

const CoroshopCard = () => {
	const { t } = useTranslation('');

	return (
		<ProjectCard>
			<BlurImage src="/images/coroshop.png" alt="Coroshop" />

			<div className="flex flex-col items-center justify-between p-4">
				<h3 className="text-lg font-bold text-teal-700">Coroshop</h3>
				<p className="mt-2 text-center text-sm md:text-left">
					{t('projects.coroshop.desc')}
				</p>
				<div className="mt-4 flex flex-wrap justify-center">
					<SiTypescript className='sm:w-8" mr-4 h-6 w-6 text-blue-600 sm:h-8' />
					<SiReact className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiRedux className='sm:w-8" mr-4 h-6 w-6 text-purple-700 sm:h-8' />
					<RxStitchesLogo className='sm:w-8" mr-4 h-7 w-7 text-black sm:h-8' />
					<TbBrandRadixUi className='sm:w-8" mr-4 h-7 w-7 text-black sm:h-8' />
					<SiNodedotjs className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
					<SiNestjs className='sm:w-8" mr-4 h-6 w-6 text-red-700 sm:h-8' />
					<SiGraphql className='sm:w-8" mr-4 h-6 w-6 text-pink-700 sm:h-8' />
					<SiMongodb className='sm:w-8" mr-4 h-6 w-6 text-green-700 sm:h-8' />
					<SiJest className='sm:w-8" mr-4 h-6 w-6 text-red-800 sm:h-8' />
				</div>
				<Link href="/projects/coroshop">
					<p className="mt-4 cursor-pointer text-sm font-medium text-pink-700">
						{t('projects.action')}
					</p>
				</Link>
			</div>
		</ProjectCard>
	);
};

export default CoroshopCard;
