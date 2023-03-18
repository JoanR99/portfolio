import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { IoOpen } from 'react-icons/io5';
import {
	SiFastapi,
	SiPython,
	SiSass,
	SiPytest,
	SiReact,
	SiJavascript,
} from 'react-icons/si';
import BlurImage from './BlurImage';
import ProjectCard from './ProjectCard';

const WebAccessCard = () => {
	const { t } = useTranslation('');

	return (
		<ProjectCard>
			<BlurImage src="/images/web-access.png" alt="WebAcess" />

			<div className="flex flex-col items-center justify-between p-4">
				<h3 className="text-xl font-bold text-teal-700 lg:text-2xl">
					WebAccess
				</h3>
				<p className="mt-2 text-center text-sm md:text-left">
					{t('projects.web_access.desc')}
				</p>
				<div className="mt-4 flex flex-wrap justify-center gap-y-2">
					<SiJavascript className='sm:w-8" mr-2 h-6 w-6 text-yellow-400 sm:h-8' />
					<SiReact className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
					<SiSass className='sm:w-8" mr-2 h-6 w-6 text-pink-700 sm:h-8' />
					<SiPython className='sm:w-8" mr-2 h-6 w-6 text-yellow-600 sm:h-8' />
					<SiFastapi className='sm:w-8" mr-2 h-6 w-6 text-green-700 sm:h-8' />
					<SiPytest className='sm:w-8" mr-2 h-6 w-6 text-blue-600 sm:h-8' />
				</div>
				<div className="mt-6 flex w-full justify-center">
					<a
						href="https://github.com/JoanR99/web-access-server-fastapi"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4 flex flex-col items-center justify-center"
					>
						<BsGithub className="h-6 w-6 text-pink-700 hover:scale-105 hover:opacity-90 sm:h-7 sm:w-7" />
					</a>

					<a
						href="https://github.com/JoanR99/web-access-client"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4 flex flex-col items-center justify-center"
					>
						<BsGithub className="h-6 w-6 text-pink-700 hover:scale-105 hover:opacity-90 sm:h-7 sm:w-7" />
					</a>

					<a
						href="https://web-access-client.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4 flex flex-col items-center justify-center"
					>
						<IoOpen className="h-6 w-6 text-pink-700  hover:scale-105 hover:opacity-90 sm:h-7 sm:w-7" />
					</a>
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
