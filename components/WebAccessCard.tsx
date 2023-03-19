import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import {
	SiFastapi,
	SiPython,
	SiSass,
	SiPytest,
	SiReact,
	SiJavascript,
} from 'react-icons/si';
import BlurImage from './BlurImage';

const WebAccessCard = () => {
	const { t } = useTranslation('');

	return (
		<div className="grid grid-cols-1 gap-2 rounded-xl border bg-neutral-100 p-2 shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:bg-slate-900 dark:shadow-teal-700">
			<BlurImage src="/images/web-access.png" alt="WebAcess" />

			<div className="flex flex-col items-center justify-between p-4">
				<h3 className="text-xl font-bold text-teal-700 lg:text-2xl">
					WebAccess
				</h3>
				<p className="mt-2 text-center text-base font-light leading-relaxed text-gray-600 dark:text-gray-300">
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

				<Link href="/projects/web-access">
					<p className="mt-4 cursor-pointer text-sm font-medium text-pink-700">
						{t('projects.action')}
					</p>
				</Link>
			</div>
		</div>
	);
};

export default WebAccessCard;
