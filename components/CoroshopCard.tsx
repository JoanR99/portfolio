import Link from 'next/link';
import {
	SiGraphql,
	SiJest,
	SiMongodb,
	SiNestjs,
	SiNodedotjs,
	SiReact,
	SiRedux,
	SiStyledcomponents,
	SiTypescript,
} from 'react-icons/si';
import BlurImage from './BlurImage';
import ProjectCard from './ProjectCard';

const CoroshopCard = () => {
	return (
		<ProjectCard>
			<BlurImage src="/images/coroshop.png" alt="Coroshop" />

			<div className="flex flex-col items-center justify-between p-4 md:items-start">
				<h3 className="text-md font-medium text-teal-700">Coroshop</h3>
				<p className="mt-2 text-center text-sm md:text-left">
					E-commerce con pagos en Stripe o PayPal.
				</p>
				<div className="mt-4 flex flex-wrap justify-center">
					<SiTypescript className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiReact className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiRedux className='sm:w-8" mr-4 h-6 w-6 text-purple-700 sm:h-8' />
					<SiStyledcomponents className='sm:w-8" mr-4 h-12 w-12 text-pink-700 sm:h-8' />
					<SiNodedotjs className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
					<SiNestjs className='sm:w-8" mr-4 h-6 w-6 text-red-700 sm:h-8' />
					<SiGraphql className='sm:w-8" mr-4 h-6 w-6 text-pink-700 sm:h-8' />
					<SiMongodb className='sm:w-8" mr-4 h-6 w-6 text-green-700 sm:h-8' />
					<SiJest className='sm:w-8" mr-4 h-6 w-6 text-red-800 sm:h-8' />
				</div>
				<Link href="/projects/coroshop">
					<p className="mt-4 cursor-pointer text-sm font-medium text-pink-700">
						Ver Proyecto
					</p>
				</Link>
			</div>
		</ProjectCard>
	);
};

export default CoroshopCard;
