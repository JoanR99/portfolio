import Link from 'next/link';
import {
	SiExpress,
	SiJavascript,
	SiJest,
	SiNodedotjs,
	SiReact,
	SiSass,
} from 'react-icons/si';
import BlurImage from './BlurImage';
import ProjectCard from './ProjectCard';

const WebAccessCard = () => {
	return (
		<ProjectCard>
			<BlurImage src="/images/web-access.png" alt="WebAcess" />

			<div className="flex flex-col items-center justify-between p-4 md:items-start">
				<h3 className="text-md font-medium text-teal-700">WebAccess</h3>
				<p className="mt-2 text-center text-sm md:text-left">
					Herramienta de evaluación automática de accesibilidad web y evaluador
					de contraste.
				</p>
				<div className="mt-4 flex">
					<SiJavascript className='sm:w-8" mr-4 h-6 w-6 text-yellow-400 sm:h-8' />
					<SiReact className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
					<SiSass className='sm:w-8" mr-4 h-6 w-6 text-pink-700 sm:h-8' />
					<SiNodedotjs className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
					<SiExpress className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
					<SiJest className='sm:w-8" mr-4 h-6 w-6 text-red-800 sm:h-8' />
				</div>
				<Link href="/projects/web-access">
					<p className="mt-4 cursor-pointer text-sm font-medium text-pink-700">
						Ver Proyecto
					</p>
				</Link>
			</div>
		</ProjectCard>
	);
};

export default WebAccessCard;
