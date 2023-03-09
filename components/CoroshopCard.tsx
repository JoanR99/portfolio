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
import { BsGithub } from 'react-icons/bs';
import { IoOpen } from 'react-icons/io5';

const CoroshopCard = () => {
	const { t } = useTranslation('');

	return (
		<ProjectCard>
			<BlurImage src="/images/coroshop.png" alt="Coroshop" />

			<div className="flex flex-col items-center justify-between p-4">
				<h3 className="text-xl font-bold text-teal-700 lg:text-2xl">
					Coroshop
				</h3>
				<p className="mt-2 text-center text-sm md:text-left">
					{t('projects.coroshop.desc')}
				</p>
				<div className="mt-4 flex flex-wrap justify-center gap-y-2">
					<SiTypescript className='sm:w-8" mr-2 h-6 w-6 text-blue-600 sm:h-8' />
					<SiReact className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
					<SiRedux className='sm:w-8" mr-2 h-6 w-6 text-purple-700 sm:h-8' />
					<RxStitchesLogo className='sm:w-8" mr-2 h-7 w-7 text-black sm:h-8' />
					<TbBrandRadixUi className='sm:w-8" mr-2 h-7 w-7 text-black sm:h-8' />
					<SiNodedotjs className='sm:w-8" mr-2 h-6 w-6 text-lime-700 sm:h-8' />
					<SiNestjs className='sm:w-8" mr-2 h-6 w-6 text-red-700 sm:h-8' />
					<SiGraphql className='sm:w-8" mr-2 h-6 w-6 text-pink-700 sm:h-8' />
					<SiMongodb className='sm:w-8" mr-2 h-6 w-6 text-green-700 sm:h-8' />
					<SiJest className='sm:w-8" mr-2 h-6 w-6 text-red-800 sm:h-8' />
				</div>

				<div className="mt-6 flex w-full justify-center">
					<a
						href="https://github.com/JoanR99/coroshop-server"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4 flex flex-col items-center justify-center"
					>
						<BsGithub className="h-6 w-6 text-pink-700 hover:scale-105 hover:opacity-90 sm:h-7 sm:w-7" />
					</a>

					<a
						href="https://github.com/JoanR99/coroshop-client"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4 flex flex-col items-center justify-center"
					>
						<BsGithub className="h-6 w-6 text-pink-700 hover:scale-105 hover:opacity-90 sm:h-7 sm:w-7" />
					</a>

					<a
						href="https://coroshop-client.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4 flex flex-col items-center justify-center"
					>
						<IoOpen className="h-6 w-6 text-pink-700  hover:scale-105 hover:opacity-90 sm:h-7 sm:w-7" />
					</a>
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
